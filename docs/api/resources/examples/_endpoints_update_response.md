<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "bindings": [
    "public"
  ],
  "created_at": "2025-09-04T10:11:35Z",
  "description": "Sample Cloud Endpoint",
  "domain": {
    "id": "rd_32ELGgng2bHjKV4NCZ5GuWGEdtK",
    "uri": "https://api.ngrok.com/reserved_domains/rd_32ELGgng2bHjKV4NCZ5GuWGEdtK"
  },
  "hostport": "endpoint-example2.com:443",
  "id": "ep_32ELHJciGkvcKjnjhClgnkMIJSs",
  "metadata": "{\"environment\": \"staging\"}",
  "pooling_enabled": false,
  "proto": "https",
  "public_url": "https://endpoint-example2.com",
  "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
  "type": "cloud",
  "updated_at": "2025-09-04T10:11:35Z",
  "uri": "https://api.ngrok.com/endpoints/ep_32ELHJciGkvcKjnjhClgnkMIJSs",
  "url": "https://endpoint-example2.com"
}
```
