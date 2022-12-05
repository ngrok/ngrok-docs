---
title: SSH
---

# Using ngrok with SSH
------------

ngrok's TCP tunnels are perfect for SSH traffic. Simply start a TCP tunnel to port 22 and you should be all set.

    ngrok tcp 22

When connecting through the ngrok TCP address, make sure you specify the port separately.

    ssh -p PORT user@NGROK_TCP_ADDRESS

