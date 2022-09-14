
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"provider":"TWILIO","secret":"secret_token"}' \
https://api.ngrok.com/edges/https/edghts_2ElyGMci3nkCCvcmUWwhjc7iGeT/routes/edghtsrt_2ElyGKT4upax0kTSPxjUPfTObsB/webhook_verification
