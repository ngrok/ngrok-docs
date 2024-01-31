<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2bhsJeulhL6Ekj4EvhGdVpWe6jA",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2bhsJeulhL6Ekj4EvhGdVpWe6jA"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.4qqqrvqwa6c6xxkpc.local-ngrok-cname.com",
			"created_at": "2024-01-31T05:22:54Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2bhsJiPCs73Xtfn4UhZeUYY2GsX",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2bhsJiPCs73Xtfn4UhZeUYY2GsX"
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
					"started_at": "2024-01-31T05:22:54Z"
				},
				"renews_at": null
			},
			"cname_target": "4mgkuazanf1yq46m3.4qqqrvqwa6c6xxkpc.local-ngrok-cname.com",
			"created_at": "2024-01-31T05:22:54Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0001.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2bhsJfXBI2RzjdDv8YuNKdKCssN",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2bhsJfXBI2RzjdDv8YuNKdKCssN"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
