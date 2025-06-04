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
          "started_at": "2025-06-04T18:00:53Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.4xc21iak7sdkak4qb.local-ngrok-cname.com",
      "created_at": "2025-06-04T18:00:53Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2y3OzeKsyOH0foNfVkrs8VzXFSM",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2y3OzeKsyOH0foNfVkrs8VzXFSM"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2y3Ozct3R3YUVJ5oodFuZ7JYFEG",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2y3Ozct3R3YUVJ5oodFuZ7JYFEG"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.4xc21iak7sdkak4qb.local-ngrok-cname.com",
      "created_at": "2025-06-04T18:00:53Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2y3OzcV6R5xbFhlhc9ggzY70iGv",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2y3OzcV6R5xbFhlhc9ggzY70iGv"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
