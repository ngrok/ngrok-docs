
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"provider":"TWILIO","secret":"secret_token"}' \
https://api.ngrok.com/edges/https/edghts_2NTVHnqwRwfpZQ4FwR9Wqgms00M/routes/edghtsrt_2NTVHw1yt6CAXOcO2MbC5vMd1AX/webhook_verification
