<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-12-04T10:08:35Z",
			"hostport": "ea16864454eb.ngrok.paid:443",
			"id": "ep_2pkP5JfgRlYaHKeAszSOELLNqYK",
			"name": "command_line",
			"principal": {
				"id": "usr_2pkP2rnmJx3AHGHB5sMPadfEyd1",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://ea16864454eb.ngrok.paid",
			"tunnel": {
				"id": "tn_2pkP5JfgRlYaHKeAszSOELLNqYK",
				"uri": "https://api.ngrok.com/tunnels/tn_2pkP5JfgRlYaHKeAszSOELLNqYK"
			},
			"tunnel_session": {
				"id": "ts_2pkP5OSHkHWuXX7UUk74OHTgOpS",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2pkP5OSHkHWuXX7UUk74OHTgOpS"
			},
			"type": "ephemeral",
			"updated_at": "2024-12-04T10:08:35Z",
			"upstream_url": "http://localhost:80",
			"url": "https://ea16864454eb.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-12-04T10:08:32Z",
			"domain": {
				"id": "rd_2pkP4yJcsKIQIJIPR26VLEJgS89",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2pkP4yJcsKIQIJIPR26VLEJgS89"
			},
			"edge": {
				"id": "edgtls_2pkP4w4tkuomnk1pkHE9o3fIzip",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2pkP4w4tkuomnk1pkHE9o3fIzip"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2pkP4vlnm3XQzdHk6KTrO6cajPu",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-12-04T10:08:32Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
