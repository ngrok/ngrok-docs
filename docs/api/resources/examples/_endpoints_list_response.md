<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-07T10:07:32Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2yAwmuPyENxPDfzgEojCPRzpVH8",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yAwmuPyENxPDfzgEojCPRzpVH8"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yAwna4MIuF3cpw5ylCXHlQhU4K",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-07T10:07:32Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2yAwna4MIuF3cpw5ylCXHlQhU4K",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-07T10:07:30Z",
      "hostport": "bdded4dbfbeb.ngrok.paid:443",
      "id": "ep_2yAwnFyFC198j4IQpDGc4LUhkST",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2yAwkuO5SCnlF2ButPKvncSP3x0",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://bdded4dbfbeb.ngrok.paid",
      "tunnel": {
        "id": "tn_2yAwnFyFC198j4IQpDGc4LUhkST",
        "uri": "https://api.ngrok.com/tunnels/tn_2yAwnFyFC198j4IQpDGc4LUhkST"
      },
      "tunnel_session": {
        "id": "ts_2yAwnD1KfjU8ZFNZuDDQckhLDKH",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2yAwnD1KfjU8ZFNZuDDQckhLDKH"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-07T10:07:30Z",
      "upstream_url": "http://localhost:80",
      "url": "https://bdded4dbfbeb.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-07T10:07:28Z",
      "domain": {
        "id": "rd_2yAwmuPyENxPDfzgEojCPRzpVH8",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yAwmuPyENxPDfzgEojCPRzpVH8"
      },
      "edge": {
        "id": "edgtls_2yAwmx3PHAeB2HChbejYnqq8Rdz",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2yAwmx3PHAeB2HChbejYnqq8Rdz"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yAwmqmVQPb7SLszqTZEJClEznG",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-07T10:07:28Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
