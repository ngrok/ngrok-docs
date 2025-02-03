<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-02-03T10:07:52Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2sWhWvTM6XZ7LP2CVbAnFX2nDBY",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2sWhWvTM6XZ7LP2CVbAnFX2nDBY"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2sWhVcQciad7o8kOv3Kq6PpHNih",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2sWhVcQciad7o8kOv3Kq6PpHNih"
				},
				"enabled": true
			},
			"created_at": "2025-02-03T10:07:42Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2sWhVa28daHSBSO2cLDq85U7N6z",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2sWhVa28daHSBSO2cLDq85U7N6z"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
