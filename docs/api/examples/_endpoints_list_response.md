<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-01-17T23:39:42Z",
      "hostport": "247e915badaf.ngrok.paid:443",
      "id": "ep_2rmH9zdI5KemUPxuoYquM22Ystg",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2rmH7Rnnm9yLoitn0QOR2NdWawG",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://247e915badaf.ngrok.paid",
      "tunnel": {
        "id": "tn_2rmH9zdI5KemUPxuoYquM22Ystg",
        "uri": "https://api.ngrok.com/tunnels/tn_2rmH9zdI5KemUPxuoYquM22Ystg"
      },
      "tunnel_session": {
        "id": "ts_2rmH9xwuMpSTihPlaikp776FlBr",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2rmH9xwuMpSTihPlaikp776FlBr"
      },
      "type": "ephemeral",
      "updated_at": "2025-01-17T23:39:42Z",
      "upstream_url": "http://localhost:80",
      "url": "https://247e915badaf.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-01-17T23:39:39Z",
      "domain": {
        "id": "rd_2rmH9UabjdYnC1fQwDEKZnePyUb",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2rmH9UabjdYnC1fQwDEKZnePyUb"
      },
      "edge": {
        "id": "edgtls_2rmH9ekItPBr5sabxN8h318Mbnn",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2rmH9ekItPBr5sabxN8h318Mbnn"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2rmH9e7F3gcB3A3ekeOl47LjYwm",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-01-17T23:39:39Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
