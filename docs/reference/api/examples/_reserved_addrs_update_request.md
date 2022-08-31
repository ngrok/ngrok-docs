
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2E8b23wwFQXhdgM2pjdn89c35wR"}' \
https://api.ngrok.com/reserved_addrs/ra_2E8aoDAN7asadf9hITVFeyfStpV
