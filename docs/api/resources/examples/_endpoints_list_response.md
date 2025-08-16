<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-16T10:06:05Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_31MfFnHqouK7UjjTd5osoPACPbx",
        "uri": "https://api.ngrok.com/reserved_domains/rd_31MfFnHqouK7UjjTd5osoPACPbx"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_31MfGREVzBZsbAl4OjLgffkRwsv",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-16T10:06:05Z",
      "uri": "https://api.ngrok.com/endpoints/ep_31MfGREVzBZsbAl4OjLgffkRwsv",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-16T10:06:03Z",
      "hostport": "3ab4b99c1b5e.ngrok.paid:443",
      "id": "ep_31MfG9XJfG9h7E1TRqOWs8TwctE",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_31Mf9Z20nvVap43xSUGQcdgKpnz",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://3ab4b99c1b5e.ngrok.paid",
      "tunnel": {
        "id": "tn_31MfG9XJfG9h7E1TRqOWs8TwctE",
        "uri": "https://api.ngrok.com/tunnels/tn_31MfG9XJfG9h7E1TRqOWs8TwctE"
      },
      "tunnel_session": {
        "id": "ts_31MfGBVipWrR6MDEtrcCb5LHHjC",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_31MfGBVipWrR6MDEtrcCb5LHHjC"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-16T10:06:03Z",
      "upstream_url": "http://localhost:80",
      "url": "https://3ab4b99c1b5e.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-16T10:06:00Z",
      "domain": {
        "id": "rd_31MfFnHqouK7UjjTd5osoPACPbx",
        "uri": "https://api.ngrok.com/reserved_domains/rd_31MfFnHqouK7UjjTd5osoPACPbx"
      },
      "edge": {
        "id": "edgtls_31MfFjzFS8iRDTgn9vNZGSFJM7m",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_31MfFjzFS8iRDTgn9vNZGSFJM7m"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_31MfFmqkMc3JpDufDyQ36FzNUlw",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-16T10:06:00Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
