<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-02-03T10:07:47Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2sWhVZmAiSCTOxEhb8C9FbxmvGs",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2sWhVZmAiSCTOxEhb8C9FbxmvGs"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2sWhWC1wTlKTbZERfQsJiikOjqm",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-02-03T10:07:47Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2sWhWC1wTlKTbZERfQsJiikOjqm",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-02-03T10:07:45Z",
			"hostport": "2964093bfc65.ngrok.paid:443",
			"id": "ep_2sWhW2ZyJBPFtHr0AAOgpgu4rC4",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2sWhTUOR9p07FrAqk3Nj2PFzWzO",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://2964093bfc65.ngrok.paid",
			"tunnel": {
				"id": "tn_2sWhW2ZyJBPFtHr0AAOgpgu4rC4",
				"uri": "https://api.ngrok.com/tunnels/tn_2sWhW2ZyJBPFtHr0AAOgpgu4rC4"
			},
			"tunnel_session": {
				"id": "ts_2sWhVxhHp9CjwbJiaCKYi6onsqR",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2sWhVxhHp9CjwbJiaCKYi6onsqR"
			},
			"type": "ephemeral",
			"updated_at": "2025-02-03T10:07:45Z",
			"upstream_url": "http://localhost:80",
			"url": "https://2964093bfc65.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-02-03T10:07:42Z",
			"domain": {
				"id": "rd_2sWhVZmAiSCTOxEhb8C9FbxmvGs",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2sWhVZmAiSCTOxEhb8C9FbxmvGs"
			},
			"edge": {
				"id": "edgtls_2sWhVa28daHSBSO2cLDq85U7N6z",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2sWhVa28daHSBSO2cLDq85U7N6z"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2sWhVfPQw9Mq6igw5mX3v1NAnfa",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-02-03T10:07:42Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
