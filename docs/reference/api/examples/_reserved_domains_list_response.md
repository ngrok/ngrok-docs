
###### Example Response
```
{
  "reserved_domains": [
    {
      "id": "rd_2EPduunpJIONlJhDe4NO6vvGr83",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2EPduunpJIONlJhDe4NO6vvGr83",
      "created_at": "2022-09-06T21:56:18Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "uw71avzj.cname.us.ngrok.io",
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
          "started_at": "2022-09-06T21:56:18Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2EPdusqX37rvf1bj2TVJM4f4mpT",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2EPdusqX37rvf1bj2TVJM4f4mpT",
      "created_at": "2022-09-06T21:56:17Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "ct1stogm.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2EPduisZgVGAhAdUR5eMdAUafYz",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2EPduisZgVGAhAdUR5eMdAUafYz"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}