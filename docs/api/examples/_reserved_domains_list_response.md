<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2rcCs2QtJegkrx6XjyNk7c2wjfp",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2rcCs2QtJegkrx6XjyNk7c2wjfp"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.eajme8nywqbcrdze.local-ngrok-cname.com",
			"created_at": "2025-01-14T10:06:19Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2rcCsFEeGvfH4xHI6enw7OTrnEt",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2rcCsFEeGvfH4xHI6enw7OTrnEt"
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
					"started_at": "2025-01-14T10:06:20Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.eajme8nywqbcrdze.local-ngrok-cname.com",
			"created_at": "2025-01-14T10:06:20Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2rcCsEmalDeT7tzEQyeFzCZa9br",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2rcCsEmalDeT7tzEQyeFzCZa9br"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
