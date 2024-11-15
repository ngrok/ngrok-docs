<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-11-15T17:26:22Z",
			"hostport": "91178bbb378f.ngrok.paid:443",
			"id": "ep_2otaylvnZ5RtJqJEEXV6Ft3KpMx",
			"name": "command_line",
			"principal": {
				"id": "usr_2otawLHkq5cU4yJenLp73PukWVQ",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://91178bbb378f.ngrok.paid",
			"tunnel": {
				"id": "tn_2otaylvnZ5RtJqJEEXV6Ft3KpMx",
				"uri": "https://api.ngrok.com/tunnels/tn_2otaylvnZ5RtJqJEEXV6Ft3KpMx"
			},
			"tunnel_session": {
				"id": "ts_2otayqZL3gzmWUiXvstqWHY8u3s",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2otayqZL3gzmWUiXvstqWHY8u3s"
			},
			"type": "ephemeral",
			"updated_at": "2024-11-15T17:26:22Z",
			"upstream_url": "http://localhost:80",
			"url": "https://91178bbb378f.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-11-15T17:26:20Z",
			"domain": {
				"id": "rd_2otayRn8tUpTvnhO9FEmOkyvO5e",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2otayRn8tUpTvnhO9FEmOkyvO5e"
			},
			"edge": {
				"id": "edgtls_2otayO9m98zAAYh05BrJj7WbfhZ",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2otayO9m98zAAYh05BrJj7WbfhZ"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2otaya2SvpNfZCIu0NjG5py4aUg",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-11-15T17:26:20Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
