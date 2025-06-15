<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-15T10:06:47Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2yXXgUzKnjjXysDynHiKTERhafe",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yXXgUzKnjjXysDynHiKTERhafe"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yXXh4ux8uBBjBBQHh5e0JpVvYo",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-15T10:06:47Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2yXXh4ux8uBBjBBQHh5e0JpVvYo",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-15T10:06:45Z",
      "hostport": "876cf2d90a48.ngrok.paid:443",
      "id": "ep_2yXXgoW8qWpSRLFuO5L2WaLWSXi",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2yXXeOjD2NOHHCVHeDdigbxxBQg",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://876cf2d90a48.ngrok.paid",
      "tunnel": {
        "id": "tn_2yXXgoW8qWpSRLFuO5L2WaLWSXi",
        "uri": "https://api.ngrok.com/tunnels/tn_2yXXgoW8qWpSRLFuO5L2WaLWSXi"
      },
      "tunnel_session": {
        "id": "ts_2yXXgsgT2qxvaj5M6QpdECklk6d",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2yXXgsgT2qxvaj5M6QpdECklk6d"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-15T10:06:45Z",
      "upstream_url": "http://localhost:80",
      "url": "https://876cf2d90a48.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-15T10:06:42Z",
      "domain": {
        "id": "rd_2yXXgUzKnjjXysDynHiKTERhafe",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yXXgUzKnjjXysDynHiKTERhafe"
      },
      "edge": {
        "id": "edgtls_2yXXgVl2h212gqcIrPFs4X7ixDZ",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2yXXgVl2h212gqcIrPFs4X7ixDZ"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yXXgQLYoryfEfbPXGq7HKTifor",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-15T10:06:42Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
