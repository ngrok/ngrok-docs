
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| keys.id | string | | unique API key resource identifier |
| keys.uri | string | | URI to the API resource of this API key |
| keys.description | string | | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| keys.metadata | string | | arbitrary user-defined data of this API key. optional, max 4096 bytes |
| keys.created_at | string | | timestamp when the api key was created, RFC 3339 format |
| keys.token | string | | the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** |
| uri | string | | URI of the API keys list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |