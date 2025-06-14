<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-14T10:06:58Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2yUiaFGuYIFP1J5Vgf2mKLVjwIr",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yUiaFGuYIFP1J5Vgf2mKLVjwIr"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yUialptLavndfzJlFPyN4lTjp8",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-14T10:06:58Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2yUialptLavndfzJlFPyN4lTjp8",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-14T10:06:56Z",
      "hostport": "a2365823ff4a.ngrok.paid:443",
      "id": "ep_2yUiaWwTS0Oru6MMDn3MuwLJT3j",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2yUiYCMcdfrbVLvZIVwos3gsFcl",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://a2365823ff4a.ngrok.paid",
      "tunnel": {
        "id": "tn_2yUiaWwTS0Oru6MMDn3MuwLJT3j",
        "uri": "https://api.ngrok.com/tunnels/tn_2yUiaWwTS0Oru6MMDn3MuwLJT3j"
      },
      "tunnel_session": {
        "id": "ts_2yUiab0JqGgg9H368YkavaZVznJ",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2yUiab0JqGgg9H368YkavaZVznJ"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-14T10:06:56Z",
      "upstream_url": "http://localhost:80",
      "url": "https://a2365823ff4a.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-14T10:06:53Z",
      "domain": {
        "id": "rd_2yUiaFGuYIFP1J5Vgf2mKLVjwIr",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yUiaFGuYIFP1J5Vgf2mKLVjwIr"
      },
      "edge": {
        "id": "edgtls_2yUiaAtunb4V9Q1ubaStZ3qrnTk",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2yUiaAtunb4V9Q1ubaStZ3qrnTk"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yUiaCO1wGH6O71oI5aar3aVdad",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-14T10:06:53Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
