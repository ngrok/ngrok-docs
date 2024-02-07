<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-02-07T17:37:27Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2c35VoY64NvC2IQIvXORiIc8f86",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2c35VoY64NvC2IQIvXORiIc8f86"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2c35ULRnmV3DlGp6I9Knq6HRSKg",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2c35ULRnmV3DlGp6I9Knq6HRSKg"
				},
				"enabled": true
			},
			"created_at": "2024-02-07T17:37:15Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2c35UI6wWz92M0ivpL3rLHEbRri",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2c35UI6wWz92M0ivpL3rLHEbRri"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
