<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"add":{"X-Baz":"qux","X-Foo":"bar"},"remove":["X-Internal-Header"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2fKmcTau5rdPIH1La2Xpb8K5e5e/request_headers
```
