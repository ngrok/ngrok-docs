<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"id": "ec_2XB9tIO5F46siaPT0nNnHVYwNlX",
	"type": "https",
	"description": "app servers",
	"created_at": "2023-10-23T20:10:18Z",
	"uri": "https://api.ngrok.com/endpoint_configurations/ec_2XB9tIO5F46siaPT0nNnHVYwNlX",
	"basic_auth": null,
	"circuit_breaker": null,
	"compression": null,
	"request_headers": {
		"enabled": true,
		"add": {
			"x-frontend": "ngrok"
		},
		"remove": ["cache-control"]
	},
	"response_headers": null,
	"ip_policy": {
		"enabled": true,
		"ip_policies": [
			{
				"id": "ipp_2XB9tDvP5XLFJJQ1e8Oxl1mhocS",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2XB9tDvP5XLFJJQ1e8Oxl1mhocS"
			}
		]
	},
	"mutual_tls": null,
	"tls_termination": null,
	"webhook_validation": null,
	"oauth": null,
	"saml": null,
	"oidc": null,
	"backend": null
}
```
