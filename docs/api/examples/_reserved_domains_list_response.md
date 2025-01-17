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
          "started_at": "2025-01-17T23:39:23Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.5ia54qwbrpbxxgurp.local-ngrok-cname.com",
      "created_at": "2025-01-17T23:39:23Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2rmH7fARgzf0vTKHCQYJdjRyf3Z",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2rmH7fARgzf0vTKHCQYJdjRyf3Z"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2rmH7TJ4xCox910LkyYwvaisOjk",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2rmH7TJ4xCox910LkyYwvaisOjk"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.5ia54qwbrpbxxgurp.local-ngrok-cname.com",
      "created_at": "2025-01-17T23:39:22Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2rmH7bWNciTiRoTJIvY07BbeE8d",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2rmH7bWNciTiRoTJIvY07BbeE8d"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
