
#### Example Response
```json
{
  "ingresses": [
    {
      "id": "agin_2NTVHbcf9IpYGHRvSdiuGs2sKJy",
      "uri": "https://api.ngrok.com/agent_ingresses/agin_2NTVHbcf9IpYGHRvSdiuGs2sKJy",
      "description": "acme devices",
      "domain": "connect.acme.com",
      "ns_targets": [
        "1.kube-dns.kube-system.svc.cluster.local.",
        "2.kube-dns.kube-system.svc.cluster.local.",
        "3.kube-dns.kube-system.svc.cluster.local.",
        "4.kube-dns.kube-system.svc.cluster.local."
      ],
      "region_domains": [
        "tunnel.us.connect.acme.com"
      ],
      "created_at": "2023-03-24T19:59:31Z"
    }
  ],
  "uri": "https://api.ngrok.com/agent_ingresses",
  "next_page_uri": null
}