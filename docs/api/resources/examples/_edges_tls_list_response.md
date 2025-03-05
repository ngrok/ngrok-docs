<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-05T10:15:44Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2ttSBmkvEyoTA6GbNAKR0uhTLlw",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2ttSBmkvEyoTA6GbNAKR0uhTLlw"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2ttSARAgNA9vcp1nnMZIgpkXlW9",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2ttSARAgNA9vcp1nnMZIgpkXlW9"
				},
				"enabled": true
			},
			"created_at": "2025-03-05T10:15:33Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2ttSASYSV7t6fIj9doiyJfjxK53",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2ttSASYSV7t6fIj9doiyJfjxK53"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
