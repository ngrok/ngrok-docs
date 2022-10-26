
### endpoint_webhook_validation_replace.v0

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string |  |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| provider | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge#webhook-verification |
| secret | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |