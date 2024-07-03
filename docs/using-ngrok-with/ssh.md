---
title: SSH
---

# Using ngrok with SSH

ngrok's TCP tunnels are perfect for SSH traffic. Simply start a TCP tunnel to port 22 and you should be all set.

```sh
ngrok tcp 22
```

::::warning
TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account.
::::

When connecting through the ngrok TCP address, make sure you specify the port separately.

```sh
ssh -p PORT user@NGROK_TCP_ADDRESS
```
