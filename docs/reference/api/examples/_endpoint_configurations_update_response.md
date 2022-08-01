
###### Example Response
```
{
  "id": "ec_2CdYYYlY53FO96bkMwEL6wc6W2z",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-07-29T22:32:56Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2CdYYYlY53FO96bkMwEL6wc6W2z",
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
        "id": "ipp_2CdYYUkFYOMjrOBqTojiSm2zJky",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2CdYYUkFYOMjrOBqTojiSm2zJky"
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