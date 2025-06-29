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
          "started_at": "2025-06-29T10:06:35Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.3bexvqv7imhpbkhfz.local-ngrok-cname.com",
      "created_at": "2025-06-29T10:06:35Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2zB5OkmZuti3Ql8ptwGDaes5GDo",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2zB5OkmZuti3Ql8ptwGDaes5GDo"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2zB5OcOfCj3NxbWka9iQQX2e9Jv",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2zB5OcOfCj3NxbWka9iQQX2e9Jv"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.3bexvqv7imhpbkhfz.local-ngrok-cname.com",
      "created_at": "2025-06-29T10:06:34Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2zB5Oa4ZKBL1XSS08xOoP829hjS",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2zB5Oa4ZKBL1XSS08xOoP829hjS"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
