---
title: Django
---

# Using ngrok with Django
------------

Django is a high-level Python web framework that enables the rapid development of secure and maintainable websites. It takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.

You can use Django with ngrok to make your Django application accessible over the internet during development. This is useful when you want to test your Django app from a remote location or share it with others for testing or collaboration.

To use Django with ngrok, you first need to install and set up Django on your local machine. Then, start the Django development server by running the following command:

```
python manage.py runserver
```

This will start the server and bind it to the default host and port (127.0.0.1:8000).

Next, install and start ngrok by running the following command:

```
ngrok http 8000
```

This will start ngrok and create a secure tunnel to your Django development server. Ngrok will display a public URL that you can use to access your Django app from the internet.

You can now access your Django app from any device by visiting the ngrok URL in a web browser. Any changes you make to your app will be reflected in real-time, thanks to the tunnel created by ngrok.

If you're looking to natively embed the ngrok agent into your Django application, you can leverage the [pyngrok project](https://pyngrok.readthedocs.io/en/latest/integrations.html#django) to start a tunnel anytime you start the Django Dev Server.
