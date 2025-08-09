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
          "started_at": "2025-08-09T10:14:50Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.3hf1dd1mp2fxyljpr.local-ngrok-cname.com",
      "created_at": "2025-08-09T10:14:50Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_312uSqoAC98XH19oBoCk9ujbryC",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_312uSqoAC98XH19oBoCk9ujbryC"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_312uShtWVG54TA5wX0jyKpzLwGw",
        "uri": "https://api.ngrok.com/tls_certificates/cert_312uShtWVG54TA5wX0jyKpzLwGw"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.3hf1dd1mp2fxyljpr.local-ngrok-cname.com",
      "created_at": "2025-08-09T10:14:49Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_312uSksfosqBUYPQNHXN60SrRY7",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_312uSksfosqBUYPQNHXN60SrRY7"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-09T10:14:19Z",
      "description": "Your dev domain",
      "domain": "hedgehog-funny-firstly.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_312uOq3dCjISJXbf7B22VxcDq2R",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_312uOq3dCjISJXbf7B22VxcDq2R"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
