<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-31T10:07:18Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2xrAtbUuciodVx84CDxzl5YO2LA",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2xrAtbUuciodVx84CDxzl5YO2LA"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2xrAu8h2eojD5uoa0aiP6JAgQBm",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-05-31T10:07:18Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2xrAu8h2eojD5uoa0aiP6JAgQBm",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-31T10:07:16Z",
      "hostport": "82457d3a02ce.ngrok.paid:443",
      "id": "ep_2xrAtxLDDMbaAfE6wze9CeLbE3v",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2xrArVcbeAWLLI4LXfEa7hq0MCQ",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://82457d3a02ce.ngrok.paid",
      "tunnel": {
        "id": "tn_2xrAtxLDDMbaAfE6wze9CeLbE3v",
        "uri": "https://api.ngrok.com/tunnels/tn_2xrAtxLDDMbaAfE6wze9CeLbE3v"
      },
      "tunnel_session": {
        "id": "ts_2xrAtxhbQqk4T1o6OoDVxOabw5k",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2xrAtxhbQqk4T1o6OoDVxOabw5k"
      },
      "type": "ephemeral",
      "updated_at": "2025-05-31T10:07:16Z",
      "upstream_url": "http://localhost:80",
      "url": "https://82457d3a02ce.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-31T10:07:14Z",
      "domain": {
        "id": "rd_2xrAtbUuciodVx84CDxzl5YO2LA",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2xrAtbUuciodVx84CDxzl5YO2LA"
      },
      "edge": {
        "id": "edgtls_2xrAtWHQ9mgS8lYMB1l4iX2qhF4",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2xrAtWHQ9mgS8lYMB1l4iX2qhF4"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2xrAtWGlJx4hd6gqtWfxw36DFXz",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-05-31T10:07:14Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
