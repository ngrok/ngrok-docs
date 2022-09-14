
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2ElcuYMfNFlYv8D2qKWwv6NWeZF"}' \
https://api.ngrok.com/reserved_addrs/ra_2Elce3fybaFkJdEQP39IoLQx0ck
