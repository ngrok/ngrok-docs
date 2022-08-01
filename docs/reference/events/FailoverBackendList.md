
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| backends.id | string | | unique identifier for this Failover backend |
| backends.uri | string | | URI of the FailoverBackend API resource |
| backends.created_at | string | | timestamp when the backend was created, RFC 3339 format |
| backends.description | string | | human-readable description of this backend. Optional |
| backends.metadata | string | | arbitrary user-defined machine-readable data of this backend. Optional |
| backends.backends | List&lt;string&gt; | | the ids of the child backends in order |
| uri | string | | URI of the Failover backends list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |