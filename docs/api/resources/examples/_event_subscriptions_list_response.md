<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_subscriptions": [
    {
      "created_at": "2025-09-27T10:08:31Z",
      "description": "ip policy creations",
      "destinations": [
        {
          "id": "ed_33HIkFrgprtVxrxGL0vMeWISgnE",
          "uri": "https://api.ngrok.com/event_destinations/ed_33HIkFrgprtVxrxGL0vMeWISgnE"
        }
      ],
      "id": "esb_33HIkBBrzNPZFFNuumxyUjZ605q",
      "metadata": "{\"environment\": \"staging\"}",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_33HIkBBrzNPZFFNuumxyUjZ605q/sources/ip_policy_created.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_33HIkBBrzNPZFFNuumxyUjZ605q"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_subscriptions"
}
```
