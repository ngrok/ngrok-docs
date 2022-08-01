
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| provider | string | | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| secret | string | | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |