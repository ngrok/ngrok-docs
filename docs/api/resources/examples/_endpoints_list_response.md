
#### Example Response
```json
{
  "endpoints": [
    {
      "id": "ep_2Ggv0HNrXJ55KhQgBYxRhg8UwBQ",
      "region": "us",
      "created_at": "2022-10-26T22:20:16Z",
      "updated_at": "2022-10-26T22:20:16Z",
      "public_url": "https://42404f2986bc.ngrok.io",
      "proto": "https",
      "hostport": "42404f2986bc.ngrok.io:443",
      "type": "ephemeral",
      "metadata": "",
      "tunnel": {
        "id": "tn_2Ggv0HNrXJ55KhQgBYxRhg8UwBQ",
        "uri": "https://api.ngrok.com/tunnels/tn_2Ggv0HNrXJ55KhQgBYxRhg8UwBQ"
      }
    },
    {
      "id": "ep_2Ggv0FyIizZn3b72UzMzcqEfxB8",
      "region": "us",
      "created_at": "2022-10-26T22:20:16Z",
      "updated_at": "2022-10-26T22:20:16Z",
      "public_url": "tls://endpoint-example.com",
      "proto": "tls",
      "hostport": "endpoint-example.com:443",
      "type": "edge",
      "metadata": "",
      "domain": {
        "id": "rd_2Ggv09PoCss1sfA9ssnh5hhGZIr",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2Ggv09PoCss1sfA9ssnh5hhGZIr"
      },
      "edge": {
        "id": "edgtls_2Ggv07jrOlkKNIfRRxpPtx3B39h",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2Ggv07jrOlkKNIfRRxpPtx3B39h"
      }
    }
  ],
  "uri": "https://api.ngrok.com/endpoints",
  "next_page_uri": null
}