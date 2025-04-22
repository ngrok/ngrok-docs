<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique tunnel credential resource identifier |
| uri | string | URI of the tunnel credential API resource |
| created_at | string | timestamp when the tunnel credential was created, RFC 3339 format |
| description | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| token | string | the credential's authtoken that can be used to authenticate an ngrok agent. **This value is only available one time, on the API response from credential creation, otherwise it is null.** |
| acl | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains, addresses, and labels the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules for domains may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. Bind rules for labels may specify a wildcard key and/or value to match multiple labels. For example, you may specify a rule of `bind:*=example` which will allow `x=example`, `y=example`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |
| owner_id | string | If supplied at credential creation, ownership will be assigned to the specified User or Bot. Only admins may specify an owner other than themselves. Defaults to the authenticated User or Bot. |