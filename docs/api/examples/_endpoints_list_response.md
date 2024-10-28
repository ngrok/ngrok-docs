<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2024-10-28T15:37:43Z",
			"hostport": "5e363fed4d8c.ngrok.paid:443",
			"id": "ep_2o4XXpk7uFhUhhF0MYxJYpoooMx",
			"name": "command_line",
			"principal": {
				"id": "usr_2o4XVFco1F0NHxPk254n4TJnNaD",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://5e363fed4d8c.ngrok.paid",
			"tunnel": {
				"id": "tn_2o4XXpk7uFhUhhF0MYxJYpoooMx",
				"uri": "https://api.ngrok.com/tunnels/tn_2o4XXpk7uFhUhhF0MYxJYpoooMx"
			},
			"tunnel_session": {
				"id": "ts_2o4XXrYGdZXtusMwuCuDalWjarM",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2o4XXrYGdZXtusMwuCuDalWjarM"
			},
			"type": "ephemeral",
			"updated_at": "2024-10-28T15:37:43Z",
			"upstream_url": "http://localhost:80",
			"url": "https://5e363fed4d8c.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2024-10-28T15:37:40Z",
			"domain": {
				"id": "rd_2o4XXTrQLsWbvJo14pEXY1Rvm61",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2o4XXTrQLsWbvJo14pEXY1Rvm61"
			},
			"edge": {
				"id": "edgtls_2o4XXRr3iq2JJaasbTKplGrcgoP",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2o4XXRr3iq2JJaasbTKplGrcgoP"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2o4XXP9Bkhkgtf3EngBkMj4QzCV",
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2024-10-28T15:37:40Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
