---
title: Flask
---

# Using ngrok with Flask
------------

Flask is a web framework for Python that is designed to be lightweight and easy to use. It allows you to build web applications quickly, using minimal code and with the ability to scale up as your application grows.

To share a local Flask development server with someone else, follow these steps:

1. Run your flask app as you usually would either with your `flask` command or `python -m flask`.
2. Run:

```shell
ngrok http 5000
```

If you're looking to natively embed the ngrok agent into your Flask development flow, you can leverage the [pyngrok project](https://pyngrok.readthedocs.io/en/latest/integrations.html#flask) so that a tunnel is created each time you type `flask run`.

Note: For users on the latest MacOS, there is an issue where the default port of 5000 is used by Apple AirPlay Receiver. You can use a different port for your Flask app or see this [Stack Overflow post for disabling the AirPlay Receiver service](https://stackoverflow.com/a/6982933/7282727).

