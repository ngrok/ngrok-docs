<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Response
```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2vwXfi5bF9aihZJpAIfag8NunZs",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2vwXfi5bF9aihZJpAIfag8NunZs"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.2pktaugsay1mq6ena.local-ngrok-cname.com",
      "created_at": "2025-04-19T10:06:54Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2vwXfhr5NzC5IdFeY8FtWuZLyBz",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2vwXfhr5NzC5IdFeY8FtWuZLyBz"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "retries_at": null,
          "started_at": "2025-04-19T10:06:54Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.2pktaugsay1mq6ena.local-ngrok-cname.com",
      "created_at": "2025-04-19T10:06:54Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2vwXfcQyjIj842OJcpC4h9J7v1u",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2vwXfcQyjIj842OJcpC4h9J7v1u"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
