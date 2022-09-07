
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| backends.id | string | | unique identifier for this TunnelGroup backend |
| backends.uri | string | | URI of the TunnelGroupBackend API resource |
| backends.created_at | string | | timestamp when the backend was created, RFC 3339 format |
| backends.description | string | | human-readable description of this backend. Optional |
| backends.metadata | string | | arbitrary user-defined machine-readable data of this backend. Optional |
| backends.labels | Map&lt;string, string&gt; | | labels to watch for tunnels on, e.g. app->foo, dc->bar |
| backends.tunnels.id | string | | a resource identifier |
| backends.tunnels.uri | string | | a uri for locating a resource |
| uri | string | | URI of the TunnelGroup backends list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |