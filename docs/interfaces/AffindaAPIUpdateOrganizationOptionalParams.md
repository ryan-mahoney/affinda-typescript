[@affinda/affinda](../README.md) / [Exports](../modules.md) / AffindaAPIUpdateOrganizationOptionalParams

# Interface: AffindaAPIUpdateOrganizationOptionalParams

Optional parameters.

## Hierarchy

- `OperationOptions`

  ↳ **`AffindaAPIUpdateOrganizationOptionalParams`**

## Table of contents

### Properties

- [abortSignal](AffindaAPIUpdateOrganizationOptionalParams.md#abortsignal)
- [avatar](AffindaAPIUpdateOrganizationOptionalParams.md#avatar)
- [name](AffindaAPIUpdateOrganizationOptionalParams.md#name)
- [onResponse](AffindaAPIUpdateOrganizationOptionalParams.md#onresponse)
- [requestOptions](AffindaAPIUpdateOrganizationOptionalParams.md#requestoptions)
- [resthookSignatureKey](AffindaAPIUpdateOrganizationOptionalParams.md#resthooksignaturekey)
- [serializerOptions](AffindaAPIUpdateOrganizationOptionalParams.md#serializeroptions)
- [tracingOptions](AffindaAPIUpdateOrganizationOptionalParams.md#tracingoptions)
- [validationToolConfig](AffindaAPIUpdateOrganizationOptionalParams.md#validationtoolconfig)

## Properties

### abortSignal

• `Optional` **abortSignal**: `AbortSignalLike`

The signal which can be used to abort requests.

#### Inherited from

coreClient.OperationOptions.abortSignal

___

### avatar

• `Optional` **avatar**: `RequestBodyType`

Upload avatar for the organization.

___

### name

• `Optional` **name**: `string`

___

### onResponse

• `Optional` **onResponse**: `RawResponseCallback`

A function to be called each time a response is received from the server
while performing the requested operation.
May be called multiple times.

#### Inherited from

coreClient.OperationOptions.onResponse

___

### requestOptions

• `Optional` **requestOptions**: `OperationRequestOptions`

Options used when creating and sending HTTP requests for this operation.

#### Inherited from

coreClient.OperationOptions.requestOptions

___

### resthookSignatureKey

• `Optional` **resthookSignatureKey**: `string`

Used to sign webhook payloads so you can verify their integrity.

___

### serializerOptions

• `Optional` **serializerOptions**: `SerializerOptions`

Options to override serialization/de-serialization behavior.

#### Inherited from

coreClient.OperationOptions.serializerOptions

___

### tracingOptions

• `Optional` **tracingOptions**: `OperationTracingOptions`

Options used when tracing is enabled.

#### Inherited from

coreClient.OperationOptions.tracingOptions

___

### validationToolConfig

• `Optional` **validationToolConfig**: [`ValidationToolConfig`](ValidationToolConfig.md)

Configuration of the embeddable validation tool.
