
###### Example Response
```
{
  "reserved_domains": [
    {
      "id": "rd_2ElyEUysB2yZrP5vzvkvxPajuP9",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2ElyEUysB2yZrP5vzvkvxPajuP9",
      "created_at": "2022-09-14T19:39:12Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "qffmh5gs.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2ElyEKRrr3jQTe1wICRWyADxwCE",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2ElyEKRrr3jQTe1wICRWyADxwCE"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2ElyERcGoUQ1jqfxDW14OhXRJZH",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2ElyERcGoUQ1jqfxDW14OhXRJZH",
      "created_at": "2022-09-14T19:39:13Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "24k6goukd.cname.us.ngrok.io",
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
          "started_at": "2022-09-14T19:39:13Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}