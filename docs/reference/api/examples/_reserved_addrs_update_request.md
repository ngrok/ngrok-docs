
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2ElyEROkcAOb0osmFRxN2mKnRK0"}' \
https://api.ngrok.com/reserved_addrs/ra_2Ely60va0FXAtNMmmojsEPmQM0W
