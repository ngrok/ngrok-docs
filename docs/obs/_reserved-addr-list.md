<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique reserved address resource identifier |
| uri | string | URI of the reserved address API resource |
| created_at | string | timestamp when the reserved address was created, RFC 3339 format |
| description | string | human-readable description of what this reserved address will be used for |
| metadata | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| addr | string | hostname:port of the reserved address that was assigned at creation time |
| region | string | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| uri | string | URI of the reserved address list API resource |
| next_page_uri | string | URI of the next page, or null if there is no next page |