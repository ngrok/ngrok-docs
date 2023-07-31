<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| ssh_certificate_authority_id | string | the ssh certificate authority that is used to sign this ssh user certificate |
| public_key | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| principals | List&lt;string&gt; | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| critical_options | Map&lt;string, string&gt; | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| extensions | Map&lt;string, string&gt; | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| valid_after | string | The time when the user certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. |
| valid_until | string | The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of 24 hours will be used. The OpenSSH certificates RFC calls this `valid_before`. |
| description | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |