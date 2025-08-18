<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-05T19:35:22Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_30si7x8UvJzwkMDnNQsulxREAr3",
        "uri": "https://api.ngrok.com/reserved_domains/rd_30si7x8UvJzwkMDnNQsulxREAr3"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_30si8b873mvhN5Bm2FPaC2xoKH9",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-05T19:35:22Z",
      "uri": "https://api.ngrok.com/endpoints/ep_30si8b873mvhN5Bm2FPaC2xoKH9",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-05T19:35:20Z",
      "hostport": "8bdadd9afcc0.ngrok.paid:443",
      "id": "ep_30si8Jatq1ib2TMueTWo9mSeze0",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_30si1oLXr0BD6OOtoosIWpPXwBf",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://8bdadd9afcc0.ngrok.paid",
      "tunnel": {
        "id": "tn_30si8Jatq1ib2TMueTWo9mSeze0",
        "uri": "https://api.ngrok.com/tunnels/tn_30si8Jatq1ib2TMueTWo9mSeze0"
      },
      "tunnel_session": {
        "id": "ts_30si8M0p0SH5yfn4GsgerMaPWw8",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_30si8M0p0SH5yfn4GsgerMaPWw8"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-05T19:35:20Z",
      "upstream_url": "http://localhost:80",
      "url": "https://8bdadd9afcc0.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-05T19:35:17Z",
      "domain": {
        "id": "rd_30si7x8UvJzwkMDnNQsulxREAr3",
        "uri": "https://api.ngrok.com/reserved_domains/rd_30si7x8UvJzwkMDnNQsulxREAr3"
      },
      "edge": {
        "id": "edgtls_30si80T3JWqx4xSXm7OJg37355T",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_30si80T3JWqx4xSXm7OJg37355T"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_30si7zYfKdK61y5x48gZqQZj2B2",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-05T19:35:17Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
