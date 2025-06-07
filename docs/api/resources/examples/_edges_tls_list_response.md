<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-07T10:07:38Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2yAwoILYdCB91pDyWK4J28C2YYN",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yAwoILYdCB91pDyWK4J28C2YYN"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2yAwmwzXNzGLNvYpSKZgxfLzYQP",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2yAwmwzXNzGLNvYpSKZgxfLzYQP"
        },
        "enabled": true
      },
      "created_at": "2025-06-07T10:07:27Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2yAwmx3PHAeB2HChbejYnqq8Rdz",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yAwmx3PHAeB2HChbejYnqq8Rdz"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
