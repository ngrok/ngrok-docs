<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2yAwkrsaZXTS5rHVRHqvVRxQ1B0",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2yAwkrsaZXTS5rHVRHqvVRxQ1B0"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.4ga2ks8jbjcxhgffx.local-ngrok-cname.com",
      "created_at": "2025-06-07T10:07:11Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2yAwl2UJwcFglJV29J0iZbwKuro",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2yAwl2UJwcFglJV29J0iZbwKuro"
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
          "started_at": "2025-06-07T10:07:12Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.4ga2ks8jbjcxhgffx.local-ngrok-cname.com",
      "created_at": "2025-06-07T10:07:12Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2yAwkz76WyWxeDfPFyQsscwck4v",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2yAwkz76WyWxeDfPFyQsscwck4v"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
