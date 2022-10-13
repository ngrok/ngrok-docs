
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"min_version":"1.3"}' \
https://api.ngrok.com/edges/https/edghts_2EmMQ8uwGcuVKKVE0mgcXDfJLPs/tls_termination
