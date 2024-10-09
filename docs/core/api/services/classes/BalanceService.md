Balance Service

The Balance Service provides methods to interact with the balance of a Fedimint wallet.

## Constructors

### new BalanceService()

```ts
new BalanceService(client): BalanceService
```

#### Parameters

| Parameter | Type           |
| :-------- | :------------- |
| `client`  | `WorkerClient` |

#### Returns

[`BalanceService`](BalanceService.md)

#### Defined in

[services/BalanceService.ts:10](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/BalanceService.ts#L10)

## Methods

### getBalance()

```ts
getBalance(): Promise<number>
```

Get the balance of the current wallet in milli-satoshis (MSats)

#### Returns

`Promise`\<`number`\>

#### Example

```ts
import { FedimintWallet } from '@fedimint/core-web'
const wallet = new FedimintWallet()

// ---cut---
const balance = await wallet.balance.getBalance()
```

#### Defined in

[services/BalanceService.ts:24](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/BalanceService.ts#L24)

---

### subscribeBalance()

```ts
subscribeBalance(onSuccess, onError): CancelFunction
```

Subscribe to the balance of the current wallet in milli-satoshis (MSats)

#### Parameters

| Parameter   | Type                  |
| :---------- | :-------------------- |
| `onSuccess` | (`balance`) => `void` |
| `onError`   | (`error`) => `void`   |

#### Returns

[`CancelFunction`](../../index/index.md#cancelfunction)

#### Example

```ts
import { FedimintWallet } from '@fedimint/core-web'
const wallet = new FedimintWallet()

// ---cut---
const unsubscribe = wallet.balance.subscribeBalance((balance) => {
  console.log(balance)
})

// ...Cleanup Later
unsubscribe()
```

#### Defined in

[services/BalanceService.ts:45](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/BalanceService.ts#L45)
