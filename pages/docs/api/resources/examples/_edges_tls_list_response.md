<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-05T19:35:29Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_30si9RoInmQdxa9yzOVsyBo8ICm",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_30si9RoInmQdxa9yzOVsyBo8ICm"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_30si7zWYkocssISrN4sovuO1btt",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_30si7zWYkocssISrN4sovuO1btt"
        },
        "enabled": true
      },
      "created_at": "2025-08-05T19:35:17Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_30si80T3JWqx4xSXm7OJg37355T",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_30si80T3JWqx4xSXm7OJg37355T"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
