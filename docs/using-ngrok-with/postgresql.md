---
title: PostgreSQL
---

# Using ngrok with PostgreSQL

Here's a quick [guide on running a local postgresql instance](https://docs.meroxa.com/guides/how-to-expose-postgresql-remotely-using-ngrok/) on you local machine and getting a public address for it using ngrok. After installing the database, you can connect to it using a standard ngrok TCP tunnel sending traffic to port `5432`.

```bash
ngrok tcp 5432
```

::::warning
TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account.
::::

Once ngrok is forwarding traffic to your PostgreSQL service, you can use the TCP address provided to connect to it remotely.

```bash
psql -h 0.tcp.ngrok.io -p 12345 -U postgres -d postgres
```
