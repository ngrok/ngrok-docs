<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_33NaUb4zlFojdIuSN0lQaGFZUks",
        "uri": "https://api.ngrok.com/tls_certificates/cert_33NaUb4zlFojdIuSN0lQaGFZUks"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.5pchun5z1oaqsszqo.local-ngrok-cname.com",
      "created_at": "2025-09-29T15:33:19Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_33NaUYfFuCitPPMes5Gw5hWWiBl",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_33NaUYfFuCitPPMes5Gw5hWWiBl"
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
          "started_at": "2025-09-29T15:33:20Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.5pchun5z1oaqsszqo.local-ngrok-cname.com",
      "created_at": "2025-09-29T15:33:19Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_33NaUgyrs5aXTXMFemaO5Ue1tfd",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_33NaUgyrs5aXTXMFemaO5Ue1tfd"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-09-29T15:32:49Z",
      "description": "Your dev domain",
      "domain": "unflaggingly-confirmatory-josiah.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_33NaQlDG05KLqp1AZctrN4ICpH9",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_33NaQlDG05KLqp1AZctrN4ICpH9"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
