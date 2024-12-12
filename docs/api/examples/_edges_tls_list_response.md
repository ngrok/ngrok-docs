<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-12-12T17:31:37Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2q7rx14a9thBCaHYhLEgkxvvYDO",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2q7rx14a9thBCaHYhLEgkxvvYDO"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2q7rvaU803qI7izCXoSEEkGGyeE",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2q7rvaU803qI7izCXoSEEkGGyeE"
				},
				"enabled": true
			},
			"created_at": "2024-12-12T17:31:25Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2q7rvWjUw5fYjgT0jnw2R7yVfXi",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2q7rvWjUw5fYjgT0jnw2R7yVfXi"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
