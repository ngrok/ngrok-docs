
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"add":{"X-Baz":"qux","X-Foo":"bar"},"remove":["X-Internal-Header"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2Ggv0QjGkcQpC961Gzio77eENhG/request_headers
