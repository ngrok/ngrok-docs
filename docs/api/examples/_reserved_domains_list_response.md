<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2p88oVRxwCZM1eEJDqedAK1KrQF",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2p88oVRxwCZM1eEJDqedAK1KrQF"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.46f1tgpn3wop5exhi.local-ngrok-cname.com",
			"created_at": "2024-11-20T21:01:56Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2p88oSwNQF7IJkLgxpiGOjaQqQw",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2p88oSwNQF7IJkLgxpiGOjaQqQw"
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
					"started_at": "2024-11-20T21:01:57Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.46f1tgpn3wop5exhi.local-ngrok-cname.com",
			"created_at": "2024-11-20T21:01:56Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2p88odETP5uJA0cy9Wa3IbenLuW",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2p88odETP5uJA0cy9Wa3IbenLuW"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
