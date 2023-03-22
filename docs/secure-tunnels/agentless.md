---
sidebar_position: 5
---

# Running ngrok without agents
--------------------

ngrok offers different options using launching tunnels without downloading or running the ngrok agent. Each option is best suited for different use-cases:

## [SSH Reverse Tunnel](/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent)

Launch ngrok tunnels by using the ssh with reverse tunneling (`ssh -R`):

- **Pros**: This option works well in use-cases where you cannot install and download the ngrok agent, but can run SSH locally.
- **Caveats (vs Agent)**: SSH Reverse Tunnels cannot run multiple tunnels at the same time and don't provide automatically reconnection in case of network outages.

[Learn More](/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent)

## [Docker Container](/docs/using-ngrok-with/docker)

This option packages the ngrok agent as a docker container, allowing you to work natively in Docker environments

- **Pros**: Great for use in Docker environment and infrastructure (i.e. alongside docker compose)
- **Caveats (vs Agent)**: Limited compatibility to Docker environments.

[Learn More](/docs/using-ngrok-with/docker)

## [ngrok Agent Libraries](/docs/using-ngrok-with/go)

With ngrok agent libraries, you can embed ngrok directly into your application allowing you to programmatically launch and manage ngrok ingress from your code.

- **Pros**: Embed ngrok functionality in your code without having to manage another process. Control ngrok tunnels and configuration programmatically
- **Caveats (vs Agent)**: At this point, we offer libraries only for [Go](/docs/using-ngrok-with/go) and [Rust](/docs/using-ngrok-with/rust), although we plan to support additional programming languages in the near future

[Learn More](/docs/using-ngrok-with/go)
