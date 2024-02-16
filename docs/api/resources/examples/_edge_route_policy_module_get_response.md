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
						"content_type": "text/plain",
						"status_code": 401
					},
					"type": "custom-response"
				}
			],
			"expressions": [
				"req.Method == \"POST\" && req.ContentLength > 10000",
				"conn.Geo.CountryCode in [\"BR\", \"CN\", \"CU\", \"IR\", \"NG\", \"RO\", \"RU\", \"SD\", \"SY\", \"UA\"]"
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
				"\"RudeDudes\" in req.Headers[\"User-Agent\"] || \"Scalawags\" in req.Headers[\"User-Agent\"]"
			],
			"name": "Block User Agents"
		}
	],
	"outbound": [
		{
			"actions": [
				{
					"config": {
						"metadata": {
							"edgeId": "edghts_2bhsN2VP8W4pTkaMSrhyj0SRf8J",
							"message": "Unsuccessful response",
							"routeId": "edghtsrt_2bhsN5u05QQ1MRrI3XbpDQMFSE7"
						}
					},
					"type": "log"
				}
			],
			"expressions": ["res.StatusCode < \"200\" || res.StatusCode > \"300\""],
			"name": "Log Non Success"
		}
	]
}
```
