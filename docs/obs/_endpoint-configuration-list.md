<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier of this endpoint configuration |
| type | string | they type of traffic this endpoint configuration can be applied to. one of: `http`, `https`, `tcp` |
| description | string | human-readable description of what this endpoint configuration will be do when applied or what traffic it will be applied to. Optional, max 255 bytes |
| metadata | string | arbitrary user-defined machine-readable data of this endpoint configuration. Optional, max 4096 bytes. |
| created_at | string | timestamp when the endpoint configuration was created, RFC 3339 format |
| uri | string | URI of the endpoint configuration API resource |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tripped_duration | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| rolling_window | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| num_buckets | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| volume_threshold | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| error_threshold_percentage | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| add | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| remove | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| add | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| remove | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| terminate_at | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| min_version | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| provider | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers defined at https://ngrok.com/docs/cloud-edge/modules/webhook-verification |
| secret | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| client_id | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| client_secret | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| scopes | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| email_addresses | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| email_domains | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| teams | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| organizations | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |
| client_id | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| client_secret | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| scopes | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| email_addresses | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| email_domains | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| client_id | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| client_secret | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| scopes | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| email_addresses | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| email_domains | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| client_id | string | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| client_secret | string | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| scopes | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| email_addresses | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| email_domains | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| client_id | string |  |
| client_secret | string |  |
| scopes | List&lt;string&gt; |  |
| email_addresses | List&lt;string&gt; |  |
| email_domains | List&lt;string&gt; |  |
| client_id | string |  |
| client_secret | string |  |
| scopes | List&lt;string&gt; |  |
| email_addresses | List&lt;string&gt; |  |
| email_domains | List&lt;string&gt; |  |
| client_id | string |  |
| client_secret | string |  |
| scopes | List&lt;string&gt; |  |
| email_addresses | List&lt;string&gt; |  |
| email_domains | List&lt;string&gt; |  |
| client_id | string |  |
| client_secret | string |  |
| scopes | List&lt;string&gt; |  |
| email_addresses | List&lt;string&gt; |  |
| email_domains | List&lt;string&gt; |  |
| options_passthrough | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| cookie_prefix | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| inactivity_timeout | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| maximum_duration | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| auth_check_interval | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| options_passthrough | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| cookie_prefix | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| inactivity_timeout | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| maximum_duration | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| idp_metadata | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| force_authn | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| allow_idp_initiated | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| authorized_groups | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| entity_id | string | The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| assertion_consumer_service_url | string | The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| single_logout_url | string | The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| request_signing_certificate_pem | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. |
| metadata_url | string | A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| nameid_format | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| options_passthrough | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| cookie_prefix | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| inactivity_timeout | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| maximum_duration | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| issuer | string | URL of the OIDC "OpenID provider". This is the base URL used for discovery. |
| client_id | string | The OIDC app's client ID and OIDC audience. |
| client_secret | string | The OIDC app's client secret. |
| scopes | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |
| uri | string | URI of the endpoint configurations list API resource |
| next_page_uri | string | URI of the next page, or null if there is no next page |