<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"tls_edges": [
		{
			"id": "edgtls_2XB9x5qA0lun0cszSkwFLrstlV7",
			"description": "acme tls edge",
			"metadata": "{\"environment\": \"staging\"}",
			"created_at": "2023-10-23T20:10:48Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2XB9x5qA0lun0cszSkwFLrstlV7",
			"hostports": ["example.com:443"],
			"backend": null,
			"ip_restriction": null,
			"mutual_tls": null,
			"tls_termination": null
		},
		{
			"id": "edgtls_2XB9vLg2GzBAev1Pi7txk4hFOBP",
			"description": "acme tls edge",
			"created_at": "2023-10-23T20:10:35Z",
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2XB9vLg2GzBAev1Pi7txk4hFOBP",
			"hostports": ["endpoint-example.com:443"],
			"backend": {
				"enabled": true,
				"backend": {
					"id": "bkdhr_2XB9vQ3NEgYIQVWjJzvr9X8e3qM",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2XB9vQ3NEgYIQVWjJzvr9X8e3qM"
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
