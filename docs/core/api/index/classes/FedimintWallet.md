## Constructors

### new FedimintWallet()

```ts
new FedimintWallet(lazy): FedimintWallet
```

Creates a new instance of FedimintWallet.

This constructor initializes a FedimintWallet instance, which manages communication
with a Web Worker. The Web Worker is responsible for running WebAssembly code that
handles the core Fedimint Client operations.

(default) When not in lazy mode, the constructor immediately initializes the
Web Worker and begins loading the WebAssembly module in the background. This
allows for faster subsequent operations but may increase initial load time.

In lazy mode, the Web Worker and WebAssembly initialization are deferred until
the first operation that requires them, reducing initial overhead at the cost
of a slight delay on the first operation.

#### Parameters

| Parameter | Type      | Description                                                                               |
| :-------- | :-------- | :---------------------------------------------------------------------------------------- |
| `lazy`    | `boolean` | If true, delays Web Worker and WebAssembly initialization until needed. Default is false. |

#### Returns

[`FedimintWallet`](FedimintWallet.md)

#### Example

```ts
import { FedimintWallet } from '@fedimint/core-web'
// Create a wallet with immediate initialization
const wallet = new FedimintWallet()
wallet.open()

// Create a wallet with lazy initialization
const lazyWallet = new FedimintWallet(true)
// Some time later...
lazyWallet.initialize()
lazyWallet.open()
```

#### Defined in

[FedimintWallet.ts:56](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L56)

## Properties

| Property     | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `balance`    | [`BalanceService`](../../services/classes/BalanceService.md)       |
| `federation` | [`FederationService`](../../services/classes/FederationService.md) |
| `lightning`  | [`LightningService`](../../services/classes/LightningService.md)   |
| `mint`       | [`MintService`](../../services/classes/MintService.md)             |
| `recovery`   | [`RecoveryService`](../../services/classes/RecoveryService.md)     |

## Methods

### cleanup()

```ts
cleanup(): Promise<void>
```

This should ONLY be called when UNLOADING the wallet client.
After this call, the FedimintWallet instance should be discarded.

#### Returns

`Promise`\<`void`\>

#### Defined in

[FedimintWallet.ts:123](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L123)

---

### initialize()

```ts
initialize(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[FedimintWallet.ts:74](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L74)

---

### isOpen()

```ts
isOpen(): boolean
```

#### Returns

`boolean`

#### Defined in

[FedimintWallet.ts:129](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L129)

---

### joinFederation()

```ts
joinFederation(inviteCode, clientName): Promise<void>
```

#### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `inviteCode` | `string` |
| `clientName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[FedimintWallet.ts:99](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L99)

---

### open()

```ts
open(clientName): Promise<boolean>
```

#### Parameters

| Parameter    | Type     |
| :----------- | :------- |
| `clientName` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[FedimintWallet.ts:85](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L85)

---

### setLogLevel()

```ts
setLogLevel(level): void
```

Sets the log level for the library.

#### Parameters

| Parameter | Type                                                          | Description                                                       |
| :-------- | :------------------------------------------------------------ | :---------------------------------------------------------------- |
| `level`   | \| `"error"` \| `"debug"` \| `"info"` \| `"warn"` \| `"none"` | The desired log level ('DEBUG', 'INFO', 'WARN', 'ERROR', 'NONE'). |

#### Returns

`void`

#### Defined in

[FedimintWallet.ts:137](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L137)

---

### waitForOpen()

```ts
waitForOpen(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[FedimintWallet.ts:80](https://github.com/fedimint/fedimint-web-sdk/blob/ae528a0a42c45748231d65cadaa8adbd5129d077/packages/core-web/src/FedimintWallet.ts#L80)
