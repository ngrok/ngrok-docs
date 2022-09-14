
###### Example Response
```
{
  "id": "ec_2ElcuPQ9RyJbVCdn1ciee2TAIwE",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-09-14T16:43:53Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2ElcuPQ9RyJbVCdn1ciee2TAIwE",
  "basic_auth": null,
  "circuit_breaker": null,
  "compression": null,
  "request_headers": {
    "enabled": true,
    "add": {
      "x-frontend": "ngrok"
    },
    "remove": [
      "cache-control"
    ]
  },
  "response_headers": null,
  "ip_policy": {
    "enabled": true,
    "ip_policies": [
      {
        "id": "ipp_2ElcuTUufnkUxeEEn6lchAOZeGr",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2ElcuTUufnkUxeEEn6lchAOZeGr"
      }
    ]
  },
  "mutual_tls": null,
  "tls_termination": null,
  "webhook_validation": null,
  "oauth": null,
  "saml": null,
  "oidc": null,
  "backend": null
}