<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-22T10:10:22Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2ufScpRNLC1tA4vGzXwAJbc8y3o",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2ufScpRNLC1tA4vGzXwAJbc8y3o"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2ufSdQiqVFXgTXMWkqKSM8uDvst",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-22T10:10:22Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2ufSdQiqVFXgTXMWkqKSM8uDvst",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-22T10:10:19Z",
			"hostport": "abd8cf2e5431.ngrok.paid:443",
			"id": "ep_2ufSd3iT9rcCR04wwUfXA0iavh7",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2ufSarwW6RThugnHqIBMtaQn3Ev",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://abd8cf2e5431.ngrok.paid",
			"tunnel": {
				"id": "tn_2ufSd3iT9rcCR04wwUfXA0iavh7",
				"uri": "https://api.ngrok.com/tunnels/tn_2ufSd3iT9rcCR04wwUfXA0iavh7"
			},
			"tunnel_session": {
				"id": "ts_2ufSd3EiazN1P3GHSq1JJ4m5Y2n",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2ufSd3EiazN1P3GHSq1JJ4m5Y2n"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-22T10:10:19Z",
			"upstream_url": "http://localhost:80",
			"url": "https://abd8cf2e5431.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-22T10:10:17Z",
			"domain": {
				"id": "rd_2ufScpRNLC1tA4vGzXwAJbc8y3o",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2ufScpRNLC1tA4vGzXwAJbc8y3o"
			},
			"edge": {
				"id": "edgtls_2ufScuW9ZaQusK9itHdgDzZARxO",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2ufScuW9ZaQusK9itHdgDzZARxO"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2ufScqaNyREzMSQHWoYouMIa2O7",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-22T10:10:17Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
