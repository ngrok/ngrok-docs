<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme https edge","hostports":["example.com:443"],"metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/edges/https
