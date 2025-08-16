<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-16T10:06:11Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_31MfH6UpiSmYOeapZkYq4Wfy7OT",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_31MfH6UpiSmYOeapZkYq4Wfy7OT"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_31MfFiMaNTuknsyera8OUgwptV1",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_31MfFiMaNTuknsyera8OUgwptV1"
        },
        "enabled": true
      },
      "created_at": "2025-08-16T10:06:00Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_31MfFjzFS8iRDTgn9vNZGSFJM7m",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_31MfFjzFS8iRDTgn9vNZGSFJM7m"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
