<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-02T10:07:17Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2tkxn8lxlOxfUYPa5Qo0pGjSvVX",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2tkxn8lxlOxfUYPa5Qo0pGjSvVX"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2tkxlp1CBsVUJlhjBq7RHpMkWEH",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2tkxlp1CBsVUJlhjBq7RHpMkWEH"
				},
				"enabled": true
			},
			"created_at": "2025-03-02T10:07:06Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2tkxlmC5IkBwAuvGJAIkVCDc1tU",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2tkxlmC5IkBwAuvGJAIkVCDc1tU"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
