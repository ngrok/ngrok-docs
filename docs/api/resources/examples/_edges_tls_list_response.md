<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-10T10:10:47Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2yJQYxsIaK5du96BE5e8TQSG0zf",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yJQYxsIaK5du96BE5e8TQSG0zf"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2yJQXcU5R2vCZHJy5Vsrn6cVpxD",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2yJQXcU5R2vCZHJy5Vsrn6cVpxD"
        },
        "enabled": true
      },
      "created_at": "2025-06-10T10:10:36Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2yJQXeNu7HYpzMEYb4gE7acYtoC",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yJQXeNu7HYpzMEYb4gE7acYtoC"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
