<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"value":"{\n\t\"inbound\": [\n\t\t{\n\t\t\t\"name\": \"AllowTLS1.3\",\n\t\t\t\"expressions\":[\"conn.tls.version.contains('1.3')\"],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"log\",\n\t\t\t\t\t\"config\":{\n\t\t\t\t\t\t\"metadata\":{\n\t\t\t\t\t\t\t\"message\":\"Invalid TLS Version\",\n\t\t\t\t\t\t\t\"edgeId\": \"edgtls_2k5okwZ6bY5Y0fdpt0fXOBv0ugH\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"deny\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}"}' \
https://api.ngrok.com/edges/tls/edgtls_2k5okwZ6bY5Y0fdpt0fXOBv0ugH/traffic_policy
```
