<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-10-28T15:37:51Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2o4XYrJF17fT8G9lI0ZuxL4MRht",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2o4XYrJF17fT8G9lI0ZuxL4MRht"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2o4XXUorIYKk43fGokG2bmR5c0W",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2o4XXUorIYKk43fGokG2bmR5c0W"
				},
				"enabled": true
			},
			"created_at": "2024-10-28T15:37:40Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2o4XXRr3iq2JJaasbTKplGrcgoP",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2o4XXRr3iq2JJaasbTKplGrcgoP"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
