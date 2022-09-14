
###### Example Response
```
{
  "event_subscriptions": [
    {
      "id": "esb_2EmMPfBPKCGk2jf1TIgrHoRygKS",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_2EmMPfBPKCGk2jf1TIgrHoRygKS",
      "created_at": "2022-09-14T22:58:03Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "ip policy creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_2EmMPfBPKCGk2jf1TIgrHoRygKS/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_2EmMPdqeOu2BGALDpT8D2T28tmk",
          "uri": "https://api.ngrok.com/event_destinations/ed_2EmMPdqeOu2BGALDpT8D2T28tmk"
        }
      ]
    }
  ],
  "uri": "https://api.ngrok.com/event_subscriptions",
  "next_page_uri": null
}