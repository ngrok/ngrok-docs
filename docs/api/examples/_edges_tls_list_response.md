<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-12-04T10:08:43Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2pkP6Lbyahv0g1zxHsMtlhqbls2",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2pkP6Lbyahv0g1zxHsMtlhqbls2"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2pkP4vhknwqssE8xc2oBowjCAux",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2pkP4vhknwqssE8xc2oBowjCAux"
				},
				"enabled": true
			},
			"created_at": "2024-12-04T10:08:32Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2pkP4w4tkuomnk1pkHE9o3fIzip",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2pkP4w4tkuomnk1pkHE9o3fIzip"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
