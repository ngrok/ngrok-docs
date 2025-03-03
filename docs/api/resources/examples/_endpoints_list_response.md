<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-03T10:07:20Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2tnmuYyBy0JMg9wADMbyDxZ63mz",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2tnmuYyBy0JMg9wADMbyDxZ63mz"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2tnmvAXCgYFGEXfi5GLN8DQm8wu",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-03T10:07:20Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2tnmvAXCgYFGEXfi5GLN8DQm8wu",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-03T10:07:19Z",
			"hostport": "559748bc459f.ngrok.paid:443",
			"id": "ep_2tnmv0DA5eSQtr0jiIQGxD4n4tY",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2tnmsVWLaQ9lJFcrLkBDGaq5BiM",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://559748bc459f.ngrok.paid",
			"tunnel": {
				"id": "tn_2tnmv0DA5eSQtr0jiIQGxD4n4tY",
				"uri": "https://api.ngrok.com/tunnels/tn_2tnmv0DA5eSQtr0jiIQGxD4n4tY"
			},
			"tunnel_session": {
				"id": "ts_2tnmv06n0bCcLOqQtrH2IBHjxDA",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2tnmv06n0bCcLOqQtrH2IBHjxDA"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-03T10:07:19Z",
			"upstream_url": "http://localhost:80",
			"url": "https://559748bc459f.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-03T10:07:16Z",
			"domain": {
				"id": "rd_2tnmuYyBy0JMg9wADMbyDxZ63mz",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2tnmuYyBy0JMg9wADMbyDxZ63mz"
			},
			"edge": {
				"id": "edgtls_2tnmubbMSfxdgzfqtG43Lkewcby",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2tnmubbMSfxdgzfqtG43Lkewcby"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2tnmuVy0aMVFOs78Ku6O4dEfXLR",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-03T10:07:16Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
