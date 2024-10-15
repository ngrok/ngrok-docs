<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2nJI0WJwHHmqfDFaSPX9p0xAM20",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2nJI0WJwHHmqfDFaSPX9p0xAM20"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.5bkbcnw3jg3txpnng.local-ngrok-cname.com",
			"created_at": "2024-10-11T22:08:48Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2nJI0ZjAq1gL69al26rhtMlsRcP",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2nJI0ZjAq1gL69al26rhtMlsRcP"
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
					"started_at": "2024-10-11T22:08:49Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.5bkbcnw3jg3txpnng.local-ngrok-cname.com",
			"created_at": "2024-10-11T22:08:49Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2nJI0c9efT7xX4R2VsSxXJhjbk1",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2nJI0c9efT7xX4R2VsSxXJhjbk1"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
