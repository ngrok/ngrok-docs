
###### Example Response
```
{
  "id": "ec_2EloOYnLpc12oqLbqpeHxpdX4yn",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-09-14T18:18:20Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2EloOYnLpc12oqLbqpeHxpdX4yn",
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
        "id": "ipp_2EloOZxO57GLXa4lCQTWEQbDTNF",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2EloOZxO57GLXa4lCQTWEQbDTNF"
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