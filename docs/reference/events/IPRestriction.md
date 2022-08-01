
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique identifier for this IP restriction |
| uri | string | | URI of the IP restriction API resource |
| created_at | string | | timestamp when the IP restriction was created, RFC 3339 format |
| description | string | | human-readable description of this IP restriction. optional, max 255 bytes. |
| metadata | string | | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| enforced | boolean | | true if the IP restriction will be enforced. if false, only warnings will be issued |
| type | string | | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| ip_policies.id | string | | a resource identifier |
| ip_policies.uri | string | | a uri for locating a resource |