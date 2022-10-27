
#### Example Response
```json
{
  "ingresses": [
    {
      "id": "agin_2GjCRi1H6YGyhkNjJZ4la6n9PTI",
      "uri": "https://api.ngrok.com/agent_ingresses/agin_2GjCRi1H6YGyhkNjJZ4la6n9PTI",
      "description": "acme devices",
      "metadata": "",
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
      "created_at": "2022-10-27T17:43:19Z"
    }
  ],
  "uri": "https://api.ngrok.com/agent_ingresses",
  "next_page_uri": null
}