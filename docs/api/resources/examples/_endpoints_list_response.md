<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-17T10:06:48Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2xDd6ejM8zmExVqkK3V712zfdoa",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2xDd6ejM8zmExVqkK3V712zfdoa"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2xDd7GMbNqdw44WMNUegDxpXo5W",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-05-17T10:06:48Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2xDd7GMbNqdw44WMNUegDxpXo5W",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-17T10:06:46Z",
      "hostport": "488e90b09d1e.ngrok.paid:443",
      "id": "ep_2xDd6xDdSTiyHJOEM6MFVTk3apR",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2xDd4c6upaOxgRc562ModAkaRtg",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://488e90b09d1e.ngrok.paid",
      "tunnel": {
        "id": "tn_2xDd6xDdSTiyHJOEM6MFVTk3apR",
        "uri": "https://api.ngrok.com/tunnels/tn_2xDd6xDdSTiyHJOEM6MFVTk3apR"
      },
      "tunnel_session": {
        "id": "ts_2xDd6y9wIMNiyv8QqcSvU82WO3x",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2xDd6y9wIMNiyv8QqcSvU82WO3x"
      },
      "type": "ephemeral",
      "updated_at": "2025-05-17T10:06:46Z",
      "upstream_url": "http://localhost:80",
      "url": "https://488e90b09d1e.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-17T10:06:44Z",
      "domain": {
        "id": "rd_2xDd6ejM8zmExVqkK3V712zfdoa",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2xDd6ejM8zmExVqkK3V712zfdoa"
      },
      "edge": {
        "id": "edgtls_2xDd6eX8aJeL7vXaJzFa8cYwCfi",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2xDd6eX8aJeL7vXaJzFa8cYwCfi"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2xDd6d6jhlwl0NRjOiq3AXDZUAa",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-05-17T10:06:44Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
