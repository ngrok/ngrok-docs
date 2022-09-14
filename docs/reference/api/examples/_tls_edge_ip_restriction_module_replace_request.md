
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2ElyGlU85kZtaGxb0EpxbufKEi6","ipp_2ElyGk52OK3Bsq5cneyb9UXRMvz"]}' \
https://api.ngrok.com/edges/tls/edgtls_2ElyGjnJOrTMmXaqIENpVM4G3Ut/ip_restriction
