<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"body":"I'm a teapot","description":"acme http response","headers":{"Content-Type":"text/plain"},"metadata":"{\"environment\": \"staging\"}","status_code":418}' \
https://api.ngrok.com/backends/http_response
