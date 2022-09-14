
###### Example Request
```curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"name":"myapp.mydomain.com","region":"us","certificate_id":"cert_2ElyEKRrr3jQTe1wICRWyADxwCE"}' \
https://api.ngrok.com/reserved_domains
