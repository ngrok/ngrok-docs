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
							"edgeId": "edgtls_2fc1RFeqse38JUBgYrWli85Zv1o",
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
			"expressions": ["conn.TLS.Version.contains('1.3')"],
			"name": "AllowTLS1.3"
		}
	],
	"outbound": null
}
```
