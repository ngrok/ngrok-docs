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
					"started_at": "2024-08-02T07:15:17Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.frjtwfzow6ywjopw.local-ngrok-cname.com",
			"created_at": "2024-08-02T07:15:17Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2k5ohWYFJsaf0W2NV5x2nDYXIbY",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2k5ohWYFJsaf0W2NV5x2nDYXIbY"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2k5ohRXQbVjCdrrgV7UnrYJRjUg",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2k5ohRXQbVjCdrrgV7UnrYJRjUg"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.frjtwfzow6ywjopw.local-ngrok-cname.com",
			"created_at": "2024-08-02T07:15:17Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2k5ohSotoaaL8tlPSDfT2PTNYjW",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2k5ohSotoaaL8tlPSDfT2PTNYjW"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
