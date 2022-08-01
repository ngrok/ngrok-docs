
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | |  |
| module.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| module.auth_provider_id | string | | determines how the basic auth credentials are validated. Currently only the value `agent` is supported which means that credentials will be validated against the username and password specified by the ngrok agent's `--basic-auth` flag, if any. |
| module.realm | string | | an arbitrary string to be specified in as the 'realm' value in the `WWW-Authenticate` header. default is `ngrok` |
| module.allow_options | boolean | | true or false indicating whether to allow OPTIONS requests through without authentication which is necessary for CORS. default is `false` |