<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoint_configurations": [
		{
			"id": "ec_2bMmTvu5fchv62xjqyKyxyruTmp",
			"type": "https",
			"description": "web servers",
			"created_at": "2024-01-23T18:08:52Z",
			"uri": "https://api.ngrok.com/endpoint_configurations/ec_2bMmTvu5fchv62xjqyKyxyruTmp",
			"basic_auth": null,
			"circuit_breaker": {
				"enabled": true,
				"tripped_duration": 0,
				"rolling_window": 0,
				"num_buckets": 0,
				"volume_threshold": 0,
				"error_threshold_percentage": 0.2
			},
			"compression": {
				"enabled": true
			},
			"request_headers": null,
			"response_headers": {
				"enabled": true,
				"add": {
					"content-security-policy": "script-src 'self'",
					"x-frame-options": "DENY"
				},
				"remove": []
			},
			"ip_policy": null,
			"mutual_tls": null,
			"tls_termination": null,
			"webhook_validation": null,
			"oauth": null,
			"saml": null,
			"oidc": null,
			"backend": null
		},
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
			"ip_policy": null,
			"mutual_tls": null,
			"tls_termination": null,
			"webhook_validation": null,
			"oauth": null,
			"saml": null,
			"oidc": null,
			"backend": null
		}
	],
	"uri": "https://api.ngrok.com/endpoint_configurations",
	"next_page_uri": null
}
```
