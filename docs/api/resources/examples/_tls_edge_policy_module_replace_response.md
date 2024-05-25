<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"enabled": true,
	"inbound": [
		{
			"actions": [
				{
					"config": {
						"metadata": {
							"edgeId": "edgtls_2gsqMyx0XCpx46XH86fGjUGn46h",
							"message": "Invalid TLS Version"
						}
					},
					"type": "log"
				},
				{
					"config": null,
					"type": "deny"
				}
			],
			"expressions": ["conn.tls.version.contains('1.3')"],
			"name": "AllowTLS1.3"
		}
	],
	"outbound": null
}
```
