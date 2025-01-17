<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| provider | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge/modules/webhook-verification |
| secret | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |