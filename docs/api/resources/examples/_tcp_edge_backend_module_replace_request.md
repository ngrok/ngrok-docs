
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2EmMQIcFNSbbM3DQ0VfP9wnN07B"}' \
https://api.ngrok.com/edges/tcp/edgtcp_2EmMQM2rFjKaluy28VMHENumzB2/backend
