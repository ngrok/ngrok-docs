
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"Content-Security-Policy":"script-src 'self'","X-Frame-Options":"DENY"}}' \
https://api.ngrok.com/edges/https/edghts_2NTVHn2g86gK1xGVZZPzgXIC2Fh/routes/edghtsrt_2NTVHnEDfrIvgLfDV8rbnMrDT7p/response_headers
