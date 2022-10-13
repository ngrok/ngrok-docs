
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}' \
https://api.ngrok.com/edges/https/edghts_2EmMPsuhWIP1LQXFBXVYmoVI5cz/routes/edghtsrt_2EmMQ7BWLDQEaxyoqxSQ9S0nFl3/request_headers
