# OAuth
----------------

The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on. Any HTTP client accessing an OAuth-protected route will be redirected to a chosen identity provider (currently Google, Microsoft, GitHub or Facebook) for authentication. When they are redirected back to the protected route, ngrok will check a series of authorization constraints that allow you to define who is authorized to access the resource by setting a list of email addresses, email domains and other requirements. If the user is authorized, their request will be forwarded through to the upstream server and ngrok's edge will set an HTTP cookie on their browser session to keep them logged in so that the authentication flow is not repeated.

## OAuth Providers Supported by ngrok

ngrok currently supports the following OAuth providers:

*   Amazon
*   [Facebook](/docs/cloud-edge/modules/oauth/facebook)
*   [GitHub](/docs/cloud-edge/modules/oauth/github)
*   GitLab
*   [Google](/docs/cloud-edge/modules/oauth/google)
*   LinkedIn
*   [Microsoft](/docs/cloud-edge/modules/oauth/microsoft)
*   Twitch

## OAuth Headers Provided by ngrok

ngrok strips the following headers from authorized requests and sets them with data from the OAuth provider. Your application can rely on these headers being accurate. Some providers (like [GitHub](/docs/cloud-edge/modules/oauth/github#oauth-providers-github-headers)) set additional headers for your application to use. You can find more information in the dedicated section for configuring the OAuth provider.

|Header|Description|
|---|---|
| `ngrok-auth-user-id` | Numeric ID of the authorized user. |
| `ngrok-auth-user-name` | Full name of the authorized user. |
| `ngrok-auth-email` | Authorized user's primary email address. |
| `ngrok-oauth-access-token` | **Custom applications only:** the user's OAuth access token. It is valid for at least 5 seconds. |

## Managed Application Limitations

Managed OAuth applications are owned by ngrok and intended for quick use or testing. We highly recommend that you bring your own application. There are limitations on managed application since since many endpoints share them:

*   User access tokens are not provided.
*   Custom scopes are not allowed.
*   At least one email address or one email domain must be specified.
*   Common email domains are not allowed (e.g. gmail.com, yahoo.com).

## Request Modifications

### Paths

Upstream servers behind endpoints protected by OAuth should not expect to receive any paths beginning with `/oauth2/`. Although more paths may be added, the following paths are currently used by ngrok:

|Path|Description|
|---|---|
| `/oauth2/callback` | Creates the OAuth session as part of forwarded provider callbacks. |
| `/oauth2/authorize` | Initiates [capture](#capture) with a capture URI of `/`. This allows easily clearing the session on an error and forcing reauthorization with the provider. |

### Cookies

ngrok uses cookies to secure the authorization workflow, store user credentials, and cache authorized user data for headers. Cookie values should be considered opaque and not modified. Cookies names are prefixed with `ngrok.` by default. ngrok may overwrite, modify, hide, or delete prefixed cookies with the names below as part of every request:

|Cookie|Description|
|---|---|
| `session` | Stores all user data and credentials.|
| `nonce` | Ties an authorization attempt to a single browser. The nonce value is within the cookie name, for example: `ngrok.nonce.1692b0c51436f5ed`|

## Constraint Changes and Sessions

OAuth endpoint configuration uses a cookie-based session. Consider the following when changing authorization constraints:

*   Cookies are client-side and available only when users make requests.
*   Users may successfully authorize, then visit again after any amount of time.
*   Once authorized, reauthorization occurs after the currently configured _[authorization check interval](#authorization-check-interval)_ or when the endpoint configuration changes.
*   Sessions are tied to the OAuth client ID and OAuth provider from which they were created.
*   Sessions are not shared between domain names.

## Authorization Check Interval

Authorization check interval controls the frequency of the [refresh](#refresh) phase of the OAuth workflow. In order to prevent abuse, refreshes have minimum frequency of once per 3 minutes.

When configuring an authorization check interval, note that long intervals will result in delayed authorization against changed provider data. This has security considerations, especially when revoking permissions. For example, with an authorization check interval of 1 day, the following is possible:

1.  Day 1 08:00: user makes a request and successfully authorizes.
2.  Day 1 10:00: the authorized GitHub organization removes the user.
3.  Day 1 11:00: user successfully accesses the tunnel.
4.  Day 2 08:30: user accesses the tunnel, reauthorizes, and is denied access.

Any of the following actions, taken between step 2 and 3, would force reauthorization:

*   Updating the authorization check interval to less than two hours.
    *   The default interval is **3 minutes**.
*   Changing the OAuth provider or provider's client ID.
*   Modifying the endpoint configuration.
*   Redirecting the user to `/oauth2/authorize`.

## OAuth Workflow

OAuth authentication is best separated into a three phase workflow: capture, callback, and refresh.

### Capture

Requests were not previously authorized enter the capture phase and begin OAuth2. ngrok redirects the user to the provider with a secret state. The state is used to store the initial request URI, or _capture URI_, with additional security data. State expires 30 minutes from capture and will allow users to retry on expiration, discarding the original capture URI in order to prevent replays.

Methods other than `GET` also trigger capture; discarding the request body and method in the process. After successful authentication and authorization, users are redirected with a 302 and perform a `GET` against the capture URI.

### Callback

Callback occurs as the final user-facing phase. There are up to three redirects made: the provider initiated redirect to the _common callback forwarder_, a redirect back to the initial domain, and a final redirect to the initial capture URI.

As endpoint configurations may be used across many domains, the common callback forwarder serves as a secure proxy back to the originating domain. Except in cases where the state query parameter was modified or discarded, this redirect is transparent to the user.

On the originating domain at `/oauth2/callback`, the request state is verified, errors are handled, and OAuth is completed. Errors from the provider are displayed to the user with instructions for how to continue. If no errors occur, a session is written to the _session cookie_, by default `ngrok.session`, and users are redirected to the capture URI.

### Refresh

Users that complete provider authorization always complete at least one data refresh. Afterward, this phase is repeated based on authorization check interval. Refresh populates headers and performs authorization with data from the provider.

If endpoint authorization fails with data from a refresh, granted OAuth credentials from the provider are retained. Unauthorized users are notified to contact the owner of the application to request access. Subsequent requests repeat the refresh phase until the maximum session lifetime is reached, the grant expires, or endpoint authorization is updated to allow them.
