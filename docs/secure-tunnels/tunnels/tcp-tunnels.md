---
sidebar_position: 3
---

# TCP Tunnels
--------------------

Not all services you wish to expose are HTTP or TLS based. ngrok TCP tunnels allow you to expose any networked service that runs over TCP. This is commonly used to expose SSH, game servers, databases and more. Starting a TCP tunnel is easy.

###### Expose a TCP based service running on port 1234

    ngrok tcp 1234

## Reserved TCP Addresses {#tcp-remote-addr}

Normally, the remote address and port is assigned randomly each time you start a TCP tunnel. For production services (and convenience) you often want a stable, guaranteed remote address. To do this, first, log in to your ngrok.com dashboard and click "Reserve Address" in the "Reserved TCP Addresses" section. Then use the `--remote-addr` option when invoking ngrok to bind a tunnel on your reserved TCP address. Make sure the `--region` you specify matches the region in which you reserved your address.

###### Bind a TCP tunnel on a reserved remote address

    ngrok tcp --region=us --remote-addr 1.tcp.ngrok.io:20301 22

## TCP Tunnel Examples {#examples}

###### Expose an SSH server listening on the default port

    ngrok tcp 22

###### Expose a Postgres server listening on the default port

    ngrok tcp 5432

###### Expose an RDP server listening on the default port

    ngrok tcp 3389

## TCP Tunnel Configuration Options {#configuration-options}

Check out the [ngrok agent TCP tunnel documentation](/docs/ngrok-agent/ngrok#command-ngrok-tcp) for all the configuration options for TCP tunnels.
