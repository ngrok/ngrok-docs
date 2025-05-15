<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-05-15T18:01:39Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2x8ucISSvelHz5zB3I7XX0z66Kp",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2x8ucISSvelHz5zB3I7XX0z66Kp"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2x8ub65YBFJzsz2uPNgo1bFiBxw",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2x8ub65YBFJzsz2uPNgo1bFiBxw"
        },
        "enabled": true
      },
      "created_at": "2025-05-15T18:01:29Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2x8ub2h20Jqx73Cd1518EqiAniL",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2x8ub2h20Jqx73Cd1518EqiAniL"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
