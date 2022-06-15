---
sidebar_position: 1
description: An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.
---

# HTTPS Edges
----------------

An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.

### HTTPS Edge Routes

The HTTPS edges allows you to define one or more routes, each with their own custom set of modules. Each route is defined using a path selector, which will match a path on the request to that endpoint. This can be useful for adding OAuth to specific areas of your website, or stitching multiple services together into a single website. Routes can share the same backend, or you can use a different backend for each route.

### HTTPS Edge Modules

Modules can be added to each route of an HTTPS edge to change the behavior of the traffic flowing through that edge. Here are the available modules for the HTTPS edge.

| Module | Description |
| --- | --- |
| [Mutual TLS](#mutual-tls) | Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload. |
| [TLS](#tls-termination) | Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated. |
| [Circuit Breaker](#circuit-breaker) | Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed. |
| [Compression](#compression) | If an HTTP request includes an Accept-Encoding header, HTTP responses will be automatically compressed and a Content-Encoding response header will be added. |
| [IP Restrictions](#ip-restrictions) | IP Restrictions allow you to attach one or more IP policies to the route. |
| [OAuth](#oauth) | The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on. |
| [OpenID Connect (OIDC)](#openid-connect-oidc) | This module restricts endpoint access to only users authorized by a OpenID Identity Provider. |
| [Request Headers](#request-headers) | The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server. |
| [Response Headers](#response-headers) | The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. |
| [SAML](#saml) | This module restricts endpoint access to only users authorized by a SAML IdP. |
| [Webhook Verification](#webhook-verification) | The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github. |

## TCP Edge

A TCP edge can be used to share any non-HTTP protocols with the world. It's a generic edge that you can use to send SSH, VNC, RDP, SQL, or any other networked protocol.

### TCP Edge Modules

Modules can be added to a TCP edge to restrict traffic flowing through that edge. Here are the available modules for the TCP edge.

| Module | Description |
| --- | --- |
| [IP Restrictions](#ip-restrictions) | IP Restrictions allow you to attach one or more IP policies to the edge. |

## TLS Edge

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

| Module | Description |
| --- | --- |
| [Mutual TLS](#mutual-tls) | Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload. |
| [TLS](#tls-termination) | Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated. |
| [IP Restrictions](#ip-restrictions) | IP Restrictions allow you to attach one or more IP policies to the edge. |
