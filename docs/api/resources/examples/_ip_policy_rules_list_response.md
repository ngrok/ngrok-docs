<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "ip_policy_rules": [
    {
      "id": "ipr_2TMGIyU0GbPfNcmU81JtxmuDlJh",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2TMGIyU0GbPfNcmU81JtxmuDlJh",
      "created_at": "2023-07-31T23:17:39Z",
      "description": "sf office",
      "cidr": "132.2.19.0/24",
      "ip_policy": {
        "id": "ipp_2TMGIwB04GGz7E6ZH6TQD1MGITV",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2TMGIwB04GGz7E6ZH6TQD1MGITV"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2TMGIx3VMLCUhRq0EkPF2mRvREa",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2TMGIx3VMLCUhRq0EkPF2mRvREa",
      "created_at": "2023-07-31T23:17:39Z",
      "description": "alan laptop",
      "cidr": "2.2.2.2/32",
      "ip_policy": {
        "id": "ipp_2TMGIwB04GGz7E6ZH6TQD1MGITV",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2TMGIwB04GGz7E6ZH6TQD1MGITV"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2TMGItv8Hgeo4XLgLnhyBbHdSMA",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2TMGItv8Hgeo4XLgLnhyBbHdSMA",
      "created_at": "2023-07-31T23:17:39Z",
      "description": "nyc office",
      "cidr": "212.3.14.0/24",
      "ip_policy": {
        "id": "ipp_2TMGIwB04GGz7E6ZH6TQD1MGITV",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2TMGIwB04GGz7E6ZH6TQD1MGITV"
      },
      "action": "allow"
    }
  ],
  "uri": "https://api.ngrok.com/ip_policy_rules",
  "next_page_uri": null
}