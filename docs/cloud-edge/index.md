---
sidebar_position: 1
title: What is ngrok Cloud Edge?
---

# ngrok Cloud Edge
----------------

## What is ngrok Cloud Edge?

ngrok Cloud Edges allow you to quickly make your service available on the internet. Each edge has its own set of domains or TCP addresses, and its own set of modules. A module allows you to secure, protect, or manipulate the traffic going through that edge to your service.

## How ngrok handles HTTP and TLS Traffic

The ngrok Cloud Edge types are HTTPS, TLS, and TCP. ngrok Cloud Edges do not support HTTP traffic. You will need to use the HTTP Tunnel from the ngrok agent for that.

### Terminating TLS connections

ngrok provides configurable TLS termination options. By default, TLS terminates at the ngrok Cloud Edge, however, you can forward the TLS traffic through un-terminated. Pass-through TLS traffic will need to be terminated by your application server (or by the ngrok agent). For more information check out the TLS Edge.

![ngrok TLS termination options](/img/docs/ngrok-tls-termination.png)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```