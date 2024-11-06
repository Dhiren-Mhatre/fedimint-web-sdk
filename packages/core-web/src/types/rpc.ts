import { JSONValue } from './utils'

type RpcMessage<T> = T & { request_id: number }

export type RpcRequest<T extends JSONValue = JSONValue> = RpcMessage<
  RpcRequestPayload<T>
>
export type RpcResponse<T extends JSONValue = JSONValue> = RpcMessage<
  RpcResponsePayload<T>
>

export type RpcRequestPayload<T extends JSONValue = JSONValue> =
  | {
      type: 'join_federation'
      invite_code: string
      client_name: string
    }
  | {
      type: 'open_client'
      client_name: string
    }
  | {
      type: 'close_client'
      client_name: string
    }
  | {
      type: 'client_rpc'
      client_name: string
      module: string
      method: string
      payload: T
    }
  | {
      type: 'cancel_rpc'
      cancel_request_id: number
    }

export type RpcResponsePayload<T extends JSONValue = JSONValue> =
  | {
      type: 'data'
      data: T
    }
  | {
      type: 'error'
      error: string
    }
  | {
      type: 'aborted'
    }
  | {
      type: 'end'
    }
