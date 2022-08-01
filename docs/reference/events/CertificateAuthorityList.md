
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| certificate_authorities.id | string | | unique identifier for this Certificate Authority |
| certificate_authorities.uri | string | | URI of the Certificate Authority API resource |
| certificate_authorities.created_at | string | | timestamp when the Certificate Authority was created, RFC 3339 format |
| certificate_authorities.description | string | | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| certificate_authorities.metadata | string | | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| certificate_authorities.ca_pem | string | | raw PEM of the Certificate Authority |
| certificate_authorities.subject_common_name | string | | subject common name of the Certificate Authority |
| certificate_authorities.not_before | string | | timestamp when this Certificate Authority becomes valid, RFC 3339 format |
| certificate_authorities.not_after | string | | timestamp when this Certificate Authority becomes invalid, RFC 3339 format |
| certificate_authorities.key_usages | List&lt;string&gt; | | set of actions the private key of this Certificate Authority can be used for |
| certificate_authorities.extended_key_usages | List&lt;string&gt; | | extended set of actions the private key of this Certificate Authority can be used for |
| uri | string | | URI of the certificates authorities list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |