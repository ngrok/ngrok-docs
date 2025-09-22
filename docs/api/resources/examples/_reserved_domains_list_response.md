<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_333B04VQeGY0XcikZgMiJd4uq11",
        "uri": "https://api.ngrok.com/tls_certificates/cert_333B04VQeGY0XcikZgMiJd4uq11"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.2md3stjwsu9g67np5.local-ngrok-cname.com",
      "created_at": "2025-09-22T10:07:28Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_333B0DDVLb8xhwGRLegNo5ffbql",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_333B0DDVLb8xhwGRLegNo5ffbql"
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
          "started_at": "2025-09-22T10:07:29Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.2md3stjwsu9g67np5.local-ngrok-cname.com",
      "created_at": "2025-09-22T10:07:29Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_333B0CTSZPOclkBohNrnoz1EyT2",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_333B0CTSZPOclkBohNrnoz1EyT2"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-09-22T10:06:58Z",
      "description": "Your dev domain",
      "domain": "unneedy-argentina-gummier.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_333AwKGPV6cqg6Z0466ASo1zHDT",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_333AwKGPV6cqg6Z0466ASo1zHDT"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
