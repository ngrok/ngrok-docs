<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2vZwR0ucJK4K51D2DabBfQGToCX",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2vZwR0ucJK4K51D2DabBfQGToCX"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.2goryvwf3jp9emjkp.local-ngrok-cname.com",
      "created_at": "2025-04-11T10:04:51Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2vZwQzYAwff5TByNltwOfFw86tt",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2vZwQzYAwff5TByNltwOfFw86tt"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "retries_at": null,
          "started_at": "2025-04-11T10:04:51Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.2goryvwf3jp9emjkp.local-ngrok-cname.com",
      "created_at": "2025-04-11T10:04:51Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2vZwQz5f6YBatIz2LJ8TQbJ6Gel",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2vZwQz5f6YBatIz2LJ8TQbJ6Gel"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
