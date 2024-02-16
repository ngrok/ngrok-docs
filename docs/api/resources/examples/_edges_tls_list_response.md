<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-01-31T05:23:23Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2bhsNJgccQ8O6kJuOYiyd8sUZlK",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2bhsNJgccQ8O6kJuOYiyd8sUZlK"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2bhsLfsagOc5H2rxn3N2jovCvce",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2bhsLfsagOc5H2rxn3N2jovCvce"
				},
				"enabled": true
			},
			"created_at": "2024-01-31T05:23:10Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example.com:443"],
			"id": "edgtls_2bhsLj0DHi0PsjiQt5WqwKgFQH9",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2bhsLj0DHi0PsjiQt5WqwKgFQH9"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
