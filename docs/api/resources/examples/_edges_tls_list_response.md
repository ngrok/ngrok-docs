
#### Example Response

```json
{
  "tls_edges": [
    {
      "id": "edgtls_2EmMQDNFUwrhyqRdTmWwUoJNEMN",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-09-14T22:58:07Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2EmMQDNFUwrhyqRdTmWwUoJNEMN",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    },
    {
      "id": "edgtls_2EmMPJkytmsCBoch9ITvke8MZeg",
      "description": "acme tls edge",
      "metadata": "",
      "created_at": "2022-09-14T22:58:00Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2EmMPJkytmsCBoch9ITvke8MZeg",
      "hostports": [
        "endpoint-example.com:443"
      ],
      "backend": {
        "enabled": true,
        "backend": {
          "id": "bkdhr_2EmMPJig06Q53t9CyOSojM605WI",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2EmMPJig06Q53t9CyOSojM605WI"
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