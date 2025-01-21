<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-01-21T17:39:25Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2rwrq4TxQJ6diNBUM16nvpO6e8M",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2rwrq4TxQJ6diNBUM16nvpO6e8M"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2rwrolM5lOAVDYBoctb9PXyAYyZ",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2rwrolM5lOAVDYBoctb9PXyAYyZ"
				},
				"enabled": true
			},
			"created_at": "2025-01-21T17:39:15Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2rwrong2WVOcP3Rw7Typ6pYRUzR",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2rwrong2WVOcP3Rw7Typ6pYRUzR"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
