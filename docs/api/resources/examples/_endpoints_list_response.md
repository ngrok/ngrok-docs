<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-22T10:07:49Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_333B23Y9i4wcFj3cw7JVFwrY48t",
        "uri": "https://api.ngrok.com/reserved_domains/rd_333B23Y9i4wcFj3cw7JVFwrY48t"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_333B2kQOL8DYCfLLPQe7ceyCcMn",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-09-22T10:07:49Z",
      "uri": "https://api.ngrok.com/endpoints/ep_333B2kQOL8DYCfLLPQe7ceyCcMn",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-22T10:07:47Z",
      "hostport": "af9b5acc61b3.ngrok.paid:443",
      "id": "ep_333B2UTL9YMvmhR4MUCfC5laJsa",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_333AvsmXZfVtNVNaf7GLBrchhiL",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://af9b5acc61b3.ngrok.paid",
      "tunnel": {
        "id": "tn_333B2UTL9YMvmhR4MUCfC5laJsa",
        "uri": "https://api.ngrok.com/tunnels/tn_333B2UTL9YMvmhR4MUCfC5laJsa"
      },
      "tunnel_session": {
        "id": "ts_333B2SXlSDK8kZve5VeiBEPQQZm",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_333B2SXlSDK8kZve5VeiBEPQQZm"
      },
      "type": "ephemeral",
      "updated_at": "2025-09-22T10:07:47Z",
      "upstream_url": "http://localhost:80",
      "url": "https://af9b5acc61b3.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-09-22T10:07:48Z",
      "domain": {
        "id": "rd_333B23Y9i4wcFj3cw7JVFwrY48t",
        "uri": "https://api.ngrok.com/reserved_domains/rd_333B23Y9i4wcFj3cw7JVFwrY48t"
      },
      "edge": {
        "id": "edgtls_333B22bvqdkOzSjZxP4d7EascRv",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_333B22bvqdkOzSjZxP4d7EascRv"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_333B20OuEyxh7mqvISZuhlb248C",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-09-22T10:07:48Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
