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
          "started_at": "2025-09-13T10:08:27Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.3yamsbancqpkyx71i.local-ngrok-cname.com",
      "created_at": "2025-09-13T10:08:26Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32dl0YNoxrRHwV6RvBtYXHYDl5F",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32dl0YNoxrRHwV6RvBtYXHYDl5F"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_32dl0U3zCNT1VlxHj9CKzgn53oW",
        "uri": "https://api.ngrok.com/tls_certificates/cert_32dl0U3zCNT1VlxHj9CKzgn53oW"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.3yamsbancqpkyx71i.local-ngrok-cname.com",
      "created_at": "2025-09-13T10:08:26Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32dl0VJyefM5PhnBXNIpZI3Zd5x",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32dl0VJyefM5PhnBXNIpZI3Zd5x"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-09-13T10:07:56Z",
      "description": "Your dev domain",
      "domain": "sulfonyl-majorie-punctually.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32dkweZeNaxqWhG6ZrCNG2cXOoo",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32dkweZeNaxqWhG6ZrCNG2cXOoo"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
