<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-05T15:51:37Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2wgPYjX36DElLfsSWwAUfdZ5opy",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2wgPYjX36DElLfsSWwAUfdZ5opy"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2wgPZLZG3SgDZNFgxpMTAjttwuk",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-05-05T15:51:37Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2wgPZLZG3SgDZNFgxpMTAjttwuk",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-05T15:51:35Z",
      "hostport": "25333a597675.ngrok.paid:443",
      "id": "ep_2wgPZ2Jr4jADMF8Qbm53wSkUdNh",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2wgPWhlx5LFDD961rx9Be56QUMt",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://25333a597675.ngrok.paid",
      "tunnel": {
        "id": "tn_2wgPZ2Jr4jADMF8Qbm53wSkUdNh",
        "uri": "https://api.ngrok.com/tunnels/tn_2wgPZ2Jr4jADMF8Qbm53wSkUdNh"
      },
      "tunnel_session": {
        "id": "ts_2wgPZ7GiQVdrXYT89M9MtkMfT89",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2wgPZ7GiQVdrXYT89M9MtkMfT89"
      },
      "type": "ephemeral",
      "updated_at": "2025-05-05T15:51:35Z",
      "upstream_url": "http://localhost:80",
      "url": "https://25333a597675.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-05T15:51:33Z",
      "domain": {
        "id": "rd_2wgPYjX36DElLfsSWwAUfdZ5opy",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2wgPYjX36DElLfsSWwAUfdZ5opy"
      },
      "edge": {
        "id": "edgtls_2wgPYdOlmEiN9MzO1SADrQfUwps",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2wgPYdOlmEiN9MzO1SADrQfUwps"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2wgPYgzTG0u35gx6akWD0RPEMVH",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-05-05T15:51:33Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
