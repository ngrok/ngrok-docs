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
          "started_at": "2025-08-25T10:07:23Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.5bc1whorlm41nwv8e.local-ngrok-cname.com",
      "created_at": "2025-08-25T10:07:23Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31m5X6jo0GEc55fHOsUp7eSoHYS",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31m5X6jo0GEc55fHOsUp7eSoHYS"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_31m5WxHIERTQgsyAlKMBHQqgV2y",
        "uri": "https://api.ngrok.com/tls_certificates/cert_31m5WxHIERTQgsyAlKMBHQqgV2y"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.5bc1whorlm41nwv8e.local-ngrok-cname.com",
      "created_at": "2025-08-25T10:07:22Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31m5X6AA8ZrR1W5I3830pTNOrhr",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31m5X6AA8ZrR1W5I3830pTNOrhr"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-25T10:06:52Z",
      "description": "Your dev domain",
      "domain": "strongly-adapting-shiner.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31m5TEtVMiG9vie7aHYb5BKfmMp",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31m5TEtVMiG9vie7aHYb5BKfmMp"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
