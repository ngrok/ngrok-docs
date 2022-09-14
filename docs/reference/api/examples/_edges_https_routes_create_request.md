
###### Example Request
```curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"match_type":"path_prefix","match":"/","description":"acme edge route","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/edges/https/edghts_2ElyFmhMKpTpHWiKrfWKd61wDiP/routes
