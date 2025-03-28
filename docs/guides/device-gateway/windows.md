---
title: Windows
description: Learn how to install ngrok on a remote Windows device to provide secure access and management.
tags:
  - guides
  - agent
  - windows
  - iot
---

ngrok allows you to create secure ingress to any app, device, or service without spending hours learning arcane networking technologies. You can get started with a single command or a single line of code.

What is ngrok? ngrok is an ingress-as-a-service platform that removes the hassle of getting code online from developers’ plates by decoupling ingress from infrastructure with one line of code, all without provisioning proxies or VPNs.

In this guide, we'll walk you through the process of installing the ngrok agent on a remote Windows device, ensuring the agent runs integrated into your operating system, restricting traffic to trusted origins, and integrating traffic events with your preferred logging tool.

## Step 1: Install the ngrok Agent

To download and install the ngrok agent on your remote Windows device, follow these steps:

1. Open a terminal into your remote Windows device.

1. Download the latest ngrok binary for your Windows distribution. You can find the correct binary on our [ngrok download page](https://download.ngrok.com): Select your operating system, select the version, and copy the link that appears in the **Download** button. Below is an example using PowerShell:

```bash
Invoke-WebRequest -Uri https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip -OutFile ngrok-v3-stable-windows-amd64.zip
```

1. Unzip the downloaded file and move it to a directory in your PATH. Below is an example using PowerShell:

```bash
Expand-Archive .\ngrok-v3-stable-windows-amd64.zip -DestinationPath .\
```

1. Open a PowerShell and run the following command:

```bash
ngrok authtoken NGROK_AUTHTOKEN
```

**Note**: Replace `NGROK_AUTHTOKEN` with your unique ngrok authtoken found in the [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

## Step 2: Enable SSH access

To enable Remote Desktop Protocol (RDP) access to your device via ngrok:

1. Test that the ngrok agent is configured correctly by starting a TCP tunnel on your remote device to enable you to connect through RDP.

::::warning
TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account. If you get a different error, ensure your authtoken is configured correctly.
::::

```bash
ngrok tcp 3389
```

1. The ngrok agent assigns you a TCP address and port. Use these values to test the RDP access via ngrok by running the Remote Desktop Protocol app on your local Windows desktop. Below is an example using PowerShell:

```bash
Start-Process "$env:windir\system32\mstsc.exe" -ArgumentList "/v:NGROK_TCP_ADDRESS:NGROK_PORT"
```

**Note**: Replace the variables in the command line with the following:

- NGROK_TCP_ADDRESS: The address of the ngrok agent (i.e. if the agent shows `tcp://1.tcp.ngrok.io:12345`, your TCP address is `1.tcp.ngrok.io`.
- NGROK_PORT: The port number of the ngrok agent (i.e. if the agent shows `tcp://1.tcp.ngrok.io:12345`, your port number is `12345`.

## Step 3: Adding IP restrictions

Once you confirmed that you have connectivity to the device, add some security so that you are the only one who can access it.

**Note**: This capability requires ngrok's **IP Restrictions** feature, which is only available with a paid subscription.

1. On the remote Windows device PowerShell terminal, stop the ngrok process using the `ctrl+c` command.

1. Add an allow rule to restrict access to your Windows device to an IP address or a range of IP addresses.

```bash
ngrok tcp 3389 --cidr-allow ALLOWED_IP_ADDRESS_CIDR
```

**Note**: Replace `ALLOWED_IP_ADDRESS_CIDR` with the CIDR notation for the allowed IP Address(es) (i.e. `123.123.123.0/24`).

:::tip Setting IP restrictions for the entire fleet
Alternatively, you can create an IP policy in the ngrok dashboard (under [Security > IP Restrictions](https://dashboard.ngrok.com/security/ip-restrictions)), and leverage the same policy to control access to your entire device fleet.
:::

## Step 4: Configure ngrok to recover on outages

The ngrok agent works with native OS services like `systemd`. This helps you ensure that the ngrok service is available even after the machine restarts. Before we do this though, it's useful to reserve a TCP address in the ngrok dashboard which allows you to reuse the same address each time the device is restarted.

1. Navigate to the ngrok Dashboard and access [Universal Gateway > TCP Addresses](https://dashboard.ngrok.com/tcp-addresses). Create a new TCP address with a description and click **Save**. Your new TCP address will look something like `1.tcp.ngrok.io:12345`.

Update the ngrok config file in your Windows device to start the ngrok agent using this TCP address.

1. Open the ngrok config file:

```bash
ngrok config edit
```

1. Add the following to the end of the file and then save it:

```yaml
endpoints:
  - name: device-ssh
    url: tcp://NGROK_TCP_ADDRESS
    upstream:
      url: 3389
    traffic_policy:
      on_tcp_connect:
        - actions:
            - type: restrict-ips
              config:
                allow:
                  - ALLOWED_IP_ADDRESS_CIDR
```

**Note**: Make sure to replace **NGROK_TCP_ADDRESS** with the address you reserved earlier in the ngrok dashboard (i.e. `1.tcp.ngrok.io:12345`) and **ALLOWED_IP_ADDRESS_CIDR** with the CIDR notation of the allowed IP Address(es) (i.e. `123.123.123.0/24`).

**Note**: Make note of the location of the `ngrok.yml` file (i.e. `%HOMEPATH%\AppData\Local\ngrok\`).

1. Enable ngrok in service mode:

```bash
ngrok service install --config "%HOMEPATH%\AppData\Local\ngrok\ngrok.yml"
```

:::note
You may need to run this command in a PowerShell terminal with administrator privileges.
:::

1. Run the following command to ensure your operating system launches ngrok with the ssh ingress whenever your device starts:

```bash
ngrok service start
```

:::note
You may need to run this command in a PowerShell terminal with administrator privileges.
:::

1. With ngrok running on your device, you should be able to RDP into the device using the reserved address from the dashboard.

```bash
Start-Process "$env:windir\system32\mstsc.exe" -ArgumentList "/v:NGROK_TCP_ADDRESS:NGROK_PORT"
```

## What's next?

Now that your device is integrated to ngrok, you can ​​execute tasks at the ngrok dashboard to operationalize your fleet:

### Logging Traffic Events from ngrok

Each action that happens in ngrok is published as an event, and [Event Subscriptions](/obs/) allow you to subscribe to the events that are interested in and write them to one or more destinations.

An Event Subscription is made up of a set of event sources (some of which can be filtered), and event destinations. Each subscription can send the events to one or more destinations, such as Amazon CloudWatch Logs, Amazon Kinesis (as a data stream), or Amazon Kinesis Firehose (as a delivery stream).

Event subscriptions can be configured through the [ngrok Dashboard](https://dashboard.ngrok.com/observability/event-subscriptions) or the [ngrok API](/api/resources/event-destinations/).

You can also forward all or some of your traffic events from [ngrok to your preferred logging tool](/obs/).

### Remote checks, stop, start, and updates

ngrok provides [APIs](/api/resources/tunnel-sessions/#restart-tunnel-agent) and a [dashboard UI](https://dashboard.ngrok.com/tunnels/agents) for you to monitor the health of ngrok agents running in your fleet. The interfaces also allow you to remotely stop, start, and update agents.
