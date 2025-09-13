<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"Database password for prod postgres instance","metadata":"env=prod,service=postgres","name":"db-password","value":"supersecret123","vault_id":"vault_32dl4JHnGXldeeUYp5BEnHixCnc"}' \
https://api.ngrok.com/vault_secrets
```
