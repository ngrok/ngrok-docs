<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this TLS certificate |
| uri | string | URI of the TLS certificate API resource |
| created_at | string | timestamp when the TLS certificate was created, RFC 3339 format |
| description | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| certificate_pem | string | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/cloud-edge/endpoints#certificate-chains). |
| subject_common_name | string | subject common name from the leaf of this TLS certificate |
| dns_names | List&lt;string&gt; | set of additional domains (including wildcards) this TLS certificate is valid for |
| ips | List&lt;string&gt; | set of IP addresses this TLS certificate is also valid for |
| issued_at | string | timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded |
| not_before | string | timestamp when this TLS certificate becomes valid, RFC 3339 format |
| not_after | string | timestamp when this TLS certificate becomes invalid, RFC 3339 format |
| key_usages | List&lt;string&gt; | set of actions the private key of this TLS certificate can be used for |
| extended_key_usages | List&lt;string&gt; | extended set of actions the private key of this TLS certificate can be used for |
| private_key_type | string | type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. |
| issuer_common_name | string | issuer common name from the leaf of this TLS certificate |
| serial_number | string | serial number of the leaf of this TLS certificate |
| subject_organization | string | subject organization from the leaf of this TLS certificate |
| subject_organizational_unit | string | subject organizational unit from the leaf of this TLS certificate |
| subject_locality | string | subject locality from the leaf of this TLS certificate |
| subject_province | string | subject province from the leaf of this TLS certificate |
| subject_country | string | subject country from the leaf of this TLS certificate |