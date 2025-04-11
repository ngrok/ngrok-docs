<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-04-11T10:05:17Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2vZwUGQYYKfnM1gbHYKU5Ku8fqs",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2vZwUGQYYKfnM1gbHYKU5Ku8fqs"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2vZwSx8e0HCiAN2ti7lIYzdjHJt",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2vZwSx8e0HCiAN2ti7lIYzdjHJt"
        },
        "enabled": true
      },
      "created_at": "2025-04-11T10:05:07Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2vZwSwo6PEP71G63qeXAjZBYulw",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2vZwSwo6PEP71G63qeXAjZBYulw"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
