
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2NTVHvzjCPATQnClN8n9zKmBLQJ"]}' \
https://api.ngrok.com/edges/tcp/edgtcp_2NTVHujZeaTUbzIFIU0cRetPSnh/ip_restriction
