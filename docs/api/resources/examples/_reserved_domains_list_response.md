<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"reserved_domains": [
		{
			"id": "rd_2bMmTzJ1xmgumB0ZHvTe3c3mqVH",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2bMmTzJ1xmgumB0ZHvTe3c3mqVH",
			"created_at": "2024-01-23T18:08:52Z",
			"description": "Device 0001 Dashboard",
			"metadata": "{\"service\": \"dashboard\"}",
			"domain": "manage-0001.app.example.com",
			"region": "",
			"cname_target": "4mgkuazanf1yq46m3.3zayobjlpsc5htge2.local-ngrok-cname.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"certificate": null,
			"certificate_management_policy": {
				"authority": "letsencrypt",
				"private_key_type": "ecdsa"
			},
			"certificate_management_status": {
				"renews_at": null,
				"provisioning_job": {
					"error_code": null,
					"msg": "Managed certificate provisioning in progress.",
					"started_at": "2024-01-23T18:08:53Z",
					"retries_at": null
				}
			},
			"acme_challenge_cname_target": null
		},
		{
			"id": "rd_2bMmTsuWRZ6pi6U7819MzMhIuQL",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2bMmTsuWRZ6pi6U7819MzMhIuQL",
			"created_at": "2024-01-23T18:08:52Z",
			"domain": "myapp.mydomain.com",
			"region": "",
			"cname_target": "2udamkamcl8pjmrff.3zayobjlpsc5htge2.local-ngrok-cname.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"certificate": {
				"id": "cert_2bMmTuCZv8emWUX7GhOk7ZAE197",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2bMmTuCZv8emWUX7GhOk7ZAE197"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"acme_challenge_cname_target": null
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains",
	"next_page_uri": null
}
```
