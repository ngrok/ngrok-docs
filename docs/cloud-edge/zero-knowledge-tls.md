---
sidebar_position: 3
---

# Zero-Knowledge TLS

---

Zero-Knowledge TLS or Zero-Knowledge Encryption is end-to-end encryption that ensures no one (not even ngrok) can see the data you are transferring. If the service you are exposing does not support TLS termination, then the ngrok agent can do this for you allowing you to encrypt your traffic end-to-end but not have to worry about whether the local service has TLS support.

Specify both the `--crt` and `--key` command-line options when starting the agent to specify the filesystem paths to your TLS certificate and key and the ngrok agent will take care of terminating TLS connections for you.

![Zero-Knowledge TLS](/img/docs/ngrok-zero-knowledge.png)
