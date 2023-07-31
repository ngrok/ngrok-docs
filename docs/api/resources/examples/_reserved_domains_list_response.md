<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2TMGGFijcv9x0SDZAMvSHINBH96",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2TMGGFijcv9x0SDZAMvSHINBH96",
      "created_at": "2023-07-31T23:17:18Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "2wsbzgakv.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "renews_at": null,
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "started_at": "2023-07-31T23:17:18Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2TMGGEMpKpr8RdLg2fo46zIDfV1",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2TMGGEMpKpr8RdLg2fo46zIDfV1",
      "created_at": "2023-07-31T23:17:17Z",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2hpegpyop.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2TMGGCjnG4ldki1rQ9JXaALQeMo",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2TMGGCjnG4ldki1rQ9JXaALQeMo"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}