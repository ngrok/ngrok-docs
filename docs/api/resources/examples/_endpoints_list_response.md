<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-27T10:08:30Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_33HIjRnQYMdNYFE8Dh1RyXtBWu7",
        "uri": "https://api.ngrok.com/reserved_domains/rd_33HIjRnQYMdNYFE8Dh1RyXtBWu7"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_33HIk3YiDnlhLsITVbZEOvuqHbc",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-27T10:08:30Z",
      "uri": "https://api.ngrok.com/endpoints/ep_33HIk3YiDnlhLsITVbZEOvuqHbc",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-27T10:08:28Z",
      "hostport": "46b815d67798.ngrok.paid:443",
      "id": "ep_33HIjtUL9cjntvnfuIb1r36Tyzv",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_33HIdFuhxqag3U2r4DwubPO8EDy",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://46b815d67798.ngrok.paid",
      "tunnel": {
        "id": "tn_33HIjtUL9cjntvnfuIb1r36Tyzv",
        "uri": "https://api.ngrok.com/tunnels/tn_33HIjtUL9cjntvnfuIb1r36Tyzv"
      },
      "tunnel_session": {
        "id": "ts_33HIjoiEECYmcwnUSnQhBTC2j91",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_33HIjoiEECYmcwnUSnQhBTC2j91"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-27T10:08:28Z",
      "upstream_url": "http://localhost:80",
      "url": "https://46b815d67798.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-27T10:08:25Z",
      "domain": {
        "id": "rd_33HIjRnQYMdNYFE8Dh1RyXtBWu7",
        "uri": "https://api.ngrok.com/reserved_domains/rd_33HIjRnQYMdNYFE8Dh1RyXtBWu7"
      },
      "edge": {
        "id": "edgtls_33HIjUoyt3P9idzaeZae4dkrWna",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_33HIjUoyt3P9idzaeZae4dkrWna"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_33HIjRbqBTAbwSfIKTwfN7mfD6b",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-27T10:08:25Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
