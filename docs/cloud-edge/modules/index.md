---
sidebar_position: 5
---

# Modules
----------------

Modules are an ngrok edge component that allows you to change the behavior of the traffic flowing through HTTP, TCP, and TLS edges to add security, observability, encryption, and performance.

| Module | Description | Edges Supported |
| --- | --- | --- |
| [Circuit Breaker](circuit-breaker) | Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed. | HTTPS |
| [Compression](compression) | If an HTTP request includes an Accept-Encoding header, HTTP responses will be automatically compressed and a Content-Encoding response header will be added. | HTTPS |
| [IP Restrictions](ip-restrictions) | IP Restrictions allow you to attach one or more IP policies to the route. | HTTPS, TLS, TCP |
| [Mutual TLS](mutual-tls) | Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload. | HTTPS, TLS |
| [OAuth](oauth) | The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on. | HTTPS |
| [OpenID Connect (OIDC)](openid-connect) | This module restricts endpoint access to only users authorized by a OpenID Identity Provider. | HTTPS |
| [Request Headers](request-headers) | The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server. | HTTPS |
| [Response Headers](response-headers) | The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. | HTTPS |
| [SAML](saml) | This module restricts endpoint access to only users authorized by a SAML IdP. | HTTPS |
| [TLS Termination](tls-termination) | Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated. | HTTPS, TLS |
| [Webhook Verification](webhook) | The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or GitHub. | HTTPS |