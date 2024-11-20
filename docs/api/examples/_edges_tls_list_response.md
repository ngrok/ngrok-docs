<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2024-11-20T21:02:23Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2p88roZPEEhoKsJFW6XVPeEVx4h",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2p88roZPEEhoKsJFW6XVPeEVx4h"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2p88qTRuy4gzugf9PVOos2oXQK9",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2p88qTRuy4gzugf9PVOos2oXQK9"
				},
				"enabled": true
			},
			"created_at": "2024-11-20T21:02:12Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2p88qUZyOqIo0SvRRHPZhDNm6lu",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2p88qUZyOqIo0SvRRHPZhDNm6lu"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
