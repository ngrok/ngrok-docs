
###### Example Request
```curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2ElyFcRiE6t3ebwjHiTncs5cFpb":0,"bkdhr_2ElyFfOk2mXMKiZeS7T3gs4Tq3U":1}}' \
https://api.ngrok.com/backends/weighted
