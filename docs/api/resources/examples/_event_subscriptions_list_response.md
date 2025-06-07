<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_subscriptions": [
    {
      "created_at": "2025-06-07T10:07:34Z",
      "description": "ip policy creations",
      "destinations": [
        {
          "id": "ed_2yAwnku7huPBfAtUthQJLVpkpqv",
          "uri": "https://api.ngrok.com/event_destinations/ed_2yAwnku7huPBfAtUthQJLVpkpqv"
        }
      ],
      "id": "esb_2yAwnnBOLYkYURMeMOrlVgP1FQ2",
      "metadata": "{\"environment\": \"staging\"}",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_2yAwnnBOLYkYURMeMOrlVgP1FQ2/sources/ip_policy_created.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_2yAwnnBOLYkYURMeMOrlVgP1FQ2"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_subscriptions"
}
```
