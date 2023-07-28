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

## ngrok Agent Libraries

ngrok Agent libraries allow you to embed ngrok functionality in your code without having to manage another process or bundling the ngrok binary in your project. Allowing you to control ngrok tunnels and configuration programmatically.

### List of ngrok Agent Libraries:

- [ngrok-go](https://github.com/ngrok/ngrok-go)
- [ngrok-rust](https://github.com/ngrok/ngrok-rust)
- [ngrok-python](https://github.com/ngrok/ngrok-python) (beta)
- [ngrok-nodejs](https://github.com/ngrok/ngrok-nodejs) (beta)
- [ngrok-java](https://github.com/ngrok/ngrok-java) (alpha)

Note, some agent libraries are still in-development and are open to change.

### Agent Library Guides:

- [Using the ngrok-go library](/docs/using-ngrok-with/go)
- [Using the ngrok-rust library](/docs/using-ngrok-with/rust)
