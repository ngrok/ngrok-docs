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
          "started_at": "2025-05-10T10:06:30Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.3vwr1xsda1hmk1edt.local-ngrok-cname.com",
      "created_at": "2025-05-10T10:06:30Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2wtrDQjWtWbrWKOFwbrogYfzkr6",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2wtrDQjWtWbrWKOFwbrogYfzkr6"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2wtrDFy8f3j0iXLuXXDlzEkn4y4",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2wtrDFy8f3j0iXLuXXDlzEkn4y4"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.3vwr1xsda1hmk1edt.local-ngrok-cname.com",
      "created_at": "2025-05-10T10:06:29Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2wtrDL6TWxObVtvO4t4B0xaC5kX",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2wtrDL6TWxObVtvO4t4B0xaC5kX"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
