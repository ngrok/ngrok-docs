<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-04-19T10:07:20Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2vwXiz6GVhLCBPHTDQV2PDEjVEy",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2vwXiz6GVhLCBPHTDQV2PDEjVEy"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2vwXhexEZzqScySTkDXqQqyIGfu",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2vwXhexEZzqScySTkDXqQqyIGfu"
        },
        "enabled": true
      },
      "created_at": "2025-04-19T10:07:10Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2vwXhkEnbLnuPvGGcBS7jaZr2UM",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2vwXhkEnbLnuPvGGcBS7jaZr2UM"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
