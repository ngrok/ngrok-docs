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
      "created_at": "2025-09-22T18:33:43Z",
      "description": "Your dev domain",
      "domain": "luciferous-dutiful-launa.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_334AZFcvHzTTKfdhklVa6LCEBHU",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_334AZFcvHzTTKfdhklVa6LCEBHU"
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
          "started_at": "2025-09-22T18:34:13Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.52dnspdudwqmurqkh.local-ngrok-cname.com",
      "created_at": "2025-09-22T18:34:13Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_334AculfNYbr0gFjCHg7M953er3",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_334AculfNYbr0gFjCHg7M953er3"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_334Aczkpf9jo2VIzr1yJk49GVTv",
        "uri": "https://api.ngrok.com/tls_certificates/cert_334Aczkpf9jo2VIzr1yJk49GVTv"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.52dnspdudwqmurqkh.local-ngrok-cname.com",
      "created_at": "2025-09-22T18:34:13Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_334AcuKyYSb78mvc6a85kktjGP2",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_334AcuKyYSb78mvc6a85kktjGP2"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
