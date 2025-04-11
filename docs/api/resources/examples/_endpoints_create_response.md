<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "bindings": [
    "public"
  ],
  "created_at": "2025-04-11T10:05:12Z",
  "description": "sample cloud endpoint",
  "domain": {
    "id": "rd_2vZwSwJSfaFXbmPrbepkXnyn6dI",
    "uri": "https://api.ngrok.com/reserved_domains/rd_2vZwSwJSfaFXbmPrbepkXnyn6dI"
  },
  "hostport": "endpoint-example2.com:443",
  "id": "ep_2vZwTd6BDgnbeY3dE7CiA1l8Jcq",
  "metadata": "{\"environment\": \"staging\"}",
  "pooling_enabled": false,
  "proto": "https",
  "public_url": "https://endpoint-example2.com",
  "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
  "type": "cloud",
  "updated_at": "2025-04-11T10:05:12Z",
  "uri": "https://api.ngrok.com/endpoints/ep_2vZwTd6BDgnbeY3dE7CiA1l8Jcq",
  "url": "https://endpoint-example2.com"
}
