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
					"started_at": "2025-01-02T10:07:00Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.4kfi6vgv5ldpfp6u2.local-ngrok-cname.com",
			"created_at": "2025-01-02T10:07:00Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2r4JTRlddEyTksbsPNItHhV4sfW",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2r4JTRlddEyTksbsPNItHhV4sfW"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2r4JTRlPj4s2hdJ61R2zpiqA5xj",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2r4JTRlPj4s2hdJ61R2zpiqA5xj"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.4kfi6vgv5ldpfp6u2.local-ngrok-cname.com",
			"created_at": "2025-01-02T10:07:00Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2r4JTQgv43e87keUDW8UNyL9Bbg",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2r4JTQgv43e87keUDW8UNyL9Bbg"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
