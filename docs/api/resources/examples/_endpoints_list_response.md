<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-26T10:06:59Z",
			"description": "sample cloud endpoint",
			"domain": {
				"id": "rd_2uqkhnIgvOBFgtgi2UgbHjyjCk0",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uqkhnIgvOBFgtgi2UgbHjyjCk0"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uqkie2Mo76bks8lItHfFrVZGbE",
			"metadata": "{\"environment\": \"staging\"}",
			"pooling_enabled": false,
			"proto": "https",
			"public_url": "https://endpoint-example2.com",
			"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
			"type": "cloud",
			"updated_at": "2025-03-26T10:06:59Z",
			"uri": "https://api.ngrok.com/endpoints/ep_2uqkie2Mo76bks8lItHfFrVZGbE",
			"url": "https://endpoint-example2.com"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-26T10:06:56Z",
			"hostport": "12eca915d558.ngrok.paid:443",
			"id": "ep_2uqkiAQMmP0zul17nSTqB4tmVGG",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uqkfmaTzOLAZXrPe5jNG6kLYwB",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://12eca915d558.ngrok.paid",
			"tunnel": {
				"id": "tn_2uqkiAQMmP0zul17nSTqB4tmVGG",
				"uri": "https://api.ngrok.com/tunnels/tn_2uqkiAQMmP0zul17nSTqB4tmVGG"
			},
			"tunnel_session": {
				"id": "ts_2uqkiAoLang19sil5yI3swoiX0L",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uqkiAoLang19sil5yI3swoiX0L"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-26T10:06:56Z",
			"upstream_url": "http://localhost:80",
			"url": "https://12eca915d558.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-26T10:06:55Z",
			"domain": {
				"id": "rd_2uqkhnIgvOBFgtgi2UgbHjyjCk0",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uqkhnIgvOBFgtgi2UgbHjyjCk0"
			},
			"edge": {
				"id": "edgtls_2uqkhoKByt30Uj2q31IES9m1kRU",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uqkhoKByt30Uj2q31IES9m1kRU"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uqkhsauZAJbfc4LvqQE7z13PI1",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-26T10:06:55Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
