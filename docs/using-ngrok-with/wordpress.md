---
title: Wordpress
---

# Using ngrok with Wordpress

To make ngrok work properly with the latest Wordpress installation, you only need to tell ngrok to [rewrite the host header](/http/#rewrite-host-header) and point to the port of your Wordpress install (usually port 80), like so:

    ```bash
    ngrok http 80 --host-header=rewrite --url www.your-site.dev
    ```
