<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-05T10:15:38Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2ttSAOdhRFya2hnmSf4yZqYptqO",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2ttSAOdhRFya2hnmSf4yZqYptqO"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2ttSB7TOAuD1AtqsylnokPYZpkG",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-05T10:15:38Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2ttSB7TOAuD1AtqsylnokPYZpkG",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-05T10:15:37Z",
			"hostport": "e5e4c837f410.ngrok.paid:443",
			"id": "ep_2ttSAw1eMeNXlg7jhLnrwztzxv9",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2ttS8Nk87pnzU3NV1g5DnFnxtmZ",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://e5e4c837f410.ngrok.paid",
			"tunnel": {
				"id": "tn_2ttSAw1eMeNXlg7jhLnrwztzxv9",
				"uri": "https://api.ngrok.com/tunnels/tn_2ttSAw1eMeNXlg7jhLnrwztzxv9"
			},
			"tunnel_session": {
				"id": "ts_2ttSAxjrkZXayPED2MQIRbD75zD",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2ttSAxjrkZXayPED2MQIRbD75zD"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-05T10:15:37Z",
			"upstream_url": "http://localhost:80",
			"url": "https://e5e4c837f410.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-05T10:15:34Z",
			"domain": {
				"id": "rd_2ttSAOdhRFya2hnmSf4yZqYptqO",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2ttSAOdhRFya2hnmSf4yZqYptqO"
			},
			"edge": {
				"id": "edgtls_2ttSASYSV7t6fIj9doiyJfjxK53",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2ttSASYSV7t6fIj9doiyJfjxK53"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2ttSAUuTkzTGgmWMXGESXPtlgGI",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-05T10:15:34Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
