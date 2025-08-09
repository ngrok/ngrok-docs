<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-09T10:15:16Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_312uW6uCLP6A6ACOQIz4gI1zGo3",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_312uW6uCLP6A6ACOQIz4gI1zGo3"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_312uUdi6ToAE1dOGPJk2tPGcKBp",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_312uUdi6ToAE1dOGPJk2tPGcKBp"
        },
        "enabled": true
      },
      "created_at": "2025-08-09T10:15:05Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_312uUdVCKLOoVksMlU6SYNzDkml",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_312uUdVCKLOoVksMlU6SYNzDkml"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
