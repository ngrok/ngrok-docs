
###### Example Response
```
{
  "id": "ec_2EmMOVrSBgqkpG8TQI6eAoK0vxs",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-09-14T22:57:54Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2EmMOVrSBgqkpG8TQI6eAoK0vxs",
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
        "id": "ipp_2EmMOixLQ6LRQwA53ANzplQXB8p",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2EmMOixLQ6LRQwA53ANzplQXB8p"
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