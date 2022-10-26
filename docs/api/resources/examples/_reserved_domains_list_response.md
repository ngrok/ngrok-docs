
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2Gguzi5iO7iejBIsW6KTfiiir4c",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2Gguzi5iO7iejBIsW6KTfiiir4c",
      "created_at": "2022-10-26T22:20:11Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "36akebvkd.cname.us.ngrok.io",
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
          "started_at": "2022-10-26T22:20:11Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2GguzbZJDkFvN7ldBvttxXcvOqi",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2GguzbZJDkFvN7ldBvttxXcvOqi",
      "created_at": "2022-10-26T22:20:10Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "qzqmby1m.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2GguzUbfXAcfc2oIuTxNX7TbjUo",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2GguzUbfXAcfc2oIuTxNX7TbjUo"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}