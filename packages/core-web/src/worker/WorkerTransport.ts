import type { RpcResponse, RpcRequest } from '../types'
import { logger } from '../utils/logger'
import type { RpcTransport, RpcTransportFactory } from '../rpc'

/**
 * An implementation of a FedimintWallet client backend that uses a Web Worker.
 */
class WebWorkerTransport implements RpcTransport {
  constructor(private worker: Worker) {}

  sendRequest(request: RpcRequest): void {
    this.worker.postMessage(request)
  }

  destroy(): void {
    this.worker.terminate()
  }
}

export class WebWorkerTransportInit implements RpcTransportFactory {
  async init(
    onRpcResponse: (response: RpcResponse) => void,
  ): Promise<RpcTransport> {
    const worker = new Worker(new URL('../worker.js', import.meta.url), {
      type: 'module',
    })

    await new Promise<void>((resolve, reject) => {
      const handleInit = (event: MessageEvent) => {
        const response = event.data
        if (response.type === 'init_error') {
          reject(new Error(response.error))
        } else if (response.type === 'init_success') {
          logger.info('WebWorker instantiated')
          resolve()
        }
      }

      worker.onmessage = handleInit
      worker.postMessage({
        type: 'init',
      })
    })

    worker.onmessage = (event: MessageEvent) => {
      onRpcResponse(event.data as RpcResponse)
    }
    return new WebWorkerTransport(worker)
  }
}
