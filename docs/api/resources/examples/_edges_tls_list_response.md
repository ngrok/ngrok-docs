<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-04-29T18:29:41Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2fmnzHrUO3kOhkHJj6V7toezAou",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2fmnzHrUO3kOhkHJj6V7toezAou"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2fmny1ZGmY2ZJ2lWs4QFxNYASNB",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2fmny1ZGmY2ZJ2lWs4QFxNYASNB"
				},
				"enabled": true
			},
			"created_at": "2024-04-29T18:29:31Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2fmny1YRN4woGm4H466PQ8jMzyP",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2fmny1YRN4woGm4H466PQ8jMzyP"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
