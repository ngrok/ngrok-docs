---
sidebar_position: 1
---

# HTTP Tunnels
--------------------

ngrok HTTP tunnels allow you to route HTTP protocols quickly and easily. These include websites, RESTful APIs, web servers, websockets, and much more.

Starting an HTTP tunnel is a easy as `ngrok http 80`, or whatever local port your service is running on. For a full list of options for starting HTTP tunnels, see our [ngrok agent HTTP Tunnel reference](/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-http).

## Custom subdomains {#custom-subdomains}

ngrok assigns random names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read. You can specify a custom domain for your tunnel URL with the `--domain` switch.

###### Example: Open a tunnel with the domain 'inconshreveable.ngrok.dev'

    ngrok http --domain=inconshreveable.ngrok.dev 80

## Password protecting your tunnel with Basic Auth {#basic-auth}

Anyone who can guess your tunnel URL can access your local web server unless you protect it with a password. You can make your tunnels secure with the `--basic-auth` flag. This enforces HTTP Basic Auth on all requests with the username and password you specify as an argument. You can include multiple `--basic-auth` flags to allow multiple users.

###### Example: Password-protect your tunnel

    ngrok http --basic-auth="username:password" 8080

## Tunnels on custom branded domains {#custom-domains}

Instead of your tunnel appearing as a subdomain of an ngrok owned domain, you can connect ngrok tunnels to your custom domains. To run a tunnel over `dev.example.com`, follow these steps:

1.  Navigate to the [Domains tab of your ngrok.com dashboard](https://dashboard.ngrok.com/cloud-edge/domains) and click 'Add a domain'. Enter `dev.example.com` as a Reserved Domain. This guarantees that no one else can hijack your domain name with their own tunnel.
2.  On your dashboard, click on the 'CNAME' icon to copy your CNAME target.
    
    ![](/img/docs/cname.png)
3.  Create a DNS CNAME record from `dev.example.com` to your CNAME target. In this example, we would point the CNAME record to `2w9c34maz.wdv31sd.ngrok-cname.com`
4.  Invoke ngrok with the `--domain` switch and specify the name of your custom domain as an argument.
    
    ###### Example: Run a tunnel over a custom domain
    
        ngrok http --domain=dev.example.com 8000
    

## Local HTTPS servers {#local-https}

ngrok assumes that the server it is forwarding to is listening for unencrypted HTTP traffic, but if your server is listening for encrypted HTTPS traffic, you can specify a URL with an `https://` scheme to request that ngrok speak HTTPS to your local server.

###### Forward to an https server by specifying the https:// scheme

    ngrok http https://localhost:8443

As a special case, ngrok assumes that if you forward to port 443 on any host that it should send HTTPS traffic and will act as if you specified an `https://` URL.

###### Forward to the default https port on localhost

    ngrok http 443

ngrok assumes that your local network is private and it **does not do any validation of the TLS certificate presented by your local server**.

## Rewriting the Host header {#host-header}

When forwarding to a local port, ngrok does not modify the tunneled HTTP requests at all, they are copied to your server byte-for-byte as they are received. Some application servers like WAMP and MAMP and use the `Host` header for determining which development site to display. For this reason, ngrok can rewrite your requests with a modified Host header. Use the `--host-header` switch to rewrite incoming HTTP requests.

If `rewrite` is specified, the `Host` header will be rewritten to match the hostname portion of the forwarding address. Any other value will cause the `Host` header to be rewritten to that value.

###### Rewrite the Host header to 'site.dev'

    ngrok http --host-header=rewrite site.dev:80

###### Rewrite the Host header to 'example.com'

    ngrok http --host-header=example.com 80

## Serving local directories with ngrok's built-in file server {#file-url}

ngrok can serve local file system directories by using its own built-in file server, no separate server needed. You can serve files using the `file://` scheme when specifying the forwarding URL.

**All paths must be specified as absolute paths**, the `file://` URL scheme has no notion of relative paths.

###### Share a folder on your computer with authentication

    ngrok http --basic-auth="user:password" file:///Users/alan/share

File URLs can look a little weird on Windows, but they work the same:

###### Share a folder on your Windows computer

    ngrok http "file:///C:\Users\alan\Public Folder"

## Tunneling to HTTP or HTTPS only {#schemes}

By default, when ngrok runs an HTTP tunnel, it opens endpoints for both HTTP and HTTPS traffic. If you wish to only forward HTTP or HTTPS traffic, but not both, you can toggle this behavior with the `--scheme` flag.

###### Example: Only listen on an HTTP tunnel endpoint

    ngrok http --scheme=http site.dev:80

###### Example: Only listen on an HTTPS tunnel endpoint

    ngrok http --scheme=https site.dev:80

## HTTP Tunnel Examples {#examples}

    ngrok http 8080                             # forwards provided ngrok URL to port 80
    ngrok http example.com:9000                 # forward traffic to example.com:9000
    ngrok http --domain=bar.ngrok.dev 80        # request subdomain name: 'bar.ngrok.dev'
    ngrok http --domain=www.ex.com 1234         # request tunnel 'www.ex.com' (DNS CNAME)
    ngrok http --basic-auth='falken:joshua' 80  # enforce basic auth on tunnel endpoint
    ngrok http --host-header=ex.com 80          # rewrite the Host header to 'ex.com'
    ngrok http file:///var/log                  # serve local files in /var/log
    ngrok http https://localhost:8443           # forward to a local https server

## HTTP Tunnel Configuration Options {#configuration-options}

For a full list of options for configuring HTTP tunnels, see our [ngrok agent HTTP Tunnel reference](/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-http).
