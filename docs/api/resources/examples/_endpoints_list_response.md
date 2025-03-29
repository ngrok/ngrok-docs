<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-29T10:07:21Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2uzE7dvYsNNItFb5pI34oKQqFkf",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uzE7dvYsNNItFb5pI34oKQqFkf"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uzE8MIvXJCsqm8hz6HaijIdJkv",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-29T10:07:21Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2uzE8MIvXJCsqm8hz6HaijIdJkv",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-29T10:07:18Z",
			"hostport": "3231c893c571.ngrok.paid:443",
			"id": "ep_2uzE7xnbrfJrGz4NnY7VP5Xplx8",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uzE5YkDnqX76ZgT6oSVA29hE4W",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://3231c893c571.ngrok.paid",
			"tunnel": {
				"id": "tn_2uzE7xnbrfJrGz4NnY7VP5Xplx8",
				"uri": "https://api.ngrok.com/tunnels/tn_2uzE7xnbrfJrGz4NnY7VP5Xplx8"
			},
			"tunnel_session": {
				"id": "ts_2uzE7xd5PImeeFoOVUm8WBtaQi5",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uzE7xd5PImeeFoOVUm8WBtaQi5"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-29T10:07:18Z",
			"upstream_url": "http://localhost:80",
			"url": "https://3231c893c571.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-29T10:07:16Z",
			"domain": {
				"id": "rd_2uzE7dvYsNNItFb5pI34oKQqFkf",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uzE7dvYsNNItFb5pI34oKQqFkf"
			},
			"edge": {
				"id": "edgtls_2uzE7iJfEOtct6bOF88wM99L2YV",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uzE7iJfEOtct6bOF88wM99L2YV"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uzE7d36rSOg1GkRgefx8AuLFiy",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-29T10:07:16Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
