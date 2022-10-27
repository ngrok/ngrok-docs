
#### Example Response
```json
{
  "id": "ec_2GjEybTPVxKdaYUjjeykwAF7LRD",
  "type": "https",
  "description": "app servers",
  "created_at": "2022-10-27T18:04:07Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2GjEybTPVxKdaYUjjeykwAF7LRD",
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
        "id": "ipp_2GjEyYsJq9dOP8Qg9usqzwRAmBk",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2GjEyYsJq9dOP8Qg9usqzwRAmBk"
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