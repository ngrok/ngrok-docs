
###### Example Response
```
{
  "id": "ec_2EPdufhRTpsNACM166DOr407BY1",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-09-06T21:56:17Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2EPdufhRTpsNACM166DOr407BY1",
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
        "id": "ipp_2EPdukiT6De3P5W0YRazRkid093",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2EPdukiT6De3P5W0YRazRkid093"
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