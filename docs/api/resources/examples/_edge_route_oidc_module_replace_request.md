<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"issuer":"https://accounts.google.com","client_id":"some-client-id","client_secret":"some-client-secret","scopes":["profile"]}' \
https://api.ngrok.com/edges/https/edghts_2TMGJRdg6f6FnIDdUgwxoM7dt1F/routes/edghtsrt_2TMGJOkfcbkM5jTxPU7BEIZgUDI/oidc
