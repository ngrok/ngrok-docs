
#### Example Response
```json
{
  "id": "ec_2GjCQmscgidfoHX6Enf5D6y2aal",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-10-27T17:43:11Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2GjCQmscgidfoHX6Enf5D6y2aal",
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
        "id": "ipp_2GjCQfmMrcLeRG7ZKFIvFLNkKHv",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2GjCQfmMrcLeRG7ZKFIvFLNkKHv"
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