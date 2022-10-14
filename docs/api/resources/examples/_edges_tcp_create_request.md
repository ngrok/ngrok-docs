
#### Example Request

```bash 
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme tcp edge","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/edges/tcp
