---
sidebar_position: 2
---

# Endpoints
----------------

When you create an edge, you will automatically be assigned a reserved domain or TCP address depending on the type of edge you create. You can customize this endpoint by adding your own reserved or custom branded domain. An edge can have many endpoints, and each will use the same configuration.

## Domains

### Reserved Domains

Domains in ngrok are the public URL you can use to access your service. They can be subdomains of a domain owned by ngrok, such as ngrok.dev, or they can be completely customized by bringing your own domain.

Any domain that you intend to use should be registered in the ngrok Dashboard to ensure no other account can use it if your tunnel goes offline.

You can also register [wildcard domains](#wildcard-domains) to your account which will reserve all subdomains of that domain.

### Wildcard Domains

ngrok permits you to bind HTTP and TLS tunnels to wildcard domains. All wildcard domains, even those that are subdomains of an ngrok owned domain must first be reserved for your account on your dashboard. When using `--domain`, specify a leading asterisk to bind a wildcard domain.

###### Bind a tunnel to receive traffic on all subdomains of `example.com`

    ngrok http --domain *.example.com 80

#### Wildcard Domain Rules

The use of wildcard domains creates ambiguities in some aspects of the ngrok.com service. The following rules are used to resolve these situations and are important to understand if you are using wildcard domains.

For the purposes of example, assume you have reserved the address `*.example.com` for your account.

*   Connections to nested subdomains (e.g. `foo.bar.baz.example.com`) will route to your wildcard tunnel.
*   You may bind tunnels on any valid subdomain of `example.com` without creating an additional reserved domain entry.
*   No other account may reserve `foo.example.com` or any other subdomain that would match a wildcard domain reserved by another account.
*   Connections are routed to the most specific matching tunnel online. If you are running tunnels for both `foo.example.com` and `*.example.com`, requests to `foo.example.com` will always route to `foo.example.com`

## Certificates

### Automated TLS Certificates

ngrok makes it incredibly easy to provision TLS certificates for your domains by integrating with Let's Encrypt to automatically provision and renew your certificates. It's a great way to never have to worry about expired certificates again. You can select "Automated TLS Certificates" when adding a custom domain in the dashboard

### TLS Certificates

ngrok supports uploading your own TLS certificates which we will use to terminate traffic to a given reserved domain at the ngrok edge. You may wish to use this functionality in addition to our automatically provisioned certificates if you are using an EV cert or provisioning certificates from your own certificate authority. Uploading a certificate will not change any traffic, you must then _attach_ the certificate to a reserved domain by setting the `certificate_id` property on the reserved domain with the ID of the certificate you'd like to use for TLS termination.

### Certificate Chains

When uploading a new certificate to ngrok via the API, the `certificate_pem` field expects a certificate bundle of all certificates necessary to establish a chain of trust to a trusted root certificate authority. Many TLS certificate vendors will provide you with a constructed certificate bundle, but some will return the leaf certificate and the intermediate certificates separately and you must concatenate them to construct the bundle yourself.

Certificate bundles are a series of PEM-encoded X.509 certificates that have been concatenated together in a specific order. A bundle will look like the following:

```
-----BEGIN CERTIFICATE----- 
... 
-----END CERTIFICATE----- 

-----BEGIN CERTIFICATE----- 
... 
-----END CERTIFICATE----- 

-----BEGIN CERTIFICATE----- 
... 
-----END CERTIFICATE-----
```
        
      

The first certificate in the bundle must be the leaf certificate. You can think of the leaf certificate as the one which is signed for your domain and [the private key](#private-keys) you will upload.

After the leaf are the intermediates certificates, if any. Each intermediate signs the certificate preceding it in the bundle. As an example, the first intermediate will have signed the leaf, and that signature is part of the leaf certificate itself. The final certificate is signed by the root certificate. You may also included the root certificate in the bundle as well, but it is not necessary or common practice to do so.

### Private Keys

ngrok accepts the following formats for the `private_key_pem` field:

*   RSA, in either PKCS#1 or PKCS#8 form.
*   ECDSA, in either SEC 1 or PKCS#8 form.
*   Ed25519, in PKCS#8 form.

All of the above (PKCS#1, PKCS#8, and SEC 1) are represented with ASN.1 DER (a binary format), encoded as PEM.

**ngrok will not accept any private keys that are encrypted (e.g. with DES).**.

## TCP Addresses

Normally, the remote TCP address and port are assigned randomly each time you start a TCP tunnel. For production services (and convenience) you often want a stable, guaranteed remote address. To do this, first, log in to your ngrok Dashboard and click "Reserve Address" in the "Reserved TCP Addresses" section. You cannot customize the address or port that is assigned to you. It is always assigned randomly. Then use the `--remote-addr` option when invoking ngrok to bind a tunnel on your reserved TCP address. Make sure the `--region` you specify matches the region in which you reserved your address.

###### Bind a TCP tunnel on a reserved remote address

    ngrok tcp --region=us --remote-addr 1.tcp.ngrok.io:20301 22
