---
sidebar_position: 2
description: This module is used to configure how the TLS connection is terminated at the edge. For HTTPS Edges, TLS is always terminated at the ngrok Edge which means you can only configure the TLS version enforced there. For TLS tunnels, you can configure where the TLS termination occurs.
---

# TLS Termination
----------------

This module is used to configure how the TLS connection is terminated at the edge. For HTTPS Edges, TLS is always terminated at the ngrok Edge which means you can only configure the TLS version enforced there. For TLS tunnels, you can configure where the TLS termination occurs.

The default TLS version for ngrok is 1.2. You can configure the minimum TLS Version via the TLS module. The minimum TLS version ngrok supports is 1.0 up to the latest version 1.3.
