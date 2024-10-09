## Index

### Classes

| Class                                       | Description |
| :------------------------------------------ | :---------- |
| [FedimintWallet](classes/FedimintWallet.md) | -           |

## Alias\<T\>

```ts
type Alias<T>: T & object;
```

### Type Parameters

| Type Parameter |
| :------------- |
| `T`            |

### Defined in

[types/utils.ts:1](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L1)

---

## CancelFunction()

```ts
type CancelFunction: () => void;
```

### Returns

`void`

### Defined in

[types/wallet.ts:84](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L84)

---

## CreateBolt11Response

```ts
type CreateBolt11Response: object;
```

### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `invoice`      | `string` |
| `operation_id` | `string` |

### Defined in

[types/wallet.ts:56](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L56)

---

## Duration

```ts
type Duration: object;
```

### Type declaration

| Name    | Type      |
| :------ | :-------- |
| `nanos` | `Nanos`   |
| `secs`  | `Seconds` |

### Defined in

[types/utils.ts:7](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L7)

---

## FeeToAmount

```ts
type FeeToAmount: object;
```

### Defined in

[types/wallet.ts:23](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L23)

---

## GatewayInfo

```ts
type GatewayInfo: object;
```

### Type declaration

| Name               | Type                                  |
| :----------------- | :------------------------------------ |
| `api`              | `string`                              |
| `federation_index` | `number`                              |
| `fees`             | [`FeeToAmount`](index.md#feetoamount) |
| `gateway_id`       | `string`                              |
| `node_pub_key`     | `string`                              |
| `route_hints`      | [`RouteHint`](index.md#routehint)[]   |

### Defined in

[types/wallet.ts:5](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L5)

---

## JSONObject

```ts
type JSONObject: Record<string, JSONValue>;
```

### Defined in

[types/utils.ts:23](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L23)

---

## JSONValue

```ts
type JSONValue:
  | string
  | number
  | boolean
  | null
  | object
  | JSONValue[];
```

### Defined in

[types/utils.ts:15](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L15)

---

## LightningGateway

```ts
type LightningGateway: object;
```

### Type declaration

| Name     | Type                                  |
| :------- | :------------------------------------ |
| `info`   | [`GatewayInfo`](index.md#gatewayinfo) |
| `ttl`    | [`Duration`](index.md#duration)       |
| `vetted` | `boolean`                             |

### Defined in

[types/wallet.ts:13](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L13)

---

## LnPayState

```ts
type LnPayState:
  | "created"
  | "canceled"
  | object
  | object
  | "awaiting_change"
  | object
  | object
  | object;
```

### Defined in

[types/wallet.ts:38](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L38)

---

## LnReceiveState

```ts
type LnReceiveState:
  | "created"
  | object
  | object
  | "funded"
  | "awaiting_funds"
  | "claimed";
```

### Defined in

[types/wallet.ts:48](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L48)

---

## MintSpendNotesResponse

```ts
type MintSpendNotesResponse: object;
```

### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `notes`        | `string` |
| `operation_id` | `string` |

### Defined in

[types/wallet.ts:92](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L92)

---

## ModuleKind

```ts
type ModuleKind: typeof MODULE_KINDS[number];
```

### Defined in

[types/wallet.ts:4](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L4)

---

## MSats

```ts
type MSats: Alias<number>;
```

### Defined in

[types/utils.ts:12](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L12)

---

## OutgoingLightningPayment

```ts
type OutgoingLightningPayment: object;
```

### Type declaration

| Name           | Type                          |
| :------------- | :---------------------------- |
| `contract_id`  | `string`                      |
| `fee`          | [`MSats`](index.md#msats)     |
| `payment_type` | [`PayType`](index.md#paytype) |

### Defined in

[types/wallet.ts:27](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L27)

---

## PayType

```ts
type PayType: object;
```

### Type declaration

| Name           | Type                          |
| :------------- | :---------------------------- |
| `operation_id` | `string`                      |
| `type`         | `"Internal"` \| `"Lightning"` |

### Defined in

[types/wallet.ts:33](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L33)

---

## ReissueExternalNotesState

```ts
type ReissueExternalNotesState: "Created" | "Issuing" | "Done" | object;
```

### Defined in

[types/wallet.ts:86](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L86)

---

## Resolve\<T\>

```ts
type Resolve<T>: T & unknown;
```

### Type Parameters

| Type Parameter |
| :------------- |
| `T`            |

### Defined in

[types/utils.ts:2](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L2)

---

## RouteHint

```ts
type RouteHint: object;
```

### Defined in

[types/wallet.ts:19](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L19)

---

## Sats

```ts
type Sats: Alias<number>;
```

### Defined in

[types/utils.ts:13](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/utils.ts#L13)

---

## StreamError

```ts
type StreamError: object;
```

### Type declaration

| Name    | Type     |
| :------ | :------- |
| `data`  | `never`  |
| `end`   | `never`  |
| `error` | `string` |

### Defined in

[types/wallet.ts:61](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L61)

---

## StreamResult\<T\>

```ts
type StreamResult<T>: StreamSuccess<T> | StreamError | StreamEnd;
```

### Type Parameters

| Type Parameter                                  |
| :---------------------------------------------- |
| `T` _extends_ [`JSONValue`](index.md#jsonvalue) |

### Defined in

[types/wallet.ts:79](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L79)

---

## StreamSuccess\<T\>

```ts
type StreamSuccess<T>: object;
```

### Type Parameters

| Type Parameter                                  |
| :---------------------------------------------- |
| `T` _extends_ [`JSONValue`](index.md#jsonvalue) |

### Type declaration

| Name    | Type    |
| :------ | :------ |
| `data`  | `T`     |
| `end`   | `never` |
| `error` | `never` |

### Defined in

[types/wallet.ts:67](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/wallet.ts#L67)

---

## WorkerMessageType

```ts
type WorkerMessageType: typeof WorkerMessageTypes[number];
```

### Defined in

[types/worker.ts:12](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/types/worker.ts#L12)
