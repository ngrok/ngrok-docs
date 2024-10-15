<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-10-11T22:09:15Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2nJI3rkCBjO2DqWEh0f24pkSb4V",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2nJI3rkCBjO2DqWEh0f24pkSb4V"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2nJI2R0IyajFJhXFaWAa5KBn2Xb",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2nJI2R0IyajFJhXFaWAa5KBn2Xb"
				},
				"enabled": true
			},
			"created_at": "2024-10-11T22:09:04Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2nJI2VTDvZFOSIbSef0LuaXIc8p",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2nJI2VTDvZFOSIbSef0LuaXIc8p"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
