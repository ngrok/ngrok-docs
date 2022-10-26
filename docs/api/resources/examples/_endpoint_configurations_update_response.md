
#### Example Response
```json
{
  "id": "ec_2GguzVkisO0WwcmVrDJ1FnjLEZ9",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-10-26T22:20:10Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2GguzVkisO0WwcmVrDJ1FnjLEZ9",
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
        "id": "ipp_2GguzUn7f5HwKOp9iXImfCpzWkp",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2GguzUn7f5HwKOp9iXImfCpzWkp"
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