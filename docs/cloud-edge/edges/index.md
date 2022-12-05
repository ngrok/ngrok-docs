---
sidebar_position: 4
---

# Edges
----------------

Edges allow you to configure endpoints that connect your services to the world. Define edges to serve HTTPS, TCP, or TLS traffic and use modules to secure and manipulate network traffic.

## Types of Edges

There are three types of edges you can create that all serve different purposes.

### [HTTPS Edge](https)

An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code.

[Learn More >](https)

### [TCP Edge](tcp)

A TCP edge can be used to share any non-HTTP protocols with the world. It's a generic edge that you can use to communicate with Industrial IoT systems, devices, and servers with SSH, VNC, RDP, SQL, or any other networked protocol.

[Learn More >](tcp)

### [TLS Edge](tls)

A TLS edge terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate.

[Learn More >](tls)

## Creating an Edge

You can create an edge through the ngrok Dashboard by navigating to Endpoints > Edges. Follow the prompts to get set up with your new edge in just a few clicks. Once you have configured the edge through the dashboard, you can use the instructions to start your ngrok agent to serve traffic.

### Backends

Each edge contains one or more backends, which define how to handle the traffic in that edge. There are different types of backends depending on the behavior you desire for the edge.

*   Failover - Failover backends allow you to specify multiple backends to try in a specific order. When you define a failover backend, you provide an ordered list of backends to try.
*   Tunnel Group - Tunnel group backends allow you to define a set of ngrok tunnels that can respond to requests. The requests to a tunnel group backend will load balance across all active tunnels in the group. These backends use a set of labels to identify the tunnels that should be used to serve these requests. You can find examples for starting a tunnel in the ngrok Dashboard.
*   Weighted - Weighted backends will route traffic based on percentage to multiple backends. This can be useful when rolling out updates to existing services, where you want to send a small percentage to the new service for testing.
*   HTTP Response - An HTTP Response backend allows you to specify a static response to serve with a specific status code. This is useful for defining error pages such as 404 when used as part of a failover backend.

### Tunnel Group Labels

Tunnel Group Backends are the backend to use when you are sharing a local service with an ngrok agent. These backends use a set of customizable labels in order to identify the correct agent to forward traffic to. You can configure as many ngrok agents as you like to be part of the same tunnel group, which will then load balance the requests to this backend across the tunnels.

For more examples of configuring your ngrok agent to use Labeled Tunnels, see our [ngrok agent documentation for Labeled Tunnels](//ngrok.com/docs/ngrok-agent/ngrok#ngrok-tunnel).
