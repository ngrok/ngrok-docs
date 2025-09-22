<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-22T10:07:55Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_333B3Td6GonzKw9KLCWoXSK7dIg",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_333B3Td6GonzKw9KLCWoXSK7dIg"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_333B23svskf3gCTq8OIqTv7IqbJ",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_333B23svskf3gCTq8OIqTv7IqbJ"
        },
        "enabled": true
      },
      "created_at": "2025-09-22T10:07:44Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_333B22bvqdkOzSjZxP4d7EascRv",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_333B22bvqdkOzSjZxP4d7EascRv"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
