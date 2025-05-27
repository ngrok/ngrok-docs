<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-15T18:01:34Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2x8ub6SrZAADEPjYcvMV26qxQPt",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2x8ub6SrZAADEPjYcvMV26qxQPt"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2x8ubdQAM5HgdHY3RSncyrnNKuP",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-05-15T18:01:34Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2x8ubdQAM5HgdHY3RSncyrnNKuP",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-15T18:01:32Z",
      "hostport": "6e8274c371b7.ngrok.paid:443",
      "id": "ep_2x8ubUkDNaoM6CI0JTK4reJVf6X",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2x8uZ0iXIv189UIvRlIrkxe9iVs",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://6e8274c371b7.ngrok.paid",
      "tunnel": {
        "id": "tn_2x8ubUkDNaoM6CI0JTK4reJVf6X",
        "uri": "https://api.ngrok.com/tunnels/tn_2x8ubUkDNaoM6CI0JTK4reJVf6X"
      },
      "tunnel_session": {
        "id": "ts_2x8ubPZVfT0jIPcwXdI4vDcoiDO",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2x8ubPZVfT0jIPcwXdI4vDcoiDO"
      },
      "type": "ephemeral",
      "updated_at": "2025-05-15T18:01:32Z",
      "upstream_url": "http://localhost:80",
      "url": "https://6e8274c371b7.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-05-15T18:01:29Z",
      "domain": {
        "id": "rd_2x8ub6SrZAADEPjYcvMV26qxQPt",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2x8ub6SrZAADEPjYcvMV26qxQPt"
      },
      "edge": {
        "id": "edgtls_2x8ub2h20Jqx73Cd1518EqiAniL",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2x8ub2h20Jqx73Cd1518EqiAniL"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2x8ub4PuXUKCJSgcQXmJjgZYjWa",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-05-15T18:01:29Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
