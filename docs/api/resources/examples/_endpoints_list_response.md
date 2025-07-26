<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-26T10:08:36Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_30PLy2lXIenlJvVGUyolUvA4ui7",
        "uri": "https://api.ngrok.com/reserved_domains/rd_30PLy2lXIenlJvVGUyolUvA4ui7"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_30PLybqEmcQVwRzXFJEjfeJ1Kis",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-07-26T10:08:36Z",
      "uri": "https://api.ngrok.com/endpoints/ep_30PLybqEmcQVwRzXFJEjfeJ1Kis",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-26T10:08:33Z",
      "hostport": "b6279b7e3a4b.ngrok.paid:443",
      "id": "ep_30PLyHYDkgojZh4VvKoobUxtu7t",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_30PLrdUpBfrOBfn2qj5Fe9gMYBD",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://b6279b7e3a4b.ngrok.paid",
      "tunnel": {
        "id": "tn_30PLyHYDkgojZh4VvKoobUxtu7t",
        "uri": "https://api.ngrok.com/tunnels/tn_30PLyHYDkgojZh4VvKoobUxtu7t"
      },
      "tunnel_session": {
        "id": "ts_30PLyHzCRMeS9UtljayKGxiGeEl",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_30PLyHzCRMeS9UtljayKGxiGeEl"
      },
      "type": "ephemeral",
      "updated_at": "2025-07-26T10:08:33Z",
      "upstream_url": "http://localhost:80",
      "url": "https://b6279b7e3a4b.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-26T10:08:31Z",
      "domain": {
        "id": "rd_30PLy2lXIenlJvVGUyolUvA4ui7",
        "uri": "https://api.ngrok.com/reserved_domains/rd_30PLy2lXIenlJvVGUyolUvA4ui7"
      },
      "edge": {
        "id": "edgtls_30PLy3xryTXSKHiUxk3hSJmlyz9",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_30PLy3xryTXSKHiUxk3hSJmlyz9"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_30PLy0MNS6gNtZ3w8YucMwpgbVA",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-07-26T10:08:31Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
