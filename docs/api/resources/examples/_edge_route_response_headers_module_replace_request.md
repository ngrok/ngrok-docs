<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"Content-Security-Policy":"script-src 'self'","X-Frame-Options":"DENY"}}' \
https://api.ngrok.com/edges/https/edghts_2XGwDwxPgt6u29hABPepq0MIo54/routes/edghtsrt_2XGwE2UrySoLUYs2y2eQvepUR1t/response_headers
```
