<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"provider":{"google":{"client_id":"client-id","client_secret":"client-secret","scopes":["profile","email","https://www.googleapis.com/auth/gmail.compose"],"email_addresses":["alan@example.com"]}},"options_passthrough":true}' \
https://api.ngrok.com/endpoint_configurations/ec_2ZGow6kpbcCOX6DA6pHIy8HiJDN/oauth
```
