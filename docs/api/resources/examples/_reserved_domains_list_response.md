<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2yJQVYLwoYDcloRwj22iWsodhkE",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2yJQVYLwoYDcloRwj22iWsodhkE"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.55z7x7vio1vqzzbxa.local-ngrok-cname.com",
      "created_at": "2025-06-10T10:10:20Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2yJQVYYjq5S88G6mMUmY6A2tYtc",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2yJQVYYjq5S88G6mMUmY6A2tYtc"
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
          "started_at": "2025-06-10T10:10:20Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.55z7x7vio1vqzzbxa.local-ngrok-cname.com",
      "created_at": "2025-06-10T10:10:20Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2yJQVbRCIX6NCBQ869aH7N3CyDU",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2yJQVbRCIX6NCBQ869aH7N3CyDU"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
