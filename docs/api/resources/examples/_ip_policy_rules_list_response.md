
#### Example Response
```json
{
  "ip_policy_rules": [
    {
      "id": "ipr_2GjEzKLirOL43XWig1fjqeE6qdo",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2GjEzKLirOL43XWig1fjqeE6qdo",
      "created_at": "2022-10-27T18:04:13Z",
      "description": "nyc office",
      "cidr": "212.3.14.0/24",
      "ip_policy": {
        "id": "ipp_2GjEzMIHTdaVgh8nLF9c3ztYOk7",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2GjEzMIHTdaVgh8nLF9c3ztYOk7"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2GjEzJmzXJVIgF55zcBEZQGDSM9",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2GjEzJmzXJVIgF55zcBEZQGDSM9",
      "created_at": "2022-10-27T18:04:13Z",
      "description": "alan laptop",
      "cidr": "2.2.2.2/32",
      "ip_policy": {
        "id": "ipp_2GjEzMIHTdaVgh8nLF9c3ztYOk7",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2GjEzMIHTdaVgh8nLF9c3ztYOk7"
      },
      "action": "allow"
    },
    {
      "id": "ipr_2GjEzJirApR9PF358c5HhHWofXi",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_2GjEzJirApR9PF358c5HhHWofXi",
      "created_at": "2022-10-27T18:04:13Z",
      "description": "sf office",
      "cidr": "132.2.19.0/24",
      "ip_policy": {
        "id": "ipp_2GjEzMIHTdaVgh8nLF9c3ztYOk7",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2GjEzMIHTdaVgh8nLF9c3ztYOk7"
      },
      "action": "allow"
    }
  ],
  "uri": "https://api.ngrok.com/ip_policy_rules",
  "next_page_uri": null
}