### Additional Information

This error usually occurs when users are hosting a secure upstream service (`https://localhost:[PORT]`) but have not configured the ngrok agent to send HTTPS traffic to it.

### Possible Solutions

When starting the ngrok agent, use the full upstream service address. For example: `ngrok http https://localhost:8081`.
