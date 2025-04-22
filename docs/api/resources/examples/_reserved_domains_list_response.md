<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2w51CRWqycZUnU1Rau3WWiXSJBL",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2w51CRWqycZUnU1Rau3WWiXSJBL"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.mtn6txchf3ypetwu.local-ngrok-cname.com",
      "created_at": "2025-04-22T10:08:12Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2w51CUmkVT4wv7HCUYZ2M8gJfDV",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2w51CUmkVT4wv7HCUYZ2M8gJfDV"
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
          "started_at": "2025-04-22T10:08:12Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.mtn6txchf3ypetwu.local-ngrok-cname.com",
      "created_at": "2025-04-22T10:08:12Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2w51CU9cm2dlhO3hAcaDnSW7CJU",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2w51CU9cm2dlhO3hAcaDnSW7CJU"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
