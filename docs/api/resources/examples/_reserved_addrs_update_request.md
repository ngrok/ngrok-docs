
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2GjCQqX5pvrT5RFdeBmBLU7zIbV"}' \
https://api.ngrok.com/reserved_addrs/ra_2GjCNXJVnaLN3Ndc1qeBe2HhRbb
