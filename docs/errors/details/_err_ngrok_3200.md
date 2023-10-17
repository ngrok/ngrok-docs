### Additional Information

This means your ngrok agent is not online.

### The most common causes of this error are:

- You forgot to start your agent. First, try to restart your agent.
- The endpoint that ngrok has provided has changed. This can happen if you have restarted your ngrok agent due to a change in configuration or a session timeout. To avoid session timeouts, register for a [free ngrok account](https://dashboard.ngrok.com/signup) and install your authtoken by following this [getting started guide](https://dashboard.ngrok.com/get-started/your-authtoken).
- Your ngrok agent is having trouble reaching the ngrok service. Try running the [`ngrok diagnose`](https://ngrok.com/docs/agent/#troubleshooting-connectivity) command to check for connectivity issues.

If you have additional questions or none of these steps work for you, drop us a note at [support@ngrok.com](mailto:support@ngrok.com?subject=Help%20with%20ngrok%203200%20error).
