
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| reserved_addrs.id | string | | unique reserved address resource identifier |
| reserved_addrs.uri | string | | URI of the reserved address API resource |
| reserved_addrs.created_at | string | | timestamp when the reserved address was created, RFC 3339 format |
| reserved_addrs.description | string | | human-readable description of what this reserved address will be used for |
| reserved_addrs.metadata | string | | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| reserved_addrs.addr | string | | hostname:port of the reserved address that was assigned at creation time |
| reserved_addrs.region | string | | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| uri | string | | URI of the reserved address list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |