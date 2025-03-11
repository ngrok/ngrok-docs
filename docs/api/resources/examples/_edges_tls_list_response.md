<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-11T17:13:17Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uBDi24H42UYdCW5uwCn2Kw9Awi",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uBDi24H42UYdCW5uwCn2Kw9Awi"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uBDgm8UrHlFSL7SZ42pePdXcmn",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uBDgm8UrHlFSL7SZ42pePdXcmn"
				},
				"enabled": true
			},
			"created_at": "2025-03-11T17:13:07Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uBDgpIF8yHFJ1ffRZ6ylnE3ntE",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uBDgpIF8yHFJ1ffRZ6ylnE3ntE"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
