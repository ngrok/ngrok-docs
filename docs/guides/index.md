---
pagination_next: guides/device-gateway/index
sidebar_position: 1
title: Guides
---

# How to Guides

---

Here you will find a set of guides to help you with common (and not so common) tasks in ngrok. Think we're missing something? Send a note to [support@ngrok.com](mailto:support@ngrok.com) and let us know.

| Name                                                                                                                                     | Description                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [Upgrading to ngrok Agent v3](/guides/upgrade-v2-v3)                                                                                     | Learn about the key differences between the v2 and v3 ngrok agent                              |
| [ngrok Platform Licensing FAQ](/guides/licensing)                                                                                        | Answers to commonly asked questions related to signing up for paid ngrok services              |
| [Corporate Firewalls](/guides/running-behind-firewalls)                                                                                  | Learn how to use ngrok securely behind your corporate firewalls                                |
| [Configure Okta Single Sign-On for your ngrok Account](/guides/dashboard-sso-okta-setup)                                                 | Learn how to enable Single Sign-On (SSO) for logging into your ngrok dashboard                 |
| [Forwarding to HTTPS Service](/secure-tunnels/tunnels/http-tunnels#local-https)                                                          | Learn how to use the ngrok agent to route traffic to a local TLS service                       |
| [Forwarding to Another Machine](/secure-tunnels/non-local)                                                                               | Learn how to leverage a single ngrok agent to route to any machine in your network             |
| [Installing your Authtoken](/secure-tunnels/ngrok-agent/tunnel-authtokens)                                                               | Learn how to install your ngrok Authtoken with a single command                                |
| [Setting Up a Custom Domain](/guides/how-to-set-up-a-custom-domain)                                                                      | Bring your own custom domain to ngrok to host your service on your own brand                   |
| [Inspecting / Replaying Traffic](/secure-tunnels/ngrok-agent/web-inspection-interface)                                                   | Learn how to speed up local development by using the ngrok agent Inspect UI to replay requests |
| [Reserved TCP Address](/secure-tunnels/tunnels/tcp-tunnels#tcp-remote-addr)                                                              | Reserve a TCP Address and use it to reconnect to the same address each time                    |
| [Per-client Authtokens](secure-tunnels/ngrok-agent/tunnel-authtokens#per-agent-authtokens)                                               | Learn best practices when deploying many ngrok agents                                          |
| [Rewriting the Host Header](/secure-tunnels/tunnels/http-tunnels#host-header)                                                            | Learn how to rewrite the incoming host header for routing traffic to different local services  |
| [non-HTTP Services on TLS Tunnels](/secure-tunnels/tunnels/tls-tunnels#tls-agnostic)                                                     | Learn how to configure non-HTTP services using our TLS tunnels                                 |
| [Multiple Tunnels Same ngrok Agent](/secure-tunnels/ngrok-agent/reference/config#tunnel-definitions)                                     | Learn how to use a single ngrok agent session to open many tunnels                             |
| [Securing your Tunnels](/guides/securing-your-tunnels)                                                                                   | Learn how to secure your ngrok tunnels from prying eyes                                        |
| [Serving Local Directories](/secure-tunnels/tunnels/http-tunnels#file-url)                                                               | Learn how to use ngrok as a file server to quickly share directories with anyone               |
| [Wildcard Domains](/cloud-edge/endpoints#wildcard-domains)                                                                               | Learn how wildcard domains work in ngrok and configure your own                                |
| [How to Round-Robin Load Balance with ngrok Cloud Edges](/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges)                 | Learn how to load balance ngrok tunnels using ngrok Cloud Edges                                |
| [How to do Weighted Round-Robin Load Balancing with ngrok Cloud Edges](/guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges) | Learn how to load balance ngrok tunnels using ngrok Cloud Edges                                |
| [Using Labels with ngrok Edges](/guides/using-labels-within-ngrok)                                                                       | Learn how to use labels and tunnel groups with ngrok Cloud Edges                               |
| [Using ngrok with IoT devices](/guides/device-gateway)                                                                                   | Learn how to remotely manage IoT devices using ngrok                                           |
| [Using Mutual TLS Authentication](/guides/using-tls-mutual-authentication)                                                               | Learn how to protect your endpoints with mutual TLS authentication (mTLS) using ngrok          |
