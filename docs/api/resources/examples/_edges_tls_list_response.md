<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-08-02T10:08:12Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_30j7nEeV25dnVHq1uBGGpCMci5k",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_30j7nEeV25dnVHq1uBGGpCMci5k"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_30j7lraz8WZ8uylIkDPLXtsVWCS",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_30j7lraz8WZ8uylIkDPLXtsVWCS"
        },
        "enabled": true
      },
      "created_at": "2025-08-02T10:08:01Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_30j7lmNynRTCdT8I27C04j0dptr",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_30j7lmNynRTCdT8I27C04j0dptr"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
