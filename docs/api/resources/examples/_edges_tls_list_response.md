<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-04-25T22:52:20Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2fc1R3TQy6Ij3YYI2MjAdu6xXsY",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2fc1R3TQy6Ij3YYI2MjAdu6xXsY"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2fc1PnHcP4pF5oqoQ3M1NPnOV79",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2fc1PnHcP4pF5oqoQ3M1NPnOV79"
				},
				"enabled": true
			},
			"created_at": "2024-04-25T22:52:10Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2fc1PtTn5yYh7a7JcI6It7ujny1",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2fc1PtTn5yYh7a7JcI6It7ujny1"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
