<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-01-14T10:06:47Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2rcCvde7zJTvl6TwY5HLqJlwhXz",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2rcCvde7zJTvl6TwY5HLqJlwhXz"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2rcCu48LNH3HU7rx4s8N7kRJ5nP",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2rcCu48LNH3HU7rx4s8N7kRJ5nP"
				},
				"enabled": true
			},
			"created_at": "2025-01-14T10:06:35Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2rcCu3Mv1sn41sQWC6XN2AOtaaH",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2rcCu3Mv1sn41sQWC6XN2AOtaaH"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
