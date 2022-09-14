
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2EmMPwTkxqG4Nct6ZxsfxxtTsFY","ipp_2EmMPycn2rcaQt0pqqQPc7r2OJY"]}' \
https://api.ngrok.com/edges/https/edghts_2EmMPwAV1BWlSF7GAJ52cVGeP4t/routes/edghtsrt_2EmMPx1QsGcNz7WT4hoOAiagMhj/ip_restriction
