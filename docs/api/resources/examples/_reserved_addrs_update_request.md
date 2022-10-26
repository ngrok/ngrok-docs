
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2Gguzh743tx1zj7mRb9YFJEbqfc"}' \
https://api.ngrok.com/reserved_addrs/ra_2GguwGCCTOFdxQS64Eq9CX9SFXA
