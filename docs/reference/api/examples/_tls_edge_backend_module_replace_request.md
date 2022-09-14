
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2ElyGia48mycg2a0y8m9RYsSCis"}' \
https://api.ngrok.com/edges/tls/edgtls_2ElyGgv1RjmyoIdO0BBC3D0L43g/backend
