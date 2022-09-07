
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| endpoint_configurations.id | string | | unique identifier of this endpoint configuration |
| endpoint_configurations.type | string | | they type of traffic this endpoint configuration can be applied to. one of: `http`, `https`, `tcp` |
| endpoint_configurations.description | string | | human-readable description of what this endpoint configuration will be do when applied or what traffic it will be applied to. Optional, max 255 bytes |
| endpoint_configurations.metadata | string | | arbitrary user-defined machine-readable data of this endpoint configuration. Optional, max 4096 bytes. |
| endpoint_configurations.created_at | string | | timestamp when the endpoint configuration was created, RFC 3339 format |
| endpoint_configurations.uri | string | | URI of the endpoint configuration API resource |
| endpoint_configurations.circuit_breaker.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.circuit_breaker.tripped_duration | uint32 | | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| endpoint_configurations.circuit_breaker.rolling_window | uint32 | | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| endpoint_configurations.circuit_breaker.num_buckets | uint32 | | Integer number of buckets into which metrics are retained. Max 128. |
| endpoint_configurations.circuit_breaker.volume_threshold | uint32 | | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| endpoint_configurations.circuit_breaker.error_threshold_percentage | float64 | | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |
| endpoint_configurations.compression.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.request_headers.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.request_headers.add | Map&lt;string, string&gt; | | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| endpoint_configurations.request_headers.remove | List&lt;string&gt; | | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |
| endpoint_configurations.response_headers.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.response_headers.add | Map&lt;string, string&gt; | | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| endpoint_configurations.response_headers.remove | List&lt;string&gt; | | a list of header names that will be removed from the HTTP Response returned to the HTTP client |
| endpoint_configurations.ip_policy.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.ip_policy.ip_policies.id | string | | a resource identifier |
| endpoint_configurations.ip_policy.ip_policies.uri | string | | a uri for locating a resource |
| endpoint_configurations.mutual_tls.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.mutual_tls.certificate_authorities.id | string | | a resource identifier |
| endpoint_configurations.mutual_tls.certificate_authorities.uri | string | | a uri for locating a resource |
| endpoint_configurations.tls_termination.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.tls_termination.terminate_at | string | | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| endpoint_configurations.tls_termination.min_version | string | | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |
| endpoint_configurations.webhook_validation.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.webhook_validation.provider | string | | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge#webhook-verification |
| endpoint_configurations.webhook_validation.secret | string | | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |
| endpoint_configurations.oauth.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.oauth.provider.github.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| endpoint_configurations.oauth.provider.github.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| endpoint_configurations.oauth.provider.github.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| endpoint_configurations.oauth.provider.github.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.github.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.github.teams | List&lt;string&gt; | | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| endpoint_configurations.oauth.provider.github.organizations | List&lt;string&gt; | | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |
| endpoint_configurations.oauth.provider.facebook.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| endpoint_configurations.oauth.provider.facebook.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| endpoint_configurations.oauth.provider.facebook.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| endpoint_configurations.oauth.provider.facebook.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.facebook.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.microsoft.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| endpoint_configurations.oauth.provider.microsoft.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| endpoint_configurations.oauth.provider.microsoft.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| endpoint_configurations.oauth.provider.microsoft.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.microsoft.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.google.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| endpoint_configurations.oauth.provider.google.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| endpoint_configurations.oauth.provider.google.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| endpoint_configurations.oauth.provider.google.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.google.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| endpoint_configurations.oauth.provider.linkedin.client_id | string | |  |
| endpoint_configurations.oauth.provider.linkedin.client_secret | string | |  |
| endpoint_configurations.oauth.provider.linkedin.scopes | List&lt;string&gt; | |  |
| endpoint_configurations.oauth.provider.linkedin.email_addresses | List&lt;string&gt; | |  |
| endpoint_configurations.oauth.provider.linkedin.email_domains | List&lt;string&gt; | |  |
| endpoint_configurations.oauth.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| endpoint_configurations.oauth.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| endpoint_configurations.oauth.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| endpoint_configurations.oauth.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| endpoint_configurations.oauth.auth_check_interval | uint32 | | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |
| endpoint_configurations.saml.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.saml.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| endpoint_configurations.saml.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| endpoint_configurations.saml.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| endpoint_configurations.saml.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| endpoint_configurations.saml.idp_metadata | string | | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| endpoint_configurations.saml.force_authn | boolean | | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| endpoint_configurations.saml.allow_idp_initiated | boolean | | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| endpoint_configurations.saml.authorized_groups | List&lt;string&gt; | | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| endpoint_configurations.saml.entity_id | string | | The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| endpoint_configurations.saml.assertion_consumer_service_url | string | | The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| endpoint_configurations.saml.single_logout_url | string | | The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| endpoint_configurations.saml.request_signing_certificate_pem | string | | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. |
| endpoint_configurations.saml.metadata_url | string | | A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| endpoint_configurations.saml.nameid_format | string | | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |
| endpoint_configurations.oidc.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| endpoint_configurations.oidc.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| endpoint_configurations.oidc.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| endpoint_configurations.oidc.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| endpoint_configurations.oidc.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| endpoint_configurations.oidc.issuer | string | | URL of the OIDC "OpenID provider". This is the base URL used for discovery. |
| endpoint_configurations.oidc.client_id | string | | The OIDC app's client ID and OIDC audience. |
| endpoint_configurations.oidc.client_secret | string | | The OIDC app's client secret. |
| endpoint_configurations.oidc.scopes | List&lt;string&gt; | | The set of scopes to request from the OIDC identity provider. |
| uri | string | | URI of the endpoint configurations list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |