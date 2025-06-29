<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-29T10:07:01Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2zB5S4FUMhiC59JRTurQs2KcDaO",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2zB5S4FUMhiC59JRTurQs2KcDaO"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2zB5QghnvBFghJrGe4yFP5uVcQs",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2zB5QghnvBFghJrGe4yFP5uVcQs"
        },
        "enabled": true
      },
      "created_at": "2025-06-29T10:06:50Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2zB5Qdxv02EcUUiIkJz1FXoUjB9",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2zB5Qdxv02EcUUiIkJz1FXoUjB9"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
