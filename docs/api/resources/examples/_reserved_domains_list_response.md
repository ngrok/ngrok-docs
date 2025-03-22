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
					"started_at": "2025-03-22T10:10:02Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.3vfudvebsdygzceec.local-ngrok-cname.com",
			"created_at": "2025-03-22T10:10:01Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2ufSb0C5t0HXhg9n85mV7KQ95go",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2ufSb0C5t0HXhg9n85mV7KQ95go"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2ufSathn3WMlxDjLrkTwHBr01rZ",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2ufSathn3WMlxDjLrkTwHBr01rZ"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.3vfudvebsdygzceec.local-ngrok-cname.com",
			"created_at": "2025-03-22T10:10:01Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2ufSap17hrXURUwyqGNecMuolhs",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2ufSap17hrXURUwyqGNecMuolhs"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
