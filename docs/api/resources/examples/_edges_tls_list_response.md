<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-04-25T22:55:39Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2wEzty4G2S0iYvlYfXv4230wmnW",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2wEzty4G2S0iYvlYfXv4230wmnW"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2wEzsafyyMEN7kXQwWzqBjvkC9k",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2wEzsafyyMEN7kXQwWzqBjvkC9k"
				},
				"enabled": true
			},
			"created_at": "2025-04-25T22:55:28Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2wEzsc8Y1nsUS2KNSgCJwut2wCO",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2wEzsc8Y1nsUS2KNSgCJwut2wCO"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
