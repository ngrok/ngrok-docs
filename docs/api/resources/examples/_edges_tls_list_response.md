<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-02-16T19:35:36Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2cSjzX6pa6EUuGOEOtztSMqPK6l",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2cSjzX6pa6EUuGOEOtztSMqPK6l"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2cSjyGQKTgGPdD7IHYSLPwTnIxm",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2cSjyGQKTgGPdD7IHYSLPwTnIxm"
				},
				"enabled": true
			},
			"created_at": "2024-02-16T19:35:26Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2cSjyGeNROACDCqWqgVKmVny8Qj",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2cSjyGeNROACDCqWqgVKmVny8Qj"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
