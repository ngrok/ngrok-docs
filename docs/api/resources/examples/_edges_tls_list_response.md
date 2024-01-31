<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2bMmXNzsXJisOhV899wS2HuzRzy",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2024-01-23T18:09:20Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2bMmXNzsXJisOhV899wS2HuzRzy",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null,
			"policies": null
		},
		{
			"id": "edgtls_2bMmVx2LA0cLZy0UhlOc6BdPv5h",
			"description": "acme tls edge",
			"created_at": "2024-01-23T18:09:08Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2bMmVx2LA0cLZy0UhlOc6BdPv5h",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2bMmVt8JTyA2seafxhjpNs81c1h",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2bMmVt8JTyA2seafxhjpNs81c1h"
				}
			},
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null,
			"policies": null
		}
	],
	"uri": "https://api.ngrok.com/edges/tls",
	"next_page_uri": null
}
```
