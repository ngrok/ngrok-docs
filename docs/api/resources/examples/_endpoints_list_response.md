<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-11T10:05:12Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2vZwSwJSfaFXbmPrbepkXnyn6dI",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2vZwSwJSfaFXbmPrbepkXnyn6dI"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2vZwTd6BDgnbeY3dE7CiA1l8Jcq",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-04-11T10:05:12Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2vZwTd6BDgnbeY3dE7CiA1l8Jcq",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-11T10:05:10Z",
      "hostport": "a7b602040a99.ngrok.paid:443",
      "id": "ep_2vZwTL333j3Wfbz5Wh5ECBNj42m",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2vZwQnukiua7Oqncihly7GXQe6d",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://a7b602040a99.ngrok.paid",
      "tunnel": {
        "id": "tn_2vZwTL333j3Wfbz5Wh5ECBNj42m",
        "uri": "https://api.ngrok.com/tunnels/tn_2vZwTL333j3Wfbz5Wh5ECBNj42m"
      },
      "tunnel_session": {
        "id": "ts_2vZwTNp7Gn5mha3cVi28isAxHVa",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2vZwTNp7Gn5mha3cVi28isAxHVa"
      },
      "type": "ephemeral",
      "updated_at": "2025-04-11T10:05:10Z",
      "upstream_url": "http://localhost:80",
      "url": "https://a7b602040a99.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-11T10:05:07Z",
      "domain": {
        "id": "rd_2vZwSwJSfaFXbmPrbepkXnyn6dI",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2vZwSwJSfaFXbmPrbepkXnyn6dI"
      },
      "edge": {
        "id": "edgtls_2vZwSwo6PEP71G63qeXAjZBYulw",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2vZwSwo6PEP71G63qeXAjZBYulw"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2vZwSy7PkhKatD0ukhkqoKQxdYp",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-04-11T10:05:07Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
