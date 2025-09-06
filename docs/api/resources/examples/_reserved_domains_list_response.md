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
          "started_at": "2025-09-06T10:07:27Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.4op4j6k8k6r87cetm.local-ngrok-cname.com",
      "created_at": "2025-09-06T10:07:27Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32Jz1RVUqT7HaMrSyGzg2XiNCat",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32Jz1RVUqT7HaMrSyGzg2XiNCat"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_32Jz1S4JkFlLl9OU9VXA66BQyaX",
        "uri": "https://api.ngrok.com/tls_certificates/cert_32Jz1S4JkFlLl9OU9VXA66BQyaX"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.4op4j6k8k6r87cetm.local-ngrok-cname.com",
      "created_at": "2025-09-06T10:07:27Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32Jz1Q5bP7AVRzsHrwlpZjLSU1K",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32Jz1Q5bP7AVRzsHrwlpZjLSU1K"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-09-06T10:06:57Z",
      "description": "Your dev domain",
      "domain": "darrin-mediocris-fruitily.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32JyxhqPxC7BLzLie21NcGsgk7N",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32JyxhqPxC7BLzLie21NcGsgk7N"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
