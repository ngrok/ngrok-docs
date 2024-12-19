<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-12-17T10:07:11Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2qL7WFZd282cmBc8qcz5p555eKR",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2qL7WFZd282cmBc8qcz5p555eKR"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2qL7UoZdtLHJRmLuGW9wJGrWEf1",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2qL7UoZdtLHJRmLuGW9wJGrWEf1"
				},
				"enabled": true
			},
			"created_at": "2024-12-17T10:06:59Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2qL7UjovDwglX1UcHYF9EY5shnm",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2qL7UjovDwglX1UcHYF9EY5shnm"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
