
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2Gj44eek5Z35zNEI6zuW4bomHA2"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2Gj44c928i8lB0NcHgdx27IFCII
