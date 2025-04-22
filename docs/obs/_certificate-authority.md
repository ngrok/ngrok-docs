<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this Certificate Authority |
| uri | string | URI of the Certificate Authority API resource |
| created_at | string | timestamp when the Certificate Authority was created, RFC 3339 format |
| description | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| ca_pem | string | raw PEM of the Certificate Authority |
| subject_common_name | string | subject common name of the Certificate Authority |
| not_before | string | timestamp when this Certificate Authority becomes valid, RFC 3339 format |
| not_after | string | timestamp when this Certificate Authority becomes invalid, RFC 3339 format |
| key_usages | List&lt;string&gt; | set of actions the private key of this Certificate Authority can be used for |
| extended_key_usages | List&lt;string&gt; | extended set of actions the private key of this Certificate Authority can be used for |