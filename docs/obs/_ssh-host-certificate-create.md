<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| ssh_certificate_authority_id | string | the ssh certificate authority that is used to sign this ssh host certificate |
| public_key | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| principals | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| valid_after | string | The time when the host certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. |
| valid_until | string | The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of one year in the future will be used. The OpenSSH certificates RFC calls this `valid_before`. |
| description | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |