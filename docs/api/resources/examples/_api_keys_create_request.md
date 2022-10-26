
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"ad-hoc dev testing","metadata":"{\"environment\":\"dev\"}"}' \
https://api.ngrok.com/api_keys
