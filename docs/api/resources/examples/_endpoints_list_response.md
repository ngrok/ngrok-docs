<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-22T18:34:34Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_334Af11I9kDkVfeCAaSwQcCblvc",
        "uri": "https://api.ngrok.com/reserved_domains/rd_334Af11I9kDkVfeCAaSwQcCblvc"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_334Afe7r9xFZIYcDaFmc7BIOa9u",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-22T18:34:34Z",
      "uri": "https://api.ngrok.com/endpoints/ep_334Afe7r9xFZIYcDaFmc7BIOa9u",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-22T18:34:32Z",
      "hostport": "5e4b4e4a30dd.ngrok.paid:443",
      "id": "ep_334AfIXNv6Ckv7ls37ed1mPj4Un",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_334AYsIkmQjz2Hz8mziqZ1kc26P",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://5e4b4e4a30dd.ngrok.paid",
      "tunnel": {
        "id": "tn_334AfIXNv6Ckv7ls37ed1mPj4Un",
        "uri": "https://api.ngrok.com/tunnels/tn_334AfIXNv6Ckv7ls37ed1mPj4Un"
      },
      "tunnel_session": {
        "id": "ts_334AfMvVgHypLXLh2XFA5QxLPzB",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_334AfMvVgHypLXLh2XFA5QxLPzB"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-22T18:34:32Z",
      "upstream_url": "http://localhost:80",
      "url": "https://5e4b4e4a30dd.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-22T18:34:29Z",
      "domain": {
        "id": "rd_334Af11I9kDkVfeCAaSwQcCblvc",
        "uri": "https://api.ngrok.com/reserved_domains/rd_334Af11I9kDkVfeCAaSwQcCblvc"
      },
      "edge": {
        "id": "edgtls_334AeyMbE9VtCT4F375in8TmkQr",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_334AeyMbE9VtCT4F375in8TmkQr"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_334Aewns2uWVaLrMyAYk07H36Br",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-22T18:34:29Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
