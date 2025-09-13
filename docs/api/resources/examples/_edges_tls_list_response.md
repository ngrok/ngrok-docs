<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-13T10:08:55Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_32dl49Epf2T5fGpoa8FmKCBQ7Fw",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_32dl49Epf2T5fGpoa8FmKCBQ7Fw"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_32dl2OYZG7gJPw75BYAGcxCPQsy",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_32dl2OYZG7gJPw75BYAGcxCPQsy"
        },
        "enabled": true
      },
      "created_at": "2025-09-13T10:08:42Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_32dl2OwV0mO5Oayqn3rVdSNUqI6",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_32dl2OwV0mO5Oayqn3rVdSNUqI6"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
