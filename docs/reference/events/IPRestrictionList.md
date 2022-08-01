
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| ip_restrictions.id | string | | unique identifier for this IP restriction |
| ip_restrictions.uri | string | | URI of the IP restriction API resource |
| ip_restrictions.created_at | string | | timestamp when the IP restriction was created, RFC 3339 format |
| ip_restrictions.description | string | | human-readable description of this IP restriction. optional, max 255 bytes. |
| ip_restrictions.metadata | string | | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| ip_restrictions.enforced | boolean | | true if the IP restriction will be enforced. if false, only warnings will be issued |
| ip_restrictions.type | string | | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| ip_restrictions.ip_policies.id | string | | a resource identifier |
| ip_restrictions.ip_policies.uri | string | | a uri for locating a resource |
| uri | string | | URI of the IP restrictions list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |