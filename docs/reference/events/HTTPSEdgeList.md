
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| https_edges.id | string | | unique identifier of this edge |
| https_edges.description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| https_edges.metadata | string | | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| https_edges.created_at | string | | timestamp when the edge configuration was created, RFC 3339 format |
| https_edges.uri | string | | URI of the edge API resource |
| https_edges.hostports | List&lt;string&gt; | | hostports served by this edge |
| https_edges.mutual_tls.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.mutual_tls.certificate_authorities.id | string | | a resource identifier |
| https_edges.mutual_tls.certificate_authorities.uri | string | | a uri for locating a resource |
| https_edges.tls_termination.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.tls_termination.terminate_at | string | | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| https_edges.tls_termination.min_version | string | | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |
| https_edges.routes.edge_id | string | | unique identifier of this edge |
| https_edges.routes.id | string | | unique identifier of this edge route |
| https_edges.routes.created_at | string | | timestamp when the edge configuration was created, RFC 3339 format |
| https_edges.routes.match_type | string | | Type of match to use for this route. Valid values are "exact_path" and "path_prefix". |
| https_edges.routes.match | string | | Route selector: "/blog" or "example.com" or "example.com/blog" |
| https_edges.routes.uri | string | | URI of the edge API resource |
| https_edges.routes.description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| https_edges.routes.metadata | string | | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| https_edges.routes.backend.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.backend.backend.id | string | | a resource identifier |
| https_edges.routes.backend.backend.uri | string | | a uri for locating a resource |
| https_edges.routes.ip_restriction.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.ip_restriction.ip_policies.id | string | | a resource identifier |
| https_edges.routes.ip_restriction.ip_policies.uri | string | | a uri for locating a resource |
| https_edges.routes.circuit_breaker.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.circuit_breaker.tripped_duration | uint32 | | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| https_edges.routes.circuit_breaker.rolling_window | uint32 | | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| https_edges.routes.circuit_breaker.num_buckets | uint32 | | Integer number of buckets into which metrics are retained. Max 128. |
| https_edges.routes.circuit_breaker.volume_threshold | uint32 | | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| https_edges.routes.circuit_breaker.error_threshold_percentage | float64 | | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |
| https_edges.routes.compression.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.request_headers.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.request_headers.add | Map&lt;string, string&gt; | | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| https_edges.routes.request_headers.remove | List&lt;string&gt; | | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |
| https_edges.routes.response_headers.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.response_headers.add | Map&lt;string, string&gt; | | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| https_edges.routes.response_headers.remove | List&lt;string&gt; | | a list of header names that will be removed from the HTTP Response returned to the HTTP client |
| https_edges.routes.webhook_verification.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.webhook_verification.provider | string | | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge#webhook-verification |
| https_edges.routes.webhook_verification.secret | string | | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |
| https_edges.routes.oauth.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.oauth.provider.github.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| https_edges.routes.oauth.provider.github.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| https_edges.routes.oauth.provider.github.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| https_edges.routes.oauth.provider.github.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.github.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.github.teams | List&lt;string&gt; | | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| https_edges.routes.oauth.provider.github.organizations | List&lt;string&gt; | | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |
| https_edges.routes.oauth.provider.facebook.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| https_edges.routes.oauth.provider.facebook.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| https_edges.routes.oauth.provider.facebook.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| https_edges.routes.oauth.provider.facebook.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.facebook.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.microsoft.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| https_edges.routes.oauth.provider.microsoft.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| https_edges.routes.oauth.provider.microsoft.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| https_edges.routes.oauth.provider.microsoft.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.microsoft.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.google.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| https_edges.routes.oauth.provider.google.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| https_edges.routes.oauth.provider.google.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| https_edges.routes.oauth.provider.google.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.google.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| https_edges.routes.oauth.provider.linkedin.client_id | string | |  |
| https_edges.routes.oauth.provider.linkedin.client_secret | string | |  |
| https_edges.routes.oauth.provider.linkedin.scopes | List&lt;string&gt; | |  |
| https_edges.routes.oauth.provider.linkedin.email_addresses | List&lt;string&gt; | |  |
| https_edges.routes.oauth.provider.linkedin.email_domains | List&lt;string&gt; | |  |
| https_edges.routes.oauth.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| https_edges.routes.oauth.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| https_edges.routes.oauth.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| https_edges.routes.oauth.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| https_edges.routes.oauth.auth_check_interval | uint32 | | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |
| https_edges.routes.saml.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.saml.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| https_edges.routes.saml.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| https_edges.routes.saml.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| https_edges.routes.saml.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| https_edges.routes.saml.idp_metadata | string | | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| https_edges.routes.saml.force_authn | boolean | | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| https_edges.routes.saml.allow_idp_initiated | boolean | | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| https_edges.routes.saml.authorized_groups | List&lt;string&gt; | | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| https_edges.routes.saml.entity_id | string | | The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| https_edges.routes.saml.assertion_consumer_service_url | string | | The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| https_edges.routes.saml.single_logout_url | string | | The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| https_edges.routes.saml.request_signing_certificate_pem | string | | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. |
| https_edges.routes.saml.metadata_url | string | | A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| https_edges.routes.saml.nameid_format | string | | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |
| https_edges.routes.oidc.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| https_edges.routes.oidc.options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| https_edges.routes.oidc.cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| https_edges.routes.oidc.inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| https_edges.routes.oidc.maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| https_edges.routes.oidc.issuer | string | | URL of the OIDC "OpenID provider". This is the base URL used for discovery. |
| https_edges.routes.oidc.client_id | string | | The OIDC app's client ID and OIDC audience. |
| https_edges.routes.oidc.client_secret | string | | The OIDC app's client secret. |
| https_edges.routes.oidc.scopes | List&lt;string&gt; | | The set of scopes to request from the OIDC identity provider. |
| https_edges.routes.websocket_tcp_converter.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| uri | string | | URI of the HTTPS Edge list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |