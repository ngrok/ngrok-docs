
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"provider":{"google":{"client_id":"client-id","client_secret":"client-secret","scopes":["profile","email","https://www.googleapis.com/auth/gmail.compose"],"email_addresses":["alan@example.com"]}}}' \
https://api.ngrok.com/edges/https/edghts_2ElyG4sOASTp3mAVbZByZg9ibab/routes/edghtsrt_2ElyG7vGlcS2dIeVkEXI0d7w7Bi/oauth
