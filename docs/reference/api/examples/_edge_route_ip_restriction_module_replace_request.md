
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2ElyFwp7pmJn8msm3MoOIfV1XpO","ipp_2ElyG9EcmjXQY0moLGhRaE1DYfd"]}' \
https://api.ngrok.com/edges/https/edghts_2ElyG35ajsSSq5KaSxDTkn7iZEc/routes/edghtsrt_2ElyFzNiBhRDHqPdGsqEKBtopaV/ip_restriction
