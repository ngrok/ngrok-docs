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
					"started_at": "2025-04-08T16:29:25Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.2uifh2hfnovjtvcmz.local-ngrok-cname.com",
			"created_at": "2025-04-08T16:29:24Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2vSDpeLjI0Dnj3f1IGs12EVOCUp",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2vSDpeLjI0Dnj3f1IGs12EVOCUp"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2vSDpXrQ1flj6tAWivS7k0EPoqk",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2vSDpXrQ1flj6tAWivS7k0EPoqk"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.2uifh2hfnovjtvcmz.local-ngrok-cname.com",
			"created_at": "2025-04-08T16:29:24Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2vSDpaGe6NkhsIOJIdWa0JGSNFz",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2vSDpaGe6NkhsIOJIdWa0JGSNFz"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
