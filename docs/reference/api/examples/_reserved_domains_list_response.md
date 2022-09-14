
###### Example Response
```
{
  "reserved_domains": [
    {
      "id": "rd_2ElcuRI33jQalzEEwrZBhtGkwZz",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2ElcuRI33jQalzEEwrZBhtGkwZz",
      "created_at": "2022-09-14T16:43:53Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "ihakdwsx.cname.us.ngrok.io",
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
          "started_at": "2022-09-14T16:43:54Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2ElcuQwyObcDKKklRvOJ4ceZuts",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2ElcuQwyObcDKKklRvOJ4ceZuts",
      "created_at": "2022-09-14T16:43:53Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2te562tyh.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2ElcuRIxIoxcnHaCiwKA0heiflL",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2ElcuRIxIoxcnHaCiwKA0heiflL"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}