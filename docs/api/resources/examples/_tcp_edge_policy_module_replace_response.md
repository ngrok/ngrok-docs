<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"enabled": true,
	"inbound": [
		{
			"actions": [
				{
					"config": null,
					"type": "deny"
				}
			],
			"expressions": ["conn.client_ip == '192.0.2.0'"],
			"name": "Block IP"
		}
	],
	"outbound": null
}
```
