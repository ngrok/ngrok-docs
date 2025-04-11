<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vZwUIDhMGY4fY0iuwCZvWotLdp","ipp_2vZwUCbok6wfguVNDCTbcnyjHxe"]}' \
https://api.ngrok.com/edges/tls/edgtls_2vZwUFceE8ngLDOrCC7Gt1VSH1b/ip_restriction
