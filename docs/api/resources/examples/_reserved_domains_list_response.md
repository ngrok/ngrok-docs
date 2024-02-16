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
					"started_at": "2024-02-16T19:35:10Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.2sqweveb4ays7xoj4.local-ngrok-cname.com",
			"created_at": "2024-02-16T19:35:10Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2cSjwKpNfxN5VHdSXGQd1nSaOYq",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2cSjwKpNfxN5VHdSXGQd1nSaOYq"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2cSjwGgYrGJdXQKfDJGdmj7ajCT",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2cSjwGgYrGJdXQKfDJGdmj7ajCT"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.2sqweveb4ays7xoj4.local-ngrok-cname.com",
			"created_at": "2024-02-16T19:35:10Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2cSjwJQR1ZzXgCTiSSiXDJgxygI",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2cSjwJQR1ZzXgCTiSSiXDJgxygI"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
