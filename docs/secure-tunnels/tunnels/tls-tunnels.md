---
sidebar_position: 2
---

# TLS Tunnels
--------------------

HTTPS tunnels terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate. ngrok makes this extraordinarily easy with TLS tunnels.

Check out the [ngrok agent TLS tunnel documentation](/ngrok-agent/ngrok#ngrok-tls) for the complete details for starting a TLS Tunnel.

###### Forward TLS traffic to a local HTTPS server on port 443

    ngrok tls --domain=encrypted.ngrok.dev 443

Once your tunnel is running, try accessing it with curl.

    curl --insecure https://encrypted.ngrok.dev

## TLS Tunnels without certificate warnings {#tls-cert-warnings}

Notice that `--insecure` option in the previous `curl` command example? You need to specify that because your local HTTPS server doesn't have the TLS key and certificate necessary to terminate traffic for any subdomains of ngrok owned domains. If you try to load up that page in a web browser, you'll notice that it tells you the page could be insecure because the certificate does not match.

If you want your certificates to match and be protected from man-in-the-middle attacks, you need two things. First, you'll need to buy an SSL (TLS) certificate for a domain name that you own and configure your local web server to use that certificate and its private key to terminate TLS connections. How to do this is specific to your web server and SSL certificate provider and beyond the scope of this documentation. For the sake of example, we'll assume that you were issued an SSL certificate for the domain `secure.example.com`.

Once you have your key and certificate and have installed them properly, it's now time to run a TLS tunnel on your own custom domain name. The instructions to set this up are identical to those described in the HTTP tunnels section: [Tunnels on custom domains](/docs/secure-tunnels/tunnels/http-tunnels#custom-subdomains). The custom domain you register should be the same as the one in your SSL certificate (use the `--domain` argument to start the TLS tunnel on your own domain).

###### Forward TLS traffic over your own custom domain

    ngrok tls --region=us --domain=secure.example.com 443

## Terminating TLS connections {#tls-termination}

It's possible that the service you're trying to expose may not have the capability to terminate TLS connections. The ngrok agent can do this for you so that you can encrypt your traffic end-to-end but not have to worry about whether the local service has TLS support. Specify both the `-crt` and `-key` command line options to specify the filesystem paths to your TLS certificate and key and the ngrok agent will take care of terminating TLS connections for you.

###### Offload TLS Termination to the ngrok Agent

    ngrok tls --region=us --domain secure.example.com --key /path/to/tls.key --crt /path/to/tls.crt 80

## Running non-HTTP services over TLS tunnels {#tls-agnostic}

ngrok TLS tunnels make **no assumptions about the underlying protocol** being transported. All examples in this documentation use HTTPS because it is the most common use case, but you can run run any TLS-wrapped protocol over a TLS tunnel (e.g. IMAPS, SMTPS, SIPS, SRTP, etc) without any changes.

## Compatible Clients {#tls-compatibility}

TLS tunnels work by inspecting the data present in the Server Name Information (SNI) extension on incoming TLS connections. Not all clients that initiate TLS connections support setting the SNI extension data. These clients will not work properly with ngrok's TLS tunnels. Fortunately, nearly all modern browsers use SNI. Some modern software libraries do not though. The following list of clients do not support SNI and will not work with TLS tunnels:

*   Microsoft Internet Explorer 6.0
*   Microsoft Internet Explorer 7 & 8 on Windows XP or earlier
*   Native browser on Android 2.X
*   Java <=1.6
*   [Python 2.X, 3.0, 3.1 if required modules are not installed](https://stackoverflow.com/questions/18578439/using-requests-with-tls-doesnt-give-sni-support/18579484#18579484)

A more complete list can be found on [the Server Name Indication page on Wikipedia](https://en.wikipedia.org/wiki/Server_Name_Indication#No_support)

## TLS Tunnel Examples {#examples}

    # forward TLS traffic for www.example.com to port 443 (requires CNAME)
    ngrok tls --domain=www.example.com 443
    
    # forward TLS traffic on subdomain (mismatch certificate warning)
    ngrok tls 1234
    
    # terminate TLS traffic for t.co before forwarding
    ngrok tls --domain=t.co --crt=/path/to/t.co.crt --key=/path/to/t.co.key 443

## TLS Tunnel Configuration Options {#configuration-options}

Check out the [ngrok agent TLS tunnel documentation](/ngrok-agent/ngrok#ngrok-tls) for all the configuration options for TLS tunnels.
