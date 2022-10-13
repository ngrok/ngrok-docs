
#### Example Request

```bash 
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2EmMOh2YccHlrwcTyxsvkAJfIM1"}' \
https://api.ngrok.com/reserved_addrs/ra_2EmMGu90XN1m0A3DdQ4UBRckm5t
