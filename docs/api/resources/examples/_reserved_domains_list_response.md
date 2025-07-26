<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_30PLw0IJL1GsSZDSVPEkVw5Kk9Q",
        "uri": "https://api.ngrok.com/tls_certificates/cert_30PLw0IJL1GsSZDSVPEkVw5Kk9Q"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.58tzu7zsxvn6migml.local-ngrok-cname.com",
      "created_at": "2025-07-26T10:08:15Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30PLw2hNaIpE4076xdgGGlQ2HY2",
      "is_dev": false,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30PLw2hNaIpE4076xdgGGlQ2HY2"
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
          "started_at": "2025-07-26T10:08:15Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.58tzu7zsxvn6migml.local-ngrok-cname.com",
      "created_at": "2025-07-26T10:08:15Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30PLvzoNiqSH37a8qXskqTH8A6I",
      "is_dev": false,
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30PLvzoNiqSH37a8qXskqTH8A6I"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": null,
      "created_at": "2025-07-26T10:07:44Z",
      "description": "Your dev domain",
      "domain": "infinite-humane-aardvark.ngrok-free.dev",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_30PLs2TRTdmt5paow0nfa6LVGjb",
      "is_dev": true,
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_30PLs2TRTdmt5paow0nfa6LVGjb"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
