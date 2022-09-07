
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| endpoints.id | string | | unique endpoint resource identifier |
| endpoints.region | string | | identifier of the region this endpoint belongs to |
| endpoints.created_at | string | | timestamp when the endpoint was created in RFC 3339 format |
| endpoints.updated_at | string | | timestamp when the endpoint was updated in RFC 3339 format |
| endpoints.public_url | string | | URL of the hostport served by this endpoint |
| endpoints.proto | string | | protocol served by this endpoint. one of `http`, `https`, `tcp`, or `tls` |
| endpoints.hostport | string | | hostport served by this endpoint (hostname:port) |
| endpoints.type | string | | whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) |
| endpoints.metadata | string | | user-supplied metadata of the associated tunnel or edge object |
| endpoints.domain.id | string | | a resource identifier |
| endpoints.domain.uri | string | | a uri for locating a resource |
| endpoints.tcp_addr.id | string | | a resource identifier |
| endpoints.tcp_addr.uri | string | | a uri for locating a resource |
| endpoints.tunnel.id | string | | a resource identifier |
| endpoints.tunnel.uri | string | | a uri for locating a resource |
| endpoints.edge.id | string | | a resource identifier |
| endpoints.edge.uri | string | | a uri for locating a resource |
| uri | string | | URI of the endpoints list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |