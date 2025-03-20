<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"bindings": ["public"],
	"created_at": "2025-03-18T22:20:27Z",
	"description": "sample cloud endpoint",
	"domain": {
		"id": "rd_2uVav86qk48ZAGRB7BTqVCnnZ2p",
		"uri": "https://api.ngrok.com/reserved_domains/rd_2uVav86qk48ZAGRB7BTqVCnnZ2p"
	},
	"hostport": "endpoint-example2.com:443",
	"id": "ep_2uVavlDCp9Z7cuyHGgyP7ZXZkiA",
	"metadata": "{\"environment\": \"staging\"}",
	"pooling_enabled": false,
	"proto": "https",
	"public_url": "https://endpoint-example2.com",
	"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
	"type": "cloud",
	"updated_at": "2025-03-18T22:20:27Z",
	"uri": "https://api.ngrok.com/endpoints/ep_2uVavlDCp9Z7cuyHGgyP7ZXZkiA",
	"url": "https://endpoint-example2.com"
}
```
