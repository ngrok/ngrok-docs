
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique identifier of this edge |
| description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| created_at | string | | timestamp when the edge was created, RFC 3339 format |
| uri | string | | URI of the edge API resource |
| hostports | List&lt;string&gt; | | hostports served by this edge |
| backend.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| backend.backend.id | string | | a resource identifier |
| backend.backend.uri | string | | a uri for locating a resource |
| ip_restriction.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| ip_restriction.ip_policies.id | string | | a resource identifier |
| ip_restriction.ip_policies.uri | string | | a uri for locating a resource |