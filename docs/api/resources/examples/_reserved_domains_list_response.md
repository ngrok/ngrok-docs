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
					"started_at": "2025-03-02T10:06:50Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.48keakzsqrsvd18cg.local-ngrok-cname.com",
			"created_at": "2025-03-02T10:06:50Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2tkxjiSxioWE1lzMSgMfwj3jCDU",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2tkxjiSxioWE1lzMSgMfwj3jCDU"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2tkxjhaGmufkvPfdnzKIBubqmk1",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2tkxjhaGmufkvPfdnzKIBubqmk1"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.48keakzsqrsvd18cg.local-ngrok-cname.com",
			"created_at": "2025-03-02T10:06:50Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2tkxjgpqUspECTaLM1jsK1fA5vi",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2tkxjgpqUspECTaLM1jsK1fA5vi"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
