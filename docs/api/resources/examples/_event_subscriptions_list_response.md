
#### Example Response
```json
{
  "event_subscriptions": [
    {
      "id": "esb_2NTVHQCVS4evvT6MHg5Kc0UB6Ar",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_2NTVHQCVS4evvT6MHg5Kc0UB6Ar",
      "created_at": "2023-03-24T19:59:30Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "ip policy creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_2NTVHQCVS4evvT6MHg5Kc0UB6Ar/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_2NTVHNH46kJT5TzzV7gowqhVwRW",
          "uri": "https://api.ngrok.com/event_destinations/ed_2NTVHNH46kJT5TzzV7gowqhVwRW"
        }
      ]
    }
  ],
  "uri": "https://api.ngrok.com/event_subscriptions",
  "next_page_uri": null
}