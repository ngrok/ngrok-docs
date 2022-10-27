
#### Example Response
```json
{
  "id": "ec_2Gj44c928i8lB0NcHgdx27IFCII",
  "type": "https",
  "description": "app servers",
  "metadata": "",
  "created_at": "2022-10-27T16:34:28Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2Gj44c928i8lB0NcHgdx27IFCII",
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
        "id": "ipp_2Gj44eek5Z35zNEI6zuW4bomHA2",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2Gj44eek5Z35zNEI6zuW4bomHA2"
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