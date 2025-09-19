---
title: NGINX
---

# Using ngrok with NGINX

It's a good idea to get a background on how [NGINX processes a request](https://nginx.org/en/docs/http/request_processing.html). What that usually means is you need to ensure the `--host-header` flag is set when creating an endpoint for your service.
