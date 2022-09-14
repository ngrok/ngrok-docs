
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"Content-Security-Policy":"script-src 'self'","X-Frame-Options":"DENY"}}' \
https://api.ngrok.com/edges/https/edghts_2ElyGBvA1G6Il3WNu8UIUs0ISc4/routes/edghtsrt_2ElyGFXjX5eNCaDVquYRlV796Tz/response_headers
