<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-03T10:07:26Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2tnmvuiMzWk5UWhP5SvOayTSXZF",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2tnmvuiMzWk5UWhP5SvOayTSXZF"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2tnmua1wsqDiyqWzTLqMVLhPhXl",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2tnmua1wsqDiyqWzTLqMVLhPhXl"
				},
				"enabled": true
			},
			"created_at": "2025-03-03T10:07:15Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2tnmubbMSfxdgzfqtG43Lkewcby",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2tnmubbMSfxdgzfqtG43Lkewcby"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
