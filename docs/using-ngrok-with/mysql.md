---
title: MySQL
---

# Using ngrok with MySQL
------------

Hevo provides a great guide on [using ngrok to connect to a local MySQL database](https://docs.hevodata.com/sources/dbfs/databases/connecting-to-a-local-db/). Once you have your database up and running, you should be able to remotely connect to it using an ngrok TCP tunnel and the default port of 3306.

```bash
ngrok tcp 3306
```

You can then use the ngrok TCP address and port for any tool that you'd like to use to remotely connect to your database.

