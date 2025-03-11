<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2uBNwBq7CWZ7H9rls0haPy2ejDb",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2uBNwBq7CWZ7H9rls0haPy2ejDb"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.29l546evbdcqvqcjc.local-ngrok-cname.com",
			"created_at": "2025-03-11T18:37:23Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uBNwCkQlImhoyji1BWWiMGAHwc",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uBNwCkQlImhoyji1BWWiMGAHwc"
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
					"started_at": "2025-03-11T18:37:23Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.29l546evbdcqvqcjc.local-ngrok-cname.com",
			"created_at": "2025-03-11T18:37:23Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uBNw9V6hXzLUCHHJzSU17eMbbw",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uBNw9V6hXzLUCHHJzSU17eMbbw"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
