
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2Gj44lTTqyUAQTJuhfFnnwSTAPU",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2Gj44lTTqyUAQTJuhfFnnwSTAPU",
      "created_at": "2022-10-27T16:34:29Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "rotpkbjb.cname.us.ngrok.io",
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
          "started_at": "2022-10-27T16:34:29Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2Gj44kTi4l41O6b1a7Me0CmF9Bc",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2Gj44kTi4l41O6b1a7Me0CmF9Bc",
      "created_at": "2022-10-27T16:34:28Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2qabtbkwk.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2Gj44Yiwjwn9a1gmOGQ6DuiKJIt",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2Gj44Yiwjwn9a1gmOGQ6DuiKJIt"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}