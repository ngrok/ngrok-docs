<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-12-19T20:27:08Z",
			"hostport": "76da0071e9e7.ngrok.paid:443",
			"id": "ep_2qRzA0pKp9kHF3N6WaMLoOwCHVZ",
			"name": "command_line",
			"principal": {
				"id": "usr_2qRz7N0DgMEYaqthuwAtelSEpx1",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://76da0071e9e7.ngrok.paid",
			"tunnel": {
				"id": "tn_2qRzA0pKp9kHF3N6WaMLoOwCHVZ",
				"uri": "https://api.ngrok.com/tunnels/tn_2qRzA0pKp9kHF3N6WaMLoOwCHVZ"
			},
			"tunnel_session": {
				"id": "ts_2qRzA67xpBaQRrI4DsxXK67NHNu",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2qRzA67xpBaQRrI4DsxXK67NHNu"
			},
			"type": "ephemeral",
			"updated_at": "2024-12-19T20:27:08Z",
			"upstream_url": "http://localhost:80",
			"url": "https://76da0071e9e7.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-12-19T20:27:05Z",
			"domain": {
				"id": "rd_2qRz9cFXCd4MurnFeBfZ4uvMflm",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2qRz9cFXCd4MurnFeBfZ4uvMflm"
			},
			"edge": {
				"id": "edgtls_2qRz9UguoqqrqEAuSOuEvGDzDJf",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2qRz9UguoqqrqEAuSOuEvGDzDJf"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2qRz9YzBWCJ7axuKJ4OOzu1VOQ2",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-12-19T20:27:05Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
