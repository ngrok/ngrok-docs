
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2Ggv0iZPbgl6mkzAZUTOVdRLqQ7":1,"bkdhr_2Ggv0ik2jAPwU8TcMYuqFJWcGgP":0}}' \
https://api.ngrok.com/backends/weighted
