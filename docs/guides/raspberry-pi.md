---
title: Secure Remote Access to your Raspberry Pi
description: Learn how to install ngrok on a Raspberry Pi to provide secure remote access and management.

tags:
    - guides
    - agent
    - Raspberry Pi
    - iot
---

ngrok allows you to create secure ingress to any app, device or service without spending hours learning arcane networking technologies. You can get started with a single command or a single line of code.

What is ngrok? ngrok is an ingress-as-a-service platform that removes the hassle of getting code online from developers’ plates by decoupling ingress from infrastructure with one line of code, all without provisioning proxies or VPNs. 

In this guide, we'll walk you through the process of installing the ngrok agent on a remote Raspberry Pi device, ensuring the agent runs and is integrated into your operating system, restricting traffic to trusted origins, and integrating traffic events with your preferred logging tool.

## Step 1: Install the ngrok Agent
To download and install the ngrok agent on your remote Raspberry Pi device, follow these steps:

1. Open a terminal into your remote Raspberry Pi device.

2. Download the latest ngrok binary for ARM. You can find the correct binary on our [ngrok download page](https://ngrok.com/download). Here's an example for ARM64:

```bash
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
```

3. Unzip the downloaded file and move it to a directory in your PATH:

```bash
unzip ngrok-stable-linux-amd64.zip
sudo mv ngrok /usr/local/bin
```

4. Now that you have installed ngrok on your Raspberry Pi device, link it to your ngrok account by using your authtoken:

```bash
ngrok authtoken NGROK_AUTHTOKEN
```

Replace `NGROK_AUTHTOKEN` with your unique ngrok authtoken found in the [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

## Step 2: Enable SSH access

To enable remote SSH access via ngrok:

1. Test that ngrok is configured correctly by quickly starting a TCP tunnel. If you get an error, ensure your authtoken is configured correctly.

```bash
ngrok tcp 22
```

2. ngrok will assign you a TCP address and port. Use that to test the SSH access.

```bash
ssh -p NGROK_PORT user@NGROK_TCP_ADDRESS
```

## Step 3: Adding IP restrictions (Requires a paid plan)

Once you've confirmed that you have connectivity to the device, let's add some security so that you are the only one that can access it. This capability requires IP Restrictions which are only available with a paid subscription to ngrok

1. Stop the ngrok process using ctrl+c in your terminal.

1. We are going to restrict access to your machine using your public IP address. The following command will fetch your public IP address and add an IP Restriction to your tunnel so that only you can access it. 

```bash
ngrok tcp 22 --cidr-allow $(curl http://ifconfig.me/ip)/32
```

## Step 4: Configure ngrok to recover on outages

The ngrok agent works with native OS services like `systemd`. This helps you ensure that the ngrok service is available even after machine restarts. Before we do this though, it's useful to reserve a TCP address in the ngrok dashboard which allows you to reuse the same address each time the device is restarted.

1. Navigate to the ngrok Dashboard and look for [Cloud Edges > TCP Addresses](https://dashboard.ngrok.com/cloud-edge/tcp-addresses). Add a new TCP address with a description and click Save. Your new TCP address will look something like `7.tcp.ngrok.io:20241`.

1. Update the ngrok config file to create the TCP tunnel when ngrok is started. First, grab your public IP using the command from before:

```bash
curl http://ifconfig.me/ip
71.132.218.228
```

Next, open the config file

```bash
ngrok config edit
```

Once the config file is open, add the following to the end:

```yaml
tunnels:
  ssh:
    proto: tcp
    addr: 22
    remote_addr: NGROK_TCP_ADDRESS
    ip_restriction:
      allow_cidrs:
        - PUBLIC_IP_ADDRESS/32
```

Make sure to replace the `NGROK_TCP_ADDRESS` with the address you reserved earlier in the dashboard (including the port) and `PUBLIC_IP_ADDRESS` with your public IP address from earlier.

1. Enable ngrok in service mode:

```bash
ngrok service install -config $HOME/.ngrok/ngrok.yml
```
:::note
You may need to run this command using `sudo` depending on your system
:::

2. Run the following command ensure your operating system launches ngrok with the SSH ingress whenever your system starts:

```bash
ngrok service start
```

3. With ngrok running on your device, you should be able to try to SSH into the device again using the reserved address from your dashboard.

```bash
ssh -p NGROK_PORT user@NGROK_TCP_ADDRESS
```

## What's next?

Now that your device is integrated to ngrok, you can ​​execute tasks at the ngrok dashboard to operationalize your fleet:

### Logging Traffic Events from ngrok

Each action that happens in ngrok is published as an event, and [Event Subscriptions](/docs/platform/events/) allow you to subscribe to the events that are interesting in and write them to one or more destinations.

An Event Subscription is made up of a set of event sources (some of which can be filtered), and event destinations. Each subscription can send the events to one or more destinations, such as Amazon CloudWatch Logs, Amazon Kinesis (as a data stream) or Amazon Kinesis Firehose (as a delivery stream).

Event subscriptions can be configured through the [ngrok Dashboard](https://dashboard.ngrok.com/events/subscriptions) or the [ngrok API](/docs/api/resources/event-destinations/).

You can also forward all or some of your traffic events from [ngrok to your preferred logging tool](/docs/platform/events/).

### Remote checks, stop, start, and updates

ngrok provides [APIs](/docs/api/resources/tunnel-sessions/#restart-tunnel-agent) and a [dashboard UI](https://dashboard.ngrok.com/tunnels/agents) for you to monitor the health of ngrok agents running in your fleet. The interfaces also allow you to remotely stop, start, and update agents. 
