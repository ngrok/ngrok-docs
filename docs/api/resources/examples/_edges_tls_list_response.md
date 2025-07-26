<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-07-26T10:08:41Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_30PLzEIoauMlL4MVS4q7Wyh3ruW",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_30PLzEIoauMlL4MVS4q7Wyh3ruW"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_30PLxzeqJHifxcg1Ntv1i8IeR9q",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_30PLxzeqJHifxcg1Ntv1i8IeR9q"
        },
        "enabled": true
      },
      "created_at": "2025-07-26T10:08:31Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_30PLy3xryTXSKHiUxk3hSJmlyz9",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_30PLy3xryTXSKHiUxk3hSJmlyz9"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
