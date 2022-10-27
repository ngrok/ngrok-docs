
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ssh_certificate_authority_id":"sshca_2GjEzUoXjJKIPJIWgc4Bx47fStJ","public_key":"ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+Cgk= inconshreveable.com","principals":["inconshreveable.com","10.2.42.9"],"valid_until":"2023-01-25T18:04:14Z","description":"personal server"}' \
https://api.ngrok.com/ssh_host_certificates
