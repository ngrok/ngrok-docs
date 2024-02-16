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
						"from": "v0/user/([0-9]+).*",
						"to": "v1/user?id=$1&$args"
					},
					"type": "url-rewrite"
				},
				{
					"config": {
						"from": "v0/super/secret/path/to/admin.*",
						"to": "v1/admin?$is_args$args"
					},
					"type": "url-rewrite"
				}
			],
			"expressions": ["req.URL.contains('v0/')"],
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
				"req.Method == 'POST' && req.ContentLength > 10000",
				"conn.Geo.CountryCode in ['BR', 'CN', 'CU', 'IR', 'NG', 'RO', 'RU', 'SD', 'SY', 'UA']"
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
				"'ChatGPT' in req.Headers['User-Agent'] || 'GPTBot' in req.Headers['User-Agent']"
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
							"edgeId": "edghts_2cSjzGIJqwwSDfDOKhRXHToV7Rv",
							"message": "Unsuccessful response",
							"routeId": "edghtsrt_2cSjzMefwVMUDcy95OaRhdhhGyF"
						}
					},
					"type": "log"
				}
			],
			"expressions": ["res.StatusCode < '200' || res.StatusCode > '300'"],
			"name": "Log Unsuccessful Response"
		}
	]
}
```
