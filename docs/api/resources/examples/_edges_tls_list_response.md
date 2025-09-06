<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-06T10:07:54Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_32Jz4nyydA4548uuiOGO0F0E7i0",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_32Jz4nyydA4548uuiOGO0F0E7i0"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_32Jz3Pv5s6YzFHCpepTFoocl4aw",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_32Jz3Pv5s6YzFHCpepTFoocl4aw"
        },
        "enabled": true
      },
      "created_at": "2025-09-06T10:07:43Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_32Jz3S3cyu3hISbHg9YP88nv2lz",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_32Jz3S3cyu3hISbHg9YP88nv2lz"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
