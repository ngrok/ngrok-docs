
###### Example Response
```
{
  "id": "ec_2ElyEMA08F8ZYSG5xY5mIMAAq66",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-09-14T19:39:12Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2ElyEMA08F8ZYSG5xY5mIMAAq66",
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
        "id": "ipp_2ElyEKgvqhLG8FgV4C1CaJxpQbu",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2ElyEKgvqhLG8FgV4C1CaJxpQbu"
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