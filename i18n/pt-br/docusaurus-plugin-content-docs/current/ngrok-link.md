---
sidebar_position: 2
---

# ngrok Link
-------------------


:::tip

**Don't have an ngrok account?** 
[Sign up for free to get more bandwidth, longer tunnel timeouts, and a lot more.](https://ngrok.com/signup)

:::

*   #### [Overview](#overview)
    
    *   [Intended Audience](#intended-audience)
    *   [Differences](#differences)
*   #### [Installing ngrok as a service](#service)
    
    *   [Installation](#installation)
    *   [Management](#manage)
    *   [Windows](#windows)
    *   [OS X](#darwin)
    *   [Linux](#linux)
*   #### [Per-client authtoken credentials](#credentials)
    
    *   [Generation](#credentials-generation)
    *   [ACL Enforcement](#credentials-acl)
*   #### [Edges](#edges)
    
    *   [Creating an Edge](#edge-create)
    *   [Types](#edge-types)
    *   [Endpoints](#edge-endpoints)
    *   [Backends](#edge-backends)
    *   [HTTPS Routes](#https-edge-routes)
    *   [HTTPS Modules](#https-edge-modules)
    
    *   [Mutual TLS](#https-edge-mutual-tls)
    *   [TLS](#https-edge-tls)
    *   [Circuit Breaker](#https-edge-circuit-breaker)
    *   [Compression](#https-edge-compression)
    *   [IP Restrictions](#https-edge-ip-restrictions)
    *   [OAuth](#https-edge-oauth)
    *   [OpenID Connect (OIDC)](#https-edge-oidc)
    *   [Request Headers](#https-edge-request-headers)
    *   [Response Headers](#https-edge-response-headers)
    *   [SAML](#endpoint-configuration-saml)
    *   [Webhook Verification](#https-edge-webhook-verification)
    
    *   [TCP Modules](#tcp-edge-modules)
    
    *   [IP Restrictions](#tcp-edge-ip-restrictions)
    
    *   [TLS Modules](#tls-edge-modules)
    
    *   [IP Restrictions](#tls-edge-ip-restrictions)
    *   [Mutual TLS](#tls-edge-mutual-tls)
    *   [TLS](#tls-edge-tls)
    
*   #### [Endpoint Configurations](#endpoint-configurations)
    
    *   [Type](#endpoint-configuration-types)
    *   [Attaching to Reserved Domains and Addresses](#endpoint-configuration-attaching)
    *   [Changes to HTTP Traffic](#endpoint-configuration-http-changes)
    *   [Modules](#endpoint-configuration-modules)
    
    *   [Circuit Breaker](#endpoint-configuration-circuit-breaker)
    *   [Compression](#endpoint-configuration-compression)
    *   [IP Policy](#endpoint-configuration-ip-policy)
    *   [Logging](#endpoint-configuration-logging)
    *   [Mutual TLS](#endpoint-configuration-mutual-tls)
    *   [OAuth](#endpoint-configuration-oauth)
    *   [Request Headers](#endpoint-configuration-request-headers)
    *   [Response Headers](#endpoint-configuration-response-headers)
    *   [TLS Termination](#endpoint-configuration-tls)
    *   [Webhook Verification](#endpoint-configuration-webhook-verification)
    
*   #### [Events](#events)
    
    *   [Sources](#event-sources)
    
    *   [Event Filters](#event-filters)
    
    *   [Destinations](#event-destinations)
*   #### [IP Policies](#ip-policies)
    
    *   [Rules](#ip-policy-rules)
*   #### [TLS Certificates](#tls-certificates)
    
    *   [Certificate Chains](#tls-certificates-pem)
    *   [Private Keys](#tls-certificates-key)
*   #### [OAuth Authentication](#oauth)
    
    *   [Google](#oauth-google)
    
    *   [Creating your own application](#oauth-google-custom-application)
    *   [Headers provided by ngrok](#oauth-google-headers)
    
    *   [Microsoft](#oauth-microsoft)
    
    *   [Creating your own application](#oauth-microsoft-custom-application)
    *   [Headers provided by ngrok](#oauth-microsoft-headers)
    
    *   [GitHub](#oauth-github)
    
    *   [Creating your own OAuth application](#oauth-github-custom-application)
    *   [Headers provided by ngrok](#oauth-github-headers)
    *   [Using Organization and Teams](#oauth-github-org-and-team)
    *   [Header presence and ordering](#oauth-github-header-ordering)
    
    *   [Facebook](#oauth-facebook)
    
    *   [Creating your own application](#oauth-facebook-custom-application)
    *   [Headers provided by ngrok](#oauth-facebook-headers)
    *   [User permission revocation](#oauth-facebook-perm-revocation)
    
    *   [Managed Application Limitations](#oauth-managed-app)
    *   [Request Modifications](#oauth-reqmod)
    *   [Constraint Changes and Sessions](#oauth-constraint-changes)
    *   [Authorization Check Interval](#oauth-auth-check-interval)
    *   [Detailed Auth Workflow](#oauth-workflow)
*   #### [HTTP Headers](#http-headers)
    
    *   [Header Templates](#header-templates)
*   #### [ngrok.com API](#service-api)
    
*   #### [Errors](#errors)
    

ngrok Link Documentation
------------------------

ngrok link is a specialized, enhanced version of ngrok specifically designed for running in production environments. Specifically, it is intended for two major use cases:

1.  It is a lightweight VPN alternative that provides the automation and security necessary to establish targeted, secure links into customer environments.
2.  It enables IoT devices to expose control functionality to customers or administrators at stable, secured endpoints. Remote shell access for debugging and administration can be safely exposed in this manner as well.

ngrok link is tuned for running optimally as part of your infrastructure and exposes a number of additional security features to give fine grained access and authentication control. Most importantly, these features are exposed via APIs so that you can automate your entire workflow with ngrok.

### Intended Audience

**THIS DOCUMENT ASSUMES YOU HAVE ALREADY READ AND UNDERSTOOD [the ngrok documentation](/docs/2).** If you have not, you should read the main documentation now. The following content is intended only as a supplement and will not be helpful without the proper context.

### Differences

Because ngrok link is specialized for production environments, there are changes in the way it operates compared to a 'standard' ngrok agent. Those differences are enumerated here.

The following changes have been made to ngrok's configuration defaults.

*   Request inspection for all tunnels is disabled by default.
*   Automatic client updates are disabled by default.
*   The console UI is disabled and ngrok logs to stdout by default.

Installing ngrok as a service
-----------------------------

ngrok link includes additional functionality that makes it easy to install and manage itself as a native operating system service on Windows, OS X and Linux. This makes it extraordinarily easy to set up ngrok in a production configuration that will cause it to start on machine boot, restart after crashes, and integrate with the native tools system administrators are familiar with to manage and inspect its state.

When running as a service, ngrok configures itself from its configuration file and starts all tunnels defined in the configuration file. When ngrok runs as a service, it executes the equivalent behavior of running `ngrok start --all`.

### Installation

Installing ngrok as a service is the same on all on operating systems. First, create an `ngrok.yml` configuration file somewhere on your machine. For this example, I'll assume it's in `C:\ngrok\ngrok.yml`. In your configuration file, make sure you include an `authtoken` and define all of the tunnels that you want to start. Then run:

    ngrok service install -config C:\ngrok\ngrok.yml

This will validate that the configuration file is valid, and if so, install ngrok as a service using the given configuration file. The service installation includes the location of the ngrok binary, so don't move or delete it after you've installed the service.

### Management

After your service is installed, you probably want to start it. You can easily do that with:

    ngrok service start

ngrok exposes the following commands to make service administration easy. The commands take no arguments and do what you would expect.

*   `ngrok service start`
*   `ngrok service stop`
*   `ngrok service restart`
*   `ngrok service uninstall`

### Windows

On Windows, ngrok installs itself as a Windows service. It can be managed via Windows Services and it logs all errors and warnings to the Windows event log.

### OS X

On Darwin, ngrok creates an appropriate plist file and installs itself to run via launchd. Warnings and errors are logged via syslog.

### Linux

On Linux, only systems with upstart or systemd installed are supported for service installation. If neither is installed, you will need to set up your own management of the ngrok process as a service. Warnings and errors are logged via syslog.

Per-client Authtoken Credentials
--------------------------------

For production systems, every client must authenticate with a unique authtoken credential. This allows you to deactivate devices that are old or compromised. Further, it allows you to enforce a separate ACL policy on every connected device that limits what tunnels it is allowed to bind.

### Generation

You can create authtokens from the [Tunnel Authtokens tab in your ngrok dashboard]({{url_for(). Click "Add Tunnel Authtoken" and then enter a human-readable description of the device or location where you intend to install the authtoken for tracking purposes.

**In both the UI and API, the full authtoken you generate will only be shown once, immediately after creation!**

### ACL Enforcement

Credential ACLs describe what a client who connects with a given authtoken is allowed to do. For example, you may want to restrict each client to only have permission to bind a specific set of tunnel endpoints. When you create a credential, specify a list of ACL behaviors are allowed for any client connecting with that authtoken.

**Generating credentials with ACLs is only available via the [create credential API](#create-credential) at the moment.**

Edges
-----

ngrok Edges allow you to quickly connect your service or machine to the internet. Each edge has its own set of domains or addresses, and it's own set of modules. A module allows you to secure, protect, or manipulate the traffic going through that edge to your service.

### Creating an Edge

You can create an edge through the ngrok Dashboard by navigating to Endpoints > Edges. Follow the prompts to get set up with your new edge in just a few clicks. Once you have configured the edge through the dashboard, you can use the instructions to start your ngrok agent to serve traffic.

### Types of Edges

There are three types of edges you can create that all serve different purposes.

*   **HTTPS Edge** - An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.
*   **TCP Edge** - A TCP edge can be used to share any non-HTTP protocols with the world. It's a generic edge that you can use to send SSH, VNC, RDP, SQL, or any other networked protocol.
*   **TLS Edge** - A TLS edge terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate.

### Endpoints

When you create an edge, you will automatically be assigned a reserved domain or address depending on the type of edge you create. You can customize this endpoint by adding your own reserved or custom branded domain. An edge can have many endpoints, and each will use the same configuration.

### Backends

Each edge contains one or more backends, which define how to handle the traffic in that edge. There are different types of backends depending on the behavior you desire for the edge.

*   Failover - Failover backends allow you to specify multiple backends to try in a specific order. When you define a failover backend, you provide an ordered list of backends to try.
*   Tunnel Group - Tunnel group backends allow you to define a set of ngrok tunnels that can respond to requests. These backends use a set of labels to identify the tunnels that should be used to serve these requests. You can find examples for starting a tunnel in the ngrok Dashboard.
*   Weighted - Weighted backends will route traffic based on percentage to multiple backends. This can be useful when rolling out updates to existing services, where you want to send a small percentage to the new service for testing.
*   HTTP Response - An HTTP Response backend allows you to specify a static response to serve with a specific status code. This is useful for defining error pages such as 404 when used as part of a failover backend.

### HTTPS Routes

The HTTPS edges allows you to define one or more routes, each with their own custom set of modules. Each route is defined using a path selector, which will match a path on the request to that endpoint. This can be useful for adding OAuth to specific areas of your website, or stitching multiple services together into a single website. Routes can share the same backend, or you can use a different backend for each route.

### HTTPS Modules

Modules can be added to each route of an HTTPS edge to change the behavior of the traffic flowing through that edge. Here are the available modules for the HTTPS edge.

#### Mutual TLS

Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.

Note: Mutual TLS applies to all routes in an HTTPS edge.

#### TLS

Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated, in which case the TLS traffic will need to be terminated by your application server (or by the ngrok agent). By default, if this module is not enabled, TLS will be terminated at the ngrok edge.

#### Circuit Breaker

Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed, allowing them time to recover back into a steady operational state. When the upstream server starts to fail requests at too high of a rate, the circuit is "opened".

The circuit breaker is an implementation of [Netflix's Hystrix circuit breaker specification](https://github.com/Netflix/Hystrix/wiki/How-it-Works).

If the upstream server responds with more than the threshold percentage of requests with 5XX status codes, the circuit breaker preemptively reject all subsequent requests at the ngrok edge with a 503 until the upstream server's error rate drops below the threshold percentage.

#### Compression

If an HTTP request includes an `Accept-Encoding` header, HTTP responses will be automatically compressed and a `Content-Encoding` response header will be added. If the response was already compressed by the upstream server, ngrok takes no action. `gzip` and `deflate` encodings are supported.

#### IP Restrictions

IP Restrictions allow you to attach one or more IP policies to the route. If multiple IP policies are attached, a connection will be allowed only if its source IP matches at least one policy with an 'allow' action and does not match any policy with a 'deny' action.

#### OAuth

The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on. Any HTTP client accessing an OAuth-protected route will be redirected to a chosen identity provider (currently Google, Microsoft, Github or Facebook) for authentication. When they are redirected back to the protected route, ngrok will check a series of authorization constraints that allow you to define who is authorized to access the resource by setting a list of email addresses, email domains and other requirements. If the user is authorized, their request will be forwarded through to the upstream server and ngrok's edge will set an HTTP cookie on their browser session to keep them logged in so that the authentication flow is not repeated.

Configuration, customization, and use of the OAuth module is documented in the [OAuth documentation section](#oauth).

#### OpenID Connect (OIDC)

This module restricts endpoint access to only users authorized by a OpenID Identity Provider. Upstream servers behind an OIDC-protected endpoint can safely assume that requests are from users authorized by the OIDC IdP to access the protected resource.

#### Request Headers

The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server.

Changes made to request headers will not be visible to other modules; they will only be seen by your upstream server.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](#http-headers) for more details.

Variables can be interpolated into a header value using JSONPath expressions surrounded by `${}` syntax. See [Header Templates](#header-templates) for more details.

#### Response Headers

The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. This is especially useful for enforcing the use of security headers on all responses returned by your application.

Changes made to response headers will not be visible to other modules; they will only be seen by the client.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](#http-headers) for more details.

Variables can be interpolated into a header value using JSONPath expressions surrounded by `${}` syntax. See [Header Templates](#header-templates) for more details.

#### SAML

This module restricts endpoint access to only users authorized by a SAML IdP. Upstream servers behind a SAML-protected endpoint can safely assume that requests are from users authorized by the SAML IdP to access the protected resource.

#### Webhook Verification

The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.

Currently supported webhook providers are:

*   Github
*   GitLab
*   Intercom
*   SendGrid
*   Shopify
*   Slack
*   AWS SNS
*   Stripe

If ngrok can't verify a request as coming from the configured provider it will reject the request with a 403 status.

### TCP Modules

Modules can be added to a TLS edge to restrict traffic flowing through that edge. Here are the available modules for the TCP edge.

#### IP Restrictions

IP Restrictions allow you to attach one or more IP policies to the edge. If multiple IP policies are attached, a connection will be allowed only if its source IP matches at least one policy with an 'allow' action and does not match any policy with a 'deny' action.

### TLS Modules

Modules can be added to a TLS edge to restrict and secure the traffic flowing through that edge. Here are the available modules for the TLS edge.

#### IP Restrictions

IP Restrictions allow you to attach one or more IP policies to the edge. If multiple IP policies are attached, a connection will be allowed only if its source IP matches at least one policy with an 'allow' action and does not match any policy with a 'deny' action.

#### Mutual TLS

Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.

#### TLS

Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated, in which case the TLS traffic will need to be terminated by your application server (or by the ngrok agent). By default, if this module is not enabled, TLS will be terminated at the ngrok edge.

Endpoint Configurations
-----------------------

Endpoint configurations define reusable pieces of functionality that can be applied to any number of reserved domains or reserved addresses on your account.

Endpoint configurations are comprised of one or more **modules**. Each module defines a piece of functionality that will be executed on traffic that transits through any domain or address that you attach the endpoint configuration to. Each module defines its own set of configuration options and may be managed independently via its own API resources. Modules can perform authentication, performance optimizations like compression, enrich requests, handle errors, enforce policy and more.

### Endpoint Configuration Types

Every endpoint configuration must be defined with a type. The type determines both which modules may be added to the configuration as well as how the configuration may be attached to a reserved domain or reserved address. The documentation for each module will list the configuration types it may be added to.

There are currently three types of endpoint configurations: `http`, `https`, and `tcp`.

### Attaching to Reserved Domains and Addresses

Endpoint configurations may be attached to any number of reserved domains or addresses. When the configuration is attached, that domain or address will start applying the configuration's modules to traffic that transits through any tunnels started on those domains or addresses.

Reserved domains have two endpoint configuration references: `http_endpoint_configuration_id` and `https_endpoint_configuration_id`. These govern how http and https traffic are handled, respectively. The type of configuration that you attach must be `http` and `https`, respectively, for those references.

Reserved addresses have a single endpoint configuration reference `endpoint_configuration_id`. This configuration reference must be of type `tcp`.

### Changes to HTTP Traffic

Traffic that is handled by endpoint configurations goes through a new code path in ngrok's edge servers. This new code path has a few subtle changes to how HTTP traffic is handled that are enumerated below:

##### Header Casing

HTTP headers the backend sees now have their capitalization canonicalized. The HTTP RFC defines this change as compatible. Previously,

    curl --header “foo-BAR: baz” foo.ngrok.io

resulted in the backend seeing

    foo-BAR: baz

now it sees:

    Foo-Bar: baz

##### Header Ordering

HTTP headers now may be reordered whereas ngrok previously never re-ordered headers. The HTTP RFC defines this behavior as compatible.

##### X-Forwarded-For

If an `X-Forwarded-For` header was supplied by the caller, ngrok now combines those values in a single header field. The RFC describing X-Forwarded-For describes this as the intended behavior. Previously,

    curl --header “X-Forwarded-For: 1.2.3.4” foo.ngrok.io

resulted in the backend seeing:

    X-Forwarded-For: 1.2.3.4
    X-Forwarded-For: 5.6.7.8

Now it sees:

    X-Forwarded-For: 1.2.3.4, 5.6.7.8

##### Stripped Hop-By-Hop Headers

ngrok used to pass through the following hop-by-hop headers. It will now strip them (and set its own values, if necessary).

*   `Keep-Alive`
*   `Proxy-Connection`
*   `Proxy-Authenticate`
*   `Proxy-Authorization`
*   `Trailer`
*   `Transfer-Encoding`
*   `Te`

### Endpoint Configuration Modules

### Circuit Breaker

Supported on types: http, https

Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed, allowing them time to recover back into a steady operational state. When the upstream server starts to fail requests at too high of a rate, the circuit is "opened".

The circuit breaker is an implementation of [Netflix's Hystrix circuit breaker specification](https://github.com/Netflix/Hystrix/wiki/How-it-Works).

If the upstream server responds with more than the threshold percentage of requests with 5XX status codes, the circuit breaker preemptively reject all subsequent requests at the ngrok edge with a 503 until the upstream server's error rate drops below the threshold percentage.

### Compression

Supported on types: http, https

The Compression module automatically compresses your responses between the http client and the ngrok edge which can make your websites load faster on low bandwidth networks.

If an HTTP request includes an `Accept-Encoding` header, HTTP responses will be automatically compressed and a `Content-Encoding` response header will be added.

If the response was already compressed by the upstream server, ngrok takes no action.

`gzip` and `deflate` encodings are supported.

### IP Policy

Supported on types: http, https, tcp

The IP Policy modules lets you restrict the allowed traffic to tunnel endpoints by explicitly allowing or denying a set of IPs that are permitted to access those endpoints.

Allow connections to the tunnel endpoint only if the source IP of the connection matches an IP or IP range in any of the specified IP Policies. If multiple policies are specified, a connection will be allowed if it matches an IP address in _any_ of the policies. Formally, the IP is checked against a union of all the IP policies.

### Mutual TLS Authentication

Supported on type: https

Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.

The Common Name of the client's TLS certificate is injected into the header `Ngrok-Mtls-Subject-Cn` that is sent to your application server. This allows you to identify the requesting client for purposes of group membership, permissioning, revocation checks, profile lookup, etc.

Root CAs must be specified in PEM format. You may specify multiple root CAs by concatenating them together.

### OAuth

Supported on type: https

The OAuth module enforces an OAuth authentication flow in front of any endpoint it is enabled on. Any HTTP client accessing an OAuth-protected endpoint will be redirected to a chosen identity provider (currently Google, Microsoft, Github or Facebook) for authentication. When they are redirected back to the protected endpoint, ngrok will check a series of authorization constraints that allow you to define who is authorized to access the resource by setting a list of email addresses, email domains and other requirements. If the user is authorized, their request will be forwarded through to the upstream server and ngrok's edge will set an HTTP cookie on their browser session to keep them logged in so that the authentication flow is not repeated.

Configuration, customization, and use of the OAuth module is documented in the [OAuth documentation section](#oauth).

### Request Headers

Supported on types: http, https

The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server.

Changes made to request headers will not be visible to other modules; they will only be seen by your upstream server.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](#http-headers) for more details.

### Response Headers

Supported on types: http, https

The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. This is especially useful for enforcing the use of security headers on all responses returned by your application.

Changes made to response headers will not be visible to other modules; they will only be seen by the client.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](#http-headers) for more details.

### TLS Termination

Supported on type: https

The TLS Termination module allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through _unterminated_, in which case the TLS traffic will need to be terminated by your application server (or by the ngrok agent).

If the TLS Termination module is not specified, the default behavior is to terminate all TLS traffic at the ngrok edge.

If the TLS Termination module is enabled and TLS termination has been disabled, then you must have the ngrok agent start a `tls` tunnel to receive traffic. Furthermore, if TLS termination is disabled, no other http or https modules (e.g. Compression, OAuth, etc) will be supported on this endpoint configuration.

If you update a configuration to change whether it terminates TLS traffic or not, all tunnels running with that configuration will immediately begin to fail requests. All tunnels started with that configuration will need to be stopped and then restarted with their protocol changed (either `https` -> `tls` or vice-versa.

### Webhook Verification

Supported on types: http, https

The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.

If ngrok can't verify a request as coming from the configured provider it will reject the request with a 403 status.

Events
------

Event Subscriptions allow you to send any event that happens in the ngrok platform to an external destination so that you can keep track of what happens in the system or trigger additional custom actions. You can subscribe to some or all of the events in the platform, and you can choose the specific fields you are interested in some high cardinality events.

If you are interested in configuring these event subscriptions programmatically, please see our [Event Subscription API](/docs/api#api-event-subscriptions).

### Event Sources

An Event Subscription sends events from selected Sources to all attached Destinations. Sources define which events from your account are sent. You can select one, multiple, or all events to be published to your destinations. Most sources are based on actions taken in the account, and are relatively low cardinality. The two exceptions are the \`http\_request\_completed.v0\` and the \`tcp\_connection\_closed.v0\` events. Those events fire when your endpoints are being accessed and depending on the amount of traffic you are seeing may result in large amounts of events being sent. To limit the number of events sent from these sources, see [event filters](#event-filters) in the next section.

#### Event Filters

Event filters allow you to limit the number of events that are sent to your destinations using Google's Common Expression Language (CEL). For example, if you want to only see requests to example.com, you could use the filter \`ev.server\_name.matches(".\*example\\\\.com")\` which would only match http requests that contain example.com in the host field. A list of fields for each event can be found in the [API documentation](/docs/api#events-sources-and-destinations). Some more filter examples:

*   Log requests to an endpoint that didn't use TLS:
    
                ev.server\_name.matches(".\*-your-org\\\\.ngrok\\\\.io") &&
                  ev.server\_port == 80
              
    
*   Log requests made by a specific user to an endpoint using basic auth:
    
                ev.server\_name.matches(".\*-your-org.ngrok.io") && \\
                  ev.basic\_auth.username == "someone" && \\
                  ev.basic\_auth.decision == "allow"
              
    
*   Log connections to a TCP endpoint:
    
                ev.server\_port == 1234 && ev.server\_name == "0.tcp.ngrok.io"
              
    

### Event Destinations

One or more Event Destinations can be specified for a subscription, which will tell ngrok where to send the event. We currently support the following event destinations:

*   AWS CloudWatch Logs
*   AWS Firehose
*   AWS S3 (via Firehose)
*   AWS Kinesis

Each destination requires a different setup. We have a helper script to automate setup but you can also configure these integrations via the AWS Console or a tool like Terraform. Once you've configured your destination, you can test it by sending a test event from the dashboard to make sure it is configured correctly.

IP Policies
-----------

IP policies are a reusable group of IPs or IP ranges (in CIDR blocks) that can be allowed or denied. They may be attached to endpoint traffic via Endpoint Configurations or attached to other traffic destinations like the API, dashboard or tunnel agents via IP Restrictions. IP Policy Endpoint Configuration Modules and IP Restrictions allow you to attach one or more IP policies. If multiple IP policies are attached, a connection will be allowed only if its source IP matches at least one policy with an 'allow' action and does not match any policy with a 'deny' action.

### IP Policy Rules

Every IP policy consists of zero or more IP policy rules. Each rule specifies an IP address or IP address range in CIDR notation. Both IPv4 and IPv6 address notations are supported. An IP policy with no rules is valid and will match no IPs.

TLS Certificates
----------------

ngrok supports uploading your own TLS certificates which we will use to terminate traffic to a given reserved domain at the ngrok edge. You may wish to use this functionality in addition to our automatically provisioned certificates if you are using an EV cert or provisioning certificates from your own certificate authority. Uploading a certificate will not change any traffic, you must then _attach_ the certificate to a reserved domain by setting the `certificate_id` property on the reserved domain with the ID of the certificate you'd like to use for TLS termination.

### Certificate Bundles

When uploading a new certificate to ngrok via the API, the `certificate_pem` field expects a certificate bundle of all certificates necessary to establish a chain of trust to a trusted root certificate authority. Many TLS certificate vendors will provide you with a constructed certificate bundle, but some will return the leaf certificate and the intermediate certificates separately and you must concatenate them to construct the bundle yourself.

Certificate bundles are a series of PEM-encoded X.509 certificates that have been concatenated together in a specific order. A bundle will look like the following:

    -----BEGIN CERTIFICATE-----
    ...
    -----END CERTIFICATE-----
    -----BEGIN CERTIFICATE-----
    ...
    -----END CERTIFICATE-----
    -----BEGIN CERTIFICATE-----
    ...
    -----END CERTIFICATE-----
          

The first certificate in the bundle must be the leaf certificate. You can think of the leaf certificate as the one which is signed for your domain and [the private key](#tls-certificates-key) you will upload.

After the leaf are the intermediates certificates, if any. Each intermediate signs the certificate preceding it in the bundle. As an example, the first intermediate will have signed the leaf, and that signature is part of the leaf certificate itself. The final certificate is signed by the root certificate. You may also included the root certificate in the bundle as well, but it is not necessary or common practice to do so.

### Private Keys

ngrok accepts the following formats for the `private_key_pem` field:

*   RSA, in either PKCS#1 or PKCS#8 form.
*   ECDSA, in either SEC 1 or PKCS#8 form.
*   Ed25519, in PKCS#8 form.

All of the above (PKCS#1, PKCS#8, and SEC 1) are represented with ASN.1 DER (a binary format), encoded as PEM.

**ngrok will not accept any private keys that are encrypted (e.g. with DES).**.

OAuth Authentication
--------------------

**This documentation assumes familiarity with [OAuth 2.0 workflows and terminology](https://tools.ietf.org/html/rfc6749).**

OAuth authentication uses configurable constraints to restrict endpoint access to only authorized users. Upstream servers behind an OAuth-protected endpoint can safely assume that requests are from users authenticated with the provider and authorized to use the endpoint.

### Google

#### Creating your own application

Step-by-step instructions below follow Google's documentation on [setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en) for a web application.

##### Build the consent screen

1.  Create or select a project on the [Google Cloud Platform Console](https://console.cloud.google.com).
2.  Navigate to the project's [OAuth consent screen](https://console.developers.google.com/apis/credentials/consent).
3.  Select whether your application is an [internal or external app](https://support.google.com/cloud/answer/6158849?hl=en#public-and-internal).
4.  Fill out the application name and support email.
5.  Add additional scopes required by your application, saving the full scope URI for later.
    *   [Possible scope URIs](https://developers.google.com/identity/protocols/oauth2/scopes)
    .
6.  Ensure that the `email` and `profile` scopes are still selected.
7.  Under Authorized domains, add `ngrok.com` and your application homepage domain.
8.  Add links to your application homepage and privacy policy. The final consent screen should resemble: 
    [![](https://ngrok.com/static/img/howto/oauth/1-google-consent_screen_complete.png)](https://ngrok.com/static/img/howto/oauth/1-google-consent_screen_complete.png)
9.  Save the application.
    *   Applications that require verification cannot complete the consent screen and are not supported by ngrok.

##### Create credentials for ngrok

1.  Navigate to [Credentials](https://console.cloud.google.com/apis/credentials) for your project.
2.  Select "Create credentials" from the top menu and select "OAuth Client ID".
3.  Choose "Web application" from the list of application types.
4.  Name your secret, then set "Authorized Redirect URIs" to `https://oauth.ngrok.com/oauth2/callback`. The final credentials form should resemble: 
    [![](https://ngrok.com/static/img/howto/oauth/2-google-create_client_id.png)](https://ngrok.com/static/img/howto/oauth/2-google-create_client_id.png)
5.  Securely store the Client ID and secret from the final screen: 
    [![](https://ngrok.com/static/img/howto/oauth/3-google-client_id_and_secret.png)](https://ngrok.com/static/img/howto/oauth/3-google-client_id_and_secret.png)

##### Update your endpoint configuration

1.  Return to the ngrok dashboard and create or edit an OAuth endpoint configuration module.
2.  Choose to use your own application with Google as the provider.
3.  Include the client ID, secret, and scopes configured in your application.
4.  Add the following scopes to your application if they are not already present:
    *   `https://www.googleapis.com/auth/userinfo.profile`
    *   `https://www.googleapis.com/auth/userinfo.email`

##### Additional application setup information

*   [Google OAuth 2.0 Web Server](https://developers.google.com/identity/protocols/oauth2/web-server) (prerequisite steps)
*   [GCP Help: Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en)
*   [Google OAuth 2.0 workflow](https://developers.google.com/identity/protocols/oauth2)

#### Headers provided by ngrok

ngrok strips the following headers from authorized requests and sets them with data from Google:

`ngrok-auth-user-id`

Numeric ID of the authorized user.

`ngrok-auth-user-name`

Full name of the authorized user.

`ngrok-auth-email`

Authorized user's primary email address.

`ngrok-oauth-access-token`

**Custom applications only:** the user's OAuth access token. It is valid for at least 5 seconds.

### Microsoft

#### Creating your own application

Step-by-step instructions below closely follow [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) to create a new application for ngrok within the Azure portal.

##### Register an application

1.  Sign-in to the [Azure portal](https://portal.azure.com/) then select or [create a tenant](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) for your application.
2.  Search for "Azure Active Directory" and select it.
3.  Select "App registrations" on the left hand navigation.
4.  Select "New registration" at the top.
5.  Enter a name for your application.
6.  ngrok does not support [**single tenant** applications](https://docs.microsoft.com/en-us/azure/active-directory/develop/single-and-multi-tenant-apps). Choose supported account types from:
    *   Accounts in any organizational directory (Any Azure AD directory - Multitenant)
    *   Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)
7.  Choose a "Web" redirect URI and enter `https://oauth.ngrok.com/oauth2/callback`.
8.  Register your application. The final form should resemble: 
    [![](https://ngrok.com/static/img/howto/oauth/1-microsoft-create_app.png)](https://ngrok.com/static/img/howto/oauth/1-microsoft-create_app.png)

##### Configure your application

1.  When viewing your application, choose "Overview" on the left hand navigation.
2.  Store the "Application (client) ID" in the top information section for later. 
    [![](https://ngrok.com/static/img/howto/oauth/2-microsoft-app_overview.png)](https://ngrok.com/static/img/howto/oauth/2-microsoft-app_overview.png)
3.  Select "API permissions" on the left hand navigation.
4.  Add additional scopes that your application requires and store them for later.
    *   Scopes which require an application review by Microsoft are unsupported.
    *   Scopes that [require admin consent](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#admin-restricted-permissions) prevent tenants' users from authorizing until consent is granted.
5.  Ensure `User.Read` or a more permissive scope (e.g. `User.Read.All`) is configured for ngrok. Example minimal configuration: 
    [![](https://ngrok.com/static/img/howto/oauth/3-microsoft-api_permissions.png)](https://ngrok.com/static/img/howto/oauth/3-microsoft-api_permissions.png)
6.  Choose "Certificates and Secrets" on the left hand navigation.
7.  Select "New Client Secret" at the bottom, name the secret, set an expiration, and hit create.
8.  Creation is asynchronous. When complete, save the secret from the "Value" column (blurred below) for later: 
    [![](https://ngrok.com/static/img/howto/oauth/4-microsoft-client_secret.png)](https://ngrok.com/static/img/howto/oauth/4-microsoft-client_secret.png)

##### Update your endpoint configuration

1.  Return to the ngrok dashboard and create or edit an OAuth endpoint configuration module.
2.  Choose to use your own application with Microsoft as the provider.
3.  Include the scopes, client ID, and client secret for your application.

##### Additional application setup information

*   [Creating an Azure AD tenant](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant)
*   [Permissions and consent](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#admin-restricted-permissions) (restricted permissions)
*   [Graph API User object properties](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions#reprompt) (id, displayName, and mail/userPrincipalName)

#### Headers provided by ngrok

ngrok strips the following headers from authorized requests and sets them with data from Microsoft:

`ngrok-auth-user-id`

Unique user identifier from the user's [directoryObject.](https://docs.microsoft.com/en-us/graph/api/resources/directoryobject?view=graph-rest-1.0)

`ngrok-auth-user-name`

User's [display name](https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#properties) in the address book. Typically full name with middle initial.

`ngrok-auth-email`

User's email address, from the user's [mail attribute](https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#properties) with fallback to [userPrincipalName](https://docs.microsoft.com/en-us/windows/win32/ad/naming-properties#userprincipalname) when empty.

`ngrok-oauth-access-token`

**Custom applications only:** the user's OAuth access token. It is valid for at least 5 seconds.

### GitHub

#### Creating your own OAuth application

1.  Follow [GitHub's documentation](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) until the final step of submitting the registration form.
2.  Set the Authorization callback URL to `https://oauth.ngrok.com/oauth2/callback`.
3.  Submit the form. A working example registration: 
    [![](https://ngrok.com/static/img/howto/oauth/1-github-register.png)](https://ngrok.com/static/img/howto/oauth/1-github-register.png)
4.  Save the client ID and client secret from the application overview: 
    [![](https://ngrok.com/static/img/howto/oauth/2-github-client_id_and_secret.png)](https://ngrok.com/static/img/howto/oauth/2-github-client_id_and_secret.png)
5.  Return to the ngrok dashboard and create or edit an OAuth endpoint configuration module.
6.  Choose to use your own application with GitHub as the provider.
7.  Include the client ID and secret from earlier.
8.  Add any scopes your application requires.
    *   Include the `read:user` scope (or more permissive, like `user`) for ngrok.
9.  Add any team or organization constraints by the their mention handle(s), excluding the `@` prefix.
    *   For example, the [ngrok](https://github.com/ngrok) organization's mention handle is `@ngrok`, so the organization constraint would be `ngrok`. Similarly, the `@ngrok/developers` team would be matched by the constraint `ngrok/developers`.
    *   If a constraint is specified, the `read:org` scope is required. A more permissive scope, such as `org`, also works.
    *   Organizations must allow [third-party access](#oauth-github-org-and-team) to your app.

#### Headers provided by ngrok

ngrok strips the following headers from authorized requests and sets them with data from GitHub:

`ngrok-auth-user-id`

Unique numeric ID of the authorized user.

`ngrok-auth-user-name`

Display name of the authorized user (e.g. "John Smith").

`ngrok-auth-email`

Public profile email address of the authorized user.

`ngrok-auth-github-user-id`

The username of the authorized user.

`ngrok-auth-github-organization`

**Only when a team or organization constraint matches:** the [first matching](#oauth-github-header-ordering) GitHub organization's mention handle (e.g "coreutils").

`ngrok-auth-github-team`

**Only when a team constraint matches:** the [first matching](#oauth-github-header-ordering) GitHub team mention handle (e.g "coreutils/contributors").

`ngrok-oauth-access-token`

**Custom applications only:** the user's OAuth access token. It is valid for at least 5 seconds.

#### Using Organization and Teams

To authorize users based on organization or team membership, the organization must allow third party access. There are multiple ways to grant access:

*   Organizations may allow unrestricted third-party access from settings.
*   Owners can grant access to an application during authorization.
*   Members can request access as part of authorization.
*   Members can [request access from settings.](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps)

The ngrok managed application can authorize users based on organization or team. **For organizations concerned about membership privacy, your own application should always be used**. When granting third-party access to the managed application, anyone using the managed application may constrain based on your organization's membership.

#### Header presence and constraint ordering

Organization and team headers are present only when an organization or team constraint matches. For example, an endpoint constrained solely on the `ngrok` organization will always have authorized users with the `ngrok` organization header. An endpoint without any organization or team constraints will receive no organization or team header.

ngrok authorizes against users' first 200 memberships of each constraint in chronological order of the team or organization's creation. Headers are filled from the first user data match in order:

1.  From any team membership, check the parent organization.
2.  Check team membership.
3.  Check organization membership.

### Facebook

#### Creating your own application

##### Register an application

For additional assistance, see the [Facebook app registration](https://developers.facebook.com/docs/apps#register) documentation.

1.  Visit the [App Dashboard](https://developers.facebook.com/apps/), log in, and convert your account into a developer account if necessary.
2.  Select "Add a New App" or "Create App."
3.  Choose a user-visible name and contact email.
4.  Submit the form. A valid example app: 
    [![](https://ngrok.com/static/img/howto/oauth/1-facebook-register.png)](https://ngrok.com/static/img/howto/oauth/1-facebook-register.png)

##### Configure your application

1.  After creation, you should see a list of products to add. If you don't, view your application from the dashboard and scroll down to "Add a product." 
    [![](https://ngrok.com/static/img/howto/oauth/2-facebook-add_product.png)](https://ngrok.com/static/img/howto/oauth/2-facebook-add_product.png)
2.  Select "Set Up" for Facebook Login.
3.  On the left hand navigation, select Facebook Login then choose "Settings" below it.
4.  Add to "Valid OAuth Redirect URI" `https://oauth.ngrok.com/oauth2/callback`
5.  Save the Facebook Login settings page. Final configuration should match: 
    [![](https://ngrok.com/static/img/howto/oauth/3-facebook-login_settings.png)](https://ngrok.com/static/img/howto/oauth/3-facebook-login_settings.png)
6.  Select Settings on the left hand navigation, then choose advanced.
7.  Fill out additional settings for your application.
    *   ngrok does not support Server IP allowlisting.
8.  Enable "Require App Secret". See [documentation](https://developers.facebook.com/docs/graph-api/securing-requests/#appsecret_proof) for how to call Facebook Graph API with this feature.
9.  Save settings. A minimally complete security section of advanced settings: 
    [![](https://ngrok.com/static/img/howto/oauth/4-facebook-security.png)](https://ngrok.com/static/img/howto/oauth/4-facebook-security.png)
10.  Visit basic settings on the left hand navigation.
11.  At the top, save your App ID and App Secret for later.
12.  Fill out the privacy policy URL. This URL must accessible when entered for verification.
13.  Select a category for your application.
14.  Hit save changes. A minimally complete basic settings: 
    [![](https://ngrok.com/static/img/howto/oauth/5-facebook-basic_settings.png)](https://ngrok.com/static/img/howto/oauth/5-facebook-basic_settings.png)
15.  Select the toggle for "In development" at the top of the page and confirm switching to live mode.
16.  Your application should now show as live: 
    [![](https://ngrok.com/static/img/howto/oauth/6-facebook-live.png)](https://ngrok.com/static/img/howto/oauth/6-facebook-live.png)

##### Update your endpoint configuration

1.  Return to the ngrok dashboard and create or edit an OAuth endpoint configuration module.
2.  Choose to use your own application with Facebook as the provider.
3.  Include the app id and app secret that were stored earlier.
4.  Add [any scopes](https://developers.facebook.com/docs/apps/review/login-permissions) required by your application.
    *   Scopes which require a Facebook [app review](https://developers.facebook.com/docs/apps/review/#app-review) are unsupported.
    *   ngrok will enforce that users [accept all permissions](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions#reprompt) before completing authorization.
5.  Add the `email` scope if it is not already present.

##### Additional application setup information

*   [Handling declined permissions](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions)
*   [App review](https://developers.facebook.com/docs/apps/review)
*   [App secret proof](https://developers.facebook.com/docs/graph-api/securing-requests/#appsecret_proof)

#### Headers provided by ngrok

ngrok strips the following headers from authorized requests and sets them with [data from Facebook's user API](https://developers.facebook.com/docs/graph-api/reference/user):

`ngrok-auth-user-id`

Unique, per-app numeric user ID. From `id` on the user resource.

`ngrok-auth-user-name`

User's full name from `name` on the user resource.

`ngrok-auth-email`

User's primary email address, from `email` on the user resource.

`ngrok-oauth-access-token`

**Custom applications only:** the user's OAuth access token. It is valid for at least 5 seconds.

#### User permission revocation

Facebook allows revocation of any permission as part of the authorization flow. ngrok will enforce that users initially grant all configured permissions. However, at any time after endpoint authorization, users may selectively revoke permissions. If your application requires more than the `default` or `email` scope, you must follow [Facebook's rules](https://developers.facebook.com/docs/facebook-login/handling-declined-permissions#reprompt) for handling revoked permissions without violating terms of use.

### Managed Application Limitations

Managed OAuth applications are owned by ngrok and intended for quick use or testing. We highly recommend that you bring your own application. There are limitations on managed application since since many endpoints share them:

*   User access tokens are not provided.
*   Custom scopes are not allowed.
*   At least 1 email address or 1 email domain must be specified.
*   Common email domains are not allowed (e.g. gmail.com, yahoo.com).

### Request Modifications

#### Paths

Upstream servers behind endpoints protected by OAuth should not expect to receive any paths beginning with `/oauth2/`. Although more paths may be added, the following paths are currently used by ngrok: {# brodes: /oauth2/test doesn't seem like something to document officially. I added the /oauth2/ disclaimer above. #}

`/oauth2/callback`

Creates the OAuth session as part of forwarded provider callbacks.

`/oauth2/authorize`

Initiates [capture](#oauth-capture) with a capture URI of `/`. This allows easily clearing the session on an error and forcing reauthorization with the provider.

#### Cookies

ngrok uses cookies to secure the authorization workflow, store user credentials, and cache authorized user data for headers. Cookie values should be considered opaque and not modified. Cookies names are prefixed with `ngrok.` by default. ngrok may overwrite, modify, hide, or delete prefixed cookies with the names below as part of every request: {# brodes: /oauth2/test doesn't seem like something to document officially. I added the /oauth2/ disclaimer above. #}

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

### Detailed Auth Workflow

OAuth authentication is best separated into a three phase workflow: capture, callback, and refresh.

#### Capture

Requests were not previously authorized enter the capture phase and begin OAuth2. ngrok redirects the user to the provider with a secret state. The state is used to store the initial request URI, or _capture URI_, with additional security data. State expires 30 minutes from capture and will allow users to retry on expiration, discarding the original capture URI in order to prevent replays.

Methods other than `GET` also trigger capture; discarding the request body and method in the process. After successful authentication and authorization, users are redirected with a 302 and perform a `GET` against the capture URI.

#### Callback

Callback occurs as the final user-facing phase. There are up to three redirects made: the provider initiated redirect to the _common callback forwarder_, a redirect back to the initial domain, and a final redirect to the initial capture URI.

As endpoint configurations may be used across many domains, the common callback forwarder serves as a secure proxy back to the originating domain. Except in cases where the state query parameter was modified or discarded, this redirect is transparent to the user.

On the originating domain at `/oauth2/callback`, the request state is verified, errors are handled, and OAuth is completed. Errors from the provider are displayed to the user with instructions for how to continue. If no errors occur, a session is written to the _session cookie_, by default `ngrok.session`, and users are redirected to the capture URI.

#### Refresh

Users that complete provider authorization always complete at least one data refresh. Afterward, this phase is repeated based on authorization check interval. Refresh populates headers and performs authorization with data from the provider.

If endpoint authorization fails with data from a refresh, granted OAuth credentials from the provider are retained. Unauthorized users are notified to contact the owner of the application to request access. Subsequent requests repeat the refresh phase until the maximum session lifetime is reached, the grant expires, or endpoint authorization is updated to allow them.

HTTP Headers
------------

The Request Headers and Response Headers modules use the same semantics for header additions and removals.

Headers to add are specified as key/value pairs. Headers to remove are specified as a list of header names. Header names for both additions and removals will be canonicalized per the [Changes to HTTP Traffic](#endpoint-configuration-http-changes).

If an added header already exists, the header will appear multiple times; the original header value will not be overwritten.

If a header is specified for both addition and removal, the original value will first be removed and the new value used in its place.

### Header Templates

Variables can be interpolated into a header value using [JSONPath](https://goessner.net/articles/JsonPath/) expressions surrounded by `${}` syntax. For example, using `${.ngrok.request_id}` as a header value will cause it to be filled in with the ngrok-generated Request ID.

At this time, the object used for variable lookup contains the following values:

    {
        "ngrok": {
          // ngrok-generated Request Id
          "request_id": "...",
          // original client IP
          "client_ip": "...",
          "geo": {
            // two-letter ISO country code based on the client IP
            "country_code": "...",
            // approximate latitude based on the client IP
            "latitude": "...",
            // approximate longitude based on the client IP
            "longitude": "...",
            // the radius in kilometers around the latitude and longitude
            // where the client IP is likely to originate from
            "lat_long_radius_km": "..."
          }
        }
    } 

The ngrok.com HTTP API
----------------------

We expose an HTTP API that grants programmatic access to all of ngrok's resources.

A basic understanding of ngrok and its features is strongly encouraged before using this API: [the ngrok.com HTTP API](/docs/api).

Errors
------

When something goes wrong, we report an error code: in the agent, our REST API, or at our edge.

You can see a comprehensive list of those errors [in our error index](/docs/errors).