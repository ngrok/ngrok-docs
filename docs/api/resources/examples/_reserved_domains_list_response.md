<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-07-19T10:07:22Z",
      "description": "Your dev domain",
      "domain": "escargot-pet-wrongly.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_305Zxk5VkeCHVQ7PLoZnAf1Meu1",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_305Zxk5VkeCHVQ7PLoZnAf1Meu1"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_305a1WgebLpIHJk8tchyefK04MY",
        "uri": "https://api.ngrok.com/tls_certificates/cert_305a1WgebLpIHJk8tchyefK04MY"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.4xb84da4fp6hoqtej.local-ngrok-cname.com",
      "created_at": "2025-07-19T10:07:52Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_305a1URiohPcNPafL0P2DhPxF8S",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_305a1URiohPcNPafL0P2DhPxF8S"
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
          "started_at": "2025-07-19T10:07:52Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.4xb84da4fp6hoqtej.local-ngrok-cname.com",
      "created_at": "2025-07-19T10:07:52Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_305a1T9AnivxOrWUJTZOMDBQZQE",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_305a1T9AnivxOrWUJTZOMDBQZQE"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
