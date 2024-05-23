<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2gsqJSUdaNHhZLkyG7ZxW38lbNq",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2gsqJSUdaNHhZLkyG7ZxW38lbNq"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.5j6jx46cugxi6fgcv.local-ngrok-cname.com",
			"created_at": "2024-05-23T20:36:00Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2gsqJVTntVxwjtkrg1Vv3VPZ3ax",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2gsqJVTntVxwjtkrg1Vv3VPZ3ax"
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
					"started_at": "2024-05-23T20:36:00Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.5j6jx46cugxi6fgcv.local-ngrok-cname.com",
			"created_at": "2024-05-23T20:36:00Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2gsqJPddVF904CVeAy11ukA1Crs",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2gsqJPddVF904CVeAy11ukA1Crs"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
