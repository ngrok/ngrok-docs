---
title: Using ngrok with Minecraft
sidebar_label: Minecraft
---

Minecraft requires the use of an ngrok TCP tunnel to share your server with others. Use the [ngrok agent](/docs/agent/) to open a TCP tunnel on the default Minecraft port, `25565`.

```bash
ngrok tcp 25565
```

You and others can then connect to your Minecraft server on the random TCP address provided in the ngrok CLI interface, like `tcp://1.tcp.ngrok.io:12345`.

You can also follow our [secure Minecraft server example](/docs/universal-gateway/examples/minecraft/) for specific instructions on restricting access to your public Minecraft server based on public IP addresses.

## Minecraft on ngrok's free plan

The [free version](/docs/pricing-limits/free-plan-limits/) of ngrok has the following restrictions:

- **A valid credit or debit card is required**
  - In an effort to combat abuse on our platform, we now require users to [add a valid credit or debit card to their account](https://dashboard.ngrok.com/settings#id-verification) before using TCP endpoints in the free tier. This card will not be charged.
- **No permanent TCP address**
  - When you restart the agent, you will need to send a new TCP address to your players. Our paid accounts allow you to reserve a TCP Address for reuse. In this case, you would start the TCP tunnel using a command like `ngrok tcp --url tcp://1.tcp.ngrok.io:12345 25565`.
- **Bandwidth Limits**
  - The free plan includes a limited amount of bandwidth per month which will prevent players from connecting to your server when exceeded.

Static/unchanging addresses and increased bandwidth limits are available with our [paid accounts](https://ngrok.com/pricing).

## Troubleshooting

### Bandwidth Limit Exceeded

If you exceed the bandwidth limit on your account players will no longer be able to connect to your server.

Players attempting to connect to your server may see a "Disconnected" message in the Minecraft client.

![Minecraft Client Disconnected](/img/howto/minecraft/client_disconnected.png)

Your server logs may indicate the client connecting and immediately disconnecting.

![Minecraft Server Logs](/img/howto/minecraft/server_disconnected.png)

Check your [usage](https://dashboard.ngrok.com/usage) page to ensure you haven't exceeded your "Bandwidth Limit Out" limit.
