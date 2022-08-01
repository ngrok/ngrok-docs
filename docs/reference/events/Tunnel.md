
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique tunnel resource identifier |
| public_url | string | | URL of the ephemeral tunnel's public endpoint |
| started_at | string | | timestamp when the tunnel was initiated in RFC 3339 format |
| metadata | string | | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs#tunnel-definitions-metadata) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs#config_metadata). |
| proto | string | | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| region | string | | identifier of tune region where the tunnel is running |
| tunnel_session.id | string | | a resource identifier |
| tunnel_session.uri | string | | a uri for locating a resource |
| endpoint.id | string | | a resource identifier |
| endpoint.uri | string | | a uri for locating a resource |
| labels | Map&lt;string, string&gt; | | the labels the tunnel group backends will match against, if this is a backend tunnel |
| backends.id | string | | a resource identifier |
| backends.uri | string | | a uri for locating a resource |
| forwards_to | string | | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |