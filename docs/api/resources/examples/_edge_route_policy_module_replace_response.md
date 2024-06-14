<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"enabled": true,
	"inbound": [
		{
			"actions": [
				{
					"config": {
						"format": "nginx",
						"from": "v0/user/([0-9]+).*",
						"to": "v1/user?id=$1&$args"
					},
					"type": "url-rewrite"
				},
				{
					"config": {
						"format": "nginx",
						"from": "v0/super/secret/path/to/admin.*",
						"to": "v1/admin?$is_args$args"
					},
					"type": "url-rewrite"
				}
			],
			"expressions": ["req.url.contains('v0/')"],
			"name": "Rewrite v0 API Calls to v1."
		},
		{
			"actions": [
				{
					"config": {
						"content": "access denied",
						"headers": {
							"content-type": "text/plain"
						},
						"status_code": 401
					},
					"type": "custom-response"
				}
			],
			"expressions": [
				"req.method == 'POST' && req.content_length > 10000",
				"conn.geo.country_code in ['BR', 'CN', 'CU', 'IR', 'NG', 'RO', 'RU', 'SD', 'SY', 'UA']"
			],
			"name": "Block POST Requests With Large Content Length From Specific Countries"
		},
		{
			"actions": [
				{
					"config": {
						"status_code": 400
					},
					"type": "deny"
				}
			],
			"expressions": [
				"'ChatGPT' in req.headers['user-agent'] || 'GPTBot' in req.headers['user-agent']"
			],
			"name": "Block AI Crawler Bots"
		}
	],
	"outbound": [
		{
			"actions": [
				{
					"config": {
						"metadata": {
							"edgeId": "edghts_2hrGzFXBFh5GMlgGeqQ6Ms1xzv2",
							"message": "Unsuccessful response",
							"routeId": "edghtsrt_2hrGzDNSmgxEDJSKMPaKYauSUMa"
						}
					},
					"type": "log"
				}
			],
			"expressions": ["res.status_code < 200 || res.status_code > 300"],
			"name": "Log Unsuccessful Response"
		}
	]
}
```
