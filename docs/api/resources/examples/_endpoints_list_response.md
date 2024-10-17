<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-10-17T20:26:41Z",
			"hostport": "e3c98b29d802.ngrok.paid:443",
			"id": "ep_2na2KRmwQ3xUTK7fsBf4gPPtWhu",
			"name": "command_line",
			"principal": {
				"id": "usr_2na2I2d8Ao6a5681xuYxdgYUSB3",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://e3c98b29d802.ngrok.paid",
			"tunnel": {
				"id": "tn_2na2KRmwQ3xUTK7fsBf4gPPtWhu",
				"uri": "https://api.ngrok.com/tunnels/tn_2na2KRmwQ3xUTK7fsBf4gPPtWhu"
			},
			"tunnel_session": {
				"id": "ts_2na2KPli9fvvUbVYYCIjWPE8zWg",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2na2KPli9fvvUbVYYCIjWPE8zWg"
			},
			"type": "ephemeral",
			"updated_at": "2024-10-17T20:26:41Z",
			"upstream_url": "http://localhost:80",
			"url": "https://e3c98b29d802.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-10-17T20:26:39Z",
			"domain": {
				"id": "rd_2na2K4obUiVgxjyGhELNXZRomOt",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2na2K4obUiVgxjyGhELNXZRomOt"
			},
			"edge": {
				"id": "edgtls_2na2K2SHqq1jVXErSG2EhkglPNe",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2na2K2SHqq1jVXErSG2EhkglPNe"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2na2KDE8CTY0AZG8vME1nBU7Eed",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-10-17T20:26:39Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
