# Mutual TLS
----------------

## Overview

This module performs mutual TLS (mTLS) authentication when the ngrok edge terminates
TLS on incoming connections to your HTTP endpoint. The client must present a
valid TLS certificate that is signed by one of the specified CAs or the
connection will be rejected.

ngrok injects [headers](#upstream-headers) into upstream HTTP requests with
information about the client certificate presented.

Mutual TLS is supported on both HTTP and TLS endpoints.

## Quickstart

### Agent CLI

```
ngrok http 80 --mutual-tls-cas /path/to/cas.pem
```

### Agent Configuration File

```
tunnels:
  example:
    proto: http
    addr: 80
    mutual_tls_cas: /path/to/cas.pem
```

### Go SDK

```
import (
	"context"
	"crypto/x509"
	"encoding/pem"
	"net"
	"os"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func listenMutualTLS(ctx context.Context) net.Listener {
	caBytes, _ := os.ReadFile("/path/to/cas.pem")
	der, _ := pem.Decode(caBytes)
	certs, _ := x509.ParseCertificates(der.Bytes)

	listener, _ := ngrok.Listen(ctx,
		config.HTTPEndpoint(
			config.WithMutualTLSCA(certs...),
		),
		ngrok.WithAuthtokenFromEnv(),
	)

	return listener
}
```

### Rust SDK

```
use ngrok::prelude::*;

async fn start_tunnel() -> anyhow::Result<impl Tunnel> {
    let ca_cert: &[u8] = load_bytes!("/path/to/cas.pem");

    let sess = ngrok::Session::builder()
        .authtoken_from_env()
        .connect()
        .await?;

    let tun = sess
        .http_endpoint()
        .mutual_tlsca(ca_cert.into())
        .listen()
        .await?;

    println!("Listening on URL: {:?}", tun.url());

    Ok(tun)
}
```

### Kubernetes Ingress Controller

:::note

Mutual TLS is not yet supported with the Kubernetes Ingress Controller.

:::

You can [+1 the GitHub
issue](https://github.com/ngrok/kubernetes-ingress-controller/issues/133)
tracking its implementation.

### Edges

Mutual TLS is a supported Edge module. When the Mutual TLS module is configured
via an Edge, you must specify one or more references to Certificate Authority
objects.

The Mutual TLS Edge module is applied to the edge directly and not to any
individual route. This is because Mutual TLS is enforced before any HTTP
processing can begin.

- [Mutual TLS Edge Module API Resource](/api/resources/https-edge-mutual-tls-module/)
- [Certificate Authority API Resource](/api/resources/certificate-authorities/)

## Try it out

This example assumes you have an x509 private key and certificate encoded as
PEM files called `client-key.pem` and `client-cert.pem`, respectively. The
certificate must be signed by one of the CA certificates you provided to the
Mutual TLS module.

Run `curl` with the following command:

```
curl --client client-cert.pem --key client-key.pem https://yourapp.ngrok.app
```

`curl` has a shortcut to pass a single file if the private key and certificate
are concatenated together.

```
cat client-cert.pem client-key.pem > client-cert-and-key.pem
curl --cert client-cert-and-key.pem https://yourapp.ngrok.app
```

## Behavior

### Multiple CAs

You may specify multiple CAs to be used for mTLS authentication. A
connection is considered authenticated if it presents a certificate signed by
any of the specified CAs. Most agents allow you to specify multiple CAs by
simply specifying a PEM file that contains multiple x509 CA certificates
concatenated together. A file like that might look like:

```
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
```

### CA Basic Constraint

x509 certificates contain a basic constraint attribute  called `cA` which
defines whether or not the certificate may be used as a CA.

ngrok will refuse to accept a certificate as an mTLS certificate authority
unless this constraint is set to true.

See [RFC 5280 4.2.1.9](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.9).

## Reference

### Upstream Headers {#upstream-headers}

When the Mutual TLS module is enabled, ngrok will insert headers into the HTTP
request sent to your upstream server with details about the client certificate
that was presented for the Mutual TLS handshake.

| Header Name | Value |
| ----------- | ----- |
| `ngrok-mtls-subject-cn` | The client certificate subject common name |
| `ngrok-mtls-subject-alt-name-dns` | The client certificate's DNS subject alternative names |
| `ngrok-mtls-email-addresses` | The client certificate's email subject alternative names  |
| `ngrok-mtls-serial-number` | The client certificate's serial number |

### Events

When the mutual TLS module is enabled, it populates the following fields in
[http\_request\_complete.v0](/events/reference/#http-request-complete) events.

| Fields |
| ------ |
| `tls.client_cert.serial_number` |
| `tls.client_cert.subject.cn` |

No event data is captured when the module is enabled on TLS endpoints.

### Errors

If the client does not present any certificate or it does not present a valid
certificate signed by the CA, the TLS handshake will be aborted. Because the
connection is aborted during the TLS handshake, the client will not receive an
HTTP error response or an ngrok error code.

Instead, the TLS connection aborts with a TLS error as defined by [RFC
5246](https://datatracker.ietf.org/doc/html/rfc5246#section-7.2). The most
common alert code returned for a failed mutual TLS handshake is code 42
(`bad_certificate`) which most TLS implementations will report with the error
string string "bad certificate".

### Licensing

Mutual TLS is available on the Enterprise plan only.
