<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-26T10:07:04Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uqkjCjG1fxvWcMdTR5kHY9tJ4W",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uqkjCjG1fxvWcMdTR5kHY9tJ4W"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uqkhqiOagWfbHlyjwJCI4tpX0a",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uqkhqiOagWfbHlyjwJCI4tpX0a"
				},
				"enabled": true
			},
			"created_at": "2025-03-26T10:06:53Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uqkhoKByt30Uj2q31IES9m1kRU",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uqkhoKByt30Uj2q31IES9m1kRU"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
