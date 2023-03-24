
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"issuer":"https://accounts.google.com","client_id":"some-client-id","client_secret":"some-client-secret","scopes":["profile"]}' \
https://api.ngrok.com/edges/https/edghts_2NTVHhoYQp8UE0BCwZVzEM9ZTKn/routes/edghtsrt_2NTVHrUkOI8Qm4ZDDMjbBjuqWE6/oidc
