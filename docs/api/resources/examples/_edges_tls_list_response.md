<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2ZGowrkr36rFKLYeJWsitMB2ex8",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2023-12-08T17:53:38Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2ZGowrkr36rFKLYeJWsitMB2ex8",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		},
		{
			"id": "edgtls_2ZGovXyRKLQYOM8hHyRHm4zMYO0",
			"description": "acme tls edge",
			"created_at": "2023-12-08T17:53:27Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2ZGovXyRKLQYOM8hHyRHm4zMYO0",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2ZGovZIhgHOGfq5ny1rB3PNZ4WJ",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2ZGovZIhgHOGfq5ny1rB3PNZ4WJ"
				}
			},
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		}
	],
	"uri": "https://api.ngrok.com/edges/tls",
	"next_page_uri": null
}
```
