<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-05-10T10:06:56Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2wtrGcXghKZqt0CZs08MfONSezF",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2wtrGcXghKZqt0CZs08MfONSezF"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2wtrFJOVJap8p0yQgoSDqloBtIl",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2wtrFJOVJap8p0yQgoSDqloBtIl"
        },
        "enabled": true
      },
      "created_at": "2025-05-10T10:06:45Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2wtrFFD1ND2WIbiHPXH3uLgQYXF",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2wtrFFD1ND2WIbiHPXH3uLgQYXF"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
