
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2ElyFKiIb3TrEOLdLiZKWN84NlY"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3/ip_policy
