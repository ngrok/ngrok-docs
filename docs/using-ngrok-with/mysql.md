---
title: MySQL
---

# Using ngrok with MySQL

To connect to a database using ngrok, you will need to use a TCP tunnel. Once you have your database up and running, you should be able to remotely connect to it using an ngrok TCP tunnel and the default port of `3306`.

```bash
ngrok tcp 3306
```

::::warning
TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account.
::::

You can then use the ngrok TCP address and port for any tool that you'd like to use to remotely connect to your database.

The following guides offer step-by-step instructions for configuring site-to-site connectivity with your database.

- [Configure Site-to-Site Connectivity for
  Databases](/guides/site-to-site-connectivity/dbs.mdx)
- [Configure Site-to-Site Connectivity for Databases with mTLS](/guides/site-to-site-connectivity/dbs-mtls.mdx)
