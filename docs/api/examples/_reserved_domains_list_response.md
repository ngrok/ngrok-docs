<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2otawSZAphGXQllehlCkiJ9v7ZA",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2otawSZAphGXQllehlCkiJ9v7ZA"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.2skbva3d9zxgubr2x.local-ngrok-cname.com",
			"created_at": "2024-11-15T17:26:03Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2otawTEGw7xxS5i7zCYsDfx9yKv",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2otawTEGw7xxS5i7zCYsDfx9yKv"
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
					"started_at": "2024-11-15T17:26:03Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.2skbva3d9zxgubr2x.local-ngrok-cname.com",
			"created_at": "2024-11-15T17:26:03Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2otawOrM4KRwfzljjyq0PSoOivg",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2otawOrM4KRwfzljjyq0PSoOivg"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
