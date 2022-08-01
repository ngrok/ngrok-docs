
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| ip_policy_rules.id | string | | unique identifier for this IP policy rule |
| ip_policy_rules.uri | string | | URI of the IP policy rule API resource |
| ip_policy_rules.created_at | string | | timestamp when the IP policy rule was created, RFC 3339 format |
| ip_policy_rules.description | string | | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| ip_policy_rules.metadata | string | | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| ip_policy_rules.cidr | string | | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| ip_policy_rules.ip_policy.id | string | | a resource identifier |
| ip_policy_rules.ip_policy.uri | string | | a uri for locating a resource |
| ip_policy_rules.action | string | | the action to apply to the policy rule, either `allow` or `deny` |
| uri | string | | URI of the IP policy rule list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |