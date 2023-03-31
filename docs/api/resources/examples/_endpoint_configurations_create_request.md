
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"type":"https","description":"app servers","request_headers":{"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}}' \
https://api.ngrok.com/endpoint_configurations
