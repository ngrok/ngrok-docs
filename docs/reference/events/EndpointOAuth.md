
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| provider.github.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| provider.github.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| provider.github.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| provider.github.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| provider.github.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| provider.github.teams | List&lt;string&gt; | | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| provider.github.organizations | List&lt;string&gt; | | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |
| provider.facebook.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| provider.facebook.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| provider.facebook.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| provider.facebook.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| provider.facebook.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| provider.microsoft.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| provider.microsoft.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| provider.microsoft.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| provider.microsoft.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| provider.microsoft.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| provider.google.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| provider.google.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| provider.google.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| provider.google.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| provider.google.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| provider.linkedin.client_id | string | |  |
| provider.linkedin.client_secret | string | |  |
| provider.linkedin.scopes | List&lt;string&gt; | |  |
| provider.linkedin.email_addresses | List&lt;string&gt; | |  |
| provider.linkedin.email_domains | List&lt;string&gt; | |  |
| options_passthrough | boolean | | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| cookie_prefix | string | | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| inactivity_timeout | uint32 | | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| maximum_duration | uint32 | | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| auth_check_interval | uint32 | | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |