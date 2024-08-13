---
title: Minecraft
---

# Using ngrok with Minecraft

Minecraft requires the use of an ngrok TCP tunnel to share your server with others. Use `ngrok tcp 25565` to open a TCP tunnel on the default Minecraft port. You can then use the address provided to connect to your Minecraft server.

The free version of ngrok has the following restrictions:

- **A valid credit or debit card is required**
  - In an effort to combat abuse on our platform, we now require users to [add a valid credit or debit card to their account](https://dashboard.ngrok.com/settings#id-verification) before using TCP endpoints in the free tier. This card will not be charged.
- **No permanent TCP address**
  - When you restart the agent, you will need to send a new TCP address to your players. Our paid accounts allow you to reserve a TCP Address for reuse. In this case, you would start the TCP tunnel using `ngrok tcp --remote-addr TCP_ADDRESS 25565`.
- **Bandwidth Limits**
  - The free plan includes a limited amount of bandwidth per month which will prevent players from connecting to your server when exceeded.
- **No IP Restrictions**
  - Your Minecraft server will be available to anyone by default.

Static/unchanging addresses, increased bandwidth limits, and IP Restrictions are all available with our [paid accounts](https://ngrok.com/pricing).

## Troubleshooting

### Bandwidth Limit Exceeded

If you exceed the bandwidth limit on your account players will no longer be able to connect to your server.

Players attempting to connect to your server may see a "Disconnected" message in the Minecraft client.
![Minecraft Client Disconnected](/img/howto/minecraft/client_disconnected.png)

Your server logs may indicate the client connecting and immediately disconnecting.
![Minecraft Server Logs](/img/howto/minecraft/server_disconnected.png)

Check your [usage](https://dashboard.ngrok.com/usage) page to ensure you haven't exceeded your "Bandwidth Limit Out" limit.
