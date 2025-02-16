<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-02-16T10:08:03Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2t7Q9BuKYt5tHuSyD0BCf0DjXbY",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2t7Q9BuKYt5tHuSyD0BCf0DjXbY"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2t7Q9mBUlNc5mK8dxVTAZH4Lb1q",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-02-16T10:08:03Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2t7Q9mBUlNc5mK8dxVTAZH4Lb1q",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-02-16T10:08:02Z",
			"hostport": "342ab2f88ebe.ngrok.paid:443",
			"id": "ep_2t7Q9gXqCqm2yAvNhoBSRV78waI",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2t7Q79SQ9KWsTAv12vog8IDt7Ck",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://342ab2f88ebe.ngrok.paid",
			"tunnel": {
				"id": "tn_2t7Q9gXqCqm2yAvNhoBSRV78waI",
				"uri": "https://api.ngrok.com/tunnels/tn_2t7Q9gXqCqm2yAvNhoBSRV78waI"
			},
			"tunnel_session": {
				"id": "ts_2t7Q9btBgNF3MtiPzzWkeppBDzq",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2t7Q9btBgNF3MtiPzzWkeppBDzq"
			},
			"type": "ephemeral",
			"updated_at": "2025-02-16T10:08:02Z",
			"upstream_url": "http://localhost:80",
			"url": "https://342ab2f88ebe.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-02-16T10:07:59Z",
			"domain": {
				"id": "rd_2t7Q9BuKYt5tHuSyD0BCf0DjXbY",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2t7Q9BuKYt5tHuSyD0BCf0DjXbY"
			},
			"edge": {
				"id": "edgtls_2t7Q97RPM7bj6AhN0uHShhvikWs",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2t7Q97RPM7bj6AhN0uHShhvikWs"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2t7Q99XbJkug8SuEIwzg6sVeBOZ",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-02-16T10:07:59Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
