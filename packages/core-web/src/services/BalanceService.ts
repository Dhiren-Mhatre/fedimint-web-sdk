import type { MSats } from '../types'
import { WorkerClient } from '../worker'

/**
 * Balance Service
 *
 * The Balance Service provides methods to interact with the balance of a Fedimint wallet.
 */
export class BalanceService {
  constructor(private client: WorkerClient) {}

  /**
   * Get the balance of the current wallet in milli-satoshis (MSats)
   *
   * @example
   * ```ts
   * import { FedimintWallet } from '@fedimint/core-web'
   * const wallet = new FedimintWallet()
   *
   * // ---cut---
   * const balance = await wallet.balance.getBalance()
   * ```
   */
  async getBalance(): Promise<MSats> {
    return await this.client.rpcSingle('', 'get_balance', {})
  }

  /**
   * Subscribe to the balance of the current wallet in milli-satoshis (MSats)
   *
   * @example
   * ```ts
   * import { FedimintWallet } from '@fedimint/core-web'
   * const wallet = new FedimintWallet()
   *
   * // ---cut---
   * const unsubscribe = wallet.balance.subscribeBalance((balance) => {
   *  console.log(balance)
   * })
   *
   * // ...Cleanup Later
   * unsubscribe()
   * ```
   */
  subscribeBalance(
    onSuccess: (balance: MSats) => void = () => {},
    onError: (error: string) => void = () => {},
  ) {
    const unsubscribe = this.client.rpcStream<string>(
      '',
      'subscribe_balance_changes',
      {},
      (res) => onSuccess(parseInt(res)),
      onError,
    )

    return unsubscribe
  }
}
