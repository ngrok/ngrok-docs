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
          "started_at": "2025-05-15T18:01:13Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.5oyoi6fulowmvw9ky.local-ngrok-cname.com",
      "created_at": "2025-05-15T18:01:13Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2x8uZ3xmWmEOx7Uoy53tYTePLOw",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2x8uZ3xmWmEOx7Uoy53tYTePLOw"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2x8uZ4Cw2o3gSeVTHwbDYyN1qHr",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2x8uZ4Cw2o3gSeVTHwbDYyN1qHr"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.5oyoi6fulowmvw9ky.local-ngrok-cname.com",
      "created_at": "2025-05-15T18:01:13Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2x8uZ2d2JrpjSiydeOxbRl13ArR",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2x8uZ2d2JrpjSiydeOxbRl13ArR"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
