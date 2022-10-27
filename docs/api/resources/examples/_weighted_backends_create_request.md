
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2GjCRgIcijXKtzogJM1BJEQae8t":1,"bkdhr_2GjCRgaU40qws4Uuw7PAXIa2G14":0}}' \
https://api.ngrok.com/backends/weighted
