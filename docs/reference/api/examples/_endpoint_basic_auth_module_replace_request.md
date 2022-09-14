
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"auth_provider_id":"agent","allow_options":true}' \
https://api.ngrok.com/endpoint_configurations/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3/basic_auth
