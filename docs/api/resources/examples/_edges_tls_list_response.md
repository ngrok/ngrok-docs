<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-20T10:07:59Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_32xWoZjVvSg9JT03mXmbu9uqJ4P",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_32xWoZjVvSg9JT03mXmbu9uqJ4P"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_32xWnD5GySQORXdnjFlezejBpZ8",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_32xWnD5GySQORXdnjFlezejBpZ8"
        },
        "enabled": true
      },
      "created_at": "2025-09-20T10:07:48Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_32xWnHBw5OUZ5m5jaigEJgKcIHQ",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_32xWnHBw5OUZ5m5jaigEJgKcIHQ"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
