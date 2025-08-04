<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tunnels": [
    {
      "endpoint": {
        "id": "ep_2yJQWaNvYHnfPFiPnbDW8QmwwT3",
        "uri": "https://api.ngrok.com/endpoints/ep_2yJQWaNvYHnfPFiPnbDW8QmwwT3"
      },
      "forwards_to": "http://localhost:80",
      "id": "tn_2yJQWaNvYHnfPFiPnbDW8QmwwT3",
      "proto": "https",
      "public_url": "https://e132a8dcf484.ngrok.paid",
      "region": "us",
      "started_at": "2025-06-10T10:10:28Z",
      "tunnel_session": {
        "id": "ts_2yJQWZ7kRtUsRz7jOPKZHKQY01l",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2yJQWZ7kRtUsRz7jOPKZHKQY01l"
      }
    },
    {
      "forwards_to": "http://localhost:80",
      "id": "tn_2yJQWBmUZ3lFWUM1qh24Tq676km",
      "labels": {
        "baz": "qux",
        "foo": "bar"
      },
      "region": "us",
      "started_at": "2025-06-10T10:10:25Z",
      "tunnel_session": {
        "id": "ts_2yJQWAZemiEL7KVfpIac6blLQce",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2yJQWAZemiEL7KVfpIac6blLQce"
      }
    }
  ],
  "uri": "https://api.ngrok.com/tunnels"
}
```
