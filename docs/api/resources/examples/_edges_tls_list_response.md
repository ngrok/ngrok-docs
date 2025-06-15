<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-15T10:06:53Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2yXXhq9ZDo9llcrEKLPELYALwne",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yXXhq9ZDo9llcrEKLPELYALwne"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2yXXgS7sMW2GAd1t8OdB7dxXNgy",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2yXXgS7sMW2GAd1t8OdB7dxXNgy"
        },
        "enabled": true
      },
      "created_at": "2025-06-15T10:06:42Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2yXXgVl2h212gqcIrPFs4X7ixDZ",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2yXXgVl2h212gqcIrPFs4X7ixDZ"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
