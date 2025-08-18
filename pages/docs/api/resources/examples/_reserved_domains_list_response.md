<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_30si5vV5lWJytO0b51acZFGuzYl",
        "uri": "https://api.ngrok.com/tls_certificates/cert_30si5vV5lWJytO0b51acZFGuzYl"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.h2tyio8n1uy1x7hi.local-ngrok-cname.com",
      "created_at": "2025-08-05T19:35:01Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30si66U1nbzxlNVRNqwA9P01LOY",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30si66U1nbzxlNVRNqwA9P01LOY"
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
          "started_at": "2025-08-05T19:35:02Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.h2tyio8n1uy1x7hi.local-ngrok-cname.com",
      "created_at": "2025-08-05T19:35:02Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30si64bhw7QTDcbMd2VxwvhYo3V",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30si64bhw7QTDcbMd2VxwvhYo3V"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-05T19:34:31Z",
      "description": "Your dev domain",
      "domain": "crayfish-wealthy-hound.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30si2FJDjQRNJFfSJz00f57gLX4",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30si2FJDjQRNJFfSJz00f57gLX4"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
