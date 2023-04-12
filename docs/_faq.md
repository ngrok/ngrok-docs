---
sidebar_position: 9
title: Troubleshooting / FAQ
---

# Troubleshooting / FAQ
---------------


## CORS with HTTP Basic Authentication

ngrok's HTTP tunnels will work with CORS, but you cannot use ngrok's `--basic-auth` option. ngrok's HTTP tunnels allow you to specify basic authentication credentials to protect your tunnels. However, ngrok enforces this policy on **all** requests, including the preflight `OPTIONS` requests that are required by the CORS spec. In this case, your application must implement its own basic authentication.

## Certificate Warnings

There are certain configurations of ngrok which will result in certificate warnings. These usually happen when trying to use custom certificates with an ngrok domain. These can usually be solved by using a custom branded domain.

## Does ngrok have an official Status page

Yes, here is the [official ngrok status page](https://status.ngrok.com).

## Can I change the port on the ngrok domain?

ngrok does not allow users to change the public ports on any reserved Domain or TCP Address. HTTPS and TLS tunnels will use port 443, and TCP tunnels will use the port assigned to you when the tunnel is created.

## Can I get a static IP address?

ngrok does not require nor provide static IP addresses. When you run the ngrok agent, it will update automatically as your public IP address changes, and you do not need to restart the agent. We do offer reserved Domains and TCP Addresses with our paid plans.

## What information is stored about my tunnels?

**ngrok does not log or store any data transmitted through your tunneled connections.** ngrok does log some information about the connections which are used for debugging purposes and metrics like the name of the tunnel and the duration of connections. For complete end-to-end security, use a [TLS tunnel](/docs/secure-tunnels/tunnels/tls-tunnels). Please see our [Terms of Service](https://ngrok.com/tos) and [Data Processing Agreement](https://ngrok.com/dpa) for more information.

## What's the deal with ngrok v1?

The original open source ngrok agent 1.x is [available on GitHub](https://github.com/inconshreveable/ngrok) but is no longer developed, supported or maintained. The latest ngrok agent is available on our [ngrok downloads page](https://ngrok.com/download).

## How do I pronounce ngrok?

_en-grok_

## How long has ngrok been around?

The first prototype for ngrok was committed on [March 20th, 2013](https://github.com/inconshreveable/ngrok/commit/8f4795ecac7f92c6b5a8c8970c65f26e5315fe4e).