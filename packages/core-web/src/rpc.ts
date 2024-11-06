import type {
  CancelFunction,
  JSONValue,
  ModuleKind,
  RpcRequestPayload,
  RpcRequest,
  RpcResponse,
} from './types'
import { logger } from './utils/logger'

/**
 * Responsible for sending Rpc messages to an arbitrary Wallet Backend (WebWorker, server binary, etc.)
 *
 * We have a single FedimintClient library written in Rust.
 * In order for this library to be usable in different environments,
 * we must implement a different TRANSPORT for each environment to reach its instance of
 * the Rust library, which is deployed in different runtime environments.
 */
export interface RpcTransport {
  /**
   * Sends a request to an fmc instance synchronously.
   *
   * The order of requests must be preserved. (i.e. don't try to cancel a subscription before it's created)
   *
   * The caller must use unique request_ids for each request.
   */
  sendRequest(request: RpcRequest): void

  /**
   * Should tear down all resources associated with this transport.
   * Must be forceful. (nothing should block)
   */
  destroy(): void
}

/**
 * Since different FedimintClient Runtime environments have different conditions for initialization,
 * we must separate the "Initialization logic" from the transport class itself.
 */
export interface RpcTransportFactory {
  /**
   * Initializes the transport and returns a promise that resolves when the transport is ready.
   * This should set up all the resources associated with the targeted fmc.
   *
   * @param onRpcResponse - A synchronous callback that will be invoked for each response from the transport.
   */
  init(onRpcResponse: (response: RpcResponse) => void): Promise<RpcTransport>
}

/**
 * Exposes a set of RPC methods to interact with an arbitrary Wallet Backend (WebWorker, server binary, etc.)
 */
export class RpcClient {
  private _transport?: RpcTransport
  private _transportFactory: RpcTransportFactory
  private _requestCounter = 0
  private _requestCallbacks = new Map<number, (response: RpcResponse) => void>()
  private _initPromise?: Promise<void>
  private _clientName: string | undefined

  /**
   * The effect of this constructor is to pass an RpcResponseHandler to the transport
   * ...so, the external transport messages can be handled by this class.
   *
   * Ultimately, the goal of this class is to process the incoming messages from the
   * external transport.
   */
  constructor(transportFactory: RpcTransportFactory) {
    this._transportFactory = transportFactory
  }

  private async initializeInner(): Promise<void> {
    this._transport = await this._transportFactory.init(
      this._handleWorkerMessage.bind(this),
    )
  }

  async initialize() {
    if (this._initPromise) {
      return this._initPromise
    }

    this._initPromise = this.initializeInner()
    return this._initPromise
  }

  private _handleWorkerMessage = (response: RpcResponse) => {
    const callback = this._requestCallbacks.get(response.request_id)

    if (callback) {
      callback(response)
    } else {
      logger.warn(
        'RpcClient.handleWorkerMessage - Received message with no callback. Did you forget to call unsubscribe?',
        // TODO: add docs link to subscription endpoints
        response.request_id,
        response,
      )
      // TODO: Should we automatically cancel the request if there is no handler?
    }
  }

  async joinFederation(inviteCode: string, clientName: string) {
    await this._internalRpcSingle({
      type: 'join_federation',
      invite_code: inviteCode,
      client_name: clientName,
    })
    this._clientName = clientName
  }

  async openClient(clientName: string) {
    await this._internalRpcSingle({
      type: 'open_client',
      client_name: clientName,
    })
    this._clientName = clientName
  }

  /**
   * Gracefully shuts down the RPC Client without destroying the resources.
   *
   * To reuse, call openClient again.
   */
  async closeClient(clientName: string) {
    // TODO: Try to close all the open subscriptions

    await this._internalRpcSingle({
      type: 'close_client',
      client_name: clientName,
    })
    delete this._clientName
  }

  /**
   * Forcefully shuts down the RPC Client and destroys the resources.
   *
   * After calling this, you must use the constructor to create a new RpcClient.
   */
  async cleanup() {
    this._transport?.destroy()
    this._requestCounter = 0
    this._initPromise = undefined
    this._requestCallbacks.clear()
  }

  private _internalRpcStream<Response extends JSONValue = JSONValue>(
    payload: RpcRequestPayload,
    onData: (data: Response) => void,
    onError: (error: string) => void,
    onEnd: () => void = () => {},
  ): CancelFunction {
    const requestId = ++this._requestCounter
    logger.debug('RpcClient - rpcStream', requestId, payload)

    const unsubscribe: CancelFunction = () => {
      const cancelRequest: RpcRequest = {
        request_id: ++this._requestCounter,
        type: 'cancel_rpc',
        cancel_request_id: requestId,
      }
      this._transport?.sendRequest(cancelRequest)
    }

    const request: RpcRequest = {
      ...payload,
      request_id: requestId,
    }

    this._requestCallbacks.set(requestId, (response: RpcResponse) => {
      if (response.type === 'data') {
        // TODO: Add runtime type checking for return types
        onData(response.data as Response)
      } else if (response.type === 'error') {
        onError(response.error)
      } else if (response.type === 'end') {
        this._requestCallbacks.delete(requestId)
        onEnd()
      } else if (response.type === 'aborted') {
        this._requestCallbacks.delete(requestId)
        onEnd()
      }
    })
    this._transport?.sendRequest(request)
    return unsubscribe
  }

  private _internalRpcSingle<T extends JSONValue = JSONValue>(
    request: RpcRequestPayload,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this._internalRpcStream(
        request,
        (data) => resolve(data as T),
        (error) => reject(new Error(error)),
        () => {},
      )
      // No need to unsubscribe for single requests as they auto-complete
    })
  }

  rpcStream<
    Response extends JSONValue = JSONValue,
    Body extends JSONValue = JSONValue,
  >(
    module: ModuleKind,
    method: string,
    body: Body,
    onData: (data: Response) => void,
    onError: (error: string) => void,
    onEnd: () => void = () => {},
  ): CancelFunction {
    if (this._clientName === undefined || this._transport === undefined) {
      throw new Error('Wallet is not open')
    }
    return this._internalRpcStream(
      {
        type: 'client_rpc',
        client_name: this._clientName,
        module,
        method,
        payload: body,
      },
      onData,
      onError,
      onEnd,
    )
  }

  rpcSingle<T extends JSONValue = JSONValue, P extends JSONValue = JSONValue>(
    module: string,
    method: string,
    payload: P,
  ): Promise<T> {
    if (this._clientName === undefined || this._transport === undefined) {
      throw new Error('Wallet is not open')
    }
    return this._internalRpcSingle<T>({
      type: 'client_rpc',
      client_name: this._clientName,
      module,
      method,
      payload,
    })
  }

  // // For Testing
  // _getRequestCounter() {
  //   return this._requestCounter
  // }
  // _getRequestCallbackMap() {
  //   return this._requestCallbacks
  // }
}
