<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2w51FUkrvIlRe3fhjbGyKUlMD46","ipp_2w51FVvZ8LHYy1LeP0BgGkskpIa"]}' \
https://api.ngrok.com/edges/https/edghts_2w51FRVMUBslfQPt4txeNgMtCVA/routes/edghtsrt_2w51FTAa7C9gLZiOrgGUInPNPNl/ip_restriction
