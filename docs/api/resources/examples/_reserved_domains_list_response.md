<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_315ikin8WxdzqbqrTzn1L7dCaRo",
        "uri": "https://api.ngrok.com/tls_certificates/cert_315ikin8WxdzqbqrTzn1L7dCaRo"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.ex2jcmcwwcbqz4nq.local-ngrok-cname.com",
      "created_at": "2025-08-10T10:07:58Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_315ikh62TKq6WsGJGgp3F2mSO6T",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_315ikh62TKq6WsGJGgp3F2mSO6T"
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
          "started_at": "2025-08-10T10:07:58Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.ex2jcmcwwcbqz4nq.local-ngrok-cname.com",
      "created_at": "2025-08-10T10:07:58Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_315ikfEOTuFUy6wIWghj12d4xfr",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_315ikfEOTuFUy6wIWghj12d4xfr"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-10T10:07:27Z",
      "description": "Your dev domain",
      "domain": "poetic-panda-locally.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_315igmwdGBngqvvLpnI6CFOFNyy",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_315igmwdGBngqvvLpnI6CFOFNyy"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
