---
title: Flask
---

# Using ngrok with Flask

:::tip
This article assumes you have Python, PIP, and Flask already installed.
:::

### ngrok Agent

To share a local Flask development server with someone else, simply run: `ngrok http 5000`.

You may also need to update your `SERVER_NAME` and `APPLICATION_ROOT` in your app configuration to the ngrok endpoint. See the [Flask docs](https://flask.palletsprojects.com/en/3.0.x/config/#builtin-configuration-values) for more information.

Note: For users on the latest MacOS, there is an issue where the default port of 5000 is used by Apple AirPlay Receiver. You can use a different port for your Flask app or see this [Stack Overflow post for disabling the AirPlay Receiver service](https://stackoverflow.com/a/6982933/7282727).

### Python SDK

You can also use the [ngrok Python SDK](https://github.com/ngrok/ngrok-python) to start a tunnel to the Flask dev server via [python code](https://github.com/ngrok/ngrok-python#frameworks), or using a [ngrok ASGI runner](https://github.com/ngrok/ngrok-python#asgi-runner---tunnels-to-uvicorn-gunicorn-django-and-more-with-no-code) with an [ASGI Wrapper](https://flask.palletsprojects.com/en/2.3.x/deploying/asgi/).

- [ngrok SDK on PyPi](https://pypi.org/project/ngrok/)
- [ngrok SDK on Github](https://github.com/ngrok/ngrok-python)
- [Reference Documentation](https://ngrok.github.io/ngrok-python/)
