<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-22T18:34:40Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_334AgPJYy6oazT04PL0cWnQm0IS",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_334AgPJYy6oazT04PL0cWnQm0IS"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_334AevwiluGgYXw3xO0l1nhYspV",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_334AevwiluGgYXw3xO0l1nhYspV"
        },
        "enabled": true
      },
      "created_at": "2025-09-22T18:34:29Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_334AeyMbE9VtCT4F375in8TmkQr",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_334AeyMbE9VtCT4F375in8TmkQr"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
