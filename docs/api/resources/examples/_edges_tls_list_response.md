<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-09-29T15:33:47Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_33NaY3aP5cUHOxoR0XVBcaKJ8cP",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_33NaY3aP5cUHOxoR0XVBcaKJ8cP"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_33NaWWO19FNi9FfRw5DObxROJY7",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_33NaWWO19FNi9FfRw5DObxROJY7"
        },
        "enabled": true
      },
      "created_at": "2025-09-29T15:33:35Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_33NaWch2RXQyxXxOSkW59JgBJX9",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_33NaWch2RXQyxXxOSkW59JgBJX9"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
