
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| github.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| github.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| github.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| github.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| github.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| github.teams | List&lt;string&gt; | | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name` |
| github.organizations | List&lt;string&gt; | | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug' |
| facebook.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| facebook.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| facebook.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| facebook.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| facebook.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| microsoft.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| microsoft.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| microsoft.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| microsoft.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| microsoft.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| google.client_id | string | | the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| google.client_secret | string | | the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| google.scopes | List&lt;string&gt; | | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| google.email_addresses | List&lt;string&gt; | | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| google.email_domains | List&lt;string&gt; | | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| linkedin.client_id | string | |  |
| linkedin.client_secret | string | |  |
| linkedin.scopes | List&lt;string&gt; | |  |
| linkedin.email_addresses | List&lt;string&gt; | |  |
| linkedin.email_domains | List&lt;string&gt; | |  |