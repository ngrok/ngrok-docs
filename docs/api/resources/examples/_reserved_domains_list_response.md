<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"reserved_domains": [
		{
			"id": "rd_2XGwAtz9MIBoxfHLtQXAthTe1u8",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2XGwAtz9MIBoxfHLtQXAthTe1u8",
			"created_at": "2023-10-25T21:16:23Z",
			"description": "Device 0001 Dashboard",
			"metadata": "{\"service\": \"dashboard\"}",
			"domain": "manage-0001.app.example.com",
			"region": "",
			"cname_target": "4mgkuazanf1yq46m3.4uwzxjsp34s6gjnnv.local-ngrok-cname.com",
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
					"started_at": "2023-10-25T21:16:23Z",
					"retries_at": null
				}
			},
			"acme_challenge_cname_target": null
		},
		{
			"id": "rd_2XGwAsh6IVsDrCgeEFiyUk14xOI",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2XGwAsh6IVsDrCgeEFiyUk14xOI",
			"created_at": "2023-10-25T21:16:23Z",
			"domain": "myapp.mydomain.com",
			"region": "",
			"cname_target": "2udamkamcl8pjmrff.4uwzxjsp34s6gjnnv.local-ngrok-cname.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"certificate": {
				"id": "cert_2XGwApXwnTRZxMsUMnl447vC9MW",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2XGwApXwnTRZxMsUMnl447vC9MW"
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
