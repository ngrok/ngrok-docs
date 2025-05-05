<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-05-05T15:51:42Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2wgPZvNy28HijJZKp9cm9CZVFcg",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2wgPZvNy28HijJZKp9cm9CZVFcg"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2wgPYi2cUiK2Ciwk6h9Ko7KHZfK",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2wgPYi2cUiK2Ciwk6h9Ko7KHZfK"
        },
        "enabled": true
      },
      "created_at": "2025-05-05T15:51:32Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2wgPYdOlmEiN9MzO1SADrQfUwps",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2wgPYdOlmEiN9MzO1SADrQfUwps"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
