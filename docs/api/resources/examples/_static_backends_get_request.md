<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"address":"example.com:8080","description":"acme weighted","metadata":"{\"environment\": \"staging\"}","tls":{}}' \
https://api.ngrok.com/backends/static
