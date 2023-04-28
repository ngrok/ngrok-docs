---
title: Flask
---

# Using ngrok with Flask
------------

:::tip
This article assumes you have Python, PIP, and Flask already installed.
:::

To share a local Flask development server with someone else, simply run: `ngrok http 5000`.

Note: For users on the latest MacOS, there is an issue where the default port of 5000 is used by Apple AirPlay Receiver. You can use a different port for your Flask app or see this [Stack Overflow post for disabling the AirPlay Receiver service](https://stackoverflow.com/a/6982933/7282727).

### Agent Management

If you're looking to natively embed the ngrok agent into your Flask development flow, you can leverage the [pyngrok project](https://pyngrok.readthedocs.io/en/latest/integrations.html#flask) so that a tunnel is created each time you type `flask run`.

### Python SDK (beta)
You can also use the beta [ngrok Python SDK](https://github.com/ngrok/ngrok-py) to start a tunnel to the Flask dev server via [python code](https://github.com/ngrok/ngrok-py#frameworks), or using a [ngrok ASGI runner](https://github.com/ngrok/ngrok-py#asgi-runner---tunnels-to-uvicorn-gunicorn-django-and-more-with-no-code) with an [ASGI Wrapper](https://flask.palletsprojects.com/en/2.3.x/deploying/asgi/).

*   [ngrok SDK on PyPi](https://pypi.org/project/ngrok/)
*   [ngrok SDK on Github](https://github.com/ngrok/ngrok-py)
*   [Reference Documentation](https://ngrok.github.io/ngrok-py/)