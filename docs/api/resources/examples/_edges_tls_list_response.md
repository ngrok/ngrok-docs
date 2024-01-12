<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2arwc9q0wcpjnVNqM5XBllPxoEF",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2024-01-12T20:08:02Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2arwc9q0wcpjnVNqM5XBllPxoEF",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null,
			"policies": null
		},
		{
			"id": "edgtls_2arwajPmAgIfy5XUmyLS058NYVT",
			"description": "acme tls edge",
			"created_at": "2024-01-12T20:07:50Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2arwajPmAgIfy5XUmyLS058NYVT",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2arwafT8DYMYyc50UyepmqdaBbq",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2arwafT8DYMYyc50UyepmqdaBbq"
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
