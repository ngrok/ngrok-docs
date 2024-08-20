---
sidebar_position: 9
title: Install ngrok on Linux ARM64 devices
description: Learn how to install ngrok on any Linux ARM64 device to tunnel traffic to your upstream services or remotely administer it.
sidebar_label: Linux (ARM64)
tags:
  - guides
  - agent
  - iot
  - devices
---

In this guide, you'll learn how to install ngrok on any Linux ARM64 device to forward traffic from public endpoints to your upstream services or for remote management. You'll also create some basic traffic policies to protect your device from unauthorized traffic.

This guide is specific to ARM64 devices on Linux—if you're using a different device or CPU architecture, first check whether you're platform meets the ngrok agent's [system and resource requirements](/docs/agent/index.mdx##system-requirements). We also have other device gateway guides that may fit your use case better:

- [Linux AMD64 devices](/docs/guides/device-gateway/linux.md)
- [Raspberry Pi](/docs/guides/device-gateway/raspberry-pi.md)
- [Raspberry Pi OS](/docs/guides/device-gateway/raspbian.md)

## Prerequisites

To follow this guide, you need:

- An [ngrok account](https://dashboard.ngrok.com/signup) (some features require a [pay-as-you-go plan](https://ngrok.com/pricing))
- Any ARM64 device running Linux (see our [system requirements](/docs/agent/index.mdx##system-requirements) for all our supported architectures)

## Step 1: Install the ngrok Agent

1. Open a shell session with your remote ARM64 device.

2. Download the latest ngrok Agent binary for ARM64 devices.

   ```bash
   wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-arm64.tgz
   ```

3. Unzip the file and move it to a directory in your `PATH`, like `/usr/local/bin`.

   ```bash
   sudo tar xvzf ./ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
   ```

1. Link the ngrok agent to your ngrok account with your authtoken, replacing `{NGROK_AUTHOKEN}` with the value you can find in the [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

   ```bash
   ngrok authtoken {NGROK_AUTHTOKEN}
   ```

## Step 2: Enable SSH access

1. Start a [TCP tunnel](/docs/tcp/index.mdx) at port `22` on your ARM64 device.

   ::::warning
   TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account. If you get a different error, ensure your authtoken is configured correctly.
   ::::

   ```bash
   ngrok tcp 22
   ``` 

   When the ngrok agent starts, you'll see a `Forwarding` line with similar information about the public endpoint for the TCP tunnel to your device:

   ```bash
   Forwarding                    tcp://4.tcp.us-cal-1.ngrok.io:16420 -> localhost:22
   ```

1. On your local workstation, SSH into your ARM64 device with the command below, replacing the variables with the following:

   |     |      |
   | --- | ---- |
   | `{NGROK_PORT}` | The port number assigned to your ngrok agent (e.g. if the agent shows `tcp://4.tcp.us-cal-1.ngrok.io:12345`, your port number is `12345`). |
   | `{USER}` | An existing user on your remote device. |
   | `{NGROK_TCP_ADDRESS}` | The address of the ngrok agent (e.g. if the agent shows `tcp://4.tcp.us-cal-1.ngrok.io:12345`, your TCP address is `4.tcp.us-cal-1.ngrok.io`). |

   ```bash
   ssh -p {NGROK_PORT} {USER}@{NGROK_TCP_ADDRESS}
   ```

## Step 3: Enable ingress to a service on your ARM64-based Linux device

TK



## Step 4: Add a Traffic Policy to restrict IPs

TK

If you want to enable additional traffic policies, or just explore your options, 

## What's next?

TK