<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "id": "ec_2TMGG6nQqXn94aQlprd7d1hiLOc",
  "type": "https",
  "description": "app servers",
  "created_at": "2023-07-31T23:17:17Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2TMGG6nQqXn94aQlprd7d1hiLOc",
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
        "id": "ipp_2TMGG6I2oI9nXDNOHY7wvzJCtkN",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2TMGG6I2oI9nXDNOHY7wvzJCtkN"
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