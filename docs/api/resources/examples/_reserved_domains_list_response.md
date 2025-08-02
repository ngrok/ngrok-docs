<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
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
          "started_at": "2025-08-02T10:07:45Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.cdztegz78xgdajjb.local-ngrok-cname.com",
      "created_at": "2025-08-02T10:07:45Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30j7jpBh5P2Vygsa2G9iq7N7H41",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30j7jpBh5P2Vygsa2G9iq7N7H41"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_30j7jr6tDbsIIUfyT7YS7Pa32L2",
        "uri": "https://api.ngrok.com/tls_certificates/cert_30j7jr6tDbsIIUfyT7YS7Pa32L2"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.cdztegz78xgdajjb.local-ngrok-cname.com",
      "created_at": "2025-08-02T10:07:45Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30j7jlEYsi2aSispHER30H9Pimh",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30j7jlEYsi2aSispHER30H9Pimh"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-08-02T10:07:14Z",
      "description": "Your dev domain",
      "domain": "stirred-deep-chipmunk.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30j7fuQhNiX7JSyPqhmaLjLwlKq",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30j7fuQhNiX7JSyPqhmaLjLwlKq"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
