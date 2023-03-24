
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2NTVGfG1p0WdWgtOQIa8Jz1hnY5",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2NTVGfG1p0WdWgtOQIa8Jz1hnY5",
      "created_at": "2023-03-24T19:59:24Z",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2cgk1eyud.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2NTVGhIqFHEVgSZx1oOtBvhMYus",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2NTVGhIqFHEVgSZx1oOtBvhMYus"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2NTVGejQQOjIr6G7yNryNroEAYg",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2NTVGejQQOjIr6G7yNryNroEAYg",
      "created_at": "2023-03-24T19:59:24Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "rphgoccw.cname.us.ngrok.io",
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
          "started_at": "2023-03-24T19:59:24Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}