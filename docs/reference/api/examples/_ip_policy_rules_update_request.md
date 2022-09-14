
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"cidr":"212.3.15.0/24"}' \
https://api.ngrok.com/ip_policy_rules/ipr_2EmMPTOnyfMPwKZbQsgwT1g4DVu
