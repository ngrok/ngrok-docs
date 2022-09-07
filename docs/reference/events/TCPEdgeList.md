
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| tcp_edges.id | string | | unique identifier of this edge |
| tcp_edges.description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| tcp_edges.metadata | string | | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| tcp_edges.created_at | string | | timestamp when the edge was created, RFC 3339 format |
| tcp_edges.uri | string | | URI of the edge API resource |
| tcp_edges.hostports | List&lt;string&gt; | | hostports served by this edge |
| tcp_edges.backend.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tcp_edges.backend.backend.id | string | | a resource identifier |
| tcp_edges.backend.backend.uri | string | | a uri for locating a resource |
| tcp_edges.ip_restriction.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tcp_edges.ip_restriction.ip_policies.id | string | | a resource identifier |
| tcp_edges.ip_restriction.ip_policies.uri | string | | a uri for locating a resource |
| uri | string | | URI of the TCP Edge list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |