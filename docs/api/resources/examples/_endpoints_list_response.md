<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-19T10:08:13Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_305a3VpKzcJ1yTChGXSx7Sb8XZl",
        "uri": "https://api.ngrok.com/reserved_domains/rd_305a3VpKzcJ1yTChGXSx7Sb8XZl"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_305a4CaIozY0vSNebOPcGhYRgMX",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-07-19T10:08:13Z",
      "uri": "https://api.ngrok.com/endpoints/ep_305a4CaIozY0vSNebOPcGhYRgMX",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-19T10:08:11Z",
      "hostport": "3c6f565b2879.ngrok.paid:443",
      "id": "ep_305a3tmdokXRT13Dvl5hvhSFQ9X",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_305ZxR5CVc5SndHNoKWuAOBPinv",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://3c6f565b2879.ngrok.paid",
      "tunnel": {
        "id": "tn_305a3tmdokXRT13Dvl5hvhSFQ9X",
        "uri": "https://api.ngrok.com/tunnels/tn_305a3tmdokXRT13Dvl5hvhSFQ9X"
      },
      "tunnel_session": {
        "id": "ts_305a3tohqVfjCoLmG7O9eacoXQ8",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_305a3tohqVfjCoLmG7O9eacoXQ8"
      },
      "type": "ephemeral",
      "updated_at": "2025-07-19T10:08:11Z",
      "upstream_url": "http://localhost:80",
      "url": "https://3c6f565b2879.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-07-19T10:08:08Z",
      "domain": {
        "id": "rd_305a3VpKzcJ1yTChGXSx7Sb8XZl",
        "uri": "https://api.ngrok.com/reserved_domains/rd_305a3VpKzcJ1yTChGXSx7Sb8XZl"
      },
      "edge": {
        "id": "edgtls_305a3XIzPqBg4QE63WRvQfPyEQY",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_305a3XIzPqBg4QE63WRvQfPyEQY"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_305a3W8k7Qd7AsI27EpLl0olutb",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-07-19T10:08:08Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
