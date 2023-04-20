---
sidebar_position: 1
---

# HTTPS Edge
----------------

An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.

### HTTPS Edge Routes

The HTTPS edges allows you to define one or more routes, each with their own custom set of modules. Each route is defined using a path selector, which will match a path on the request to that endpoint. This can be useful for adding OAuth to specific areas of your website, or stitching multiple services together into a single website. Routes can share the same backend, or you can use a different backend for each route.

### HTTPS Edge Modules

Modules can be added to each route of an HTTPS edge to change the behavior of the traffic flowing through that edge. Here are the available modules for the HTTPS edge.

| Module | Description |
| --- | --- |
| [Mutual TLS](/cloud-edge/modules/mutual-tls) | Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload. |
| [TLS](/cloud-edge/modules/tls-termination) | Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated. |
| [Circuit Breaker](/cloud-edge/modules/circuit-breaker) | Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed. |
| [Compression](/cloud-edge/modules/compression) | If an HTTP request includes an Accept-Encoding header, HTTP responses will be automatically compressed and a Content-Encoding response header will be added. |
| [IP Restrictions](/cloud-edge/modules/ip-restrictions) | IP Restrictions allow you to attach one or more IP policies to the route. |
| [OAuth](/cloud-edge/modules/oauth) | The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on. |
| [OpenID Connect (OIDC)](/cloud-edge/modules/openid-connect) | This module restricts endpoint access to only users authorized by a OpenID Identity Provider. |
| [Request Headers](/cloud-edge/modules/request-headers) | The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server. |
| [Response Headers](/cloud-edge/modules/response-headers) | The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. |
| [SAML](/cloud-edge/modules/saml) | This module restricts endpoint access to only users authorized by a SAML IdP. |
| [Webhook Verification](/cloud-edge/modules/webhook) | The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or GitHub. |
