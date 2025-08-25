<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": {
        "backend": {
          "id": "bkdhr_31m5Z7jEzo0jMvNDDLV5IWx7BPW",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_31m5Z7jEzo0jMvNDDLV5IWx7BPW"
        },
        "enabled": true
      },
      "created_at": "2025-08-25T10:07:39Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_31m5Z48rsbp7BtjG1pfqGWnBFy7",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_31m5Z48rsbp7BtjG1pfqGWnBFy7"
    },
    {
      "backend": null,
      "created_at": "2025-08-25T10:07:50Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_31m5aW3m1PIQokHNgMZOWv2upvm",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_31m5aW3m1PIQokHNgMZOWv2upvm"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
