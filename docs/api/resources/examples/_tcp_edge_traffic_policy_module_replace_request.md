<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"value":"{\"inbound\":[{\"name\":\"Block IP\",\"expressions\":[\"conn.client_ip == '192.0.2.0'\"],\"actions\":[{\"type\":\"deny\"}]}]}"}' \
https://api.ngrok.com/edges/tcp/edgtcp_2k5okvUUpBtMV9Ub298zNLwS81Y/traffic_policy
```
