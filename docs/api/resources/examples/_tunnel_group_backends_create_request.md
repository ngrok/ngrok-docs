<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme tunnel group","labels":{"baz":"qux","foo":"bar"},"metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/backends/tunnel_group
