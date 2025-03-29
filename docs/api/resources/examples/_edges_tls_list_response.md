<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-29T10:07:27Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uzE92MzpzYyo8wWe2tkMe7ddTx",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uzE92MzpzYyo8wWe2tkMe7ddTx"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uzE7ePIXGnCTppmDtt4nLtFI0Z",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uzE7ePIXGnCTppmDtt4nLtFI0Z"
				},
				"enabled": true
			},
			"created_at": "2025-03-29T10:07:16Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uzE7iJfEOtct6bOF88wM99L2YV",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uzE7iJfEOtct6bOF88wM99L2YV"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
