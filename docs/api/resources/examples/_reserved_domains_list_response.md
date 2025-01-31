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
					"started_at": "2025-01-29T21:09:51Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.61bphpx4yyur5m72.local-ngrok-cname.com",
			"created_at": "2025-01-29T21:09:51Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2sJsPz9veKbKzeM3EokrmFL9qfi",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2sJsPz9veKbKzeM3EokrmFL9qfi"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2sJsPxVins0VOAZD4OUjjycRQ8X",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2sJsPxVins0VOAZD4OUjjycRQ8X"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.61bphpx4yyur5m72.local-ngrok-cname.com",
			"created_at": "2025-01-29T21:09:51Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2sJsPxqd0ZVZiLNHig58xsIBn41",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2sJsPxqd0ZVZiLNHig58xsIBn41"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
