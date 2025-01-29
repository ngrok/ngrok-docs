<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-01-29T21:10:12Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2sJsRvxJwYWOyCDxd9cO7iWmzdp",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2sJsRvxJwYWOyCDxd9cO7iWmzdp"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2sJsSZJFKs8zgsdaoKKNNtHZeVy",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-01-29T21:10:12Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2sJsSZJFKs8zgsdaoKKNNtHZeVy",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-29T21:10:10Z",
			"hostport": "c0c3e5b645a5.ngrok.paid:443",
			"id": "ep_2sJsSLmlgUKdax3Yj6uGEtRbAEy",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2sJsPu52vQQiN79cz8Gr55a0yox",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://c0c3e5b645a5.ngrok.paid",
			"tunnel": {
				"id": "tn_2sJsSLmlgUKdax3Yj6uGEtRbAEy",
				"uri": "https://api.ngrok.com/tunnels/tn_2sJsSLmlgUKdax3Yj6uGEtRbAEy"
			},
			"tunnel_session": {
				"id": "ts_2sJsSJ336PGxkDY7af5UHBSMsw1",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2sJsSJ336PGxkDY7af5UHBSMsw1"
			},
			"type": "ephemeral",
			"updated_at": "2025-01-29T21:10:10Z",
			"upstream_url": "http://localhost:80",
			"url": "https://c0c3e5b645a5.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-29T21:10:07Z",
			"domain": {
				"id": "rd_2sJsRvxJwYWOyCDxd9cO7iWmzdp",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2sJsRvxJwYWOyCDxd9cO7iWmzdp"
			},
			"edge": {
				"id": "edgtls_2sJsS0jYtcUDnNmKvFqtkm8Xlya",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2sJsS0jYtcUDnNmKvFqtkm8Xlya"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2sJsS2lAupMCFt5uuUG3iIGsgiT",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-01-29T21:10:07Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
