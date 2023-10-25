<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2XGwE6O16ambF35R7OufUr5qkGY",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2023-10-25T21:16:49Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2XGwE6O16ambF35R7OufUr5qkGY",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		},
		{
			"id": "edgtls_2XGwCup7U7cUkIuljUbXotklZTy",
			"description": "acme tls edge",
			"created_at": "2023-10-25T21:16:39Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2XGwCup7U7cUkIuljUbXotklZTy",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2XGwCvCNdEax7C2UrledUFsPuuP",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2XGwCvCNdEax7C2UrledUFsPuuP"
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
