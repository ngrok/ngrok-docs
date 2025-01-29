<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-01-29T21:10:17Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2sJsTIHnZqfRePE0MLuY6K5DCGz",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2sJsTIHnZqfRePE0MLuY6K5DCGz"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2sJsRwyC8aJZZmq8NbTus7Qp4BZ",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2sJsRwyC8aJZZmq8NbTus7Qp4BZ"
				},
				"enabled": true
			},
			"created_at": "2025-01-29T21:10:07Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2sJsS0jYtcUDnNmKvFqtkm8Xlya",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2sJsS0jYtcUDnNmKvFqtkm8Xlya"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
