
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"terminate_at":"edge","min_version":"1.2"}' \
https://api.ngrok.com/endpoint_configurations/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3/tls_termination
