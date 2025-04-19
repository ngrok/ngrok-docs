<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"add":{"x-frontend":"ngrok"},"enabled":true,"remove":["cache-control"]}' \
https://api.ngrok.com/edges/https/edghts_2vwXil8L3AWOhNl44jCJDyd2ArH/routes/edghtsrt_2vwXir4TAssvx1m5neRGlYdndq8/request_headers
