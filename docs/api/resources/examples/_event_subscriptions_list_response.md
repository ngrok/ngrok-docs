<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_subscriptions": [
    {
      "created_at": "2025-09-22T18:34:35Z",
      "description": "ip policy creations",
      "destinations": [
        {
          "id": "ed_334AfmtdsaLXbfxbgPfM4nW7iyY",
          "uri": "https://api.ngrok.com/event_destinations/ed_334AfmtdsaLXbfxbgPfM4nW7iyY"
        }
      ],
      "id": "esb_334AfkFWyld0G2Hnn2LojVlh0BW",
      "metadata": "{\"environment\": \"staging\"}",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_334AfkFWyld0G2Hnn2LojVlh0BW/sources/ip_policy_created.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_334AfkFWyld0G2Hnn2LojVlh0BW"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_subscriptions"
}
```
