<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"options_passthrough":true,"provider":{"google":{"client_id":"client-id","client_secret":"client-secret","email_addresses":["alan@example.com"],"scopes":["profile","email","https://www.googleapis.com/auth/gmail.compose"]}}}' \
https://api.ngrok.com/endpoint_configurations/ec_2k5ok9VGRiYDND4SamKTIcCgWck/oauth
```
