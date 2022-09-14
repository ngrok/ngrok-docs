
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"provider":"TWILIO","secret":"secret_token"}' \
https://api.ngrok.com/edges/https/edghts_2EmMQCeBmUMXp2HjvGwON38OSZR/routes/edghtsrt_2EmMQFjAKSIphpc3cJPpw7VOuFX/webhook_verification
