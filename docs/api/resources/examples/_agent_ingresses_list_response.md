<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"ingresses": [
		{
			"id": "agin_2arwbOTZcbVWV1r99RXzAP7gFz6",
			"uri": "/agent_ingresses/agin_2arwbOTZcbVWV1r99RXzAP7gFz6",
			"description": "acme devices",
			"domain": "connect.acme.com",
			"ns_targets": [
				"1.kube-dns.kube-system.svc.cluster.local.",
				"2.kube-dns.kube-system.svc.cluster.local.",
				"3.kube-dns.kube-system.svc.cluster.local.",
				"4.kube-dns.kube-system.svc.cluster.local."
			],
			"region_domains": ["tunnel.us.connect.acme.com"],
			"created_at": "2024-01-12T20:07:56Z",
			"certificate_management_policy": null,
			"certificate_management_status": null
		}
	],
	"uri": "https://api.ngrok.com/agent_ingresses",
	"next_page_uri": null
}
```
