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
          "started_at": "2025-09-20T10:07:32Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.213dkrnwgrwvhub9f.local-ngrok-cname.com",
      "created_at": "2025-09-20T10:07:32Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32xWlDY5fzxX3Mw6aEKv4HMvoEl",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32xWlDY5fzxX3Mw6aEKv4HMvoEl"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_32xWl56b6TJUm0c1u5pkLZkmWtf",
        "uri": "https://api.ngrok.com/tls_certificates/cert_32xWl56b6TJUm0c1u5pkLZkmWtf"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.213dkrnwgrwvhub9f.local-ngrok-cname.com",
      "created_at": "2025-09-20T10:07:31Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32xWlBpQkDz6R9cj9LegH5OexjP",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32xWlBpQkDz6R9cj9LegH5OexjP"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-09-20T10:07:01Z",
      "description": "Your dev domain",
      "domain": "rollable-marley-water.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_32xWhIWiIkEjg7we6EJEikTzY7X",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_32xWhIWiIkEjg7we6EJEikTzY7X"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
