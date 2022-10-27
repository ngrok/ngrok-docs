
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2GjEygSHg3FBLMjCMgpkWlUYG6e"}' \
https://api.ngrok.com/reserved_addrs/ra_2GjEvLfc9q9qW9W7eLggKftitiz
