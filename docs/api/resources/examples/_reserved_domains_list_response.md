<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"reserved_domains": [
		{
			"id": "rd_2ZGotV06Dz84SUmVhymK8c5wAHx",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2ZGotV06Dz84SUmVhymK8c5wAHx",
			"created_at": "2023-12-08T17:53:11Z",
			"domain": "myapp.mydomain.com",
			"region": "",
			"cname_target": "2udamkamcl8pjmrff.2ohqtgddyku5fqgcv.local-ngrok-cname.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"certificate": {
				"id": "cert_2ZGotUruJWcBOAmKjowvzGND51X",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2ZGotUruJWcBOAmKjowvzGND51X"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"acme_challenge_cname_target": null
		},
		{
			"id": "rd_2ZGotSc9lykdwizRQRsu3e6rcUR",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2ZGotSc9lykdwizRQRsu3e6rcUR",
			"created_at": "2023-12-08T17:53:11Z",
			"description": "Device 0001 Dashboard",
			"metadata": "{\"service\": \"dashboard\"}",
			"domain": "manage-0001.app.example.com",
			"region": "",
			"cname_target": "4mgkuazanf1yq46m3.2ohqtgddyku5fqgcv.local-ngrok-cname.com",
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
					"started_at": "2023-12-08T17:53:11Z",
					"retries_at": null
				}
			},
			"acme_challenge_cname_target": null
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains",
	"next_page_uri": null
}
```
