---
title: MongoDB
---

# Using ngrok with MongoDB

As noted in this [StackOverflow post](https://stackoverflow.com/a/59716766/17282727), you can use a TCP tunnel to host your local MongoDB server. Open an ngrok TCP tunnel to your local MongoDB service which is usually running on port `27017`.

```bash
ngrok tcp 27017
```

::::warning
TCP endpoints are only available on a free plan after [adding a valid payment method](https://dashboard.ngrok.com/settings#id-verification) to your account.
::::
