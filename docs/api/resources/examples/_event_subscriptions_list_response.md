
#### Example Response
```json
{
  "event_subscriptions": [
    {
      "id": "esb_2GjEzRFEFppOoxm9MgBJMIYoXal",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_2GjEzRFEFppOoxm9MgBJMIYoXal",
      "created_at": "2022-10-27T18:04:14Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "ip policy creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_2GjEzRFEFppOoxm9MgBJMIYoXal/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_2GjEzTJqqQrhMr5w3B4stWzrTmo",
          "uri": "https://api.ngrok.com/event_destinations/ed_2GjEzTJqqQrhMr5w3B4stWzrTmo"
        }
      ]
    }
  ],
  "uri": "https://api.ngrok.com/event_subscriptions",
  "next_page_uri": null
}