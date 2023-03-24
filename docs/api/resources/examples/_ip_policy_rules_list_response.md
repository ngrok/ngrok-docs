
#### Example Response
```json
{
  "ip_policy_rules": [
    {
      "id": "ipr_2NTVHTjYlcsH1CWAPSZZ6VNyIrs",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2NTVHTjYlcsH1CWAPSZZ6VNyIrs",
      "created_at": "2023-03-24T19:59:30Z",
      "description": "sf office",
      "cidr": "132.2.19.0/24",
      "ip_policy": {
        "id": "ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2NTVHRbeSkInmt6O9Ejox3vQaao",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2NTVHRbeSkInmt6O9Ejox3vQaao",
      "created_at": "2023-03-24T19:59:30Z",
      "description": "alan laptop",
      "cidr": "2.2.2.2/32",
      "ip_policy": {
        "id": "ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2NTVHQK0hhWUVWvcyHjyOKMVYP6",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2NTVHQK0hhWUVWvcyHjyOKMVYP6",
      "created_at": "2023-03-24T19:59:30Z",
      "description": "nyc office",
      "cidr": "212.3.14.0/24",
      "ip_policy": {
        "id": "ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m"
      },
      "action": "allow"
    }
  ],
  "uri": "https://api.ngrok.com/ip_policy_rules",
  "next_page_uri": null
}