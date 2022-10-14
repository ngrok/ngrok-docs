
#### Example Request

```bash 
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"Staging Environment Hosts","private_key_type":"ed25519"}' \
https://api.ngrok.com/ssh_certificate_authorities
