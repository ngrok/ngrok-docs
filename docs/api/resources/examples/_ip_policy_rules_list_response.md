<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"ip_policy_rules": [
		{
			"id": "ipr_2ZGowCkPeowW8bKpK8nvMRD4e6D",
			"uri": "https://api.ngrok.com/ip_policy_rules/ipr_2ZGowCkPeowW8bKpK8nvMRD4e6D",
			"created_at": "2023-12-08T17:53:32Z",
			"description": "nyc office",
			"cidr": "212.3.14.0/24",
			"ip_policy": {
				"id": "ipp_2ZGowCbJGHd5PxdjLvU3K3j6QME",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2ZGowCbJGHd5PxdjLvU3K3j6QME"
			},
			"action": "allow"
		},
		{
			"id": "ipr_2ZGowC0Gh72K0vf0isUyIIQeqjR",
			"uri": "https://api.ngrok.com/ip_policy_rules/ipr_2ZGowC0Gh72K0vf0isUyIIQeqjR",
			"created_at": "2023-12-08T17:53:32Z",
			"description": "sf office",
			"cidr": "132.2.19.0/24",
			"ip_policy": {
				"id": "ipp_2ZGowCbJGHd5PxdjLvU3K3j6QME",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2ZGowCbJGHd5PxdjLvU3K3j6QME"
			},
			"action": "allow"
		},
		{
			"id": "ipr_2ZGowA0FNXWNNhRX9LVAK0CnBA0",
			"uri": "https://api.ngrok.com/ip_policy_rules/ipr_2ZGowA0FNXWNNhRX9LVAK0CnBA0",
			"created_at": "2023-12-08T17:53:32Z",
			"description": "alan laptop",
			"cidr": "2.2.2.2/32",
			"ip_policy": {
				"id": "ipp_2ZGowCbJGHd5PxdjLvU3K3j6QME",
				"uri": "https://api.ngrok.com/ip_policies/ipp_2ZGowCbJGHd5PxdjLvU3K3j6QME"
			},
			"action": "allow"
		}
	],
	"uri": "https://api.ngrok.com/ip_policy_rules",
	"next_page_uri": null
}
```
