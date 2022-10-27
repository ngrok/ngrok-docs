
#### Example Response
```json
{
  "reserved_domains": [
    {
      "id": "rd_2GjCQrF5XNMdXtZTLPv2uWNRcX9",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2GjCQrF5XNMdXtZTLPv2uWNRcX9",
      "created_at": "2022-10-27T17:43:12Z",
      "description": "Device 0001 Dashboard",
      "metadata": "{\"service\": \"dashboard\"}",
      "domain": "manage-0001.app.example.com",
      "region": "us",
      "cname_target": "36baj5hi7.cname.us.ngrok.io",
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
          "started_at": "2022-10-27T17:43:12Z",
          "retries_at": null
        }
      },
      "acme_challenge_cname_target": null
    },
    {
      "id": "rd_2GjCQovybqz719cWRnUMVEcyKBs",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2GjCQovybqz719cWRnUMVEcyKBs",
      "created_at": "2022-10-27T17:43:11Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "2d9gtqvac.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_2GjCQgRSd4aqBzFCH7EYWSJ2peP",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2GjCQgRSd4aqBzFCH7EYWSJ2peP"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains",
  "next_page_uri": null
}