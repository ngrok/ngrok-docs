<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this IP policy rule |
| uri | string | URI of the IP policy rule API resource |
| created_at | string | timestamp when the IP policy rule was created, RFC 3339 format |
| description | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| cidr | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| action | string | the action to apply to the policy rule, either `allow` or `deny` |
| uri | string | URI of the IP policy rule list API resource |
| next_page_uri | string | URI of the next page, or null if there is no next page |