<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique endpoint resource identifier |
| region | string | identifier of the region this endpoint belongs to |
| created_at | string | timestamp when the endpoint was created in RFC 3339 format |
| updated_at | string | timestamp when the endpoint was updated in RFC 3339 format |
| public_url | string | URL of the hostport served by this endpoint |
| proto | string | protocol served by this endpoint. one of `http`, `https`, `tcp`, or `tls` |
| scheme | string |  |
| hostport | string | hostport served by this endpoint (hostname:port) -> soon to be deprecated |
| host | string |  |
| port | int64 |  |
| type | string | whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) or `cloud (represents a cloud endpoint)` |
| metadata | string | user-supplied metadata of the associated tunnel or edge object |
| description | string | user-supplied description of the associated tunnel |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| upstream_url | string | the local address the tunnel forwards to |
| upstream_protocol | string | the protocol the agent uses to forward with |
| url | string | the url of the endpoint |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| traffic_policy | string | The traffic policy attached to this endpoint |
| bindings | List&lt;string&gt; | the bindings associated with this endpoint |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| uri | string | URI of the clep API resource |
| name | string | user supplied name for the endpoint |
| pooling_enabled | boolean | whether the endpoint allows pooling |