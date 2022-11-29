
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2IEh2HHiRNaJknCfX8LjcIskC4V",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2IEh2HHiRNaJknCfX8LjcIskC4V",
      "created_at": "2022-11-29T20:07:20Z",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2rxdnxydx.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2IEh2EBVBDWkpAH3YedVDkqG3FI",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2IEh2EBVBDWkpAH3YedVDkqG3FI"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2IEh2BO09rEsGDRxP7P4jebfrcT",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2IEh2BO09rEsGDRxP7P4jebfrcT",
      "created_at": "2022-11-29T20:07:20Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "2g8b28rnm.cname.us.ngrok.io",
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
          "started_at": "2022-11-29T20:07:20Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}