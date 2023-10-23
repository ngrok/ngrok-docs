<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoint_configurations": [
		{
			"id": "ec_2XB9tKhmH7GW4KByyHas5c5l7ub",
			"type": "https",
			"description": "web servers",
			"created_at": "2023-10-23T20:10:18Z",
			"uri": "https://api.ngrok.com/endpoint_configurations/ec_2XB9tKhmH7GW4KByyHas5c5l7ub",
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
