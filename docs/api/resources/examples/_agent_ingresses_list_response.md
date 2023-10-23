<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"ingresses": [
		{
			"id": "agin_2XB9wJxE0yuMq0TFERGTX7Jr7TA",
			"uri": "/agent_ingresses/agin_2XB9wJxE0yuMq0TFERGTX7Jr7TA",
			"description": "acme devices",
			"domain": "connect.acme.com",
			"ns_targets": [
				"1.kube-dns.kube-system.svc.cluster.local.",
				"2.kube-dns.kube-system.svc.cluster.local.",
				"3.kube-dns.kube-system.svc.cluster.local.",
				"4.kube-dns.kube-system.svc.cluster.local."
			],
			"region_domains": ["tunnel.us.connect.acme.com"],
			"created_at": "2023-10-23T20:10:42Z",
			"certificate_management_policy": null,
			"certificate_management_status": null
		}
	],
	"uri": "https://api.ngrok.com/agent_ingresses",
	"next_page_uri": null
}
```
