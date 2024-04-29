<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"ingresses": [
		{
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"created_at": "2024-04-29T18:29:37Z",
			"description": "acme devices",
			"domain": "connect.acme.com",
			"id": "agin_2fmnypjq2RAXIuNjjqzRmI3T7zy",
			"ns_targets": [
				"1.kube-dns.kube-system.svc.cluster.local.",
				"2.kube-dns.kube-system.svc.cluster.local.",
				"3.kube-dns.kube-system.svc.cluster.local.",
				"4.kube-dns.kube-system.svc.cluster.local."
			],
			"region_domains": ["tunnel.us.connect.acme.com"],
			"uri": "/agent_ingresses/agin_2fmnypjq2RAXIuNjjqzRmI3T7zy"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/agent_ingresses"
}
```
