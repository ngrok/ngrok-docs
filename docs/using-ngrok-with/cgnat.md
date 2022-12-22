---
title: CGNAT
---

# Using ngrok with CGNAT
------------

CGNAT, or Carrier-Grade NAT, is a type of network address translation (NAT) that is used by Internet Service Providers (ISPs) to enable multiple devices on a customer's network to share a single public IP address. It is often used in situations where the number of available IP addresses is limited, such as when an ISP is using IPv4 addresses and has exhausted its supply.  Ngrok can be a good fit when working with CGNAT.

ngrok is a great solution when you don't have access to open ports on your router. This is the case for Starlink and other systems that use CGNAT or similar software.
 There is a very useful blog post from [Don Simpson about using ngrok with CGNAT](https://www.donaldsimpson.co.uk/207/0/30/using-ngrok-to-work-around-carrier-grade-nat-cgnat/). The basic steps are summarized below.

*   [Install ngrok](https://ngrok.com/download) using whatever method works best for you.
*   Install your ngrok authtoken using the command `ngrok config --add-authtoken TOKEN`
*   Start a normal ngrok tunnel as you would any other tunnel: `ngrok http 80`

That's really it. There shouldn't be any other changes you need to make to your network or router.
