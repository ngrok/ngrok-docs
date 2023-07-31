<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier of this edge |
| description | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| hostports | List&lt;string&gt; | hostports served by this edge |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| certificate_authority_ids | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| min_version | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |