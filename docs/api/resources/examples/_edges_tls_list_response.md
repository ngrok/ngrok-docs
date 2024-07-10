<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-06-14T06:04:03Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2hrGzJJS2OYwnm9Wi8uZanXLN1C",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2hrGzJJS2OYwnm9Wi8uZanXLN1C"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2hrGy2yLoXBeB6HmeNdR4g49TNd",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2hrGy2yLoXBeB6HmeNdR4g49TNd"
				},
				"enabled": true
			},
			"created_at": "2024-06-14T06:03:53Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2hrGy7Nc38eVlDViZ7IMsyDNUNa",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2hrGy7Nc38eVlDViZ7IMsyDNUNa"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
