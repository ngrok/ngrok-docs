<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"audience":{"allow_list":[{"value":"api://default"}]},"enabled":true,"http":{"tokens":[{"method":"header","name":"Authorization","prefix":"Bearer ","type":"at+jwt"}]},"issuer":{"allow_list":[{"value":"https://dev-72114178.okta.com/oauth2/default"}]},"jws":{"allowed_algorithms":["RS256","ES256"],"keys":{"sources":{"additional_jkus":["https://dev-72114178.okta.com/oauth2/default/v1/keys"]}}}}' \
https://api.ngrok.com/edges/https/edghts_2bhsMoU8a9lUwIsPFtVPA1AsSjC/routes/edghtsrt_2bhsMn4Gfj5Yhz2FitztvJO4weu/jwt_validation
```
