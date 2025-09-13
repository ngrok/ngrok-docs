<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-13T10:08:47Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_32dl2V6WjeaVvFhNvF79PcalhX3",
        "uri": "https://api.ngrok.com/reserved_domains/rd_32dl2V6WjeaVvFhNvF79PcalhX3"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_32dl35TZLfQQqGVwIYlpG76uLe3",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-13T10:08:47Z",
      "uri": "https://api.ngrok.com/endpoints/ep_32dl35TZLfQQqGVwIYlpG76uLe3",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-13T10:08:45Z",
      "hostport": "88d495afac88.ngrok.paid:443",
      "id": "ep_32dl2sMtf17zmKD7lhdNgqIoTvr",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_32dkwJrmC3JijMnQdHaMpmeym19",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://88d495afac88.ngrok.paid",
      "tunnel": {
        "id": "tn_32dl2sMtf17zmKD7lhdNgqIoTvr",
        "uri": "https://api.ngrok.com/tunnels/tn_32dl2sMtf17zmKD7lhdNgqIoTvr"
      },
      "tunnel_session": {
        "id": "ts_32dl2tX0O97B1K9SxAiqlFqLnCX",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_32dl2tX0O97B1K9SxAiqlFqLnCX"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-13T10:08:45Z",
      "upstream_url": "http://localhost:80",
      "url": "https://88d495afac88.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-13T10:08:43Z",
      "domain": {
        "id": "rd_32dl2V6WjeaVvFhNvF79PcalhX3",
        "uri": "https://api.ngrok.com/reserved_domains/rd_32dl2V6WjeaVvFhNvF79PcalhX3"
      },
      "edge": {
        "id": "edgtls_32dl2OwV0mO5Oayqn3rVdSNUqI6",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_32dl2OwV0mO5Oayqn3rVdSNUqI6"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_32dl2RCbP2jwDWzY6TskHJfZWGz",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-13T10:08:43Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
