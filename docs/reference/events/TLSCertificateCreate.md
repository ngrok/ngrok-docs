
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| description | string | | human-readable description of this TLS certificate. optional, max 255 bytes. |
| metadata | string | | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| certificate_pem | string | | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| private_key_pem | string | | private key for the TLS certificate, PEM-encoded. See [Private Keys](https://ngrok.com/docs/ngrok-link#tls-certificates-key). |