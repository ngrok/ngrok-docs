<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-10T10:06:50Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2wtrFErq87CijTYqqc1Cy0vyTgw",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2wtrFErq87CijTYqqc1Cy0vyTgw"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2wtrFvPWyGnhhBAJHOt15SvJoja",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-05-10T10:06:50Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2wtrFvPWyGnhhBAJHOt15SvJoja",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-10T10:06:48Z",
      "hostport": "f3c75243e1a2.ngrok.paid:443",
      "id": "ep_2wtrFdHIF0fuGteEwzmCLFXOKP0",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2wtrDIOrsE2D493NZC2xTdIeARc",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://f3c75243e1a2.ngrok.paid",
      "tunnel": {
        "id": "tn_2wtrFdHIF0fuGteEwzmCLFXOKP0",
        "uri": "https://api.ngrok.com/tunnels/tn_2wtrFdHIF0fuGteEwzmCLFXOKP0"
      },
      "tunnel_session": {
        "id": "ts_2wtrFflcLIEdRfegEdVrZVzf4WG",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2wtrFflcLIEdRfegEdVrZVzf4WG"
      },
      "type": "ephemeral",
      "updated_at": "2025-05-10T10:06:48Z",
      "upstream_url": "http://localhost:80",
      "url": "https://f3c75243e1a2.ngrok.paid"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
