### Additional Info

ngrok limits the number of inbound connections to your tunnels. Limits are imposed on connections, not requests. If your HTTP clients use persistent connections aka HTTP keep-alive (most modern ones do), you'll likely never hit this limit. ngrok will return a 429 response to HTTP connections that exceed the rate limit. Connections to TCP and TLS tunnels violating the rate limit will be closed without a response.
