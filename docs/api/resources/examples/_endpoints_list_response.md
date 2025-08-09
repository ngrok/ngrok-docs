<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-09T10:15:10Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_312uUfxUKV5jf2P7gN1iTIHQZF9",
        "uri": "https://api.ngrok.com/reserved_domains/rd_312uUfxUKV5jf2P7gN1iTIHQZF9"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_312uVHZsRRjRbF0TFvXiyczBflu",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-09T10:15:10Z",
      "uri": "https://api.ngrok.com/endpoints/ep_312uVHZsRRjRbF0TFvXiyczBflu",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-09T10:15:08Z",
      "hostport": "d636cd80a429.ngrok.paid:443",
      "id": "ep_312uUzuJ2G088HJqZc0P53CwSBp",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_312uOeS26fOCVNAHvaJiV7Z84SK",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://d636cd80a429.ngrok.paid",
      "tunnel": {
        "id": "tn_312uUzuJ2G088HJqZc0P53CwSBp",
        "uri": "https://api.ngrok.com/tunnels/tn_312uUzuJ2G088HJqZc0P53CwSBp"
      },
      "tunnel_session": {
        "id": "ts_312uV3fLmuD9MCCsMgWXie6JxD0",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_312uV3fLmuD9MCCsMgWXie6JxD0"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-09T10:15:08Z",
      "upstream_url": "http://localhost:80",
      "url": "https://d636cd80a429.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-09T10:15:05Z",
      "domain": {
        "id": "rd_312uUfxUKV5jf2P7gN1iTIHQZF9",
        "uri": "https://api.ngrok.com/reserved_domains/rd_312uUfxUKV5jf2P7gN1iTIHQZF9"
      },
      "edge": {
        "id": "edgtls_312uUdVCKLOoVksMlU6SYNzDkml",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_312uUdVCKLOoVksMlU6SYNzDkml"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_312uUhIxvJXoH0Y2jHdOu2GYnjW",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-09T10:15:05Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
