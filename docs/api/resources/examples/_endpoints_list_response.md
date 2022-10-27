
#### Example Response
```json
{
  "endpoints": [
    {
      "id": "ep_2GjEzJR4Dqgvjws9l6elNKU6Fd9",
      "region": "us",
      "created_at": "2022-10-27T18:04:13Z",
      "updated_at": "2022-10-27T18:04:13Z",
      "public_url": "https://68586757342c.ngrok.io",
      "proto": "https",
      "hostport": "68586757342c.ngrok.io:443",
      "type": "ephemeral",
      "tunnel": {
        "id": "tn_2GjEzJR4Dqgvjws9l6elNKU6Fd9",
        "uri": "https://api.ngrok.com/tunnels/tn_2GjEzJR4Dqgvjws9l6elNKU6Fd9"
      }
    },
    {
      "id": "ep_2GjEzGr1Ra9isrKmjpQIjnkCz4I",
      "region": "us",
      "created_at": "2022-10-27T18:04:13Z",
      "updated_at": "2022-10-27T18:04:13Z",
      "public_url": "tls://endpoint-example.com",
      "proto": "tls",
      "hostport": "endpoint-example.com:443",
      "type": "edge",
      "domain": {
        "id": "rd_2GjEzAdpqlA5zqTTDx7RiFytU87",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2GjEzAdpqlA5zqTTDx7RiFytU87"
      },
      "edge": {
        "id": "edgtls_2GjEzFQxbuZ9IPWFHoptApVei2L",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2GjEzFQxbuZ9IPWFHoptApVei2L"
      }
    }
  ],
  "uri": "https://api.ngrok.com/endpoints",
  "next_page_uri": null
}