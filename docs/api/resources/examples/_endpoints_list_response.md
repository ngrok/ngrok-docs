<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-04T18:01:14Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2y3P1bCfbVrzAIKcut235GAJ2uS",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2y3P1bCfbVrzAIKcut235GAJ2uS"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2y3P2DM9i3UETv8AAODK43tVRCy",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-04T18:01:14Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2y3P2DM9i3UETv8AAODK43tVRCy",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-04T18:01:11Z",
      "hostport": "17b49fbc7a0d.ngrok.paid:443",
      "id": "ep_2y3P1phXaYRQgaRuSF6Gqj3meYg",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2y3OzTsj5TzdwdlICEjO5tC9NzA",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://17b49fbc7a0d.ngrok.paid",
      "tunnel": {
        "id": "tn_2y3P1phXaYRQgaRuSF6Gqj3meYg",
        "uri": "https://api.ngrok.com/tunnels/tn_2y3P1phXaYRQgaRuSF6Gqj3meYg"
      },
      "tunnel_session": {
        "id": "ts_2y3P1vXwy5CUXDmRL4XarwlL7Z0",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2y3P1vXwy5CUXDmRL4XarwlL7Z0"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-04T18:01:11Z",
      "upstream_url": "http://localhost:80",
      "url": "https://17b49fbc7a0d.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-04T18:01:09Z",
      "domain": {
        "id": "rd_2y3P1bCfbVrzAIKcut235GAJ2uS",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2y3P1bCfbVrzAIKcut235GAJ2uS"
      },
      "edge": {
        "id": "edgtls_2y3P1dpKhIEagA47Pqn4lyh0DXK",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2y3P1dpKhIEagA47Pqn4lyh0DXK"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2y3P1fZqUycJipUBOXVUlhOLG3H",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-04T18:01:09Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
