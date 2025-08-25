<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-25T10:07:44Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_31m5Z1EayWF3UKEdiRy4rE9ox0Y",
        "uri": "https://api.ngrok.com/reserved_domains/rd_31m5Z1EayWF3UKEdiRy4rE9ox0Y"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_31m5ZiiO65BJFSqT4FqyMQ3qoKF",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-25T10:07:44Z",
      "uri": "https://api.ngrok.com/endpoints/ep_31m5ZiiO65BJFSqT4FqyMQ3qoKF",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-25T10:07:41Z",
      "hostport": "002fcf215fb0.ngrok.paid:443",
      "id": "ep_31m5ZKWYEefEyONajBEMZRsjT4b",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_31m5SlzEhOMTuxaXC4P7XIUNUr0",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://002fcf215fb0.ngrok.paid",
      "tunnel": {
        "id": "tn_31m5ZKWYEefEyONajBEMZRsjT4b",
        "uri": "https://api.ngrok.com/tunnels/tn_31m5ZKWYEefEyONajBEMZRsjT4b"
      },
      "tunnel_session": {
        "id": "ts_31m5ZJOpsXvoSf91wVL2gPx3xse",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_31m5ZJOpsXvoSf91wVL2gPx3xse"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-25T10:07:41Z",
      "upstream_url": "http://localhost:80",
      "url": "https://002fcf215fb0.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-25T10:07:39Z",
      "domain": {
        "id": "rd_31m5Z1EayWF3UKEdiRy4rE9ox0Y",
        "uri": "https://api.ngrok.com/reserved_domains/rd_31m5Z1EayWF3UKEdiRy4rE9ox0Y"
      },
      "edge": {
        "id": "edgtls_31m5Z48rsbp7BtjG1pfqGWnBFy7",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_31m5Z48rsbp7BtjG1pfqGWnBFy7"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_31m5Z8hBfT7asbfNJukyQRtASiU",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-25T10:07:39Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
