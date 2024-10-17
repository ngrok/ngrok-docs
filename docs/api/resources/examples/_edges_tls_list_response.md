<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-10-17T20:26:50Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2na2LVAJxQfmzPGt0w7CtnuZYjC",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2na2LVAJxQfmzPGt0w7CtnuZYjC"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2na2K4H1cBJNj4yyg3M0Y4TtLTJ",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2na2K4H1cBJNj4yyg3M0Y4TtLTJ"
				},
				"enabled": true
			},
			"created_at": "2024-10-17T20:26:38Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2na2K2SHqq1jVXErSG2EhkglPNe",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2na2K2SHqq1jVXErSG2EhkglPNe"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
