<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-10T10:08:19Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_315imip7p6wcDawcD4gqGYdJEff",
        "uri": "https://api.ngrok.com/reserved_domains/rd_315imip7p6wcDawcD4gqGYdJEff"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_315inJnmvKjYxsylQcrXD0Tg8E8",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-08-10T10:08:19Z",
      "uri": "https://api.ngrok.com/endpoints/ep_315inJnmvKjYxsylQcrXD0Tg8E8",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-10T10:08:17Z",
      "hostport": "2354f69fa822.ngrok.paid:443",
      "id": "ep_315in386b3AD9oFfrLzHiD473Qs",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_315igZGx6tMdhKuPUavdBSV8Y1U",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://2354f69fa822.ngrok.paid",
      "tunnel": {
        "id": "tn_315in386b3AD9oFfrLzHiD473Qs",
        "uri": "https://api.ngrok.com/tunnels/tn_315in386b3AD9oFfrLzHiD473Qs"
      },
      "tunnel_session": {
        "id": "ts_315in4y8gfapuf1zyEMOXvHTrJu",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_315in4y8gfapuf1zyEMOXvHTrJu"
      },
      "type": "ephemeral",
      "updated_at": "2025-08-10T10:08:17Z",
      "upstream_url": "http://localhost:80",
      "url": "https://2354f69fa822.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-08-10T10:08:14Z",
      "domain": {
        "id": "rd_315imip7p6wcDawcD4gqGYdJEff",
        "uri": "https://api.ngrok.com/reserved_domains/rd_315imip7p6wcDawcD4gqGYdJEff"
      },
      "edge": {
        "id": "edgtls_315imdPewdmUKLuyNpxqIrt7V5D",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_315imdPewdmUKLuyNpxqIrt7V5D"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_315imfRHlo4wVpE4SgtJLumG7Vj",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-08-10T10:08:14Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
