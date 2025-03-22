<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-22T10:10:27Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2ufSe6NBYyNppXel2q7NFb5i00l",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2ufSe6NBYyNppXel2q7NFb5i00l"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2ufScrGQtYVX3yLNg2RnRCEHqAx",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2ufScrGQtYVX3yLNg2RnRCEHqAx"
				},
				"enabled": true
			},
			"created_at": "2025-03-22T10:10:17Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2ufScuW9ZaQusK9itHdgDzZARxO",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2ufScuW9ZaQusK9itHdgDzZARxO"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
