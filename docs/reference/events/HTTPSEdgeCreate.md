
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| description | string | | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| hostports | List&lt;string&gt; | | hostports served by this edge |
| mutual_tls.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| mutual_tls.certificate_authority_ids | List&lt;string&gt; | | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |
| tls_termination.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tls_termination.min_version | string | | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |