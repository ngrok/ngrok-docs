<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2wEzqc4g4JKCM4siKb9NiArRhOo",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2wEzqc4g4JKCM4siKb9NiArRhOo"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.5hyoqsskv2j2znfr7.local-ngrok-cname.com",
			"created_at": "2025-04-25T22:55:12Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2wEzqmJi2owi6kBnIhOMVSEELWv",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2wEzqmJi2owi6kBnIhOMVSEELWv"
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
					"started_at": "2025-04-25T22:55:13Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.5hyoqsskv2j2znfr7.local-ngrok-cname.com",
			"created_at": "2025-04-25T22:55:13Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2wEzqlRx7xe2GSNDXu3cIFowy11",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2wEzqlRx7xe2GSNDXu3cIFowy11"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
