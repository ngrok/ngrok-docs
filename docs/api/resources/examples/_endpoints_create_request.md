<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"bindings":["public"],"description":"sample cloud endpoint","metadata":"{\"environment\": \"staging\"}","traffic_policy":"{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}","type":"cloud","url":"https://endpoint-example2.com:443"}' \
https://api.ngrok.com/endpoints
