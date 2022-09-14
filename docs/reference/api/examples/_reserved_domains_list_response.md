
###### Example Response
```
{
  "reserved_domains": [
    {
      "id": "rd_2EloOmlaeYYXUCo15Rjzuj5XHzM",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2EloOmlaeYYXUCo15Rjzuj5XHzM",
      "created_at": "2022-09-14T18:18:20Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "dmwkqv93.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2EloOcuwae33wMaJbr6A8PBycQL",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2EloOcuwae33wMaJbr6A8PBycQL"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2EloOl2eEohJCU075CD0var2tQR",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2EloOl2eEohJCU075CD0var2tQR",
      "created_at": "2022-09-14T18:18:21Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "2qm2xesgg.cname.us.ngrok.io",
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
          "started_at": "2022-09-14T18:18:21Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}