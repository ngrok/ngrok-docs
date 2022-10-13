
#### Example Response

```json
{
  "reserved_domains": [
    {
      "id": "rd_2EmMOiMPkQd3RcavHDESRSRYx9Q",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2EmMOiMPkQd3RcavHDESRSRYx9Q",
      "created_at": "2022-09-14T22:57:55Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "ggsxphut.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "renews_at": null,
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "started_at": "2022-09-14T22:57:55Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2EmMOgbRTfSjjKKmIJYdJCf5yEa",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2EmMOgbRTfSjjKKmIJYdJCf5yEa",
      "created_at": "2022-09-14T22:57:55Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "36ep7bnsw.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2EmMOjyjtRQxXJlOZ7UEIehvuJt",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2EmMOjyjtRQxXJlOZ7UEIehvuJt"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}