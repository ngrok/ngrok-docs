<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "event_subscriptions": [
    {
      "id": "esb_2TMGJ4M2VEPYPc9GkOi26G6vXQi",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_2TMGJ4M2VEPYPc9GkOi26G6vXQi",
      "created_at": "2023-07-31T23:17:40Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "ip policy creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_2TMGJ4M2VEPYPc9GkOi26G6vXQi/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_2TMGJ358sgxRky0LzmliDmGA2iO",
          "uri": "https://api.ngrok.com/event_destinations/ed_2TMGJ358sgxRky0LzmliDmGA2iO"
        }
      ]
    }
  ],
  "uri": "https://api.ngrok.com/event_subscriptions",
  "next_page_uri": null
}