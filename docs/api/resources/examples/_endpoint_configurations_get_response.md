
#### Example Response
```json
{
  "id": "ec_2IEh24HHGq0DLtZyVy0mxtgt23k",
  "type": "https",
  "description": "app servers",
  "created_at": "2022-11-29T20:07:19Z",
  "uri": "https://api.ngrok.com/endpoint_configurations/ec_2IEh24HHGq0DLtZyVy0mxtgt23k",
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
        "id": "ipp_2IEh2AzQ4m5x8DDhBi3JlSdwwRE",
        "uri": "https://api.ngrok.com/ip_policies/ipp_2IEh2AzQ4m5x8DDhBi3JlSdwwRE"
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