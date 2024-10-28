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
					"started_at": "2024-10-28T15:37:24Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.3yu3iwy3hv9wuy8au.local-ngrok-cname.com",
			"created_at": "2024-10-28T15:37:24Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2o4XVQ4mN7O3WM5XBm2pTbaNRek",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2o4XVQ4mN7O3WM5XBm2pTbaNRek"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2o4XVOYLR2V9jVh6LBQBgHsdIDA",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2o4XVOYLR2V9jVh6LBQBgHsdIDA"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.3yu3iwy3hv9wuy8au.local-ngrok-cname.com",
			"created_at": "2024-10-28T15:37:24Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2o4XVNzyWqkHWSqvGAPqHWNeA3o",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2o4XVNzyWqkHWSqvGAPqHWNeA3o"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
