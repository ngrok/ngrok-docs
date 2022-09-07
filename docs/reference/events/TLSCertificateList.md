
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| tls_certificates.id | string | | unique identifier for this TLS certificate |
| tls_certificates.uri | string | | URI of the TLS certificate API resource |
| tls_certificates.created_at | string | | timestamp when the TLS certificate was created, RFC 3339 format |
| tls_certificates.description | string | | human-readable description of this TLS certificate. optional, max 255 bytes. |
| tls_certificates.metadata | string | | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| tls_certificates.certificate_pem | string | | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| tls_certificates.subject_common_name | string | | subject common name from the leaf of this TLS certificate |
| tls_certificates.subject_alternative_names.dns_names | List&lt;string&gt; | | set of additional domains (including wildcards) this TLS certificate is valid for |
| tls_certificates.subject_alternative_names.ips | List&lt;string&gt; | | set of IP addresses this TLS certificate is also valid for |
| tls_certificates.issued_at | string | | timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded |
| tls_certificates.not_before | string | | timestamp when this TLS certificate becomes valid, RFC 3339 format |
| tls_certificates.not_after | string | | timestamp when this TLS certificate becomes invalid, RFC 3339 format |
| tls_certificates.key_usages | List&lt;string&gt; | | set of actions the private key of this TLS certificate can be used for |
| tls_certificates.extended_key_usages | List&lt;string&gt; | | extended set of actions the private key of this TLS certificate can be used for |
| tls_certificates.private_key_type | string | | type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. |
| tls_certificates.issuer_common_name | string | | issuer common name from the leaf of this TLS certificate |
| tls_certificates.serial_number | string | | serial number of the leaf of this TLS certificate |
| tls_certificates.subject_organization | string | | subject organization from the leaf of this TLS certificate |
| tls_certificates.subject_organizational_unit | string | | subject organizational unit from the leaf of this TLS certificate |
| tls_certificates.subject_locality | string | | subject locality from the leaf of this TLS certificate |
| tls_certificates.subject_province | string | | subject province from the leaf of this TLS certificate |
| tls_certificates.subject_country | string | | subject country from the leaf of this TLS certificate |
| uri | string | | URI of the TLS certificates list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |