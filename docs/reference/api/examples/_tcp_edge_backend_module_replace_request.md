
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2ElyGkU4R9G3ffO2c8r0Qh5iTUI"}' \
https://api.ngrok.com/edges/tcp/edgtcp_2ElyGkOI7Bv91oGGCZAPnNzfPQs/backend
