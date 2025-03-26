<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-18T22:20:27Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2uVav86qk48ZAGRB7BTqVCnnZ2p",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uVav86qk48ZAGRB7BTqVCnnZ2p"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uVavlDCp9Z7cuyHGgyP7ZXZkiA",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-18T22:20:27Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2uVavlDCp9Z7cuyHGgyP7ZXZkiA",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-18T22:20:24Z",
			"hostport": "87b0c088eed2.ngrok.paid:443",
			"id": "ep_2uVavOolO3quHNrlsClIfUeBHai",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uVasuQ7JeyXZi1dR3I6JdF6Lxs",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://87b0c088eed2.ngrok.paid",
			"tunnel": {
				"id": "tn_2uVavOolO3quHNrlsClIfUeBHai",
				"uri": "https://api.ngrok.com/tunnels/tn_2uVavOolO3quHNrlsClIfUeBHai"
			},
			"tunnel_session": {
				"id": "ts_2uVavN5B0fhosKVsjLjAtzg6MEn",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uVavN5B0fhosKVsjLjAtzg6MEn"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-18T22:20:24Z",
			"upstream_url": "http://localhost:80",
			"url": "https://87b0c088eed2.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-18T22:20:22Z",
			"domain": {
				"id": "rd_2uVav86qk48ZAGRB7BTqVCnnZ2p",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uVav86qk48ZAGRB7BTqVCnnZ2p"
			},
			"edge": {
				"id": "edgtls_2uVav6N9jJWpGGw7Jl52OdbKdyu",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uVav6N9jJWpGGw7Jl52OdbKdyu"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uVav89F8DsMCm59q6DJZL63xJo",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-18T22:20:22Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
