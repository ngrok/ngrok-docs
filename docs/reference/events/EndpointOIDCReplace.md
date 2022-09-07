
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | |  |
| module.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| module.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| module.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| module.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| module.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| module.issuer | string | | URL of the OIDC "OpenID provider". This is the base URL used for discovery. |
| module.client_id | string | | The OIDC app's client ID and OIDC audience. |
| module.client_secret | string | | The OIDC app's client secret. |
| module.scopes | List&lt;string&gt; | | The set of scopes to request from the OIDC identity provider. |