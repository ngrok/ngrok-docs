<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_subscriptions": [
    {
      "created_at": "2025-09-22T10:07:51Z",
      "description": "ip policy creations",
      "destinations": [
        {
          "id": "ed_333B2w4ZY340gi5PVxFYRDmEAK0",
          "uri": "https://api.ngrok.com/event_destinations/ed_333B2w4ZY340gi5PVxFYRDmEAK0"
        }
      ],
      "id": "esb_333B2uCSnbnO1Y2osi5mwPLqcA0",
      "metadata": "{\"environment\": \"staging\"}",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_333B2uCSnbnO1Y2osi5mwPLqcA0/sources/ip_policy_created.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_333B2uCSnbnO1Y2osi5mwPLqcA0"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_subscriptions"
}
```
