<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-11-20T21:02:15Z",
			"hostport": "5a83e48a49c5.ngrok.paid:443",
			"id": "ep_2p88qqUy4wSX03vbxZZFwtnNld7",
			"name": "command_line",
			"principal": {
				"id": "usr_2p88oSkme3DmEiKmEBxZDpSvnDf",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://5a83e48a49c5.ngrok.paid",
			"tunnel": {
				"id": "tn_2p88qqUy4wSX03vbxZZFwtnNld7",
				"uri": "https://api.ngrok.com/tunnels/tn_2p88qqUy4wSX03vbxZZFwtnNld7"
			},
			"tunnel_session": {
				"id": "ts_2p88qqfsFufjrVmFw3fUegIFXgA",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2p88qqfsFufjrVmFw3fUegIFXgA"
			},
			"type": "ephemeral",
			"updated_at": "2024-11-20T21:02:15Z",
			"upstream_url": "http://localhost:80",
			"url": "https://5a83e48a49c5.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-11-20T21:02:12Z",
			"domain": {
				"id": "rd_2p88qVwVvtviZTxUvFnG9MCBm7H",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2p88qVwVvtviZTxUvFnG9MCBm7H"
			},
			"edge": {
				"id": "edgtls_2p88qUZyOqIo0SvRRHPZhDNm6lu",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2p88qUZyOqIo0SvRRHPZhDNm6lu"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2p88qTPTtmn3FmuXYOpQU7qpZex",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-11-20T21:02:12Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
