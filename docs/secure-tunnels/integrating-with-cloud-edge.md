---
sidebar_position: 2
---

# Integrating with Cloud Edge
--------------------

ngrok Secure Tunnels are designed to integrate seamlessly into your ngrok Cloud Edge. Each edge has one or more backends which determine how to handle requests to that edge. The Tunnel Group Backend is responsible for forwarding requests to one or more tunnels in the group. A group is created based on a set of labels, where every tunnel with the same set of labels will have requests load balanced across them.

### Labeled Tunnels

Labeled tunnels are just another tunnel type in the ngrok agent, similar to HTTP or TCP tunnels. When you create a new labeled tunnel, you define the set of labels that identify that tunnel and/or the device it's running on. When you create an edge that includes a tunnel group backend, and configure the tunnel group to look for tunnels matching specific labels, it will find and route traffic to your labeled tunnel.

See our [ngrok agent reference for Labeled Tunnels](/docs/ngrok-agent/ngrok#command-ngrok-tunnel) for a complete set of options and examples.
