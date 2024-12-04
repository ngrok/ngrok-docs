<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2pkP2xBKqpuK0tSiJa1Dc17JiGz",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2pkP2xBKqpuK0tSiJa1Dc17JiGz"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.3bwhvoakpkza4tnvn.local-ngrok-cname.com",
			"created_at": "2024-12-04T10:08:16Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2pkP2vd5TtRU7n70wKJE1kdM74l",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2pkP2vd5TtRU7n70wKJE1kdM74l"
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
					"started_at": "2024-12-04T10:08:16Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.3bwhvoakpkza4tnvn.local-ngrok-cname.com",
			"created_at": "2024-12-04T10:08:16Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2pkP2vBWPIcBXO56L1juKlVllaQ",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2pkP2vBWPIcBXO56L1juKlVllaQ"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
