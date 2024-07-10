<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2hrGw21fTGUBu4asPbVKDYtC1SL",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2hrGw21fTGUBu4asPbVKDYtC1SL"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.29zeoukhsyuauxdzx.local-ngrok-cname.com",
			"created_at": "2024-06-14T06:03:37Z",
			"domain": "myapp.mydomain.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2hrGw0rqFLOm9pcXf4dlbdNfrus",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2hrGw0rqFLOm9pcXf4dlbdNfrus"
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
					"started_at": "2024-06-14T06:03:37Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.29zeoukhsyuauxdzx.local-ngrok-cname.com",
			"created_at": "2024-06-14T06:03:37Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2hrGw0hel4B5aoMvLv6X3XUjysj",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2hrGw0hel4B5aoMvLv6X3XUjysj"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
