<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"enabled": true,
	"value": "{\"inbound\":[{\"expressions\":[\"req.url.path == '/products'\"],\"name\":\"Rewrite /products API Calls\",\"actions\":[{\"type\":\"url-rewrite\",\"config\":{\"from\":\"/products/?([.*]+)?\",\"to\":\"/products.php?query=$1\"}}]},{\"expressions\":[\"req.method == 'POST' \\u0026\\u0026 req.content_length \\u003e 10000\",\"conn.geo.country_code in ['BR', 'CN', 'CU', 'IR', 'NG', 'RO', 'RU', 'SD', 'SY', 'UA']\"],\"name\":\"Block POST Requests With Large Content Length From Specific Countries\",\"actions\":[{\"type\":\"custom-response\",\"config\":{\"status_code\":401,\"headers\":{\"content-type\":\"text/plain\"},\"content\":\"access denied\"}}]},{\"expressions\":[\"'ChatGPT' in req.headers['user-agent'] || 'GPTBot' in req.headers['user-agent']\"],\"name\":\"Block AI Crawler Bots\",\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":400}}]}],\"outbound\":[{\"name\":\"Brotli Compress Responses\",\"actions\":[{\"type\":\"compress-response\",\"config\":{\"algorithms\":[\"br\"]}}]}]}"
}
```
