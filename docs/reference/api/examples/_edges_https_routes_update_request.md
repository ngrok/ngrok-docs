
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/edges/https/edghts_2ElyFmhMKpTpHWiKrfWKd61wDiP/routes/edghtsrt_2ElyFkVyOa1pKRxsVhDqv9SvymI
