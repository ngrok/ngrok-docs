
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| tunnels.id | string | | unique tunnel resource identifier |
| tunnels.public_url | string | | URL of the ephemeral tunnel's public endpoint |
| tunnels.started_at | string | | timestamp when the tunnel was initiated in RFC 3339 format |
| tunnels.metadata | string | | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs#tunnel-definitions-metadata) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs#config_metadata). |
| tunnels.proto | string | | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| tunnels.region | string | | identifier of tune region where the tunnel is running |
| tunnels.tunnel_session.id | string | | a resource identifier |
| tunnels.tunnel_session.uri | string | | a uri for locating a resource |
| tunnels.endpoint.id | string | | a resource identifier |
| tunnels.endpoint.uri | string | | a uri for locating a resource |
| tunnels.labels | Map&lt;string, string&gt; | | the labels the tunnel group backends will match against, if this is a backend tunnel |
| tunnels.backends.id | string | | a resource identifier |
| tunnels.backends.uri | string | | a uri for locating a resource |
| tunnels.forwards_to | string | | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |
| uri | string | | URI of the tunnels list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |