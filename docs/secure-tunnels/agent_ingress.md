---
sidebar_position: 4
---

# Agent ingress
--------------------

Agent ingress refers to the specific URL that the ngrok agent attempts to connect through to send requests. By default, that ingress URL is `tunnel.ngrok-agent.com:443` but it can be customized with your own custom ingress URL if needed.

You can do this by adding the [`server_addr`](/ngrok-agent/config#server-addr) option to the ngrok configuration file. Setting up your own custom domain for agent ingress involves changing your nameservers for the domain to allow ngrok to manage though routes. You can configure this yourself in the [ngrok Dashboard](https://dashboard.ngrok.com/tunnels/ingress). Once this process is completed, you will configure the agent to connect to `server_addr: tunnel.[region].ingress.example.com:443` assuming you had registered `ingress.example.com` as your custom ingress URL.
