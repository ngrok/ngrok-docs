---
sidebar_position: 1
title: What are ngrok Secure Tunnels?
---

# ngrok Secure Tunnels
--------------------

ngrok Secure Tunnels allow you to instantly open access to remote systems without touching any of your network settings or opening any ports on your router. This means you get a secure, reliable tunnel for your developer box, IoT device, or just about anything that has access to the internet.

Using ngrok Secure Tunnels means that you can treat every device as being local, even if it's on the other side of the globe.

## How secure tunnels works

ngrok Secure Tunnels work by using a locally installed ngrok agent to establish a connection to the ngrok service. Once the connection is established, you get a public endpoint that you or others can use to access your local service.

When a user hits the public ngrok endpoint, the ngrok edge figures out where to route the request to and forwards it over an encrypted connection to the locally running ngrok agent. From there, the local ngrok agent takes care of sending traffic to your upstream service. The communication between the ngrok edge and agent is secure and encrypted. Traffic from the user to the ngrok edge, and from the ngrok agent to the upstream service rely on the protocol you are using for encryption. For protocols that support end to end encryption using TLS, we provide a [TLS tunnel](/secure-tunnels/tunnels/tls-tunnels) option.

## Integrating with Cloud Edge

ngrok Secure Tunnels are designed to integrate seamlessly into your ngrok Cloud Edge. Each edge has one or more backends which determine how to handle requests to that edge. The Tunnel Group Backend is responsible for forwarding requests to one or more tunnels in the group. A group is created based on a set of labels, where every tunnel with the same set of labels will have requests load balanced across them.

### Labeled Tunnels

Labeled tunnels are just another tunnel type in the ngrok agent, similar to HTTP or TCP tunnels. When you create a new labeled tunnel, you define the set of labels that identify that tunnel and/or the device it's running on. When you create an edge that includes a tunnel group backend, and configure the tunnel group to look for tunnels matching specific labels, it will find and route traffic to your labeled tunnel.

See our [ngrok agent reference for Labeled Tunnels](/ngrok-agent/ngrok#ngrok-tunnel) for a complete set of options and examples.
