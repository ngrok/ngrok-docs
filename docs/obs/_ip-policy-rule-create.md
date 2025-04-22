<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| description | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| cidr | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| ip_policy_id | string | ID of the IP policy this IP policy rule will be attached to |
| action | string | the action to apply to the policy rule, either `allow` or `deny` |