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
					"started_at": "2025-02-16T10:07:43Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.2fqopn4qafsu58xay.local-ngrok-cname.com",
			"created_at": "2025-02-16T10:07:42Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2t7Q7HlXw3e8bE46BHfaZK7NRxq",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2t7Q7HlXw3e8bE46BHfaZK7NRxq"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2t7Q75qOWMQTV63ujhDT8oABGLv",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2t7Q75qOWMQTV63ujhDT8oABGLv"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.2fqopn4qafsu58xay.local-ngrok-cname.com",
			"created_at": "2025-02-16T10:07:42Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2t7Q79T55Jr1UgqgCdMVPGCpBZb",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2t7Q79T55Jr1UgqgCdMVPGCpBZb"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
