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
					"started_at": "2024-04-29T18:29:16Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.3io1yonsy3qtyt47r.local-ngrok-cname.com",
			"created_at": "2024-04-29T18:29:15Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2fmnwDLKX7Y4KW4zRcz1GZhyGmw",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2fmnwDLKX7Y4KW4zRcz1GZhyGmw"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2fmnw5CB5IdHnG3UEFrP6JxcWG6",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2fmnw5CB5IdHnG3UEFrP6JxcWG6"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.3io1yonsy3qtyt47r.local-ngrok-cname.com",
			"created_at": "2024-04-29T18:29:15Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2fmnw20DPSX3955yPtPvgrHFoeQ",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2fmnw20DPSX3955yPtPvgrHFoeQ"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
