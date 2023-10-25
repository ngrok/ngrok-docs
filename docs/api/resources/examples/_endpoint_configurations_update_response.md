<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"id": "ec_2XH3plGN0NHiPlr0McxGhlrzibv",
	"type": "https",
	"description": "app servers",
	"created_at": "2023-10-25T22:19:22Z",
	"uri": "https://api.ngrok.com/endpoint_configurations/ec_2XH3plGN0NHiPlr0McxGhlrzibv",
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
				"id": "ipp_2XH3ph4jKfzw65zSJ6swvc9KAih",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2XH3ph4jKfzw65zSJ6swvc9KAih"
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
