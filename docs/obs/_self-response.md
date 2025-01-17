<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique API key resource identifier |
| uri | string | URI to the API resource of this API key |
| description | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |
| created_at | string | timestamp when the api key was created, RFC 3339 format |
| token | string | the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** |
| owner_id | string | If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. |
| id | string | unique API key resource identifier |
| name | string |  |
| created_at | string |  |
| suspended | boolean |  |
| enforce_sso | boolean |  |
| min_api_version | int64 |  |
| min_agent_version | string |  |
| user_mfa_required | boolean |  |
| traffic_full_capture | boolean |  |
| user | string |  |