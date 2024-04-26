<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-04-19T20:23:47Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2fKmd9RV0nOPBmp2iPkpjzAomBd",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2fKmd9RV0nOPBmp2iPkpjzAomBd"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2fKmbgvczNt6xkgCZ4zIfjoOfuV",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2fKmbgvczNt6xkgCZ4zIfjoOfuV"
				},
				"enabled": true
			},
			"created_at": "2024-04-19T20:23:36Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2fKmbgKxUc6U7I84WmiiE90wx0A",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2fKmbgKxUc6U7I84WmiiE90wx0A"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
