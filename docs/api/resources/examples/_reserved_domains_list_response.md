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
					"started_at": "2025-03-11T17:12:52Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.26jj98njckk4rvhzw.local-ngrok-cname.com",
			"created_at": "2025-03-11T17:12:52Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uBDevApgshaz8MFjhlpXsWWEbo",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uBDevApgshaz8MFjhlpXsWWEbo"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2uBDev4kp2w8HJyu7NiPoglMglI",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2uBDev4kp2w8HJyu7NiPoglMglI"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.26jj98njckk4rvhzw.local-ngrok-cname.com",
			"created_at": "2025-03-11T17:12:52Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uBDev1gSXki1J3gYcGcwa9TPbZ",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uBDev1gSXki1J3gYcGcwa9TPbZ"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
