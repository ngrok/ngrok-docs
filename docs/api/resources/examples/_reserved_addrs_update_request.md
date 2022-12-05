
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2IEh2DdDegaC2nx7asXNUnjD3K8"}' \
https://api.ngrok.com/reserved_addrs/ra_2IEgz7JdHEWwr7T3zKf0aT6xnYd
