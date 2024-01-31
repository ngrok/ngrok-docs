<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"audience": {
		"allow_list": [
			{
				"value": "api://default"
			}
		]
	},
	"enabled": true,
	"http": {
		"tokens": [
			{
				"method": "header",
				"name": "Authorization",
				"prefix": "Bearer ",
				"type": "at+jwt"
			}
		]
	},
	"issuer": {
		"allow_list": [
			{
				"value": "https://dev-72114178.okta.com/oauth2/default"
			}
		]
	},
	"jws": {
		"allowed_algorithms": ["RS256", "ES256"],
		"keys": {
			"sources": {
				"additional_jkus": [
					"https://dev-72114178.okta.com/oauth2/default/v1/keys"
				]
			}
		}
	}
}
```
