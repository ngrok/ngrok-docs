<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
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
          "started_at": "2025-05-05T15:51:17Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.3rsrxmlec9afj2loj.local-ngrok-cname.com",
      "created_at": "2025-05-05T15:51:17Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2wgPWrHMjXegIbtz9jhzgK88knl",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2wgPWrHMjXegIbtz9jhzgK88knl"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2wgPWgjjvvXiJk6Eu5R2FGMaLhl",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2wgPWgjjvvXiJk6Eu5R2FGMaLhl"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.3rsrxmlec9afj2loj.local-ngrok-cname.com",
      "created_at": "2025-05-05T15:51:16Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2wgPWohCmJZ318D1EZ6yfoIeO9A",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2wgPWohCmJZ318D1EZ6yfoIeO9A"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
