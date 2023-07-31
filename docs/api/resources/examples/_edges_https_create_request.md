<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme https edge","metadata":"{\"environment\": \"staging\"}","hostports":["example.com:443"]}' \
https://api.ngrok.com/edges/https
