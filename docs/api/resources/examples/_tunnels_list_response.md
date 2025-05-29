<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tunnels": [
    {
      "endpoint": {
        "id": "ep_2x8uaBsKihQtSMKjDKkUxNweMKk",
        "uri": "https://api.ngrok.com/endpoints/ep_2x8uaBsKihQtSMKjDKkUxNweMKk"
      },
      "forwards_to": "http://localhost:80",
      "id": "tn_2x8uaBsKihQtSMKjDKkUxNweMKk",
      "proto": "https",
      "public_url": "https://32ec6f42304a.ngrok.paid",
      "region": "us",
      "started_at": "2025-05-15T18:01:22Z",
      "tunnel_session": {
        "id": "ts_2x8uaFMpwh3FlzZTJqZItq6lkVG",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2x8uaFMpwh3FlzZTJqZItq6lkVG"
      }
    },
    {
      "forwards_to": "http://localhost:80",
      "id": "tn_2x8uZWWXOwW0HwxA2aBscpltUfH",
      "labels": {
        "baz": "qux",
        "foo": "bar"
      },
      "region": "us",
      "started_at": "2025-05-15T18:01:17Z",
      "tunnel_session": {
        "id": "ts_2x8uZZwQQuNf3MSh4qHUtb8lnzH",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2x8uZZwQQuNf3MSh4qHUtb8lnzH"
      }
    }
  ],
  "uri": "https://api.ngrok.com/tunnels"
}
```
