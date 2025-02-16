<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-02-16T10:08:09Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2t7QAZfJKTRzvIr3ZPz9Aei9K36",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2t7QAZfJKTRzvIr3ZPz9Aei9K36"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2t7Q97eYqlbrilHx3ph7JB2V7R7",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2t7Q97eYqlbrilHx3ph7JB2V7R7"
				},
				"enabled": true
			},
			"created_at": "2025-02-16T10:07:58Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2t7Q97RPM7bj6AhN0uHShhvikWs",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2t7Q97RPM7bj6AhN0uHShhvikWs"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
