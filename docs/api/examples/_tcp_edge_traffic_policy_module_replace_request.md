<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"value":"{\"on_tcp_connect\":[{\"name\":\"Block IP\",\"expressions\":[\"conn.client_ip == '192.0.2.0'\"],\"actions\":[{\"type\":\"deny\"}]}]}"}' \
https://api.ngrok.com/edges/tcp/edgtcp_2qL7WFjCU5QsgH3co6Mzo526ZQQ/traffic_policy
```
