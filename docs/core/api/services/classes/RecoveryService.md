## Constructors

### new RecoveryService()

```ts
new RecoveryService(client): RecoveryService
```

#### Parameters

| Parameter | Type           |
| :-------- | :------------- |
| `client`  | `WorkerClient` |

#### Returns

[`RecoveryService`](RecoveryService.md)

#### Defined in

[services/RecoveryService.ts:5](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/RecoveryService.ts#L5)

## Methods

### hasPendingRecoveries()

```ts
hasPendingRecoveries(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[services/RecoveryService.ts:7](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/RecoveryService.ts#L7)

---

### subscribeToRecoveryProgress()

```ts
subscribeToRecoveryProgress(onSuccess, onError): () => void
```

#### Parameters

| Parameter   | Type                   |
| :---------- | :--------------------- |
| `onSuccess` | (`progress`) => `void` |
| `onError`   | (`error`) => `void`    |

#### Returns

`Function`

##### Returns

`void`

#### Defined in

[services/RecoveryService.ts:15](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/RecoveryService.ts#L15)

---

### waitForAllRecoveries()

```ts
waitForAllRecoveries(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/RecoveryService.ts:11](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/RecoveryService.ts#L11)
