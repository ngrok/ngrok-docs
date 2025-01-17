<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-01-17T23:39:50Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2rmHB0EZJkNcUp3ZK0o0C1FX4lU",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2rmHB0EZJkNcUp3ZK0o0C1FX4lU"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2rmH9RxZrxqwQgA9IkMwkFXB0ok",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2rmH9RxZrxqwQgA9IkMwkFXB0ok"
        },
        "enabled": true
      },
      "created_at": "2025-01-17T23:39:38Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2rmH9ekItPBr5sabxN8h318Mbnn",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2rmH9ekItPBr5sabxN8h318Mbnn"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
