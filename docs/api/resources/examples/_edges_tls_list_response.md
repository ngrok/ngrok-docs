<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-14T10:07:04Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2yUibZbssvRdhlRSe9iaY9GQxnr",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yUibZbssvRdhlRSe9iaY9GQxnr"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2yUiaCnx3e083zgvcwaaumZC2OJ",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2yUiaCnx3e083zgvcwaaumZC2OJ"
        },
        "enabled": true
      },
      "created_at": "2025-06-14T10:06:53Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2yUiaAtunb4V9Q1ubaStZ3qrnTk",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yUiaAtunb4V9Q1ubaStZ3qrnTk"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
