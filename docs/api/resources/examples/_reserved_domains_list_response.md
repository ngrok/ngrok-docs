<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"reserved_domains": [
		{
			"id": "rd_2WzkvPtsT6bqcAgpej3VvAcLbb0",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2WzkvPtsT6bqcAgpej3VvAcLbb0",
			"created_at": "2023-10-19T19:17:04Z",
			"description": "Device 0001 Dashboard",
			"metadata": "{\"service\": \"dashboard\"}",
			"domain": "manage-0001.app.example.com",
			"region": "",
			"cname_target": "4mgkuazanf1yq46m3.5plfjh9yzoelsqmbt.local-ngrok-cname.com",
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
					"started_at": "2023-10-19T19:17:05Z",
					"retries_at": null
				}
			},
			"acme_challenge_cname_target": null
		},
		{
			"id": "rd_2WzkvHo98koqZtZ4IPPsDWLOddR",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2WzkvHo98koqZtZ4IPPsDWLOddR",
			"created_at": "2023-10-19T19:17:04Z",
			"domain": "myapp.mydomain.com",
			"region": "",
			"cname_target": "2udamkamcl8pjmrff.5plfjh9yzoelsqmbt.local-ngrok-cname.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"certificate": {
				"id": "cert_2WzkvHzOHsePbo2OGT8gHLFWczq",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2WzkvHzOHsePbo2OGT8gHLFWczq"
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
