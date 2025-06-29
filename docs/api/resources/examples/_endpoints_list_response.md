<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-29T10:06:55Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2zB5Qh9IQ4paNZykqNUPCXRzF8H",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2zB5Qh9IQ4paNZykqNUPCXRzF8H"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2zB5RKJPJ2GpY8PfvnavESivyi6",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-29T10:06:55Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2zB5RKJPJ2GpY8PfvnavESivyi6",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-29T10:06:53Z",
      "hostport": "03bbb7fd3342.ngrok.paid:443",
      "id": "ep_2zB5R3jbnbX4uKTTGmCjLjmJhd7",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2zB5OdZu48zwP2Yc3DO7vY7fO7A",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://03bbb7fd3342.ngrok.paid",
      "tunnel": {
        "id": "tn_2zB5R3jbnbX4uKTTGmCjLjmJhd7",
        "uri": "https://api.ngrok.com/tunnels/tn_2zB5R3jbnbX4uKTTGmCjLjmJhd7"
      },
      "tunnel_session": {
        "id": "ts_2zB5R3DY69B2g5zZIMaSKy1HuKF",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2zB5R3DY69B2g5zZIMaSKy1HuKF"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-29T10:06:53Z",
      "upstream_url": "http://localhost:80",
      "url": "https://03bbb7fd3342.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-29T10:06:50Z",
      "domain": {
        "id": "rd_2zB5Qh9IQ4paNZykqNUPCXRzF8H",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2zB5Qh9IQ4paNZykqNUPCXRzF8H"
      },
      "edge": {
        "id": "edgtls_2zB5Qdxv02EcUUiIkJz1FXoUjB9",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2zB5Qdxv02EcUUiIkJz1FXoUjB9"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2zB5QdAiiwxtH5uE7SFAGgeAt3b",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-29T10:06:50Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
