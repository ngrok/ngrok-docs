---
sidebar_position: 8
title: Forwarding to different machines
---

# Forwarding to servers on a different machine (non-local services)
--------------------

ngrok can forward to services that aren't running on your local machine. Instead of specifying a port number, just specify a network address and port instead.

###### Example: Forward to a web server on a different machine

    ngrok http 192.168.1.1:8080