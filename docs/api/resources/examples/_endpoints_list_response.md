<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-20T10:07:53Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_32xWnEYjcMRuvQPvFJt7vbiWQTo",
        "uri": "https://api.ngrok.com/reserved_domains/rd_32xWnEYjcMRuvQPvFJt7vbiWQTo"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_32xWnqB6ceYEUTOe98ZADoz1Kzv",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-20T10:07:53Z",
      "uri": "https://api.ngrok.com/endpoints/ep_32xWnqB6ceYEUTOe98ZADoz1Kzv",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-20T10:07:51Z",
      "hostport": "d5f87384f238.ngrok.paid:443",
      "id": "ep_32xWndshkGkfOMpWL8EbVuYOVze",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_32xWh0SJIncPDt50isQDtLPs99J",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://d5f87384f238.ngrok.paid",
      "tunnel": {
        "id": "tn_32xWndshkGkfOMpWL8EbVuYOVze",
        "uri": "https://api.ngrok.com/tunnels/tn_32xWndshkGkfOMpWL8EbVuYOVze"
      },
      "tunnel_session": {
        "id": "ts_32xWnepxLXPd3BWwaYqDBoh0wWX",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_32xWnepxLXPd3BWwaYqDBoh0wWX"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-20T10:07:51Z",
      "upstream_url": "http://localhost:80",
      "url": "https://d5f87384f238.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-20T10:07:48Z",
      "domain": {
        "id": "rd_32xWnEYjcMRuvQPvFJt7vbiWQTo",
        "uri": "https://api.ngrok.com/reserved_domains/rd_32xWnEYjcMRuvQPvFJt7vbiWQTo"
      },
      "edge": {
        "id": "edgtls_32xWnHBw5OUZ5m5jaigEJgKcIHQ",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_32xWnHBw5OUZ5m5jaigEJgKcIHQ"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_32xWnGqoVbE1B9xuUXdhT91z1Xs",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-20T10:07:48Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
