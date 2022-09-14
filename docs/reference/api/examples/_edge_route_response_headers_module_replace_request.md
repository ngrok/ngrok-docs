
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"Content-Security-Policy":"script-src 'self'","X-Frame-Options":"DENY"}}' \
https://api.ngrok.com/edges/https/edghts_2EmMQ3FnvRiSKdbZWztfHkevMUu/routes/edghtsrt_2EmMQ8ACYlSuA3ZGOjZ1oEFxk7M/response_headers
