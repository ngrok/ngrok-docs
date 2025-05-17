<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2xDd4e6X2yjE0rhNHLX5zPGCwOu",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2xDd4e6X2yjE0rhNHLX5zPGCwOu"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.4hgksw1alwtyv9gft.local-ngrok-cname.com",
      "created_at": "2025-05-17T10:06:27Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2xDd4msTblhTkOuuLKGCQZBTB38",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2xDd4msTblhTkOuuLKGCQZBTB38"
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
          "started_at": "2025-05-17T10:06:28Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.4hgksw1alwtyv9gft.local-ngrok-cname.com",
      "created_at": "2025-05-17T10:06:28Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2xDd4gbzrR467bIuLlh04efwg0j",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2xDd4gbzrR467bIuLlh04efwg0j"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
