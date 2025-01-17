<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | ID of the abuse report |
| uri | string | URI of the abuse report API resource |
| created_at | string | timestamp that the abuse report record was created in RFC 3339 format |
| urls | List&lt;string&gt; | a list of URLs containing suspected abusive content |
| metadata | string | arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. |
| status | string | Indicates whether ngrok has processed the abuse report. one of `PENDING`, `PROCESSED`, or `PARTIALLY_PROCESSED` |
| hostname | string | the hostname ngrok has parsed out of one of the reported URLs in this abuse report |
| status | string | indicates what action ngrok has taken against the hostname. one of `PENDING`, `BANNED`, `UNBANNED`, or `IGNORE` |