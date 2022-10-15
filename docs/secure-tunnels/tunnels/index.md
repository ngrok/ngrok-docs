---
sidebar_position: 2
---

# ngrok Tunnels
--------------------

ngrok supports different types of tunnels — with different protocols, the use of agents, and features available — for enabling access to remote systems:

### [HTTP Tunnels](http-tunnels)

ngrok HTTP tunnels allow you to route HTTP protocols quickly and easily. These include websites, RESTful APIs, web servers, websockets, and much more.

Starting an HTTP tunnel is a easy as `ngrok http 80`, or whatever local port your service is running on. For a full list of options for starting HTTP tunnels, see our [ngrok agent HTTP Tunnel reference](/ngrok-agent/ngrok#command-ngrok-http).

[Learn More >](http-tunnels)

### [TLS Tunnels](tls-tunnels)

HTTPS tunnels terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate. ngrok makes this extraordinarily easy with TLS tunnels.

[Learn More >](tls-tunnels)

### [TCP Tunnels](tcp-tunnels)

Not all services you wish to expose are HTTP or TLS based. ngrok TCP tunnels allow you to expose any networked service that runs over TCP. This is commonly used to expose SSH, game servers, databases and more. Starting a TCP tunnel is easy.

[Learn More >](tcp-tunnels)

### [SSH Reverse Tunnel](ssh-reverse-tunnel-agent)

:::tip

The SSH Reverse Tunnel is also known as the **agentless tunnel**, because it doesn't require an ngrok agent installed to work

:::

SSH reverse tunneling is an alternative mechanism to start an ngrok tunnel without needing to download or run the ngrok agent. You can start tunnels via SSH without downloading an ngrok agent by running an SSH reverse tunnel command (`ssh -r`)

[Learn More >](ssh-reverse-tunnel-agent)


