<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-01-21T17:39:20Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2rwrop2e610ZJhzp0SZ5JULHbpj",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2rwrop2e610ZJhzp0SZ5JULHbpj"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2rwrpPU74eMBg2GbKt1QjdUV9EF",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-01-21T17:39:20Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2rwrpPU74eMBg2GbKt1QjdUV9EF",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-21T17:39:18Z",
			"hostport": "2b8d790cdc1e.ngrok.paid:443",
			"id": "ep_2rwrpAfrGLqIDqYqN5SGb5mOtrJ",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2rwrmd5Fgon2iJ86NudzUp5nYYa",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://2b8d790cdc1e.ngrok.paid",
			"tunnel": {
				"id": "tn_2rwrpAfrGLqIDqYqN5SGb5mOtrJ",
				"uri": "https://api.ngrok.com/tunnels/tn_2rwrpAfrGLqIDqYqN5SGb5mOtrJ"
			},
			"tunnel_session": {
				"id": "ts_2rwrpD5dZCDOHQHOzNTXaIrn6cC",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2rwrpD5dZCDOHQHOzNTXaIrn6cC"
			},
			"type": "ephemeral",
			"updated_at": "2025-01-21T17:39:18Z",
			"upstream_url": "http://localhost:80",
			"url": "https://2b8d790cdc1e.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-21T17:39:16Z",
			"domain": {
				"id": "rd_2rwrop2e610ZJhzp0SZ5JULHbpj",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2rwrop2e610ZJhzp0SZ5JULHbpj"
			},
			"edge": {
				"id": "edgtls_2rwrong2WVOcP3Rw7Typ6pYRUzR",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2rwrong2WVOcP3Rw7Typ6pYRUzR"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2rwrom3eGX903hWV2jnDmAx6eff",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-01-21T17:39:16Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
