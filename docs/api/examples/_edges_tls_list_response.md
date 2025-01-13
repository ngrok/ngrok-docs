<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-12-19T20:27:16Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2qRzB7kDhlUeqpqePIrZ27WUIpH",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2qRzB7kDhlUeqpqePIrZ27WUIpH"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2qRz9WXjtAaDUgBtXiDhT5kViv2",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2qRz9WXjtAaDUgBtXiDhT5kViv2"
				},
				"enabled": true
			},
			"created_at": "2024-12-19T20:27:04Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2qRz9UguoqqrqEAuSOuEvGDzDJf",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2qRz9UguoqqrqEAuSOuEvGDzDJf"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
