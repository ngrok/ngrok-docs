<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_subscriptions": [
    {
      "created_at": "2025-07-26T10:08:37Z",
      "description": "ip policy creations",
      "destinations": [
        {
          "id": "ed_30PLyhtQv8hlyFzmJof7UKpHnrX",
          "uri": "https://api.ngrok.com/event_destinations/ed_30PLyhtQv8hlyFzmJof7UKpHnrX"
        }
      ],
      "id": "esb_30PLynAar77nrBWDHOyTrPX9Pkc",
      "metadata": "{\"environment\": \"staging\"}",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_30PLynAar77nrBWDHOyTrPX9Pkc/sources/ip_policy_created.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_30PLynAar77nrBWDHOyTrPX9Pkc"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_subscriptions"
}
```
