
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}' \
https://api.ngrok.com/edges/https/edghts_2ElyGGztZ8bThTV71SpvZU3FguB/routes/edghtsrt_2ElyGHZGNI9SVulUju4rO7N0pgG/request_headers
