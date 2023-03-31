
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"terminate_at":"edge","min_version":"1.3"}' \
https://api.ngrok.com/edges/tls/edgtls_2NTVI3XF1XaPMaX5NXzbJkFbmVx/tls_termination
