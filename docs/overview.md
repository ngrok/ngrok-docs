---
sidebar_position: 1
slug: /
title: Overview
description: Learn to use ngrok with our guides, examples, integration guides, and API references
---

# ngrok Documentation
-------------------
**Welcome to the ngrok documentation.** ngrok allows you to create ingress to any app, device, or service with a connection to the internet so you don’t have to spend hours understanding networking terminology. 

*What is ngrok?* In its simplest form, ngrok consists of two main parts: The local agent running inside your private network as well as the ngrok service which is responsible for routing requests to that agent.

ngrok’s platform is built around three main capabilities that connect the world to your work, but those capabilities have many different options depending on what you’re building, so take a moment to review them.

###### 1.Connect: 
ngrok users can establish connectivity in a few ways, depending on their use case. You can use: 
+ An agent that you can download onto your machine (that’s what our [Getting Started Guide](/getting-started) will teach you to use).
+ Language-native libraries so that you can bake connectivity right into an app or product that you’re building. ([ngrok-go](https://github.com/ngrok/ngrok-go), [ngrok-rust](https://github.com/ngrok/ngrok-rs)
+ [SSH reverse tunnels](/secure-tunnels/agentless#ssh-reverse-tunnel) can be used for ingress to machines where you cannot install and download the ngrok agent, but can run SSH locally. 
+ Our [ngrok Docker image](/using-ngrok-with/docker) delivers connectivity to your containers. 
+ [Kubernetes ingress controller](https://github.com/ngrok/kubernetes-ingress-controller), which allows users to get ingress to something inside of kubernetes. 

###### 2.Secure: 
Connectivity without security is a recipe for trouble in most cases. As a result, you’ll most likely want to keep your apps protected. We’ve built the platform so secure features like OAuth are easy and free to use. Some quick notes:
+ ngrok is designed to be secure by default. We use [HTTPS and automatically provision certificates](/guides/securing-your-tunnels#encryption) for all domains, even on the free plan.
+ It’s possible to secure and identify your apps and webhooks with [OAuth](https://blog.ngrok.com/posts/how-to-secure-your-network-tunnels-with-oauth-fast), we’re so passionate about it, we added it to our free tier. 
+ ngrok has extensive features like [mTLS](/cloud-edge/modules/mutual-tls), [OIDC](/cloud-edge/modules/openid-connect) and [SAML](/cloud-edge/modules/saml) for production-grade use. 

###### 3.Observe:
Once you have traffic moving through your selected form of ingress, you’ll want to monitor it. The ngrok agent ships with a real time web [inspection interface](/secure-tunnels/ngrok-agent/web-inspection-interface) which allows you to see what traffic is sent to your application server and what responses your server is returning.
ngrok also offers [event monitoring](/platform/events) in some paid tiers. Each action that happens in ngrok is published as an event, which you can configure through the ngrok [dashboard](https://dashboard.ngrok.com/events/subscriptions).


Once you’ve set up your preferred form of connectivity, secured your traffic and have monitoring in place, we invite you to check out how other ngrokkers are building by checking out our [blog](https://blog.ngrok.com), [Slack community](https://ngrok.com/slack) and our [guides](/guides), which walk you step-by-step how to solve for a specific need. 
