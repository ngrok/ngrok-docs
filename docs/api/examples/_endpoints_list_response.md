<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-01-02T10:07:20Z",
			"hostport": "0a3343ce7143.ngrok.paid:443",
			"id": "ep_2r4JVuA5NovbaSvi1sv7dIwyH6F",
			"name": "command_line",
			"principal": {
				"id": "usr_2r4JTMPEnuMpFwFsImUIze21yyb",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://0a3343ce7143.ngrok.paid",
			"tunnel": {
				"id": "tn_2r4JVuA5NovbaSvi1sv7dIwyH6F",
				"uri": "https://api.ngrok.com/tunnels/tn_2r4JVuA5NovbaSvi1sv7dIwyH6F"
			},
			"tunnel_session": {
				"id": "ts_2r4JVsGYOCy5emPYyL1D1pSebmz",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2r4JVsGYOCy5emPYyL1D1pSebmz"
			},
			"type": "ephemeral",
			"updated_at": "2025-01-02T10:07:20Z",
			"upstream_url": "http://localhost:80",
			"url": "https://0a3343ce7143.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-02T10:07:16Z",
			"domain": {
				"id": "rd_2r4JVN8FUx5IHYbSAy7IUdPq0gl",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2r4JVN8FUx5IHYbSAy7IUdPq0gl"
			},
			"edge": {
				"id": "edgtls_2r4JVOO6D6PQtWPPanzflR8fAFb",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2r4JVOO6D6PQtWPPanzflR8fAFb"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2r4JVOHWIqGFz8U5QWE6OOXzpGS",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-01-02T10:07:16Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
