### Why am I seeing ERR_NGROK_3200?

This error means that your endpoint wasn't found. This usually happens when the ngrok agent serving your endpoint is not running or has crashed. It can also happen if you accidentally enter the wrong endpoint URL into the browser and we try to route you to an endpoint that doesn't exist.

### Troubleshooting ERR_NGROK_3200

1. Make sure the ngrok agent is running on your local device. You can start the ngrok agent with the CLI command `ngrok http [port]`.
2. If you're using a custom domain, make sure you add the domain to the agent start command: `ngrok http [port] --url [your-url]`.
3. Once you've confirmed that the ngrok agent is running, check for your endpoint in your ngrok dashboard at https://dashboard.ngrok.com/endpoints. Your ngrok dashboard will show all of the active endpoints under your account.
