---
title: SMTP Mail Servers
---

# Using ngrok with SMTP Mail Servers

The common port for the SMTP protocol used by most mail servers is `25` for insecure traffic and `465` for secure traffic. You can use an ngrok TCP endpoint to connect to a local mail server with the following command.

```bash
ngrok tcp 25
```

```bash
ngrok tcp 465
```

:::tip
ngrok works with whatever port your mail server is running on, including `587` or `2525`. Just adjust the command above accordingly.
:::

::::warning
TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account.
::::
