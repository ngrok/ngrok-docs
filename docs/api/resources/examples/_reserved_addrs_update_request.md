
#### Example Request
```bash
curl \
-X PATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2NTVGguD2ttxSD5NMcng2lM4sIn"}' \
https://api.ngrok.com/reserved_addrs/ra_2NTUzbDPGnHYVI8K3hYBaPfGia3
