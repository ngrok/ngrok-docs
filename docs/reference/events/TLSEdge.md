
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique identifier of this edge |
| description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| created_at | string | | timestamp when the edge configuration was created, RFC 3339 format |
| uri | string | | URI of the edge API resource |
| hostports | List&lt;string&gt; | | hostports served by this edge |
| backend.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| backend.backend.id | string | | a resource identifier |
| backend.backend.uri | string | | a uri for locating a resource |
| ip_restriction.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| ip_restriction.ip_policies.id | string | | a resource identifier |
| ip_restriction.ip_policies.uri | string | | a uri for locating a resource |
| mutual_tls.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| mutual_tls.certificate_authorities.id | string | | a resource identifier |
| mutual_tls.certificate_authorities.uri | string | | a uri for locating a resource |
| tls_termination.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tls_termination.terminate_at | string | | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| tls_termination.min_version | string | | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |