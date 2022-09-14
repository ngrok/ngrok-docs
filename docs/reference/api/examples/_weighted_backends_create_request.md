
###### Example Request
```curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2EmMPdVQj4dRiH9qEFkrgFy2nHP":1,"bkdhr_2EmMPiRD0HRRhfTm8XcRpjDrsll":0}}' \
https://api.ngrok.com/backends/weighted
