<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-08-02T07:15:43Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2k5okm080IjPkDFFABCDEajMWvP",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2k5okm080IjPkDFFABCDEajMWvP"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2k5ojPH2ojjAu2xs3QuOj4tvrEf",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2k5ojPH2ojjAu2xs3QuOj4tvrEf"
				},
				"enabled": true
			},
			"created_at": "2024-08-02T07:15:32Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2k5ojMmZRNYMInd6d6ZxOFrymH0",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2k5ojMmZRNYMInd6d6ZxOFrymH0"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
