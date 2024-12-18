<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-12-17T10:07:02Z",
			"hostport": "5fccd541a1e9.ngrok.paid:443",
			"id": "ep_2qL7VApU59YFe2wa29JX1b56EfY",
			"name": "command_line",
			"principal": {
				"id": "usr_2qL7SbQ0ew21qGOroMOBg3BLMZS",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://5fccd541a1e9.ngrok.paid",
			"tunnel": {
				"id": "tn_2qL7VApU59YFe2wa29JX1b56EfY",
				"uri": "https://api.ngrok.com/tunnels/tn_2qL7VApU59YFe2wa29JX1b56EfY"
			},
			"tunnel_session": {
				"id": "ts_2qL7V9UyF2SIYbWcx7mbyErTK8q",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2qL7V9UyF2SIYbWcx7mbyErTK8q"
			},
			"type": "ephemeral",
			"updated_at": "2024-12-17T10:07:02Z",
			"upstream_url": "http://localhost:80",
			"url": "https://5fccd541a1e9.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-12-17T10:07:00Z",
			"domain": {
				"id": "rd_2qL7UqpYgAenMNQ7gszNku3lp1K",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2qL7UqpYgAenMNQ7gszNku3lp1K"
			},
			"edge": {
				"id": "edgtls_2qL7UjovDwglX1UcHYF9EY5shnm",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2qL7UjovDwglX1UcHYF9EY5shnm"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2qL7Ur1Ps8OsUArOcM7JX6kiF3w",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-12-17T10:07:00Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
