<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-04-22T10:08:38Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2w51Fk4AtKatCZ04rCvEX4Z6F9i",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2w51Fk4AtKatCZ04rCvEX4Z6F9i"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2w51EVf5naHSNicSjsG8nKTSEB2",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2w51EVf5naHSNicSjsG8nKTSEB2"
        },
        "enabled": true
      },
      "created_at": "2025-04-22T10:08:28Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2w51EUc4lOlKO0ELir6nfShsWWz",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2w51EUc4lOlKO0ELir6nfShsWWz"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
