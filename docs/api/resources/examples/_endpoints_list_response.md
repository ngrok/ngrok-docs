<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-04-25T22:55:33Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2wEzscMBYtdfZiNDDusy6zAzX43",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2wEzscMBYtdfZiNDDusy6zAzX43"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2wEztI7uRejTRHJw1Q8WrmAIb7v",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-04-25T22:55:33Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2wEztI7uRejTRHJw1Q8WrmAIb7v",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-25T22:55:31Z",
			"hostport": "ad96875909c3.ngrok.paid:443",
			"id": "ep_2wEzsy5QB03FYFBw6GB69FG3p2h",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2wEzqavPsqhEJcM6Mes5PsXNAPe",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://ad96875909c3.ngrok.paid",
			"tunnel": {
				"id": "tn_2wEzsy5QB03FYFBw6GB69FG3p2h",
				"uri": "https://api.ngrok.com/tunnels/tn_2wEzsy5QB03FYFBw6GB69FG3p2h"
			},
			"tunnel_session": {
				"id": "ts_2wEzt0dgBxDEwuim68YCfw667uF",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2wEzt0dgBxDEwuim68YCfw667uF"
			},
			"type": "ephemeral",
			"updated_at": "2025-04-25T22:55:31Z",
			"upstream_url": "http://localhost:80",
			"url": "https://ad96875909c3.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-25T22:55:29Z",
			"domain": {
				"id": "rd_2wEzscMBYtdfZiNDDusy6zAzX43",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2wEzscMBYtdfZiNDDusy6zAzX43"
			},
			"edge": {
				"id": "edgtls_2wEzsc8Y1nsUS2KNSgCJwut2wCO",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2wEzsc8Y1nsUS2KNSgCJwut2wCO"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2wEzscYz06uVwPfHIObgyVXPViP",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-04-25T22:55:29Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
