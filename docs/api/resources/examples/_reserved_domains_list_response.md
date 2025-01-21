<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2rwrmmr0Q3TAKHPW9iApEVV5dVx",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2rwrmmr0Q3TAKHPW9iApEVV5dVx"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.mbcbssmh8dorzejo.local-ngrok-cname.com",
			"created_at": "2025-01-21T17:38:59Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2rwrmpknlyZqE3DMUOhvEEkzArX",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2rwrmpknlyZqE3DMUOhvEEkzArX"
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
					"started_at": "2025-01-21T17:38:59Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.mbcbssmh8dorzejo.local-ngrok-cname.com",
			"created_at": "2025-01-21T17:38:59Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2rwrmmsfmXKzGgEWl8f1C9EZhzI",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2rwrmmsfmXKzGgEWl8f1C9EZhzI"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
