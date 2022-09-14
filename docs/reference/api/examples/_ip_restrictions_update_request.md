
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2ElyFL8laJVrQij3usUOCnuZbGT","ipp_2ElyFPP6F4eP06LQt1tVA43PDn5"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2ElyFMp2vGjsvxgC2bjzyEqXvDx
