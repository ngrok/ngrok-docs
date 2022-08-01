
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique endpoint resource identifier |
| region | string | | identifier of the region this endpoint belongs to |
| created_at | string | | timestamp when the endpoint was created in RFC 3339 format |
| updated_at | string | | timestamp when the endpoint was updated in RFC 3339 format |
| public_url | string | | URL of the hostport served by this endpoint |
| proto | string | | protocol served by this endpoint. one of `http`, `https`, `tcp`, or `tls` |
| hostport | string | | hostport served by this endpoint (hostname:port) |
| type | string | | whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) |
| metadata | string | | user-supplied metadata of the associated tunnel or edge object |
| domain.id | string | | a resource identifier |
| domain.uri | string | | a uri for locating a resource |
| tcp_addr.id | string | | a resource identifier |
| tcp_addr.uri | string | | a uri for locating a resource |
| tunnel.id | string | | a resource identifier |
| tunnel.uri | string | | a uri for locating a resource |
| edge.id | string | | a resource identifier |
| edge.uri | string | | a uri for locating a resource |