<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-30T10:08:01Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_320DDXT8Opvoq8VBvtcg3B3iOMR",
        "uri": "https://api.ngrok.com/reserved_domains/rd_320DDXT8Opvoq8VBvtcg3B3iOMR"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_320DECiqDLV0yMiLocAQQWOByxE",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-30T10:08:01Z",
      "uri": "https://api.ngrok.com/endpoints/ep_320DECiqDLV0yMiLocAQQWOByxE",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-30T10:07:59Z",
      "hostport": "547432b3d0fc.ngrok.paid:443",
      "id": "ep_320DDwtDsnMpMSBFAGGnyk8XFuD",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_320D7Ckqmx9zsDQgAR4lCnvrI9O",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://547432b3d0fc.ngrok.paid",
      "tunnel": {
        "id": "tn_320DDwtDsnMpMSBFAGGnyk8XFuD",
        "uri": "https://api.ngrok.com/tunnels/tn_320DDwtDsnMpMSBFAGGnyk8XFuD"
      },
      "tunnel_session": {
        "id": "ts_320DDwYUulwYoSeDXKHiP0txqAs",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_320DDwYUulwYoSeDXKHiP0txqAs"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-30T10:07:59Z",
      "upstream_url": "http://localhost:80",
      "url": "https://547432b3d0fc.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-30T10:07:56Z",
      "domain": {
        "id": "rd_320DDXT8Opvoq8VBvtcg3B3iOMR",
        "uri": "https://api.ngrok.com/reserved_domains/rd_320DDXT8Opvoq8VBvtcg3B3iOMR"
      },
      "edge": {
        "id": "edgtls_320DDUw2Wj8Wn8ng7GIX4cjR2J2",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_320DDUw2Wj8Wn8ng7GIX4cjR2J2"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_320DDSAFqOzWmla6AtGJFBqJFS4",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-30T10:07:56Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
