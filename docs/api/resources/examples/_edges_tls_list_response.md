
#### Example Response
```json
{
  "tls_edges": [
    {
      "id": "edgtls_2NTVHsHoSOClY0mrWICYeydHWFl",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2023-03-24T19:59:34Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2NTVHsHoSOClY0mrWICYeydHWFl",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    },
    {
      "id": "edgtls_2NTVH8nF9NMt63UUkZtMbYNJjnj",
      "description": "acme tls edge",
      "created_at": "2023-03-24T19:59:28Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2NTVH8nF9NMt63UUkZtMbYNJjnj",
      "hostports": [
        "endpoint-example.com:443"
      ],
      "backend": {
        "enabled": true,
        "backend": {
          "id": "bkdhr_2NTVHAmzyLHsPdMekk0niUVDFeC",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2NTVHAmzyLHsPdMekk0niUVDFeC"
        }
      },
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls",
  "next_page_uri": null
}