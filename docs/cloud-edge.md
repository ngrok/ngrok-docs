---
sidebar_position: 2
---

# Cloud Edge
----------------

### What is ngrok Cloud Edge?

ngrok Cloud Edges allow you to quickly make your service available on the internet. Each edge has its own set of domains or TCP addresses, and its own set of modules. A module allows you to secure, protect, or manipulate the traffic going through that edge to your service.

### How ngrok handles HTTP and TLS Traffic

The ngrok Cloud Edge types are HTTPS, TLS, and TCP. ngrok Cloud Edges do not support HTTP traffic. You will need to use the HTTP Tunnel from the ngrok agent for that.

### Terminating TLS connections

ngrok provides configurable TLS termination options. By default, TLS terminates at the ngrok Cloud Edge, however, you can forward the TLS traffic through un-terminated. Pass-through TLS traffic will need to be terminated by your application server (or by the ngrok agent). For more information check out the TLS Edge.

![](https://ngrok.com/static/img/docs/ngrok-tls-termination.png)

### Endpoints

When you create an edge, you will automatically be assigned a reserved domain or TCP address depending on the type of edge you create. You can customize this endpoint by adding your own reserved or custom branded domain. An edge can have many endpoints, and each will use the same configuration.

### Reserved Domains

Domains in ngrok are the public URL you can use to access your service. They can be subdomains of \*.ngrok.io or they can be completely customized by bringing your own domain.

Any domain that you intend to use should be registered in the ngrok Dashboard to ensure no other account can use it if your tunnel goes offline.

You can also register [wildcard domains](#wildcard-domains) to your account which will reserve all subdomains of that domain.

### Wildcard Domains

ngrok permits you to bind HTTP and TLS tunnels to wildcard domains. All wildcard domains, even those that are subdomains of `ngrok.io` must first be reserved for your account on your dashboard. When using `--hostname` or `--subdomain`, specify a leading asterisk to bind a wildcard domain.

### Bind a tunnel to receive traffic on all subdomains of `example.com`

### Wildcard Domain Rules

The use of wildcard domains creates ambiguities in some aspects of the ngrok.com service. The following rules are used to resolve these situations and are important to understand if you are using wildcard domains.

For the purposes of example, assume you have reserved the address `*.example.com` for your account.

*   Connections to nested subdomains (e.g. `foo.bar.baz.example.com`) will route to your wildcard tunnel.
*   You may bind tunnels on any valid subdomain of `example.com` without creating an additional reserved domain entry.
*   No other account may reserve `foo.example.com` or any other subdomain that would match a wildcard domain reserved by another account.
*   Connections are routed to the most specific matching tunnel online. If you are running tunnels for both `foo.example.com` and `*.example.com`, requests to `foo.example.com` will always route to `foo.example.com`

### Automated TLS Certificates

ngrok makes it incredibly easy to provision TLS certificates for your domains by integrating with Let's Encrypt to automatically provision and renew your certificates. It's a great way to never have to worry about expired certificates again. You can select "Automated TLS Certificates" when adding a custom domain in the dashboard

### TLS Certificates

ngrok supports uploading your own TLS certificates which we will use to terminate traffic to a given reserved domain at the ngrok edge. You may wish to use this functionality in addition to our automatically provisioned certificates if you are using an EV cert or provisioning certificates from your own certificate authority. Uploading a certificate will not change any traffic, you must then _attach_ the certificate to a reserved domain by setting the `certificate_id` property on the reserved domain with the ID of the certificate you'd like to use for TLS termination.

### Certificate Chains

When uploading a new certificate to ngrok via the API, the `certificate_pem` field expects a certificate bundle of all certificates necessary to establish a chain of trust to a trusted root certificate authority. Many TLS certificate vendors will provide you with a constructed certificate bundle, but some will return the leaf certificate and the intermediate certificates separately and you must concatenate them to construct the bundle yourself.

Certificate bundles are a series of PEM-encoded X.509 certificates that have been concatenated together in a specific order. A bundle will look like the following:

```
-----BEGIN CERTIFICATE----- 
... 
-----END CERTIFICATE----- 
-----BEGIN CERTIFICATE-----
... 
-----END CERTIFICATE----- 
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
```

The first certificate in the bundle must be the leaf certificate. You can think of the leaf certificate as the one which is signed for your domain and [the private key](#tls-certificates-key) you will upload.

After the leaf are the intermediates certificates, if any. Each intermediate signs the certificate preceding it in the bundle. As an example, the first intermediate will have signed the leaf, and that signature is part of the leaf certificate itself. The final certificate is signed by the root certificate. You may also included the root certificate in the bundle as well, but it is not necessary or common practice to do so.

### Private Keys

ngrok accepts the following formats for the `private_key_pem` field:

*   RSA, in either PKCS#1 or PKCS#8 form.
*   ECDSA, in either SEC 1 or PKCS#8 form.
*   Ed25519, in PKCS#8 form.

All of the above (PKCS#1, PKCS#8, and SEC 1) are represented with ASN.1 DER (a binary format), encoded as PEM.

**ngrok will not accept any private keys that are encrypted (e.g. with DES).**.

### TCP Addresses

Normally, the remote TCP address and port are assigned randomly each time you start a TCP tunnel. For production services (and convenience) you often want a stable, guaranteed remote address. To do this, first, log in to your ngrok Dashboard and click "Reserve Address" in the "Reserved TCP Addresses" section. You cannot customize the address or port that is assigned to you. It is always assigned randomly. Then use the `--remote-addr` option when invoking ngrok to bind a tunnel on your reserved TCP address. Make sure the `--region` you specify matches the region in which you reserved your address.

### Bind a TCP tunnel on a reserved remote address

### Zero-Knowledge TLS

Zero-Knowledge TLS or Zero-Knowledge Encryption is end-to-end encryption that ensures no one (not even ngrok) can see the data you are transferring. If the service you are exposing does not support TLS termination, then the ngrok agent can do this for you allowing you to encrypt your traffic end-to-end but not have to worry about whether the local service has TLS support.

Specify both the `--crt` and `--key` command-line options when starting the agent to specify the filesystem paths to your TLS certificate and key and the ngrok agent will take care of terminating TLS connections for you.

![](https://ngrok.com/static/img/docs/ngrok-zero-knowledge.png)

### Types of Edges

There are three types of edges you can create that all serve different purposes.

*   **HTTPS Edge** - An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.
*   **TCP Edge** - A TCP edge can be used to share any non-HTTP protocols with the world. It's a generic edge that you can use to send SSH, VNC, RDP, SQL, or any other networked protocol.
*   **TLS Edge** - A TLS edge terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate.

### Creating an Edge

You can create an edge through the ngrok Dashboard by navigating to Endpoints > Edges. Follow the prompts to get set up with your new edge in just a few clicks. Once you have configured the edge through the dashboard, you can use the instructions to start your ngrok agent to serve traffic.

### Backends

Each edge contains one or more backends, which define how to handle the traffic in that edge. There are different types of backends depending on the behavior you desire for the edge.

*   Failover - Failover backends allow you to specify multiple backends to try in a specific order. When you define a failover backend, you provide an ordered list of backends to try.
*   Tunnel Group - Tunnel group backends allow you to define a set of ngrok tunnels that can respond to requests. The requests to a tunnel group backend will load balance across all active tunnels in the group. These backends use a set of labels to identify the tunnels that should be used to serve these requests. You can find examples for starting a tunnel in the ngrok Dashboard.
*   Weighted - Weighted backends will route traffic based on percentage to multiple backends. This can be useful when rolling out updates to existing services, where you want to send a small percentage to the new service for testing.
*   HTTP Response - An HTTP Response backend allows you to specify a static response to serve with a specific status code. This is useful for defining error pages such as 404 when used as part of a failover backend.

### Tunnel Group Labels

Tunnel Group Backends are the backend to use when you are sharing a local service with an ngrok agent. These backends use a set of customizable labels in order to identify the correct agent to forward traffic to. You can configure as many ngrok agents as you like to be part of the same tunnel group, which will then load balance the requests to this backend across the tunnels.

For more examples of configuring your ngrok agent to use Labeled Tunnels, see our [ngrok agent documentation for Labeled Tunnels](/docs/ngrok-agent/ngrok#command-ngrok-tunnel).

### HTTPS Edge

An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.

### HTTPS Edge Routes

The HTTPS edges allows you to define one or more routes, each with their own custom set of modules. Each route is defined using a path selector, which will match a path on the request to that endpoint. This can be useful for adding OAuth to specific areas of your website, or stitching multiple services together into a single website. Routes can share the same backend, or you can use a different backend for each route.

### HTTPS Edge Modules

Modules can be added to each route of an HTTPS edge to change the behavior of the traffic flowing through that edge. Here are the available modules for the HTTPS edge.

Module

Description

[Mutual TLS](#mutual-tls)

Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.

[TLS](#tls-termination)

Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated.

[Circuit Breaker](#circuit-breaker)

Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed.

[Compression](#compression)

If an HTTP request includes an Accept-Encoding header, HTTP responses will be automatically compressed and a Content-Encoding response header will be added.

[IP Restrictions](#ip-restrictions)

IP Restrictions allow you to attach one or more IP policies to the route.

[OAuth](#oauth)

The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on.

[OpenID Connect (OIDC)](#openid-connect-oidc)

This module restricts endpoint access to only users authorized by a OpenID Identity Provider.

[Request Headers](#request-headers)

The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server.

[Response Headers](#response-headers)

The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client.

[SAML](#saml)

This module restricts endpoint access to only users authorized by a SAML IdP.

[Webhook Verification](#webhook-verification)

The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.

### TCP Edge

A TCP edge can be used to share any non-HTTP protocols with the world. It's a generic edge that you can use to send SSH, VNC, RDP, SQL, or any other networked protocol.

### TCP Edge Modules

Modules can be added to a TCP edge to restrict traffic flowing through that edge. Here are the available modules for the TCP edge.

Module

Description

[IP Restrictions](#ip-restrictions)

IP Restrictions allow you to attach one or more IP policies to the edge.

### TLS Edge

A TLS edge terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate.

### Compatible Clients

TLS tunnels work by inspecting the data present in the Server Name Information (SNI) extension on incoming TLS connections. Not all clients that initiate TLS connections support setting the SNI extension data. These clients will not work properly with ngrok's TLS tunnels. Fortunately, nearly all modern browsers use SNI. Some modern software libraries do not though. The following list of clients do not support SNI and will not work with TLS tunnels:

*   Microsoft Internet Explorer 6.0
*   Microsoft Internet Explorer 7 & 8 on Windows XP or earlier
*   Native browser on Android 2.X
*   Java <=1.6
*   [Python 2.X, 3.0, 3.1 if required modules are not installed](https://stackoverflow.com/questions/18578439/using-requests-with-tls-doesnt-give-sni-support/18579484#18579484)

A more complete list can be found on [the Server Name Indication page on Wikipedia](https://en.wikipedia.org/wiki/Server_Name_Indication#No_support)

### TLS Edge Modules

Module

Description

[Mutual TLS](#mutual-tls)

Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.

[TLS](#tls-termination)

Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated.

[IP Restrictions](#ip-restrictions)

IP Restrictions allow you to attach one or more IP policies to the edge.

### Mutual TLS

Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.

Note: Mutual TLS applies to all routes in an HTTPS edge.

### TLS Termination Module

This module is used to configure how the TLS connection is terminated at the edge. For HTTPS Edges, TLS is always terminated at the ngrok Edge which means you can only configure the TLS version enforced there. For TLS tunnels, you can configure where the TLS termination occurs.

The default TLS version for ngrok is 1.2. You can configure the minimum TLS Version via the TLS module. The minimum TLS version ngrok supports is 1.0 up to the latest version 1.3.

### Circuit Breaker Module

Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed, allowing them time to recover back into a steady operational state. When the upstream server starts to fail requests at too high of a rate, the circuit is "opened".

The circuit breaker is an implementation of [Netflix's Hystrix circuit breaker specification](https://github.com/Netflix/Hystrix/wiki/How-it-Works).

If the upstream server responds with more than the threshold percentage of requests with 5XX status codes, the circuit breaker preemptively reject all subsequent requests at the ngrok edge with a 503 until the upstream server's error rate drops below the threshold percentage.

### Compression Module

If an HTTP request includes an `Accept-Encoding` header, HTTP responses will be automatically compressed and a `Content-Encoding` response header will be added. If the response was already compressed by the upstream server, ngrok takes no action. `gzip` and `deflate` encodings are supported.

### IP Restrictions Module

IP Restrictions allow you to attach one or more IP policies to the route. If multiple IP policies are attached, a connection will be allowed only if its source IP matches at least one policy with an 'allow' action and does not match any policy with a 'deny' action.

### OAuth Module

The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on. Any HTTP client accessing an OAuth-protected route will be redirected to a chosen identity provider (currently Google, Microsoft, Github or Facebook) for authentication. When they are redirected back to the protected route, ngrok will check a series of authorization constraints that allow you to define who is authorized to access the resource by setting a list of email addresses, email domains and other requirements. If the user is authorized, their request will be forwarded through to the upstream server and ngrok's edge will set an HTTP cookie on their browser session to keep them logged in so that the authentication flow is not repeated.

### OAuth Providers Supported by ngrok

ngrok currently supports the following OAuth providers:

*   [Facebook](#oauth-providers-facebook)
*   [Github](#oauth-providers-github)
*   [Google](#oauth-providers-google)
*   [Microsoft](#oauth-providers-microsoft)

### OAuth Headers Provided by ngrok

ngrok strips the following headers from authorized requests and sets them with data from the OAuth provider. Your application can rely on these headers being accurate. Some providers (like [Github](#oauth-providers-github-headers)) set additional headers for your application to use. You can find more information in the dedicated section for configuring the OAuth provider.

`ngrok-auth-user-id`

Numeric ID of the authorized user.

`ngrok-auth-user-name`

Full name of the authorized user.

`ngrok-auth-email`

Authorized user's primary email address.

`ngrok-oauth-access-token`

**Custom applications only:** the user's OAuth access token. It is valid for at least 5 seconds.

### Managed Application Limitations

Managed OAuth applications are owned by ngrok and intended for quick use or testing. We highly recommend that you bring your own application. There are limitations on managed application since since many endpoints share them:

*   User access tokens are not provided.
*   Custom scopes are not allowed.
*   At least one email address or one email domain must be specified.
*   Common email domains are not allowed (e.g. gmail.com, yahoo.com).

### Request Modificationspaths are currently used by ngrok:

`/oauth2/callback`

Creates the OAuth session as part of forwarded provider callbacks.

`/oauth2/authorize`

Initiates [capture](#oauth-capture) with a capture URI of `/`. This allows easily clearing the session on an error and forcing reauthorization with the provider.### Cookie
ngrok uses cookies to secure the authorization workflow, store user credentials, and cache authorized user data for headers. Cookie values should be considered opaque and not modified. Cookies names are prefixed with `ngrok.` by default. ngrok may overwrite, modify, hide, or delete prefixed cookies with the names below as part of every request:

`session`

Stores all user data and credentials.

`nonce`

Ties an authorization attempt to a single browser. The nonce value is within the cookie name, for example: `ngrok.nonce.1692b0c51436f5ed`

### Constraint Changes and Sessions

OAuth endpoint configuration uses a cookie-based session. Consider the following when changing authorization constraints:

*   Cookies are client-side and available only when users make requests.
*   Users may successfully authorize, then visit again after any amount of time.
*   Once authorized, reauthorization occurs after the currently configured _[authorization check interval](#oauth-auth-check-interval)_ or when the endpoint configuration changes.
*   Sessions are tied to the OAuth client ID and OAuth provider from which they were created.
*   Sessions are not shared between domain names.

### Authorization Check Interval

Authorization check interval controls the frequency of the [refresh](#oauth-refresh) phase of the OAuth workflow. In order to prevent abuse, refreshes have minimum frequency of once per 3 minutes.

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

### OAuth Workflow

OAuth authentication is best separated into a three phase workflow: capture, callback, and refresh.### Capturestore the initial request URI, or _capture URI_, with additional security data. State expires 30 minutes from capture and will allow users to retry on expiration, discarding the original capture URI in order to prevent replays.

Methods other than `GET` also trigger capture; discarding the request body and method in the process. After successful authentication and authorization, users are redirected with a 302 and perform a `GET` against the capture URI.### Callbackback to the initial domain, and a final redirect to the initial capture URI.

As endpoint configurations may be used across many domains, the common callback forwarder serves as a secure proxy back to the originating domain. Except in cases where the state query parameter was modified or discarded, this redirect is transparent to the user.

On the originating domain at `/oauth2/callback`, the request state is verified, errors are handled, and OAuth is completed. Errors from the provider are displayed to the user with instructions for how to continue. If no errors occur, a session is written to the _session cookie_, by default `ngrok.session`, and users are redirected to the capture URI.### Refreshpopulates headers and performs authorization with data from the provider.

If endpoint authorization fails with data from a refresh, granted OAuth credentials from the provider are retained. Unauthorized users are notified to contact the owner of the application to request access. Subsequent requests repeat the refresh phase until the maximum session lifetime is reached, the grant expires, or endpoint authorization is updated to allow them.

### Facebook OAuth Provider
### Register an applicatio

1.  Visit the [App Dashboard](https://developers.facebook.com/apps/), log in, and convert your account into a developer account if necessary.
2.  Select "Add a New App" or "Create App."
3.  Choose a user-visible name and contact email.
4.  Submit the form. A valid example app: 

    [![](https://ngrok.com/static/img/howto/oauth/1-facebook-register.png)](/static/img/howto/oauth/1-facebook-register.png)

### Configure your applicationngrok.com/static/img/howto/oauth/2-facebook-add_product.png)](/static/img/howto/oauth/2-facebook-add_product.png)
2.  Select "Set Up" for Facebook Login.
3.  On the left hand navigation, select Facebook Login then choose "Settings" below it.
4.  Add to "Valid OAuth Redirect URI" `https://idp.ngrok.com/oauth2/callback`
5.  Save the Facebook Login settings page. Final configuration should match: 

    [![](https://ngrok.com/static/img/howto/oauth/3-facebook-login_settings.png)](/static/img/howto/oauth/3-facebook-login_settings.png)

6.  Select Settings on the left hand navigation, then choose advanced.
7.  Fill out additional settings for your application.
    *   ngrok does not support Server IP allowlisting.
8.  Enable "Require App Secret". See [documentation](https://developers.facebook.com/docs/graph-api/securing-requests/#appsecret_proof) for how to call Facebook Graph API with this feature.
9.  Save settings. A minimally complete security section of advanced settings: 

    [![](https://ngrok.com/static/img/howto/oauth/4-facebook-security.png)](/static/img/howto/oauth/4-facebook-security.png)

10.  Visit basic settings on the left hand navigation.
11.  At the top, save your App ID and App Secret for later.
12.  Fill out the privacy policy URL. This URL must accessible when entered for verification.
13.  Select a category for your application.
14.  Hit save changes. A minimally complete basic settings: 

    [![](https://ngrok.com/static/img/howto/oauth/5-facebook-basic_settings.png)](/static/img/howto/oauth/5-facebook-basic_settings.png)

15.  Select the toggle for "In development" at the top of the page and confirm switching to live mode.
16.  Your application should now show as live: 

    [![](https://ngrok.com/static/img/howto/oauth/6-facebook-live.png)](/static/img/howto/oauth/6-facebook-live.png)

### Update your endpoint configuration
2.  Choose to use your own application with Facebook as the provider.
3.  Include the app ID and app secret that were stored earlier.
4.  Add [any scopes](https://developers.facebook.com/docs/apps/review/login-permissions) required by your application.
    *   Scopes which require a Facebook [app review](https://developers.facebook.com/docs/apps/review/#app-review) are unsupported.
    *   ngrok will enforce that users [accept all permissions](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions#reprompt) before completing authorization.
5.  Add the `email` scope if it is not already present.

### Additional application setup information

*   [App review](https://developers.facebook.com/docs/apps/review)
*   [App secret proof](https://developers.facebook.com/docs/graph-api/securing-requests/#appsecret_proof)

### User permission revocationany time after endpoint authorization, users may selectively revoke permissions. If your application requires more than the `default` or `email` scope, you must follow [Facebook's rules](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions#reprompt) for handling revoked permissions without violating terms of use.

### GitHub OAuth Providerform.

2.  Set the Authorization callback URL to `https://idp.ngrok.com/oauth2/callback`.
3.  Submit the form. A working example registration: 

    [![](https://ngrok.com/static/img/howto/oauth/1-github-register.png)](/static/img/howto/oauth/1-github-register.png)

4.  Save the client ID and client secret from the application overview: 

    [![](https://ngrok.com/static/img/howto/oauth/2-github-client_id_and_secret.png)](/static/img/howto/oauth/2-github-client_id_and_secret.png)

5.  Return to the ngrok dashboard and create or edit an OAuth endpoint configuration module.
6.  Choose to use your own application with GitHub as the provider.
7.  Include the client ID and secret from earlier.
8.  Add any scopes your application requires.
    *   Include the `read:user` scope (or more permissive, like `user`) for ngrok.
9.  Add any team or organization constraints by the their mention handle(s), excluding the `@` prefix.
    *   For example, the [ngrok](https://github.com/ngrok) organization's mention handle is `@ngrok`, so the organization constraint would be `ngrok`. Similarly, the `@ngrok/developers` team would be matched by the constraint `ngrok/developers`.
    *   If a constraint is specified, the `read:org` scope is required. A more permissive scope, such as `org`, also works.
    *   Organizations must allow [third-party access](#oauth-providers-github-org-and-team) to your app.

[### Additional GitHub headers provided by ngrok

In addition to the headers set for every OAuth provider, these additional headers are available when using Github.

`ngrok-auth-github-user-id`

The username of the authorized user.

`ngrok-auth-github-organization`

**Only when a team or organization constraint matches:** the [first matching](#oauth-providers-github-header-ordering) GitHub organization's mention handle (e.g "coreutils").

`ngrok-auth-github-team`

**Only when a team constraint matches:** the [first matching](#oauth-providers-github-header-ordering) GitHub team mention handle (e.g "coreutils/contributors").

[### Using Organization and Teams

To authorize users based on organization or team membership, the organization must allow third party access. There are multiple ways to grant access:

*   Organizations may allow unrestricted third-party access from settings.
*   Owners can grant access to an application during authorization.
*   Members can request access as part of authorization.
*   Members can [request access from settings.](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps)

The ngrok managed application can authorize users based on organization or team. **For organizations concerned about membership privacy, your own application should always be used**. When granting third-party access to the managed application, anyone using the managed application may constrain based on your organization's membership.

[### Header presence and constraint ordering

Organization and team headers are present only when an organization or team constraint matches. For example, an endpoint constrained solely on the `ngrok` organization will always have authorized users with the `ngrok` organization header. An endpoint without any organization or team constraints will receive no organization or team header.

ngrok authorizes against users' first 200 memberships of each constraint in chronological order of the team or organization's creation. Headers are filled from the first user data match in order:

1.  From any team membership, check the parent organization.
2.  Check team membership.
3.  Check organization membership.

### Google OAuth Provider
### Build the consent screen
2.  Navigate to the project's [OAuth consent screen](https://console.developers.google.com/apis/credentials/consent).
3.  Select whether your application is an [internal or external app](https://support.google.com/cloud/answer/6158849?hl=en#public-and-internal).
4.  Fill out the application name and support email.
5.  Add additional scopes required by your application, saving the full scope URI for later.
    *   [Possible scope URIs](https://developers.google.com/identity/protocols/oauth2/scopes)
    .
6.  Ensure that the `email` and `profile` scopes are still selected.
7.  Under Authorized domains, add `ngrok.com` and your application homepage domain.
8.  Add links to your application homepage and privacy policy. The final consent screen should resemble: 

    [![](https://ngrok.com/static/img/howto/oauth/1-google-consent_screen_complete.png)](/static/img/howto/oauth/1-google-consent_screen_complete.png)

9.  Save the application.
    *   Applications that require verification cannot complete the consent screen and are not supported by ngrok.
### Create credentials for ngrok
2.  Select "Create credentials" from the top menu and select "OAuth Client ID".
3.  Choose "Web application" from the list of application types.
4.  Name your secret, then set "Authorized Redirect URIs" to `https://idp.ngrok.com/oauth2/callback`. The final credentials form should resemble: 

    [![](https://ngrok.com/static/img/howto/oauth/2-google-create_client_id.png)](/static/img/howto/oauth/2-google-create_client_id.png)

5.  Securely store the client ID and secret from the final screen: 

    [![](https://ngrok.com/static/img/howto/oauth/3-google-client_id_and_secret.png)](/static/img/howto/oauth/3-google-client_id_and_secret.png)

### Update your endpoint configuration
2.  Choose to use your own application with Google as the provider.
3.  Include the client ID, secret, and scopes configured in your application.
4.  Add the following scopes to your application if they are not already present:
    *   `https://www.googleapis.com/auth/userinfo.profile`
    *   `https://www.googleapis.com/auth/userinfo.email`
### Additional application setup information
*   [GCP Help: Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en)
*   [Google OAuth 2.0 workflow](https://developers.google.com/identity/protocols/oauth2)

### Microsoft OAuth Providercreate a new application for ngrok within the Azure portal.
### Register an applicationquickstart-create-new-tenant) for your application.
2.  Search for "Azure Active Directory" and select it.
3.  Select "App registrations" on the left hand navigation.
4.  Select "New registration" at the top.
5.  Enter a name for your application.
6.  ngrok does not support [**single tenant** applications](https://docs.microsoft.com/en-us/azure/active-directory/develop/single-and-multi-tenant-apps). Choose supported account types from:
    *   Accounts in any organizational directory (Any Azure AD directory - Multitenant)
    *   Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)
7.  Choose a "Web" redirect URI and enter `https://idp.ngrok.com/oauth2/callback`.
8.  Register your application. The final form should resemble: 

    [![](https://ngrok.com/static/img/howto/oauth/1-microsoft-create_app.png)](/static/img/howto/oauth/1-microsoft-create_app.png)

### Configure your application
2.  Store the "Application (client) ID" in the top information section for later. [![](https://ngrok.com/static/img/howto/oauth/2-microsoft-app_overview.png)](/static/img/howto/oauth/2-microsoft-app_overview.png)
3.  Select "API permissions" on the left hand navigation.
4.  Add additional scopes that your application requires and store them for later.
    *   Scopes which require an application review by Microsoft are unsupported.
    *   Scopes that [require admin consent](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#admin-restricted-permissions) prevent tenants' users from authorizing until consent is granted.
5.  Ensure `User.Read` or a more permissive scope (e.g. `User.Read.All`) is configured for ngrok. Example minimal configuration: 

    [![](https://ngrok.com/static/img/howto/oauth/3-microsoft-api_permissions.png)](/static/img/howto/oauth/3-microsoft-api_permissions.png)

6.  Choose "Certificates and Secrets" on the left hand navigation.
7.  Select "New Client Secret" at the bottom, name the secret, set an expiration, and hit create.
8.  Creation is asynchronous. When complete, save the secret from the "Value" column (blurred below) for later: 

    [![](https://ngrok.com/static/img/howto/oauth/4-microsoft-client_secret.png)](/static/img/howto/oauth/4-microsoft-client_secret.png)

### Update your endpoint configuration
2.  Choose to use your own application with Microsoft as the provider.
3.  Include the scopes, client ID, and client secret for your application.
### Additional application setup information
*   [Permissions and consent](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#admin-restricted-permissions) (restricted permissions)
*   [Graph API User object properties](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions#reprompt) (id, displayName, and mail/userPrincipalName)

### OpenID Connect (OIDC) Module

This module restricts endpoint access to only users authorized by a OpenID Identity Provider. Upstream servers behind an OIDC-protected endpoint can safely assume that requests are from users authorized by the OIDC IdP to access the protected resource.

### Request Headers Module

The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server.

Changes made to request headers will not be visible to other modules; they will only be seen by your upstream server.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](#http-headers) for more details.

Variables can be interpolated into a header value using JSONPath expressions surrounded by `${}` syntax. See [Header Templates](#header-templates) for more details.

### Response Headers Module

The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. This is especially useful for enforcing the use of security headers on all responses returned by your application.

Changes made to response headers will not be visible to other modules; they will only be seen by the client.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](#http-headers) for more details.

Variables can be interpolated into a header value using JSONPath expressions surrounded by `${}` syntax. See [Header Templates](#header-templates) for more details.

### SAML Module

This module restricts endpoint access to only users authorized by a SAML IdP. Upstream servers behind a SAML-protected endpoint can safely assume that requests are from users authorized by the SAML IdP to access the protected resource.

### Webhook Verification Module

The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.

The currently supported webhook providers are:

*   Github - [Github Webhook Docs](https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks)
*   GitLab - [GitLab Webhook Docs](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)
*   Intercom - [Intercom Webhook Docs](https://developers.intercom.com/building-apps/docs/setting-up-webhooks)
*   SendGrid - [SendGrid Webhook Docs](https://docs.sendgrid.com/for-developers/tracking-events/getting-started-event-webhook)
*   Shopify - [Shopify Webhook Docs](https://shopify.dev/apps/webhooks)
*   Slack - [Slack Webhook Docs](https://api.slack.com/messaging/webhooks)
*   Amazon Simple Notification Service (AWS SNS) - [AWS SNS Docs](https://docs.aws.amazon.com/sns/latest/dg/sns-http-https-endpoint-as-subscriber.html)
*   Stripe - [Stripe Webhook Docs](https://stripe.com/docs/webhooks)
*   Twilio - [Twilio Webhook Docs](https://www.twilio.com/docs/usage/webhooks)
*   Xero - [Xero Webhook Docs](https://developer.xero.com/documentation/guides/webhooks/overview/)

If ngrok can't verify a request as coming from the configured provider it will reject the request with a 403 status.

### Observability

ngrok includes an Events system for gaining observability into what is happening in your account. Event Subscriptions allow you to send any event that happens in the ngrok platform to an external destination so that you can keep track of what happens in the system or trigger additional custom actions. You can subscribe to some or all of the events in the platform, and you can choose the specific fields you are interested in some high cardinality events.

For more information on the types of events available, please see our [ngrok Event Sources reference](/docs/events).

If you are interested in configuring these event subscriptions programmatically, please see our [Event Subscription API](/docs/api#api-event-subscriptions-create).