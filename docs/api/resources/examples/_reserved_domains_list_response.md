<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2fKmZrQPzxR3xN7e7t8erD2eAEh",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2fKmZrQPzxR3xN7e7t8erD2eAEh"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.4zq5ahiex4ieiftdz.local-ngrok-cname.com",
			"created_at": "2024-04-19T20:23:21Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2fKmZr70gvQ0c4aMENN566IrCLi",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2fKmZr70gvQ0c4aMENN566IrCLi"
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
					"started_at": "2024-04-19T20:23:21Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.4zq5ahiex4ieiftdz.local-ngrok-cname.com",
			"created_at": "2024-04-19T20:23:21Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2fKmZnXVVhpxy89MOG00yiYnMdm",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2fKmZnXVVhpxy89MOG00yiYnMdm"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
