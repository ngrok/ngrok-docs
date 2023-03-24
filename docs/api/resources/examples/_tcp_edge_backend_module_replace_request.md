
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2NTVHxllAmGfJT8sxnUZoYDL9wG"}' \
https://api.ngrok.com/edges/tcp/edgtcp_2NTVHxZSSaJ8ZbbpcuFMxroJcX0/backend
