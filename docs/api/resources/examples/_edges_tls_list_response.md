<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-15T10:06:52Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uLgLTblLehfYOxK1XQB8mpQ6Kx",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uLgLTblLehfYOxK1XQB8mpQ6Kx"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uLgK6BkKswqAJev70J6QKokB3l",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uLgK6BkKswqAJev70J6QKokB3l"
				},
				"enabled": true
			},
			"created_at": "2025-03-15T10:06:41Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uLgK8TQLiHJX9oqk0dVqjKywF7",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uLgK8TQLiHJX9oqk0dVqjKywF7"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
