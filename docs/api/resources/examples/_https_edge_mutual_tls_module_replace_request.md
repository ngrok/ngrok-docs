
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2EmMQBXBXIGEzrmyJ2Rp320OkSo"]}' \
https://api.ngrok.com/edges/https/edghts_2EmMQDle1znPm1Gt53QWRTAM0rA/mutual_tls
