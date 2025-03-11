<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-11T17:13:12Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2uBDgm0yXlZqc2ato3jVOuIYTMn",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uBDgm0yXlZqc2ato3jVOuIYTMn"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uBDhPFHtetXL90BcVwjOBJBOyg",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-11T17:13:12Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2uBDhPFHtetXL90BcVwjOBJBOyg",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-11T17:13:11Z",
			"hostport": "34e4975a3aea.ngrok.paid:443",
			"id": "ep_2uBDhLCKtSzRiFQgPQIrQke1f97",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uBDermwNY4QyUQsAbv8R22FzDY",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://34e4975a3aea.ngrok.paid",
			"tunnel": {
				"id": "tn_2uBDhLCKtSzRiFQgPQIrQke1f97",
				"uri": "https://api.ngrok.com/tunnels/tn_2uBDhLCKtSzRiFQgPQIrQke1f97"
			},
			"tunnel_session": {
				"id": "ts_2uBDhLoSy8eTSbf9qDMkuTnlx0R",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uBDhLoSy8eTSbf9qDMkuTnlx0R"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-11T17:13:11Z",
			"upstream_url": "http://localhost:80",
			"url": "https://34e4975a3aea.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-11T17:13:08Z",
			"domain": {
				"id": "rd_2uBDgm0yXlZqc2ato3jVOuIYTMn",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uBDgm0yXlZqc2ato3jVOuIYTMn"
			},
			"edge": {
				"id": "edgtls_2uBDgpIF8yHFJ1ffRZ6ylnE3ntE",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uBDgpIF8yHFJ1ffRZ6ylnE3ntE"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uBDgndZXKroUwrXIn9nMFLDySq",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-11T17:13:08Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
