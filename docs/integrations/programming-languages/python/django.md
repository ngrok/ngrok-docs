---
title: Django
---

# Using ngrok with Django
------------

:::tip
This article assumes you have Python, PIP, and Django already installed.
:::

### Agent Management

If you're looking to natively embed the ngrok agent into your Django application, you can leverage the [pyngrok project](https://pyngrok.readthedocs.io/en/latest/integrations.html#django) to start a tunnel anytime you start the Django Dev Server.

### Python SDK (beta)
You can also use the beta [ngrok Python SDK](https://github.com/ngrok/ngrok-python) to start a tunnel to the Django server via a [ngrok ASGI runner](https://github.com/ngrok/ngrok-python#asgi-runner---tunnels-to-uvicorn-gunicorn-django-and-more-with-no-code) or embedding in [manage.py or asgi.py](https://github.com/ngrok/ngrok-python#frameworks).

*   [ngrok SDK on PyPi](https://pypi.org/project/ngrok/)
*   [ngrok SDK on Github](https://github.com/ngrok/ngrok-python)
*   [Reference Documentation](https://ngrok.github.io/ngrok-python/)
