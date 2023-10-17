---
title: Virtual hosts (MAMP, WAMP, etc)
---

# Using ngrok with Virtual hosts (MAMP, WAMP, etc)

---

Popular web servers such as MAMP and WAMP rely on a technique popularly referred to as 'Virtual Hosting' which means that they consult the HTTP request's `Host` header to determine which of their multiple sites they should serve. To expose a site like this it is possible to ask ngrok to rewrite the `Host` header of all tunneled requests to match what your web server expects. You can do this by using the `--host-header` option (see: [Rewriting the Host header](/http/#rewrite-host-header)) to pick which virtual host you want to target. For example, to route to your local site `myapp.dev`, you would run:

    ngrok http --host-header=myapp.dev 80

You can also use `rewrite` to tell ngrok to use the local address hostname.

    ngrok http --host-header=rewrite 80
