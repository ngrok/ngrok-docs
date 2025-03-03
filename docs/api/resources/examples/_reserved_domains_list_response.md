<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2tnmsYGazJmbf2LpRszKj6o41vO",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2tnmsYGazJmbf2LpRszKj6o41vO"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.4dkyvaoq3deaovcc.local-ngrok-cname.com",
			"created_at": "2025-03-03T10:06:59Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2tnmsguHPIcpL2sH3GkYprqvqMA",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2tnmsguHPIcpL2sH3GkYprqvqMA"
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
					"started_at": "2025-03-03T10:07:00Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.4dkyvaoq3deaovcc.local-ngrok-cname.com",
			"created_at": "2025-03-03T10:07:00Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2tnmsbdvqFDjJjtTa9GgkK5lKDr",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2tnmsbdvqFDjJjtTa9GgkK5lKDr"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
