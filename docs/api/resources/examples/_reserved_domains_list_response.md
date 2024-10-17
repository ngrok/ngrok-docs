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
					"started_at": "2024-10-17T20:26:22Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.4eh2sv3tfb4hzp5pf.local-ngrok-cname.com",
			"created_at": "2024-10-17T20:26:22Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2na2I5QbUYGyvUQ2DluEG9ifdSt",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2na2I5QbUYGyvUQ2DluEG9ifdSt"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2na2I3VwoG7z9bNIAJerm896FSE",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2na2I3VwoG7z9bNIAJerm896FSE"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.4eh2sv3tfb4hzp5pf.local-ngrok-cname.com",
			"created_at": "2024-10-17T20:26:22Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2na2I5HYAllbxqZq9huoWFIdte3",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2na2I5HYAllbxqZq9huoWFIdte3"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
