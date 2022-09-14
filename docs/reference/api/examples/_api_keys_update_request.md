
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\":\"dev\", \"owner_id\": 123}"}' \
https://api.ngrok.com/api_keys/ak_2EloOcM84YPUMsaqvsSPz1s79H4
