<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-04-08T16:29:45Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2vSDrXjzr2eZJLSG8MyoqyA7wKD",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2vSDrXjzr2eZJLSG8MyoqyA7wKD"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2vSDsB80ML8wpRauXmBwQExX8Kq",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-04-08T16:29:45Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2vSDsB80ML8wpRauXmBwQExX8Kq",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-08T16:29:43Z",
			"hostport": "867c71a19b47.ngrok.paid:443",
			"id": "ep_2vSDrsjJhaAX3E7G6FJehVXHO8b",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2vSDpXkqwyU7VuuNeyrHcv0QsJq",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://867c71a19b47.ngrok.paid",
			"tunnel": {
				"id": "tn_2vSDrsjJhaAX3E7G6FJehVXHO8b",
				"uri": "https://api.ngrok.com/tunnels/tn_2vSDrsjJhaAX3E7G6FJehVXHO8b"
			},
			"tunnel_session": {
				"id": "ts_2vSDrvzMr4TCcU6mizpfIRKLOms",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2vSDrvzMr4TCcU6mizpfIRKLOms"
			},
			"type": "ephemeral",
			"updated_at": "2025-04-08T16:29:43Z",
			"upstream_url": "http://localhost:80",
			"url": "https://867c71a19b47.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-08T16:29:41Z",
			"domain": {
				"id": "rd_2vSDrXjzr2eZJLSG8MyoqyA7wKD",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2vSDrXjzr2eZJLSG8MyoqyA7wKD"
			},
			"edge": {
				"id": "edgtls_2vSDrVdgQNfrJuUKjFh2HjVmRSQ",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2vSDrVdgQNfrJuUKjFh2HjVmRSQ"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2vSDrXrJL4FvtQZ9Ug6WRoVTMjb",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-04-08T16:29:41Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
