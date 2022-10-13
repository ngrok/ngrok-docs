
#### Example Response

```json
{
  "endpoints": [
    {
      "id": "ep_2EmMPJyGann8H7FquWinN11XU4b",
      "region": "us",
      "created_at": "2022-09-14T22:58:00Z",
      "updated_at": "2022-09-14T22:58:00Z",
      "public_url": "https://ff426eb957da.ngrok.io",
      "proto": "https",
      "hostport": "ff426eb957da.ngrok.io:443",
      "type": "ephemeral",
      "metadata": "",
      "tunnel": {
        "id": "tn_2EmMPJyGann8H7FquWinN11XU4b",
        "uri": "https://api.ngrok.com/tunnels/tn_2EmMPJyGann8H7FquWinN11XU4b"
      }
    },
    {
      "id": "ep_2EmMPIed9jZs3avmwYn48zp2Vu1",
      "region": "us",
      "created_at": "2022-09-14T22:58:00Z",
      "updated_at": "2022-09-14T22:58:00Z",
      "public_url": "tls://endpoint-example.com",
      "proto": "tls",
      "hostport": "endpoint-example.com:443",
      "type": "edge",
      "metadata": "",
      "domain": {
        "id": "rd_2EmMPJ76lVk2soCtSIx8bWHHNxp",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2EmMPJ76lVk2soCtSIx8bWHHNxp"
      },
      "edge": {
        "id": "edgtls_2EmMPJkytmsCBoch9ITvke8MZeg",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2EmMPJkytmsCBoch9ITvke8MZeg"
      }
    }
  ],
  "uri": "https://api.ngrok.com/endpoints",
  "next_page_uri": null
}