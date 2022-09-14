
###### Example Response
```
{
  "tls_edges": [
    {
      "id": "edgtls_2ElyGapn92NTDHGhxtTIuBuolCy",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-09-14T19:39:30Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2ElyGapn92NTDHGhxtTIuBuolCy",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    },
    {
      "id": "edgtls_2ElyF6QGniztkLf5tSo2cL5GSEP",
      "description": "acme tls edge",
      "metadata": "",
      "created_at": "2022-09-14T19:39:18Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2ElyF6QGniztkLf5tSo2cL5GSEP",
      "hostports": [
        "endpoint-example.com:443"
      ],
      "backend": {
        "enabled": true,
        "backend": {
          "id": "bkdhr_2ElyF7grVsiRQi1fetl6VhEAvCy",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2ElyF7grVsiRQi1fetl6VhEAvCy"
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