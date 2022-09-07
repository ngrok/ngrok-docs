
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| tls_edges.id | string | | unique identifier of this edge |
| tls_edges.description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| tls_edges.metadata | string | | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| tls_edges.created_at | string | | timestamp when the edge configuration was created, RFC 3339 format |
| tls_edges.uri | string | | URI of the edge API resource |
| tls_edges.hostports | List&lt;string&gt; | | hostports served by this edge |
| tls_edges.backend.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tls_edges.backend.backend.id | string | | a resource identifier |
| tls_edges.backend.backend.uri | string | | a uri for locating a resource |
| tls_edges.ip_restriction.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tls_edges.ip_restriction.ip_policies.id | string | | a resource identifier |
| tls_edges.ip_restriction.ip_policies.uri | string | | a uri for locating a resource |
| tls_edges.mutual_tls.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tls_edges.mutual_tls.certificate_authorities.id | string | | a resource identifier |
| tls_edges.mutual_tls.certificate_authorities.uri | string | | a uri for locating a resource |
| tls_edges.tls_termination.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tls_edges.tls_termination.terminate_at | string | | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| tls_edges.tls_termination.min_version | string | | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |
| uri | string | | URI of the TLS Edge list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |