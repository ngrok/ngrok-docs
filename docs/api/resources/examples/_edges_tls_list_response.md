<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-10T10:08:25Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_315io0cUfxlVzA7zR3inHTCTIHX",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_315io0cUfxlVzA7zR3inHTCTIHX"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_315imkF2PodnZ5e3OBjniJv2wcf",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_315imkF2PodnZ5e3OBjniJv2wcf"
        },
        "enabled": true
      },
      "created_at": "2025-08-10T10:08:14Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_315imdPewdmUKLuyNpxqIrt7V5D",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_315imdPewdmUKLuyNpxqIrt7V5D"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
