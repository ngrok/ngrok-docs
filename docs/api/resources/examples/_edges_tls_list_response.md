<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-18T22:20:32Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uVawK1vLcOQJYTdhjRciXoaB50",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uVawK1vLcOQJYTdhjRciXoaB50"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uVav6ZjFX8E1psyX4unyS7B2sS",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uVav6ZjFX8E1psyX4unyS7B2sS"
				},
				"enabled": true
			},
			"created_at": "2025-03-18T22:20:22Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uVav6N9jJWpGGw7Jl52OdbKdyu",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uVav6N9jJWpGGw7Jl52OdbKdyu"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
