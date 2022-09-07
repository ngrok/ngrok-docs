
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| backends.id | string | | unique identifier for this static backend |
| backends.uri | string | | URI of the StaticBackend API resource |
| backends.created_at | string | | timestamp when the backend was created, RFC 3339 format |
| backends.description | string | | human-readable description of this backend. Optional |
| backends.metadata | string | | arbitrary user-defined machine-readable data of this backend. Optional |
| backends.address | string | | the address to forward to |
| backends.tls.enabled | boolean | | if TLS is checked |
| uri | string | | URI of the static backends list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |