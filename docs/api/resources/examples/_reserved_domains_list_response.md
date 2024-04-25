<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2fc1NsffAIcyhHg3lZdyfmDmxrH",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2fc1NsffAIcyhHg3lZdyfmDmxrH"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.4qjp398o3xtbvera8.local-ngrok-cname.com",
			"created_at": "2024-04-25T22:51:54Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2fc1NrAHrIP9XrQiCE5cTK5qDHt",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2fc1NrAHrIP9XrQiCE5cTK5qDHt"
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
					"started_at": "2024-04-25T22:51:54Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.4qjp398o3xtbvera8.local-ngrok-cname.com",
			"created_at": "2024-04-25T22:51:54Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2fc1NnZ6jCgc1EWY68vjcs9wFtE",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2fc1NnZ6jCgc1EWY68vjcs9wFtE"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
