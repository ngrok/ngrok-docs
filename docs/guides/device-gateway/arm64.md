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

import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

In this guide, you'll learn how to install ngrok on any Linux ARM64 device to forward traffic from public endpoints to your upstream services or for remote management. You'll also create some a traffic policy to protect your device from unauthorized traffic.

This guide is specific to ARM64 devices on Linux—if you're using a different device or CPU architecture, first check whether your platform meets the ngrok agent's [system and resource requirements](/docs/agent/index.mdx##system-requirements). We also have other guides that may fit your use case more precisely:

- [Linux AMD64 devices](/docs/guides/device-gateway/linux.md)
- [Raspberry Pi](/docs/guides/device-gateway/raspberry-pi.md)
- [Raspberry Pi OS](/docs/guides/device-gateway/raspbian.md)

## Prerequisites

To follow this guide, you need:

- An [ngrok account](https://dashboard.ngrok.com/signup) (some features require a [pay-as-you-go plan](https://ngrok.com/pricing))
- Any ARM64 device running Linux (see our [system requirements](/docs/agent/index.mdx##system-requirements) for all supported architectures)

## Step 1: Install the ngrok Agent

1. Open a shell session with your remote ARM64 device.

2. Download the latest ngrok agent binary for ARM64 devices.

   ```bash
   wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-arm64.tgz
   ```

3. Unzip the file and move it to a directory in your `PATH`, like `/usr/local/bin`.

   ```bash
   sudo tar xvzf ./ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
   ```

4. Link the ngrok agent to your ngrok account with your authtoken, replacing `{NGROK_AUTHOKEN}` with the value found in your [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

   ```bash
   ngrok authtoken {NGROK_AUTHTOKEN}
   ```

## Step 2: Enable SSH access

If you want to perform remote administration on your ARM64 device using a reserved TCP address and an encrypted tunnel, instead of relying on IP addresses, you can create a [TCP tunnel](/docs/tcp/index.mdx) at port `22` on your ARM64 device.

1. Start the TCP tunnel with `ngrok`.

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

   |                       |                                                                                                                                                |
   | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
   | `{NGROK_PORT}`        | The port number assigned to your ngrok agent (e.g. if the agent shows `tcp://4.tcp.us-cal-1.ngrok.io:12345`, your port number is `12345`).     |
   | `{USER}`              | An existing user on your remote device.                                                                                                        |
   | `{NGROK_TCP_ADDRESS}` | The address of the ngrok agent (e.g. if the agent shows `tcp://4.tcp.us-cal-1.ngrok.io:12345`, your TCP address is `4.tcp.us-cal-1.ngrok.io`). |

   ```bash
   ssh -p {NGROK_PORT} {USER}@{NGROK_TCP_ADDRESS}
   ```

## Step 3: Enable ingress to a service on your ARM64-based Linux device

Separately from SSH access, you can also use ngrok to create an [HTTP tunnel](/docs/http/index.mdx) to route traffic to specific applications or services running on your ARM64 device's `localhost` network.

:::note
If you already established a TCP tunnel for SSH access, you'll either need to create a second tunnel for the HTTP tunnel, or use the [agent configuration file](/docs/agent/config/v3/) to define multiple tunnels.
:::

1. Use ngrok to create an HTTP tunnel at the port on which your service operates, e.g. port `8080`.

   ```bash
   ngrok http 8080
   ```

   When the ngrok agent starts, you'll see a `Forwarding` line with similar information about the public endpoint for the HTTP tunnel to your device:

   ```bash
   Forwarding                    https://12345.ngrok.app -> http://localhost:8080
   ```

1. Optionally, you can reserve a [static subdomain](/docs/network-edge/domains-and-tcp-addresses.mdx) on `ngrok.app` or `ngrok.dev` like so:

   ```
   ngrok http 8080 --domain example.ngrok.app
   ```

1. Open a browser and navigate to the endpoint, e.g. `https://12345.ngrok.app`, to access the service from any remote system.

## Step 4: Add a Traffic Policy to restrict IPs

Now that you have SSH tunneling and service ingress handled via ngrok, you may also want to protect those services from unknown and untrusted users. You'll use the Traffic Policy module and the Restrict IPs action, which works with both [HTTPS](/docs/http/traffic-policy/actions/restrict-ips.mdx) and [TCP](/docs/tcp/traffic-policy/actions/restrict-ips.mdx) tunnels.

1.  Create a new file on your ARM64 device, where you create ngrok tunnels, named `policy.yml`.

1.  Open the file for editing and paste in the following contents, replacing `1.1.1.1` with the public IP of the workstation you use to access your ARM64 device:

    ```yaml
    ---
    inbound:
      - actions:
        - name: "Restrict all IPs except trusted CIDRs"
          type: "restrict-ips"
            config:
             enforce: true
             allow:
                - "1.1.1.1/32"
    ```

    :::note
    ngrok's IP Restriction action uses [CIDRs](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) to specific IPs or IP ranges. The `/32` notation refers to a single IPv4 address, like `
    :::

1.  Restart any existing tunnels, or create new ones, referencing the `policy.yml` file you just created, choosing between a TLS and HTTP tunnel below.

    <Tabs groupId="connectivity" queryString="cty">
      <TabItem value="tls-tunnel" label="TLS tunnel">
        
        ```bash
        ngrok tcp 22  --traffic-policy-file /path/to/policy.yml
        ```

      </TabItem>
      <TabItem value="http-tunnel" label="HTTP tunnel">

        ```bash
        ngrok http 8080 --traffic-policy-file /path/to/policy.yml
        ```

      </TabItem>
    </Tabs>

1.  When you re-establish your TLS or HTTP tunnels, ngrok will proxy requests from your allowed IP/CIDR through to your ARM64 device and reject all others _at its network edge_, preventing your device from being constantly bombarded with automated and malicious attacks.

## What's next?

Now that you can create ngrok tunnels on your Linux ARM64 device and understand the fundamentals of managing traffic with policies, you can extend your usage to make your device—or even a fleet of them—ready for production usage.

- Bring a [custom domain](/docs/guides/other-guides/how-to-set-up-a-custom-domain.md) to ngrok to create static endpoints.
- Learn how to write an [agent configuration file](/docs/agent/config/v3/) to define and create multiple tunnels from a single command line.
- Install [ngrok as a service](/docs/agent/index.mdx#background-service) to start after your ARM64 device boots and automatically restart after crashes.
