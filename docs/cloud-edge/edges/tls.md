---
sidebar_position: 3
---

# TLS Edge

---

A TLS edge terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate.

### Compatible Clients

TLS tunnels work by inspecting the data present in the Server Name Information (SNI) extension on incoming TLS connections. Not all clients that initiate TLS connections support setting the SNI extension data. These clients will not work properly with ngrok's TLS tunnels. Fortunately, nearly all modern browsers use SNI. Some modern software libraries do not though. The following list of clients do not support SNI and will not work with TLS tunnels:

- Microsoft Internet Explorer 6.0
- Microsoft Internet Explorer 7 & 8 on Windows XP or earlier
- Native browser on Android 2.X
- Java <=1.6
- [Python 2.X, 3.0, 3.1 if required modules are not installed](https://stackoverflow.com/questions/18578439/using-requests-with-tls-doesnt-give-sni-support/18579484#18579484)

A more complete list can be found on [the Server Name Indication page on Wikipedia](https://en.wikipedia.org/wiki/Server_Name_Indication#No_support)

### TLS Edge Modules

| Module                                                 | Description                                                                                                                                                                                                     |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Mutual TLS](/cloud-edge/modules/mutual-tls)           | Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload. |
| [TLS](/cloud-edge/modules/tls-termination)             | Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated.                                                                                      |
| [IP Restrictions](/cloud-edge/modules/ip-restrictions) | IP Restrictions allow you to attach one or more IP policies to the edge.                                                                                                                                        |
