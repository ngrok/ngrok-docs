<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier of this edge |
| description | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| created_at | string | timestamp when the edge was created, RFC 3339 format |
| uri | string | URI of the edge API resource |
| hostports | List&lt;string&gt; | hostports served by this edge |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| value | string | the traffic policy that should be applied to the traffic on your endpoint. |
| uri | string | URI of the TCP Edge list API resource |
| next_page_uri | string | URI of the next page, or null if there is no next page |