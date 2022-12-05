---
title: Minecraft
---

# Using ngrok with Minecraft
------------

Minecraft requires the use of an ngrok TCP tunnel to share your server with others. Use `ngrok tcp 25565` to open a TCP tunnel on the default Minecraft port. You can then use the address provided to connect to your Minecraft server.

The free version of ngrok has session limitations, which means you will need to restart the agent and send a new TCP address to your players. Our paid accounts allow you to reserve a TCP Address for reuse. In this case, you would start the TCP tunnel using `ngrok tcp --remote-addr TCP_ADDRESS 25565`.

CAUTION: The TCP tunnel you open is available to anyone by default. Our paid accounts allow you to restrict access to specific IP Addresses using IP Restrictions.
