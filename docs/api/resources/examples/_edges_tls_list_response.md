<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-27T10:08:36Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_33HIksWzzgKhGKHUdis99R9BM4Q",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_33HIksWzzgKhGKHUdis99R9BM4Q"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_33HIjVHuXJI9eNEusGKpv13Rqva",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_33HIjVHuXJI9eNEusGKpv13Rqva"
        },
        "enabled": true
      },
      "created_at": "2025-09-27T10:08:25Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_33HIjUoyt3P9idzaeZae4dkrWna",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_33HIjUoyt3P9idzaeZae4dkrWna"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
