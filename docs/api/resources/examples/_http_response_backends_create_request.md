<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme http response","metadata":"{\"environment\": \"staging\"}","body":"I'm a teapot","headers":{"Content-Type":"text/plain"},"status_code":418}' \
https://api.ngrok.com/backends/http_response
