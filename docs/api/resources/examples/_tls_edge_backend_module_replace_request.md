
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2NTVHxvr1Jr3vMy7VDkrMH37649"}' \
https://api.ngrok.com/edges/tls/edgtls_2NTVHwOHGGW6gsqXvpD18w2jUM4/backend
