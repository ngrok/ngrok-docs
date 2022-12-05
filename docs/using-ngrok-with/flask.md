---
title: Flask
---

# Using ngrok with Flask
------------

To share a local Flask development server with someone else, simply run: `ngrok http 5000`.

If you're looking to natively embed the ngrok agent into your Flask development flow, you can leverage the [pyngrok project](https://pyngrok.readthedocs.io/en/latest/integrations.html#flask) so that a tunnel is created each time you type `flask run`.

Note: For users on the latest MacOS, there is an issue where the default port of 5000 is used by Apple AirPlay Receiver. You can use a different port for your Flask app or see this [Stack Overflow post for disabling the AirPlay Receiver service](https://stackoverflow.com/a/6982933/7282727).

