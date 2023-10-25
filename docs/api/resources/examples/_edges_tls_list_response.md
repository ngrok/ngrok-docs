<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2XH3t6dOwxX6BHivpIl5Tvmqukq",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2023-10-25T22:19:49Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2XH3t6dOwxX6BHivpIl5Tvmqukq",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		},
		{
			"id": "edgtls_2XH3rkKv3a3yOP7TuT9MipimLJm",
			"description": "acme tls edge",
			"created_at": "2023-10-25T22:19:38Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2XH3rkKv3a3yOP7TuT9MipimLJm",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2XH3rkv29O6qNSWjrzpv2nNNnWD",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2XH3rkv29O6qNSWjrzpv2nNNnWD"
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
