<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-12-12T17:31:29Z",
			"hostport": "35f799916129.ngrok.paid:443",
			"id": "ep_2q7rw6YHYSQHhZkn7kX56Ec79lB",
			"name": "command_line",
			"principal": {
				"id": "usr_2q7rtXPbYhZunLyMXTLzwJhCFqx",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://35f799916129.ngrok.paid",
			"tunnel": {
				"id": "tn_2q7rw6YHYSQHhZkn7kX56Ec79lB",
				"uri": "https://api.ngrok.com/tunnels/tn_2q7rw6YHYSQHhZkn7kX56Ec79lB"
			},
			"tunnel_session": {
				"id": "ts_2q7rw7WoeojVwWS98zx7JgZ4KAD",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2q7rw7WoeojVwWS98zx7JgZ4KAD"
			},
			"type": "ephemeral",
			"updated_at": "2024-12-12T17:31:29Z",
			"upstream_url": "http://localhost:80",
			"url": "https://35f799916129.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-12-12T17:31:26Z",
			"domain": {
				"id": "rd_2q7rvd2zvaRh4PX5ghjJ8DYZVzJ",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2q7rvd2zvaRh4PX5ghjJ8DYZVzJ"
			},
			"edge": {
				"id": "edgtls_2q7rvWjUw5fYjgT0jnw2R7yVfXi",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2q7rvWjUw5fYjgT0jnw2R7yVfXi"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2q7rvcvQ3y5dzGjoC9D1GwmQhEv",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-12-12T17:31:26Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
