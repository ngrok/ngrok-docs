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
          "started_at": "2025-08-30T10:07:40Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.egbmbwmqhlnn48df.local-ngrok-cname.com",
      "created_at": "2025-08-30T10:07:40Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_320DBW2IXJvhBInn4HxhVKHTmoI",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_320DBW2IXJvhBInn4HxhVKHTmoI"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_320DBYGSIrFoSGb3IohQHHTcj8T",
        "uri": "https://api.ngrok.com/tls_certificates/cert_320DBYGSIrFoSGb3IohQHHTcj8T"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.egbmbwmqhlnn48df.local-ngrok-cname.com",
      "created_at": "2025-08-30T10:07:40Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_320DBUZEEjXXipEKi2bwfHh5LX2",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_320DBUZEEjXXipEKi2bwfHh5LX2"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-30T10:07:09Z",
      "description": "Your dev domain",
      "domain": "comic-enabling-seagull.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_320D7fV5cHxABw4UqPnRZpS9DT4",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_320D7fV5cHxABw4UqPnRZpS9DT4"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
