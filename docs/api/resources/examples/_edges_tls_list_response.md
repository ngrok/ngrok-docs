<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-11T18:37:48Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uBNzNUlC82EYpcRZHKNKfSeEbU",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uBNzNUlC82EYpcRZHKNKfSeEbU"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uBNyDB5p7FNpnkI7Xct4DtS7fj",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uBNyDB5p7FNpnkI7Xct4DtS7fj"
				},
				"enabled": true
			},
			"created_at": "2025-03-11T18:37:39Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uBNyDCt3i8RZQsxblXZTI0wDA5",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uBNyDCt3i8RZQsxblXZTI0wDA5"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
