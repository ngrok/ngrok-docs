
#### Example Request

```bash 
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2EmMPc4XyxjI4tL9KW2hL89HAjl","ipp_2EmMPWO1LAjBu0MH0o9jPldOVHW"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2EmMPYfigt9HcJmaJQmYPHCmq1r
