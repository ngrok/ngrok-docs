<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-10T10:10:41Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2yJQXcm8MCYYW4hzbytI6KWSYrO",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yJQXcm8MCYYW4hzbytI6KWSYrO"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yJQYEPSHOrsl9B8WVYY8itqspV",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-10T10:10:41Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2yJQYEPSHOrsl9B8WVYY8itqspV",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-10T10:10:39Z",
      "hostport": "c3a962dbd1aa.ngrok.paid:443",
      "id": "ep_2yJQXzF8sUXlEtym9V9u5s8XX5U",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2yJQVTxrDKuERXvnUxYIyX8PH0W",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://c3a962dbd1aa.ngrok.paid",
      "tunnel": {
        "id": "tn_2yJQXzF8sUXlEtym9V9u5s8XX5U",
        "uri": "https://api.ngrok.com/tunnels/tn_2yJQXzF8sUXlEtym9V9u5s8XX5U"
      },
      "tunnel_session": {
        "id": "ts_2yJQY0poMZGOD4o3gqo9966e7fY",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2yJQY0poMZGOD4o3gqo9966e7fY"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-10T10:10:39Z",
      "upstream_url": "http://localhost:80",
      "url": "https://c3a962dbd1aa.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-10T10:10:36Z",
      "domain": {
        "id": "rd_2yJQXcm8MCYYW4hzbytI6KWSYrO",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2yJQXcm8MCYYW4hzbytI6KWSYrO"
      },
      "edge": {
        "id": "edgtls_2yJQXeNu7HYpzMEYb4gE7acYtoC",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2yJQXeNu7HYpzMEYb4gE7acYtoC"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2yJQXcyAxXKaQKK4Rcd93OmI8Ac",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-10T10:10:36Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
