<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"incident_id\":1233122}","urls":["http://legit-facebook-login.ngrok.io/login"]}' \
https://api.ngrok.com/abuse_reports
