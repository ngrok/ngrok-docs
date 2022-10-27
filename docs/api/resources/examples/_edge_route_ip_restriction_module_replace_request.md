
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2GjCS0RmbSaQie5d815QinEP87T","ipp_2GjCS02dcZ7Mkn6GguLPzzts39p"]}' \
https://api.ngrok.com/edges/https/edghts_2GjCS0ETd2Fe0Gvzg0vLAXo5Ea6/routes/edghtsrt_2GjCS0VzfwVR6uqldOWxtpscJSM/ip_restriction
