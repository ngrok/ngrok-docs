
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme tunnel group","metadata":"{\"environment\": \"staging\"}","labels":{"baz":"qux","foo":"bar"}}' \
https://api.ngrok.com/backends/tunnel_group
