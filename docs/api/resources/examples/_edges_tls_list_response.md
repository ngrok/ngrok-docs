<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-01-21T18:19:56Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2rwwlblAVZl2Hsbtn7W0Dw8wYua",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2rwwlblAVZl2Hsbtn7W0Dw8wYua"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2rwwkLcURjaR1pQ4VfSFNGOLjGM",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2rwwkLcURjaR1pQ4VfSFNGOLjGM"
				},
				"enabled": true
			},
			"created_at": "2025-01-21T18:19:46Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2rwwkHwHRtsYrnPdZSAQtR05b6F",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2rwwkHwHRtsYrnPdZSAQtR05b6F"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
