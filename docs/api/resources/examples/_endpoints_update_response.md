<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"bindings": ["public"],
	"created_at": "2025-03-26T10:06:59Z",
	"description": "Sample Cloud Endpoint",
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
}
```
