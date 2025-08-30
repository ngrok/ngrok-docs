<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-30T10:08:07Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_320DEqenGlCc2ZwExezL928cAxK",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_320DEqenGlCc2ZwExezL928cAxK"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_320DDU98CbancKXERG0fi2CcNdV",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_320DDU98CbancKXERG0fi2CcNdV"
        },
        "enabled": true
      },
      "created_at": "2025-08-30T10:07:56Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_320DDUw2Wj8Wn8ng7GIX4cjR2J2",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_320DDUw2Wj8Wn8ng7GIX4cjR2J2"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
