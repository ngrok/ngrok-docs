<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-05-31T10:07:24Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2xrAuy4GrH5dE62qKFMBCkS2b8e",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2xrAuy4GrH5dE62qKFMBCkS2b8e"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2xrAtVa3S0ndesicoHB8MWzZxnT",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2xrAtVa3S0ndesicoHB8MWzZxnT"
        },
        "enabled": true
      },
      "created_at": "2025-05-31T10:07:13Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2xrAtWHQ9mgS8lYMB1l4iX2qhF4",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2xrAtWHQ9mgS8lYMB1l4iX2qhF4"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
