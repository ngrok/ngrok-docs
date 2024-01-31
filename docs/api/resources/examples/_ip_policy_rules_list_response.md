<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"ip_policy_rules": [
		{
			"id": "ipr_2bMmWXfn5EKyQVA3FqQdQPyb60i",
			"uri": "https://api.ngrok.com/ip_policy_rules/ipr_2bMmWXfn5EKyQVA3FqQdQPyb60i",
			"created_at": "2024-01-23T18:09:13Z",
			"description": "nyc office",
			"cidr": "212.3.14.0/24",
			"ip_policy": {
				"id": "ipp_2bMmWWFWmR7ComTMLOYsvSZVXQZ",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2bMmWWFWmR7ComTMLOYsvSZVXQZ"
			},
			"action": "allow"
		},
		{
			"id": "ipr_2bMmWVF4GwG3oKF1lW0IeiYysKd",
			"uri": "https://api.ngrok.com/ip_policy_rules/ipr_2bMmWVF4GwG3oKF1lW0IeiYysKd",
			"created_at": "2024-01-23T18:09:13Z",
			"description": "sf office",
			"cidr": "132.2.19.0/24",
			"ip_policy": {
				"id": "ipp_2bMmWWFWmR7ComTMLOYsvSZVXQZ",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2bMmWWFWmR7ComTMLOYsvSZVXQZ"
			},
			"action": "allow"
		},
		{
			"id": "ipr_2bMmWU2KgbDxSxzPFluW1YS9aoF",
			"uri": "https://api.ngrok.com/ip_policy_rules/ipr_2bMmWU2KgbDxSxzPFluW1YS9aoF",
			"created_at": "2024-01-23T18:09:13Z",
			"description": "alan laptop",
			"cidr": "2.2.2.2/32",
			"ip_policy": {
				"id": "ipp_2bMmWWFWmR7ComTMLOYsvSZVXQZ",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2bMmWWFWmR7ComTMLOYsvSZVXQZ"
			},
			"action": "allow"
		}
	],
	"uri": "https://api.ngrok.com/ip_policy_rules",
	"next_page_uri": null
}
```
