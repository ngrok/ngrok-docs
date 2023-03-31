
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_2NTVHwTtFAb1lchLasmoNBQwMLM/routes/edghtsrt_2NTVHx2wLSZR1hp11m21xKwjVRr/websocket_tcp_converter
