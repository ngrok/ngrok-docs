---
title: OpenVPN
---

# Using ngrok with OpenVPN Connect

A community user has created a detailed guide for configuring [Tunneling an OpenVPN server out from behind CGNAT](https://forums.openvpn.net/viewtopic.php?p=116476#p116476).

There are a lot more details in the linked post, but the summary of how to do it with ngrok is to open a TCP tunnel to port 443, and visit the resulting TCP address and port in your browser to download the `.ovpn` file needed by OpenVPN Connect.

```bash
ngrok tcp 443
```

From there, you will need to use a text editor to manually edit the downloaded `.opvn` file to change the port from 443 to the random TCP address port provided by ngrok. Then follow the standard steps to import the profile to your OpenVPN Connect software and you should be able to connect to your VPN as normal.
