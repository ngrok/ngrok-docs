<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique tunnel resource identifier |
| public_url | string | URL of the ephemeral tunnel's public endpoint |
| started_at | string | timestamp when the tunnel was initiated in RFC 3339 format |
| metadata | string | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs/secure-tunnels/ngrok-agent/reference/config#common-tunnel-configuration-properties) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs/secure-tunnels/ngrok-agent/reference/config#metadata). |
| proto | string | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| region | string | identifier of tune region where the tunnel is running |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| labels | Map&lt;string, string&gt; | the labels the tunnel group backends will match against, if this is a backend tunnel |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| forwards_to | string | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |