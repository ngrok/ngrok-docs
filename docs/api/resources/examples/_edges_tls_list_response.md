<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-07-19T10:08:19Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_305a4u0EqYJAzwTZmduLam9YUyU",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_305a4u0EqYJAzwTZmduLam9YUyU"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_305a3aqu2oAVpTkRNobBk9cDETM",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_305a3aqu2oAVpTkRNobBk9cDETM"
        },
        "enabled": true
      },
      "created_at": "2025-07-19T10:08:08Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_305a3XIzPqBg4QE63WRvQfPyEQY",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_305a3XIzPqBg4QE63WRvQfPyEQY"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
