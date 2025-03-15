<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-15T10:06:46Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2uLgKAy5qeGYhzDLdvzpKhyJuIb",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uLgKAy5qeGYhzDLdvzpKhyJuIb"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uLgKhb9xIeHrrIUJGAY56PFYOw",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-15T10:06:46Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2uLgKhb9xIeHrrIUJGAY56PFYOw",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-15T10:06:45Z",
			"hostport": "f48fd99ab500.ngrok.paid:443",
			"id": "ep_2uLgKfvUmhiWZvd2BhG9v9QpH1N",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uLgI4W1R49o8dTyurr6Mj0Nrcg",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://f48fd99ab500.ngrok.paid",
			"tunnel": {
				"id": "tn_2uLgKfvUmhiWZvd2BhG9v9QpH1N",
				"uri": "https://api.ngrok.com/tunnels/tn_2uLgKfvUmhiWZvd2BhG9v9QpH1N"
			},
			"tunnel_session": {
				"id": "ts_2uLgKeqnYIXdXp60rYh6LOHYJfw",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uLgKeqnYIXdXp60rYh6LOHYJfw"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-15T10:06:45Z",
			"upstream_url": "http://localhost:80",
			"url": "https://f48fd99ab500.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-15T10:06:42Z",
			"domain": {
				"id": "rd_2uLgKAy5qeGYhzDLdvzpKhyJuIb",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uLgKAy5qeGYhzDLdvzpKhyJuIb"
			},
			"edge": {
				"id": "edgtls_2uLgK8TQLiHJX9oqk0dVqjKywF7",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uLgK8TQLiHJX9oqk0dVqjKywF7"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uLgK7hYoiz5G0vqo9JZQy2FbdR",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-15T10:06:42Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
