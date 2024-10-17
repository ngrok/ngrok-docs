<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"enabled": true,
	"value": "{\n\t\"on_tcp_connect\": [\n\t\t{\n\t\t\t\"name\": \"AllowTLS1.3\",\n\t\t\t\"expressions\":[\"conn.tls.version.contains('1.3')\"],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"log\",\n\t\t\t\t\t\"config\":{\n\t\t\t\t\t\t\"metadata\":{\n\t\t\t\t\t\t\t\"message\":\"Invalid TLS Version\",\n\t\t\t\t\t\t\t\"edgeId\": \"edgtls_2na2LhywkFj4QrkrzjN2fL9CgRo\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"deny\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}"
}
```
