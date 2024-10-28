<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"value":"{\n\t\"on_tcp_connect\": [\n\t\t{\n\t\t\t\"name\": \"AllowTLS1.3\",\n\t\t\t\"expressions\":[\"conn.tls.version.contains('1.3')\"],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"log\",\n\t\t\t\t\t\"config\":{\n\t\t\t\t\t\t\"metadata\":{\n\t\t\t\t\t\t\t\"message\":\"Invalid TLS Version\",\n\t\t\t\t\t\t\t\"edgeId\": \"edgtls_2o4XYtJiRb2BgJRjT8vdoxKR8AY\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"deny\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}"}' \
https://api.ngrok.com/edges/tls/edgtls_2o4XYtJiRb2BgJRjT8vdoxKR8AY/traffic_policy
```
