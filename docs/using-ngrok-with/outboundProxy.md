---
title: Outbound Proxy
---

# Using ngrok with an outbound proxy

---

ngrok works correctly through an HTTP or SOCKS5 proxy. ngrok respects the standard unix environment variable `http_proxy`. You may also set proxy configuration explicitly in the ngrok configuration file:

- [Set the configuration variable `proxy_url`](/agent/config#config-proxy-url)
