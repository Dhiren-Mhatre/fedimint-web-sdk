## Constructors

### new MintService()

```ts
new MintService(client): MintService
```

#### Parameters

| Parameter | Type           |
| :-------- | :------------- |
| `client`  | `WorkerClient` |

#### Returns

[`MintService`](MintService.md)

#### Defined in

[services/MintService.ts:12](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L12)

## Methods

### awaitSpendOobRefund()

```ts
awaitSpendOobRefund(operationId): Promise<JSONValue>
```

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `operationId` | `string` |

#### Returns

`Promise`\<[`JSONValue`](../../index/index.md#jsonvalue)\>

#### Defined in

[services/MintService.ts:109](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L109)

---

### parseNotes()

```ts
parseNotes(oobNotes): Promise<number>
```

#### Parameters

| Parameter  | Type     |
| :--------- | :------- |
| `oobNotes` | `string` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[services/MintService.ts:81](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L81)

---

### redeemEcash()

```ts
redeemEcash(notes): Promise<void>
```

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `notes`   | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/MintService.ts:14](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L14)

---

### reissueExternalNotes()

```ts
reissueExternalNotes(oobNotes, extraMeta): Promise<string>
```

#### Parameters

| Parameter   | Type                                            |
| :---------- | :---------------------------------------------- |
| `oobNotes`  | `string`                                        |
| `extraMeta` | [`JSONObject`](../../index/index.md#jsonobject) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[services/MintService.ts:21](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L21)

---

### spendNotes()

```ts
spendNotes(
   minAmount,
   tryCancelAfter,
   includeInvite,
extraMeta): Promise<MintSpendNotesResponse>
```

#### Parameters

| Parameter        | Type                                                    |
| :--------------- | :------------------------------------------------------ |
| `minAmount`      | `number`                                                |
| `tryCancelAfter` | `number` \| [`Duration`](../../index/index.md#duration) |
| `includeInvite`  | `boolean`                                               |
| `extraMeta`      | [`JSONValue`](../../index/index.md#jsonvalue)           |

#### Returns

`Promise`\<[`MintSpendNotesResponse`](../../index/index.md#mintspendnotesresponse)\>

#### Defined in

[services/MintService.ts:47](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L47)

---

### subscribeReissueExternalNotes()

```ts
subscribeReissueExternalNotes(
   operationId,
   onSuccess,
   onError): CancelFunction
```

#### Parameters

| Parameter     | Type                |
| :------------ | :------------------ |
| `operationId` | `string`            |
| `onSuccess`   | (`state`) => `void` |
| `onError`     | (`error`) => `void` |

#### Returns

[`CancelFunction`](../../index/index.md#cancelfunction)

#### Defined in

[services/MintService.ts:31](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L31)

---

### subscribeSpendNotes()

```ts
subscribeSpendNotes(
   operationId,
   onSuccess,
   onError): CancelFunction
```

#### Parameters

| Parameter     | Type                |
| :------------ | :------------------ |
| `operationId` | `string`            |
| `onSuccess`   | (`state`) => `void` |
| `onError`     | (`error`) => `void` |

#### Returns

[`CancelFunction`](../../index/index.md#cancelfunction)

#### Defined in

[services/MintService.ts:93](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L93)

---

### tryCancelSpendNotes()

```ts
tryCancelSpendNotes(operationId): Promise<void>
```

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `operationId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[services/MintService.ts:87](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/MintService.ts#L87)
