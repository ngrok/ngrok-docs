<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-29T15:33:40Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_33NaWaNfCsUmU8dSliGUuFlGkV6",
        "uri": "https://api.ngrok.com/reserved_domains/rd_33NaWaNfCsUmU8dSliGUuFlGkV6"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_33NaX9XJuoqsIGyBB3xxNP9CihJ",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-29T15:33:40Z",
      "uri": "https://api.ngrok.com/endpoints/ep_33NaX9XJuoqsIGyBB3xxNP9CihJ",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-29T15:33:38Z",
      "hostport": "6bfcdce199fa.ngrok.paid:443",
      "id": "ep_33NaWwXEoTazTADJ5EvwtIc1xaW",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_33NaQNP1BSnoXmuWrOEK49Wnryh",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://6bfcdce199fa.ngrok.paid",
      "tunnel": {
        "id": "tn_33NaWwXEoTazTADJ5EvwtIc1xaW",
        "uri": "https://api.ngrok.com/tunnels/tn_33NaWwXEoTazTADJ5EvwtIc1xaW"
      },
      "tunnel_session": {
        "id": "ts_33NaWxIVcpWrUMPj2leLIGRD0OH",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_33NaWxIVcpWrUMPj2leLIGRD0OH"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-29T15:33:38Z",
      "upstream_url": "http://localhost:80",
      "url": "https://6bfcdce199fa.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-29T15:33:36Z",
      "domain": {
        "id": "rd_33NaWaNfCsUmU8dSliGUuFlGkV6",
        "uri": "https://api.ngrok.com/reserved_domains/rd_33NaWaNfCsUmU8dSliGUuFlGkV6"
      },
      "edge": {
        "id": "edgtls_33NaWch2RXQyxXxOSkW59JgBJX9",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_33NaWch2RXQyxXxOSkW59JgBJX9"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_33NaWcm7EmzZ8VJrCSZ9AVMCkyh",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-29T15:33:36Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
