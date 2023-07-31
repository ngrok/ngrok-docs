<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "endpoints": [
    {
      "id": "ep_2TMGIKmMaI1zwU7r1tOAI4Gghby",
      "created_at": "2023-07-31T23:17:34Z",
      "updated_at": "2023-07-31T23:17:34Z",
      "public_url": "tls://endpoint-example.com",
      "proto": "tls",
      "hostport": "endpoint-example.com:443",
      "type": "edge",
      "domain": {
        "id": "rd_2TMGI9Jlxc0L7mmJD6YgbEE7MKr",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2TMGI9Jlxc0L7mmJD6YgbEE7MKr"
      },
      "edge": {
        "id": "edgtls_2TMGIEAvsu9Eg9xQVO6zgxZUAzM",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2TMGIEAvsu9Eg9xQVO6zgxZUAzM"
      }
    },
    {
      "id": "ep_2TMGIKA81pzMxYkFQdWlCqyGm0S",
      "created_at": "2023-07-31T23:17:34Z",
      "updated_at": "2023-07-31T23:17:34Z",
      "public_url": "https://58bb38c7dcb6.ngrok.paid",
      "proto": "https",
      "hostport": "58bb38c7dcb6.ngrok.paid:443",
      "type": "ephemeral",
      "tunnel": {
        "id": "tn_2TMGIKA81pzMxYkFQdWlCqyGm0S",
        "uri": "https://api.ngrok.com/tunnels/tn_2TMGIKA81pzMxYkFQdWlCqyGm0S"
      }
    }
  ],
  "uri": "https://api.ngrok.com/endpoints",
  "next_page_uri": null
}