<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-02T10:08:06Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_30j7lo6fJb6beTFqZGrqkDwSERz",
        "uri": "https://api.ngrok.com/reserved_domains/rd_30j7lo6fJb6beTFqZGrqkDwSERz"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_30j7mQJ1jaY3VUi8qsTiAYqg8oo",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-02T10:08:06Z",
      "uri": "https://api.ngrok.com/endpoints/ep_30j7mQJ1jaY3VUi8qsTiAYqg8oo",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-02T10:08:03Z",
      "hostport": "dc58714a306e.ngrok.paid:443",
      "id": "ep_30j7m0TXvNgrNtKlCt91A3FXr8N",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_30j7fZwYnHhIx0AzcnaRMg3FE2k",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://dc58714a306e.ngrok.paid",
      "tunnel": {
        "id": "tn_30j7m0TXvNgrNtKlCt91A3FXr8N",
        "uri": "https://api.ngrok.com/tunnels/tn_30j7m0TXvNgrNtKlCt91A3FXr8N"
      },
      "tunnel_session": {
        "id": "ts_30j7m1xSTgiLbLKHO5j9POaIj2A",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_30j7m1xSTgiLbLKHO5j9POaIj2A"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-02T10:08:03Z",
      "upstream_url": "http://localhost:80",
      "url": "https://dc58714a306e.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-02T10:08:01Z",
      "domain": {
        "id": "rd_30j7lo6fJb6beTFqZGrqkDwSERz",
        "uri": "https://api.ngrok.com/reserved_domains/rd_30j7lo6fJb6beTFqZGrqkDwSERz"
      },
      "edge": {
        "id": "edgtls_30j7lmNynRTCdT8I27C04j0dptr",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_30j7lmNynRTCdT8I27C04j0dptr"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_30j7ln8VSwR67zGPtn7grk1AmSj",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-02T10:08:01Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
