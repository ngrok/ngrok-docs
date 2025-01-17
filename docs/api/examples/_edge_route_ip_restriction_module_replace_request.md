<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2rmHAlpVMvk5L5pIysbc6ccPLSX","ipp_2rmHAmqjPbuepowpiUO0gv4Byr6"]}' \
https://api.ngrok.com/edges/https/edghts_2rmHAheAzZ8UvVdJYNqOgmcEg3x/routes/edghtsrt_2rmHAjeazZMPjIk01QG5jh981L8/ip_restriction
