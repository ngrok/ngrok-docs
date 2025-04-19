<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-19T10:07:15Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2vwXhiJcx5nDn0OITVjMZjcWSft",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2vwXhiJcx5nDn0OITVjMZjcWSft"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2vwXiHpCEs544tGxxwQOB2Vtgsw",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-04-19T10:07:15Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2vwXiHpCEs544tGxxwQOB2Vtgsw",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-19T10:07:13Z",
      "hostport": "37a8a8034cdb.ngrok.paid:443",
      "id": "ep_2vwXi1DLl0vD0y30GitvhQAwN0i",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2vwXfbYzTn68tuFq0WPXG5anhdr",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://37a8a8034cdb.ngrok.paid",
      "tunnel": {
        "id": "tn_2vwXi1DLl0vD0y30GitvhQAwN0i",
        "uri": "https://api.ngrok.com/tunnels/tn_2vwXi1DLl0vD0y30GitvhQAwN0i"
      },
      "tunnel_session": {
        "id": "ts_2vwXi7HXoC1D7P8FUnH9ZTX5lV6",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2vwXi7HXoC1D7P8FUnH9ZTX5lV6"
      },
      "type": "ephemeral",
      "updated_at": "2025-04-19T10:07:13Z",
      "upstream_url": "http://localhost:80",
      "url": "https://37a8a8034cdb.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-04-19T10:07:11Z",
      "domain": {
        "id": "rd_2vwXhiJcx5nDn0OITVjMZjcWSft",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2vwXhiJcx5nDn0OITVjMZjcWSft"
      },
      "edge": {
        "id": "edgtls_2vwXhkEnbLnuPvGGcBS7jaZr2UM",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2vwXhkEnbLnuPvGGcBS7jaZr2UM"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2vwXhgE0kmygWXU6ODSh8gFi0BW",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-04-19T10:07:11Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
