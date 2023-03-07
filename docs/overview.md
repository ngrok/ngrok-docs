---
sidebar_position: 1
slug: /
title: Overview
description: Learn to use ngrok with our guides, examples, integration guides, and API references
---

# ngrok Documentation
-------------------
**Welcome to the ngrok documentation.** ngrok allows you to create secure ingress to any app, device or service without spending hours learning arcane networking technologies. You can get started with a single command or a single line of code.

*What is ngrok?* What is ngrok? ngrok is an ingress-as-a-service platform that removes the hassle of getting code online from developers’ plates by decoupling ingress from infrastructure with one line of code , all without provisioning proxies or VPNs. 

ngrok’s platform is built around 3 main capabilities that connect the world to your work. Those capabilities have many different options depending on what you’re building, so take a moment to review them.

#### 1.Connect: 
You can establish ingress in a few ways, depending what you’re trying to solve. You can use: 
+ If you’re looking for a quick way to get started and see how ngrok works you can download and agent onto your machine or a device like a raspberry pi(that’s what our [Getting Started Guide](/getting-started) will teach you to use).
+ If you want to have ingress baked into your app check out our growing collection of language-native libraries ([ngrok-go](https://github.com/ngrok/ngrok-go), [ngrok-rust](https://github.com/ngrok/ngrok-rs).
+ If you cannot install and download the ngrok agent, but can run SSH locally, our[SSH reverse tunnels](/secure-tunnels/agentless#ssh-reverse-tunnel) will still provide you with the ingress you need.
+ If you need ingress to you containers, try our [ngrok Docker image](/using-ngrok-with/docker).
+ [Kubernetes ingress controller](https://github.com/ngrok/kubernetes-ingress-controller), which allows users to get ingress to something inside of kubernetes. 

#### 2.Secure: 
Ingress without security is a recipe for trouble in most cases. As a result, you’ll most likely want to keep your apps protected. We’ve built the platform so security features like OAuth are easy and free to use. Some quick notes:
+ ngrok [secures your apps by default](/guides/securing-your-tunnels#encryption) with HTTPS and automatically provisions and manages TLS certificates, even on the free plan.
+ If you’re building an app, we recommend securing it with [OAuth](https://blog.ngrok.com/posts/how-to-secure-your-network-tunnels-with-oauth-fast): it’s available in our free tier for up to 50 MAUs. 
+ If you’re consuming webhooks, we recommend leveraging [webhook verification]()a feature that’s also included in the free tier for up to 500 webhooks. 
+ If you’re building for production use, check out our enterprise plans: they include features like IP restrictions, [mTLS](/cloud-edge/modules/mutual-tls), [OIDC](/cloud-edge/modules/openid-connect) and [SAML](/cloud-edge/modules/saml). 

#### 3.Observe:
+If you’re using the ngrok agent, it ships with a real time web [inspection interface](/secure-tunnels/ngrok-agent/web-inspection-interface) which allows you to see what traffic is sent to your application server and what responses your server is returning.
+If you’re using a different form of ingress, ngrok can also push traffic logs into several popular cloud monitoring systems like Amazon CloudWatch or Kinesis. This feature is available on our enterprise plan. 


Once you’ve set up your preferred form of connectivity, secured your traffic and have monitoring in place, we invite you to check out how other ngrok developers are building by checking out our [guides](/guides) and [blog](https://blog.ngrok.com) which walk you step-by-step how to solve for a specific need. 
