<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-04-22T10:08:33Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2w51ESPPpvleWE3xKJQnxNJeclV",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2w51ESPPpvleWE3xKJQnxNJeclV"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2w51F1m3RTrU6Y6JFwi1ZuF1Ull",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-04-22T10:08:33Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2w51F1m3RTrU6Y6JFwi1ZuF1Ull",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-22T10:08:31Z",
			"hostport": "b8be8b6ae3cc.ngrok.paid:443",
			"id": "ep_2w51EpQOjM3SADwavpln5aTcmmN",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2w51CRjnaIMCUYwAB5FAes6UitT",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://b8be8b6ae3cc.ngrok.paid",
			"tunnel": {
				"id": "tn_2w51EpQOjM3SADwavpln5aTcmmN",
				"uri": "https://api.ngrok.com/tunnels/tn_2w51EpQOjM3SADwavpln5aTcmmN"
			},
			"tunnel_session": {
				"id": "ts_2w51En6UxkNfEy8yP26rkjexu4u",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2w51En6UxkNfEy8yP26rkjexu4u"
			},
			"type": "ephemeral",
			"updated_at": "2025-04-22T10:08:31Z",
			"upstream_url": "http://localhost:80",
			"url": "https://b8be8b6ae3cc.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-04-22T10:08:29Z",
			"domain": {
				"id": "rd_2w51ESPPpvleWE3xKJQnxNJeclV",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2w51ESPPpvleWE3xKJQnxNJeclV"
			},
			"edge": {
				"id": "edgtls_2w51EUc4lOlKO0ELir6nfShsWWz",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2w51EUc4lOlKO0ELir6nfShsWWz"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2w51EPdNChutrccMyBRyBb6kdDM",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-04-22T10:08:29Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
