<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-11T18:37:44Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2uBNyEDTeiRziN90XoeUjyQGCmg",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uBNyEDTeiRziN90XoeUjyQGCmg"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uBNynvejd6kF8Vh2JBrubCohxN",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-11T18:37:44Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2uBNynvejd6kF8Vh2JBrubCohxN",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-11T18:37:42Z",
			"hostport": "d9cf831863a5.ngrok.paid:443",
			"id": "ep_2uBNyamcFG12rfvtbxcQf8y7R5Q",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uBNw1pRFGEAoxVham3tWvTRtmA",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://d9cf831863a5.ngrok.paid",
			"tunnel": {
				"id": "tn_2uBNyamcFG12rfvtbxcQf8y7R5Q",
				"uri": "https://api.ngrok.com/tunnels/tn_2uBNyamcFG12rfvtbxcQf8y7R5Q"
			},
			"tunnel_session": {
				"id": "ts_2uBNyasfXViPuSd5RaPcaQPG7vw",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uBNyasfXViPuSd5RaPcaQPG7vw"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-11T18:37:42Z",
			"upstream_url": "http://localhost:80",
			"url": "https://d9cf831863a5.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-11T18:37:40Z",
			"domain": {
				"id": "rd_2uBNyEDTeiRziN90XoeUjyQGCmg",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uBNyEDTeiRziN90XoeUjyQGCmg"
			},
			"edge": {
				"id": "edgtls_2uBNyDCt3i8RZQsxblXZTI0wDA5",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uBNyDCt3i8RZQsxblXZTI0wDA5"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uBNyHBsNB9PNTLKa1F9yO9heTV",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-11T18:37:40Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
