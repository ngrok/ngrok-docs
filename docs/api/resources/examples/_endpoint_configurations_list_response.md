<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoint_configurations": [
		{
			"backend": null,
			"basic_auth": null,
			"circuit_breaker": {
				"enabled": true,
				"error_threshold_percentage": 0.2,
				"num_buckets": 0,
				"rolling_window": 0,
				"tripped_duration": 0,
				"volume_threshold": 0
			},
			"compression": {
				"enabled": true
			},
			"created_at": "2024-04-19T20:23:20Z",
			"description": "web servers",
			"id": "ec_2fKmZkd0jlJ1jjzUK2wVXO7eKE5",
			"ip_policy": null,
			"mutual_tls": null,
			"oauth": null,
			"oidc": null,
			"request_headers": null,
			"response_headers": {
				"add": {
					"content-security-policy": "script-src 'self'",
					"x-frame-options": "DENY"
				},
				"enabled": true,
				"remove": []
			},
			"saml": null,
			"tls_termination": null,
			"type": "https",
			"uri": "https://api.ngrok.com/endpoint_configurations/ec_2fKmZkd0jlJ1jjzUK2wVXO7eKE5",
			"webhook_validation": null
		},
		{
			"backend": null,
			"basic_auth": null,
			"circuit_breaker": null,
			"compression": null,
			"created_at": "2024-04-19T20:23:20Z",
			"description": "app servers",
			"id": "ec_2fKmZe2W0yU3XrWYjJGviCEm2Ke",
			"ip_policy": null,
			"mutual_tls": null,
			"oauth": null,
			"oidc": null,
			"request_headers": {
				"add": {
					"x-frontend": "ngrok"
				},
				"enabled": true,
				"remove": ["cache-control"]
			},
			"response_headers": null,
			"saml": null,
			"tls_termination": null,
			"type": "https",
			"uri": "https://api.ngrok.com/endpoint_configurations/ec_2fKmZe2W0yU3XrWYjJGviCEm2Ke",
			"webhook_validation": null
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoint_configurations"
}
```
