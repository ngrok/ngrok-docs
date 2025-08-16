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
          "started_at": "2025-08-16T10:05:45Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.4xdosy3ykobhkr4c.local-ngrok-cname.com",
      "created_at": "2025-08-16T10:05:44Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31MfDpczlBpfjIEUV9EGJnpaqoW",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31MfDpczlBpfjIEUV9EGJnpaqoW"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_31MfDiUXkbOXhEcXYlvhqOQVE5Y",
        "uri": "https://api.ngrok.com/tls_certificates/cert_31MfDiUXkbOXhEcXYlvhqOQVE5Y"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.4xdosy3ykobhkr4c.local-ngrok-cname.com",
      "created_at": "2025-08-16T10:05:44Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31MfDm6TKAlzZQsRVxV76Gwu1yj",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31MfDm6TKAlzZQsRVxV76Gwu1yj"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-16T10:05:14Z",
      "description": "Your dev domain",
      "domain": "capital-blindly-duck.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_31Mf9yqHDCYqIqVWtgRGHfAh1uH",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_31Mf9yqHDCYqIqVWtgRGHfAh1uH"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
