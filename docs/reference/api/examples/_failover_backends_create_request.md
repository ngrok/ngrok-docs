
###### Example Request
```curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme failover","metadata":"{\"environment\": \"staging\"}","backends":["bkdhr_2ElyFfTPOSQdWWlkcaHjesjwAJV"]}' \
https://api.ngrok.com/backends/failover
