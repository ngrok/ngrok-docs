<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"reserved_domains": [
		{
			"id": "rd_2XB9tTYAvtbLjUnVgzkbfFzBUrq",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2XB9tTYAvtbLjUnVgzkbfFzBUrq",
			"created_at": "2023-10-23T20:10:19Z",
			"description": "Device 0001 Dashboard",
			"metadata": "{\"service\": \"dashboard\"}",
			"domain": "manage-0001.app.example.com",
			"region": "",
			"cname_target": "4mgkuazanf1yq46m3.2mqoyzcuze25mlp5s.local-ngrok-cname.com",
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
					"started_at": "2023-10-23T20:10:20Z",
					"retries_at": null
				}
			},
			"acme_challenge_cname_target": null
		},
		{
			"id": "rd_2XB9tRy081d4pEyST3e5ori9IGX",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2XB9tRy081d4pEyST3e5ori9IGX",
			"created_at": "2023-10-23T20:10:18Z",
			"domain": "myapp.mydomain.com",
			"region": "",
			"cname_target": "2udamkamcl8pjmrff.2mqoyzcuze25mlp5s.local-ngrok-cname.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"certificate": {
				"id": "cert_2XB9tGTNIQbWhsqoFzoSmvkq2DD",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2XB9tGTNIQbWhsqoFzoSmvkq2DD"
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
