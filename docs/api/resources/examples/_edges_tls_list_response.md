<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2TMGJdBbx5IBRCRycI7hKUwANB1",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2023-07-31T23:17:45Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2TMGJdBbx5IBRCRycI7hKUwANB1",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		},
		{
			"id": "edgtls_2TMGIEAvsu9Eg9xQVO6zgxZUAzM",
			"description": "acme tls edge",
			"created_at": "2023-07-31T23:17:33Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2TMGIEAvsu9Eg9xQVO6zgxZUAzM",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2TMGI9f8rFdzz5PANNNn2CTfES0",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2TMGI9f8rFdzz5PANNNn2CTfES0"
				}
			},
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		}
	],
	"uri": "https://api.ngrok.com/edges/tls",
	"next_page_uri": null
}
```
