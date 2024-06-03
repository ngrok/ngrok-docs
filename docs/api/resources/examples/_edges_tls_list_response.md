<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-05-23T20:36:27Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2gsqMo18ANbmPF8GEJnj4KwXKaS",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2gsqMo18ANbmPF8GEJnj4KwXKaS"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2gsqLSghpTLNbLmkKiKojJ9k4bq",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2gsqLSghpTLNbLmkKiKojJ9k4bq"
				},
				"enabled": true
			},
			"created_at": "2024-05-23T20:36:16Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2gsqLXIpfCgn5Hd18qqCs3w7yM1",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2gsqLXIpfCgn5Hd18qqCs3w7yM1"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
