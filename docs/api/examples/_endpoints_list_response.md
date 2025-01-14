<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-01-14T10:06:39Z",
			"hostport": "cc6f3dda97be.ngrok.paid:443",
			"id": "ep_2rcCueQnhASllDgqZGNDmDCoOkj",
			"name": "command_line",
			"principal": {
				"id": "usr_2rcCs3aBfA01H0kq4OxydHqoED0",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://cc6f3dda97be.ngrok.paid",
			"tunnel": {
				"id": "tn_2rcCueQnhASllDgqZGNDmDCoOkj",
				"uri": "https://api.ngrok.com/tunnels/tn_2rcCueQnhASllDgqZGNDmDCoOkj"
			},
			"tunnel_session": {
				"id": "ts_2rcCuc30ZEJgcRwMFqQ2pD9ZEvM",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2rcCuc30ZEJgcRwMFqQ2pD9ZEvM"
			},
			"type": "ephemeral",
			"updated_at": "2025-01-14T10:06:39Z",
			"upstream_url": "http://localhost:80",
			"url": "https://cc6f3dda97be.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-01-14T10:06:36Z",
			"domain": {
				"id": "rd_2rcCu7OH60v3P9Fk9oc12fQtyxO",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2rcCu7OH60v3P9Fk9oc12fQtyxO"
			},
			"edge": {
				"id": "edgtls_2rcCu3Mv1sn41sQWC6XN2AOtaaH",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2rcCu3Mv1sn41sQWC6XN2AOtaaH"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2rcCu9S8AIG5a9wNimT1fXEPsbO",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-01-14T10:06:36Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
