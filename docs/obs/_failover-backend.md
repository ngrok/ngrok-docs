<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this Failover backend |
| uri | string | URI of the FailoverBackend API resource |
| created_at | string | timestamp when the backend was created, RFC 3339 format |
| description | string | human-readable description of this backend. Optional |
| metadata | string | arbitrary user-defined machine-readable data of this backend. Optional |
| backends | List&lt;string&gt; | the ids of the child backends in order |