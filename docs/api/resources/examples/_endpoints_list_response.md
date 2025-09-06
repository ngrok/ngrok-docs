<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-06T10:07:48Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_32Jz3Vz4Ci7Un0gShKmQ4Nu4uH0",
        "uri": "https://api.ngrok.com/reserved_domains/rd_32Jz3Vz4Ci7Un0gShKmQ4Nu4uH0"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_32Jz48VZmVKJTArwiDaYqdbWOZp",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-06T10:07:48Z",
      "uri": "https://api.ngrok.com/endpoints/ep_32Jz48VZmVKJTArwiDaYqdbWOZp",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-06T10:07:46Z",
      "hostport": "2344ac57fae6.ngrok.paid:443",
      "id": "ep_32Jz3q1vHwDqNeOEM7GZM6iauNB",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_32JyxEfchmUrDHWi734TQRyIxdk",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://2344ac57fae6.ngrok.paid",
      "tunnel": {
        "id": "tn_32Jz3q1vHwDqNeOEM7GZM6iauNB",
        "uri": "https://api.ngrok.com/tunnels/tn_32Jz3q1vHwDqNeOEM7GZM6iauNB"
      },
      "tunnel_session": {
        "id": "ts_32Jz3mvQjrfkJ2FAjnEYfJ4i6zd",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_32Jz3mvQjrfkJ2FAjnEYfJ4i6zd"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-06T10:07:46Z",
      "upstream_url": "http://localhost:80",
      "url": "https://2344ac57fae6.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-06T10:07:43Z",
      "domain": {
        "id": "rd_32Jz3Vz4Ci7Un0gShKmQ4Nu4uH0",
        "uri": "https://api.ngrok.com/reserved_domains/rd_32Jz3Vz4Ci7Un0gShKmQ4Nu4uH0"
      },
      "edge": {
        "id": "edgtls_32Jz3S3cyu3hISbHg9YP88nv2lz",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_32Jz3S3cyu3hISbHg9YP88nv2lz"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_32Jz3QgxBsqWGWzX5lfw1EW7CSy",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-06T10:07:43Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
