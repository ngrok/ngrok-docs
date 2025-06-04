<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-04T18:01:19Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2y3P2rSyY4YXFKKmuyEiPVQW85j",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2y3P2rSyY4YXFKKmuyEiPVQW85j"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2y3P1gn8OcjyZu0Au2SREPuy70f",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2y3P1gn8OcjyZu0Au2SREPuy70f"
        },
        "enabled": true
      },
      "created_at": "2025-06-04T18:01:09Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2y3P1dpKhIEagA47Pqn4lyh0DXK",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2y3P1dpKhIEagA47Pqn4lyh0DXK"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
