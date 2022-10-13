
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2EmMPSeOnCbsp6gJa41DAYwOadT"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2EmMPUGTsPInk72L0EfZQO5dDmS/mutual_tls
