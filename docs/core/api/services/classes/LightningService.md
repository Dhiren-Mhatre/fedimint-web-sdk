## Constructors

### new LightningService()

```ts
new LightningService(client): LightningService
```

#### Parameters

| Parameter | Type           |
| :-------- | :------------- |
| `client`  | `WorkerClient` |

#### Returns

[`LightningService`](LightningService.md)

#### Defined in

[services/LightningService.ts:15](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L15)

## Methods

### createInvoice()

```ts
createInvoice(
   amount,
   description,
   expiryTime,
extraMeta): Promise<CreateBolt11Response>
```

#### Parameters

| Parameter     | Type                                            |
| :------------ | :---------------------------------------------- |
| `amount`      | `number`                                        |
| `description` | `string`                                        |
| `expiryTime`  | `null` \| `number`                              |
| `extraMeta`   | [`JSONObject`](../../index/index.md#jsonobject) |

#### Returns

`Promise`\<[`CreateBolt11Response`](../../index/index.md#createbolt11response)\>

#### Defined in

[services/LightningService.ts:33](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L33)

---

### createInvoiceWithGateway()

```ts
createInvoiceWithGateway(
   amount,
   description,
   expiryTime,
   extraMeta,
gatewayInfo): Promise<JSONValue>
```

#### Parameters

| Parameter     | Type                                              |
| :------------ | :------------------------------------------------ |
| `amount`      | `number`                                          |
| `description` | `string`                                          |
| `expiryTime`  | `null` \| `number`                                |
| `extraMeta`   | [`JSONObject`](../../index/index.md#jsonobject)   |
| `gatewayInfo` | [`GatewayInfo`](../../index/index.md#gatewayinfo) |

#### Returns

`Promise`\<[`JSONValue`](../../index/index.md#jsonvalue)\>

#### Defined in

[services/LightningService.ts:17](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L17)

---

### getGateway()

```ts
getGateway(gatewayId, forceInternal): Promise<null | LightningGateway>
```

#### Parameters

| Parameter       | Type               |
| :-------------- | :----------------- |
| `gatewayId`     | `null` \| `string` |
| `forceInternal` | `boolean`          |

#### Returns

`Promise`\<`null` \| [`LightningGateway`](../../index/index.md#lightninggateway)\>

#### Defined in

[services/LightningService.ts:128](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L128)

---

### listGateways()

```ts
listGateways(): Promise<LightningGateway[]>
```

#### Returns

`Promise`\<[`LightningGateway`](../../index/index.md#lightninggateway)[]\>

#### Defined in

[services/LightningService.ts:138](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L138)

---

### payInvoice()

```ts
payInvoice(invoice, extraMeta): Promise<OutgoingLightningPayment>
```

#### Parameters

| Parameter   | Type                                            |
| :---------- | :---------------------------------------------- |
| `invoice`   | `string`                                        |
| `extraMeta` | [`JSONObject`](../../index/index.md#jsonobject) |

#### Returns

`Promise`\<[`OutgoingLightningPayment`](../../index/index.md#outgoinglightningpayment)\>

#### Defined in

[services/LightningService.ts:67](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L67)

---

### payInvoiceWithGateway()

```ts
payInvoiceWithGateway(
   invoice,
   gatewayInfo,
extraMeta): Promise<JSONValue>
```

#### Parameters

| Parameter     | Type                                              |
| :------------ | :------------------------------------------------ |
| `invoice`     | `string`                                          |
| `gatewayInfo` | [`GatewayInfo`](../../index/index.md#gatewayinfo) |
| `extraMeta`   | [`JSONObject`](../../index/index.md#jsonobject)   |

#### Returns

`Promise`\<[`JSONValue`](../../index/index.md#jsonvalue)\>

#### Defined in

[services/LightningService.ts:50](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L50)

---

### subscribeLnPay()

```ts
subscribeLnPay(
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

[services/LightningService.ts:80](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L80)

---

### subscribeLnReceive()

```ts
subscribeLnReceive(
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

[services/LightningService.ts:96](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L96)

---

### updateGatewayCache()

```ts
updateGatewayCache(): Promise<JSONValue>
```

#### Returns

`Promise`\<[`JSONValue`](../../index/index.md#jsonvalue)\>

#### Defined in

[services/LightningService.ts:142](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L142)

---

### waitForReceive()

```ts
waitForReceive(operationId): Promise<LnReceiveState>
```

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `operationId` | `string` |

#### Returns

`Promise`\<[`LnReceiveState`](../../index/index.md#lnreceivestate)\>

#### Defined in

[services/LightningService.ts:112](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/services/LightningService.ts#L112)
