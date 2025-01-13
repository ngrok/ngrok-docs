---
title: CGNAT
---

# Using ngrok with CGNAT

ngrok is a great solution when you don't have access to open ports on your router. This is the case for Starlink and other systems that use CGNAT or similar software. There is a very useful blog post from [Don Simpson about using ngrok with CGNAT](https://www.donaldsimpson.co.uk/using-ngrok-to-work-around-carrier-grade-nat-cgnat). The basic steps are summarized below.

- [Install ngrok](https://download.ngrok.com) using whatever method works best for you.
- Install your ngrok authtoken using the command `ngrok config --add-authtoken TOKEN`
- Start a normal ngrok tunnel as you would any other tunnel: `ngrok http 80`

That's really it. There shouldn't be any other changes you need to make to your network or router.
