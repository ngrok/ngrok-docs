<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-01-21T18:19:51Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2rwwkHa8wqYExR6hOXZQ5SZu4uh",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2rwwkHa8wqYExR6hOXZQ5SZu4uh"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2rwwkyc3QdH2qPHnpQ79mClWxrk",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-01-21T18:19:51Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2rwwkyc3QdH2qPHnpQ79mClWxrk",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-21T18:19:49Z",
			"hostport": "bb9724e02146.ngrok.paid:443",
			"id": "ep_2rwwkfJ7wyCVzz351cC1Dm6iFZ6",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2rwwiAw8KJIow9StuGwCYyI1tjs",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://bb9724e02146.ngrok.paid",
			"tunnel": {
				"id": "tn_2rwwkfJ7wyCVzz351cC1Dm6iFZ6",
				"uri": "https://api.ngrok.com/tunnels/tn_2rwwkfJ7wyCVzz351cC1Dm6iFZ6"
			},
			"tunnel_session": {
				"id": "ts_2rwwkgFPyOqECCkV962EnBqCjSC",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2rwwkgFPyOqECCkV962EnBqCjSC"
			},
			"type": "ephemeral",
			"updated_at": "2025-01-21T18:19:49Z",
			"upstream_url": "http://localhost:80",
			"url": "https://bb9724e02146.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-21T18:19:46Z",
			"domain": {
				"id": "rd_2rwwkHa8wqYExR6hOXZQ5SZu4uh",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2rwwkHa8wqYExR6hOXZQ5SZu4uh"
			},
			"edge": {
				"id": "edgtls_2rwwkHwHRtsYrnPdZSAQtR05b6F",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2rwwkHwHRtsYrnPdZSAQtR05b6F"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2rwwkIInY9Psfpgan2Xk5C7Qp1u",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-01-21T18:19:46Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
