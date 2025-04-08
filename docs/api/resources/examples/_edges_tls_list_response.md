<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-04-08T16:29:51Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2vSDsvzmtVUBYQ6eMWj5o9jF6Kv",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2vSDsvzmtVUBYQ6eMWj5o9jF6Kv"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2vSDrbrqHoRx3fHwysLXJspQpFD",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2vSDrbrqHoRx3fHwysLXJspQpFD"
				},
				"enabled": true
			},
			"created_at": "2025-04-08T16:29:40Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2vSDrVdgQNfrJuUKjFh2HjVmRSQ",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2vSDrVdgQNfrJuUKjFh2HjVmRSQ"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
