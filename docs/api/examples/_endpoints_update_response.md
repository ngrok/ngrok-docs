<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "bindings": [
    "public"
  ],
  "created_at": "2025-01-17T23:39:44Z",
  "description": "Sample Cloud Endpoint",
  "domain": {
    "id": "rd_2rmH9UabjdYnC1fQwDEKZnePyUb",
    "uri": "https://api.ngrok.com/reserved_domains/rd_2rmH9UabjdYnC1fQwDEKZnePyUb"
  },
  "hostport": "endpoint-example2.com:443",
  "id": "ep_2rmHAEl9IihPfkKL2d92iTPfXuO",
  "metadata": "{\"environment\": \"staging\"}",
  "pooling_enabled": false,
  "proto": "https",
  "public_url": "https://endpoint-example2.com",
  "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
  "type": "cloud",
  "updated_at": "2025-01-17T23:39:45Z",
  "uri": "https://api.ngrok.com/endpoints/ep_2rmHAEl9IihPfkKL2d92iTPfXuO",
  "url": "https://endpoint-example2.com"
}
