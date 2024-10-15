<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-10-11T22:09:08Z",
			"hostport": "3d5e5d803427.ngrok.paid:443",
			"id": "ep_2nJI2v7A6jaLudwJZ4CQLjcWPSy",
			"principal_id": {
				"id": "usr_2nJI0WC6s8dj8zCdge8PUeQW4yy",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://3d5e5d803427.ngrok.paid",
			"tunnel": {
				"id": "tn_2nJI2v7A6jaLudwJZ4CQLjcWPSy",
				"uri": "https://api.ngrok.com/tunnels/tn_2nJI2v7A6jaLudwJZ4CQLjcWPSy"
			},
			"tunnel_session": {
				"id": "ts_2nJI2wuJL6ZdChQ6edwt2lkE97B",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2nJI2wuJL6ZdChQ6edwt2lkE97B"
			},
			"type": "ephemeral",
			"updated_at": "2024-10-11T22:09:08Z",
			"upstream_url": "http://localhost:80",
			"url": "https://3d5e5d803427.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-10-11T22:09:05Z",
			"domain": {
				"id": "rd_2nJI2Vc4v6vcdB4eIUU3yWtGfYS",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2nJI2Vc4v6vcdB4eIUU3yWtGfYS"
			},
			"edge": {
				"id": "edgtls_2nJI2VTDvZFOSIbSef0LuaXIc8p",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2nJI2VTDvZFOSIbSef0LuaXIc8p"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2nJI2bMqZCNYApwPCtD0kxFhlC4",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-10-11T22:09:05Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
