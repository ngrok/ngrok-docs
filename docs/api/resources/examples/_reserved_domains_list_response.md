
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2GjEyWT7voSY2tmjbsp2gVNbu77",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2GjEyWT7voSY2tmjbsp2gVNbu77",
      "created_at": "2022-10-27T18:04:07Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "37qthkhzt.cname.us.ngrok.io",
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
          "started_at": "2022-10-27T18:04:07Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2GjEybtF0si3AGya8lefS2pjjPO",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2GjEybtF0si3AGya8lefS2pjjPO",
      "created_at": "2022-10-27T18:04:07Z",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2skdt8txo.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2GjEycx5wufwWLxreCwsjV0MFMX",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2GjEycx5wufwWLxreCwsjV0MFMX"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}