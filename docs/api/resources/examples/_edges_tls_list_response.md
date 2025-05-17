<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-05-17T10:06:54Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2xDd81Kfxqxev81wjX7M2zmgWfC",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2xDd81Kfxqxev81wjX7M2zmgWfC"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2xDd6fmKm45KljRBSKTQzxf7BGU",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2xDd6fmKm45KljRBSKTQzxf7BGU"
        },
        "enabled": true
      },
      "created_at": "2025-05-17T10:06:43Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2xDd6eX8aJeL7vXaJzFa8cYwCfi",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2xDd6eX8aJeL7vXaJzFa8cYwCfi"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
