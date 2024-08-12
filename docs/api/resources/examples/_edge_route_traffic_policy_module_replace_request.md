<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"value":"{\n\t\"inbound\":[\n\t\t{\n\t\t\t\"name\":\"Rewrite /products API Calls\",\n\t\t\t\"expressions\":[\"req.url.path == '/products'\"],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\": \"url-rewrite\",\n\t\t\t\t\t\"config\": {\n\t\t\t\t\t\t\"from\": \"/products/?([.*]+)?\",\n\t\t\t\t\t\t\"to\": \"/products.php?query=$1\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t\"name\":\"Block POST Requests With Large Content Length From Specific Countries\",\n\t\t\t\"expressions\":[\n\t\t\t\t\"req.method == 'POST' && req.content_length > 10000\",\n\t\t\t\t\"conn.geo.country_code in ['BR', 'CN', 'CU', 'IR', 'NG', 'RO', 'RU', 'SD', 'SY', 'UA']\"\n\t\t\t],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"custom-response\",\n\t\t\t\t\t\"config\":{\n\t\t\t\t\t\t\"status_code\":401,\n\t\t\t\t\t\t\"headers\":{\n\t\t\t\t\t\t\t\"content-type\":\"text/plain\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"content\":\"access denied\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t\"name\":\"Block AI Crawler Bots\",\n\t\t\t\"expressions\":[\"'ChatGPT' in req.headers['user-agent'] || 'GPTBot' in req.headers['user-agent']\"],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"deny\",\n\t\t\t\t\t\"config\":{\n\t\t\t\t\t\t\"status_code\":400\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t],\n\t\"outbound\":[\n\t\t{\n\t\t\t\"name\":\"Brotli Compress Responses\",\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"compress-response\",\n\t\t\t\t\t\"config\": {\n\t\t\t\t\t\t\"algorithms\":[\"br\"]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}"}' \
https://api.ngrok.com/edges/https/edghts_2k5okXODqRdNJwQ2MvGiWN5AKwK/routes/edghtsrt_2k5okXwpQWUewchiTyc6ZWyVeSo/traffic_policy
```
