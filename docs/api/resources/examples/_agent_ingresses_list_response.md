<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "ingresses": [
    {
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "created_at": "2025-08-10T10:08:21Z",
      "description": "acme devices",
      "domain": "connect.acme.com",
      "id": "agin_315inY1A779llVRcgAKSb5Ib7SN",
      "ns_targets": [
        "1.kube-dns.kube-system.svc.cluster.local.",
        "2.kube-dns.kube-system.svc.cluster.local.",
        "3.kube-dns.kube-system.svc.cluster.local.",
        "4.kube-dns.kube-system.svc.cluster.local."
      ],
      "region_domains": [
        "tunnel.us.connect.acme.com"
      ],
      "uri": "/agent_ingresses/agin_315inY1A779llVRcgAKSb5Ib7SN"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/agent_ingresses"
}
```
