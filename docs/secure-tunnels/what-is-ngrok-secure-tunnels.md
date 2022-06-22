---
sidebar_position: 1
---

# What are ngrok Secure Tunnels?
--------------------

ngrok Secure Tunnels allow you to instantly open access to remote systems without touching any of your network settings or opening any ports on your router. This means you get a secure, reliable tunnel for your developer box, IoT device, or just about anything that has access to the internet.

Using ngrok Secure Tunnels means that you can treat every device as being local, even if it's on the other side of the globe.

## How secure tunnels works

ngrok Secure Tunnels work by using a locally installed ngrok agent to establish a connection to the ngrok service. Once the connection is established, you get a public endpoint that you or others can use to access your local service.

When a user hits the public ngrok endpoint, the ngrok edge figures out where to route the request to and forwards it over an encrypted connection to the locally running ngrok agent. From there, the local ngrok agent takes care of sending traffic to your upstream service. The communication between the ngrok edge and agent is secure and encrypted. Traffic from the user to the ngrok edge, and from the ngrok agent to the upstream service rely on the protocol you are using for encryption. For protocols that support end to end encryption using TLS, we provide a [TLS tunnel](/docs/secure-tunnels#tls-tunnels) option.
