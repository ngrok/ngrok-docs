<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_33HIhQcoJU0hV0jtZykgFRBlvzJ",
        "uri": "https://api.ngrok.com/tls_certificates/cert_33HIhQcoJU0hV0jtZykgFRBlvzJ"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.5h5emlxgn3ost8jqw.local-ngrok-cname.com",
      "created_at": "2025-09-27T10:08:09Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_33HIhUXg1xTk47yKOWQqVN8pgm3",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_33HIhUXg1xTk47yKOWQqVN8pgm3"
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
          "started_at": "2025-09-27T10:08:09Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.5h5emlxgn3ost8jqw.local-ngrok-cname.com",
      "created_at": "2025-09-27T10:08:09Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_33HIhRxyeSc2qt9CF8PM0coYvvB",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_33HIhRxyeSc2qt9CF8PM0coYvvB"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-09-27T10:07:38Z",
      "description": "Your dev domain",
      "domain": "dissymmetrically-stromatic-jase.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_33HIdc6ZAY1x6zioXBhZRELLrTO",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_33HIdc6ZAY1x6zioXBhZRELLrTO"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
