<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"id": "ec_2bMmTq8fR6fMmuFWoaoKEFoGtme",
	"type": "https",
	"description": "app servers",
	"created_at": "2024-01-23T18:08:52Z",
	"uri": "https://api.ngrok.com/endpoint_configurations/ec_2bMmTq8fR6fMmuFWoaoKEFoGtme",
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
				"id": "ipp_2bMmTodm6jRRNwVxsjyu2B2KsWp",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2bMmTodm6jRRNwVxsjyu2B2KsWp"
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
