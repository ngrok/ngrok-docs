
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| edge_id | string | | unique identifier of this edge |
| match_type | string | | Type of match to use for this route. Valid values are "exact_path" and "path_prefix". |
| match | string | | Route selector: "/blog" or "example.com" or "example.com/blog" |
| description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| backend.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| backend.backend_id | string | | backend to be used to back this endpoint |
| ip_restriction.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| ip_restriction.ip_policy_ids | List&lt;string&gt; | | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |
| circuit_breaker.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| circuit_breaker.tripped_duration | uint32 | | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| circuit_breaker.rolling_window | uint32 | | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| circuit_breaker.num_buckets | uint32 | | Integer number of buckets into which metrics are retained. Max 128. |
| circuit_breaker.volume_threshold | uint32 | | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| circuit_breaker.error_threshold_percentage | float64 | | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |
| compression.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| request_headers.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| request_headers.add | Map&lt;string, string&gt; | | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| request_headers.remove | List&lt;string&gt; | | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |
| response_headers.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| response_headers.add | Map&lt;string, string&gt; | | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| response_headers.remove | List&lt;string&gt; | | a list of header names that will be removed from the HTTP Response returned to the HTTP client |
| webhook_verification.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| webhook_verification.provider | string | | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge#webhook-verification |
| webhook_verification.secret | string | | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |
| oauth.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| oauth.provider.github.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| oauth.provider.github.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| oauth.provider.github.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| oauth.provider.github.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.github.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.github.teams | List&lt;string&gt; | | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| oauth.provider.github.organizations | List&lt;string&gt; | | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |
| oauth.provider.facebook.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| oauth.provider.facebook.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| oauth.provider.facebook.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| oauth.provider.facebook.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.facebook.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.microsoft.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| oauth.provider.microsoft.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| oauth.provider.microsoft.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| oauth.provider.microsoft.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.microsoft.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.google.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| oauth.provider.google.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| oauth.provider.google.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| oauth.provider.google.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.google.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| oauth.provider.linkedin.client_id | string | |  |
| oauth.provider.linkedin.client_secret | string | |  |
| oauth.provider.linkedin.scopes | List&lt;string&gt; | |  |
| oauth.provider.linkedin.email_addresses | List&lt;string&gt; | |  |
| oauth.provider.linkedin.email_domains | List&lt;string&gt; | |  |
| oauth.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| oauth.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| oauth.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| oauth.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| oauth.auth_check_interval | uint32 | | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |
| saml.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| saml.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| saml.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| saml.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| saml.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| saml.idp_metadata | string | | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| saml.force_authn | boolean | | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| saml.allow_idp_initiated | boolean | | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| saml.authorized_groups | List&lt;string&gt; | | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| saml.nameid_format | string | | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |
| oidc.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| oidc.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| oidc.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| oidc.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| oidc.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| oidc.issuer | string | | URL of the OIDC "OpenID provider". This is the base URL used for discovery. |
| oidc.client_id | string | | The OIDC app's client ID and OIDC audience. |
| oidc.client_secret | string | | The OIDC app's client secret. |
| oidc.scopes | List&lt;string&gt; | | The set of scopes to request from the OIDC identity provider. |
| websocket_tcp_converter.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |