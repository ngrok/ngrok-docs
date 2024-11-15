<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-11-15T17:26:30Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2otazqgYbucWhye87UkOjpmhLmF",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2otazqgYbucWhye87UkOjpmhLmF"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2otayQoKLN6hs9P1uvflQ4iBfdE",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2otayQoKLN6hs9P1uvflQ4iBfdE"
				},
				"enabled": true
			},
			"created_at": "2024-11-15T17:26:19Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2otayO9m98zAAYh05BrJj7WbfhZ",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2otayO9m98zAAYh05BrJj7WbfhZ"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
