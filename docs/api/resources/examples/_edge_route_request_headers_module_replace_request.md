
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}' \
https://api.ngrok.com/edges/https/edghts_2NTVHrVVN3J0TjcR4B77qDPNLiQ/routes/edghtsrt_2NTVHlOarbWhwNf9KJ2TlYrWByE/request_headers
