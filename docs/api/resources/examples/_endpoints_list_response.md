<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-02T10:07:11Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2tkxlnDA9wNVLLTjlzJMHLHoOav",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2tkxlnDA9wNVLLTjlzJMHLHoOav"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2tkxmRhwOdeU0tOTmto8rMSPJLW",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-02T10:07:11Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2tkxmRhwOdeU0tOTmto8rMSPJLW",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-02T10:07:09Z",
			"hostport": "6966ab3be106.ngrok.paid:443",
			"id": "ep_2tkxm8Ppoz0xzK2UTePExFeVmVG",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2tkxjeSNOc58cGmYVkdfv0Im6Zb",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://6966ab3be106.ngrok.paid",
			"tunnel": {
				"id": "tn_2tkxm8Ppoz0xzK2UTePExFeVmVG",
				"uri": "https://api.ngrok.com/tunnels/tn_2tkxm8Ppoz0xzK2UTePExFeVmVG"
			},
			"tunnel_session": {
				"id": "ts_2tkxm75rzIQaaAvRBiMUjy8Ojpn",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2tkxm75rzIQaaAvRBiMUjy8Ojpn"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-02T10:07:09Z",
			"upstream_url": "http://localhost:80",
			"url": "https://6966ab3be106.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-02T10:07:06Z",
			"domain": {
				"id": "rd_2tkxlnDA9wNVLLTjlzJMHLHoOav",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2tkxlnDA9wNVLLTjlzJMHLHoOav"
			},
			"edge": {
				"id": "edgtls_2tkxlmC5IkBwAuvGJAIkVCDc1tU",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2tkxlmC5IkBwAuvGJAIkVCDc1tU"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2tkxllDysmkBqFxHvwNpnyU1cwH",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-02T10:07:06Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
