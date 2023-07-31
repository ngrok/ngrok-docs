<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| edge_id | string |  |
| id | string |  |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| options_passthrough | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| cookie_prefix | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| inactivity_timeout | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| maximum_duration | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| issuer | string | URL of the OIDC "OpenID provider". This is the base URL used for discovery. |
| client_id | string | The OIDC app's client ID and OIDC audience. |
| client_secret | string | The OIDC app's client secret. |
| scopes | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |