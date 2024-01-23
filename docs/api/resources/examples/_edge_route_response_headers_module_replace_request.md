<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"Content-Security-Policy":"script-src 'self'","X-Frame-Options":"DENY"}}' \
https://api.ngrok.com/edges/https/edghts_2bMmXI8I4yQM0S7xBOj1eCFK626/routes/edghtsrt_2bMmXHBHzfPxON2Uwt9rpKB3lKW/response_headers
```
