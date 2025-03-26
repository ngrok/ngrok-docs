<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2uVat51kvA9SMyjcFm8ozaEQcka",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2uVat51kvA9SMyjcFm8ozaEQcka"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.37hp3gpkonmlghnyp.local-ngrok-cname.com",
			"created_at": "2025-03-18T22:20:06Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uVat8PiCqwyP4nygO50rAYkTKG",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uVat8PiCqwyP4nygO50rAYkTKG"
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
					"started_at": "2025-03-18T22:20:06Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.37hp3gpkonmlghnyp.local-ngrok-cname.com",
			"created_at": "2025-03-18T22:20:06Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uVat7wbOCigbpWIqHS8puw7BSm",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uVat7wbOCigbpWIqHS8puw7BSm"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
