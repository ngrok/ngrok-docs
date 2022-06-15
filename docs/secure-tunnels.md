---
sidebar_position: 3
title: Secure Tunnels
---

# Secure Tunnels
--------------------

### What are ngrok Secure Tunnels?

ngrok Secure Tunnels allow you to instantly open access to remote systems without touching any of your network settings or opening any ports on your router. This means you get a secure, reliable tunnel for your developer box, IoT device, or just about anything that has access to the internet.

Using ngrok Secure Tunnels means that you can treat every device as being local, even if it's on the other side of the globe.


### How secure tunnels works

ngrok Secure Tunnels work by using a locally installed ngrok agent to establish a connection to the ngrok service. Once the connection is established, you get a public endpoint that you or others can use to access your local service.

When a user hits the public ngrok endpoint, the ngrok edge figures out where to route the request to and forwards it over an encrypted connection to the locally running ngrok agent. From there, the local ngrok agent takes care of sending traffic to your upstream service. The communication between the ngrok edge and agent is secure and encrypted. Traffic from the user to the ngrok edge, and from the ngrok agent to the upstream service rely on the protocol you are using for encryption. For protocols that support end to end encryption using TLS, we provide a [TLS tunnel](/docs/secure-tunnels#tls-tunnels) option.


### Integrating with Cloud Edge

ngrok Secure Tunnels are designed to integrate seamlessly into your ngrok Cloud Edge. Each edge has one or more backends which determine how to handle requests to that edge. The Tunnel Group Backend is responsible for forwarding requests to one or more tunnels in the group. A group is created based on a set of labels, where every tunnel with the same set of labels will have requests load balanced across them.


### Labeled Tunnels

Labeled tunnels are just another tunnel type in the ngrok agent, similar to HTTP or TCP tunnels. When you create a new labeled tunnel, you define the set of labels that identify that tunnel and/or the device it's running on. When you create an edge that includes a tunnel group backend, and configure the tunnel group to look for tunnels matching specific labels, it will find and route traffic to your labeled tunnel.

See our [ngrok agent reference for Labeled Tunnels](/docs/ngrok-agent/ngrok#command-ngrok-tunnel) for a complete set of options and examples.


### ngrok Agent

The ngrok agent is usually installed on the same device where the service you are trying to tunnel is located (but it doesn't have to). Each agent leverages a Tunnel Authtoken Credential (tunnel credential in the API) to connect to the ngrok cloud and connect to a specific user account.

See our [ngrok agent reference](/docs/ngrok-agent) for a complete set of commands and examples.


### Tunnel Authtokens

Once you've signed up for an ngrok account, you need to configure ngrok with the authtoken that appears on your dashboard. This will grant you access to all the features of ngrok. ngrok has a simple `ngrok config add-authtoken` command to make installing the authtoken simple. Under the hood, all the command does is to add (or modify) the `authtoken` property in your [ngrok con
###### Install your authtoken



### Authtoken ACL Enforcement

Authtoken Credential ACLs describe what an ngrok agent that connects with a given authtoken is allowed to do. For example, you may want to restrict each agent to only have permission to bind a specific set of tunnel endpoints. When you create an authtoken credential, specify a list of ACL behaviors are allowed for any agent connecting with that authtoken.

Generating authtoken credentials with ACLs is only available via the [create credential API](/docs/api#api-credentials) at the moment.


### Per Agent Authtokens

Each account may have many Authtokens, and we recommend configuring a new Authtoken for each agent you configure. This is because this configuration allows the most flexibility if an Authtoken is compromised as well as allowing you to set ACLs per ngrok agent.

You can use the [ngrok Dashboard to create new Authtokens](https://dashboard.ngrok.com/tunnels/authtokens) or you can use the ngrok API. The ngrok API is useful if you want to build this into a provisioning script. See the `ngrok api credentials` command in the ngrok agent or the [ngrok API for creating new credentials](/docs/api#api-credentials).

**In both the UI and API, the full Authtoken you generate will only be shown once, immediately after creation!**


### Installation and Supported Platforms

The ngrok agent runs on all major platforms including Linux, MacOS, Windows. For a full list of the platforms we support, please see our [ngrok agent download](https://ngrok.com/download) page.

If for some reason your platform is unsupported, you can still take advantage of the [SSH Reverse Tunnel Agent](#ssh-reverse-tunnel-agent) since it only requires `ssh` to be installed.


### Shell Autocompletion

Shell autocompletion for the ngrok agent makes it extremely easy to navigate all the command and flags by hitting tab in your terminal. It is available on Linux and MacOS operating systems and can be enabled for Bash or ZSH shells. See the [ngrok agent reference for the completion command](/docs/ngrok-agent/ngrok#command-ngrok-completion) for information on setting this up.


### ngrok Agent API Access

The ngrok agent has its own REST API that can be used to view, manage, start and stop tunnels on the agent. It is available by default at [http://localhost:4040](http://localhost:4040). For more information about using the local ngrok agent API, see out [ngrok agent API reference documentation](/docs/ngrok-agent/api).


### ngrok Agent Configuration File

For a full list of configuration options, see the [ngrok agent configuration reference documentation](/docs/ngrok-agent/config).

Sometimes your configuration for ngrok is too complex to be expressed in command line options or you need to open many tunnels at the same time. ngrok supports an optional YAML configuration file that provides you with the power to run multiple tunnels simultaneously as well as to tweak some of ngrok's more advanced settings.


### ngrok Agent Web Inspection Interface


### Inspecting requeststhe same machine. You will see all of the details of every request and response including the time, duration, source IP, headers, query parameters, request payload and response body as well as the raw bytes on the wire.

The inspection interface has a few limitations. If an entity-body is too long, ngrok may only capture the initial portion of the request body. Furthermore, ngrok does not display provisional 100 responses from a server.

Ins
###### Detailed introspection of HTTP requests and response
### Request body validationsyn
###### The location of a JSON syntax error is highlighte
### Filtering requestson 
###### Click the filter bar for filtering options

  
You
###### Filter requests by path and status cod
### Replaying requeststo replay any request with a single click, dramatically speeding up your iteration cycle. Click the **Replay** button at the top-right corner of any request on the web inspection UI to rep
###### Replay any request against your tunneled web server with one clic
### Replaying modified requests
###### Click the dropdown arrow on the 'Replay' button to modify a request before it is replayed

  
The
###### The request replay modification edito
### ngrok Agent Status Page(http://localhost:4040/status).

The
###### Tunnel and global configuration

  
The status page also display metrics about the traffic through each tunnel. It display connection rates and connection duration percentiles for all tunnels. For http tunnels, it also dis
###### Tunnel traffic metric
### Diagnose Command

The `ngrok diagnose` command is available in the ngrok agent and runs a series of tests to diagnose potential issues when starting a tunnel. For more information, check out the [ngrok agent reference for the diagnose command](/docs/ngrok-agent/ngrok#command-ngrok-diagnose).

    $ ngrok diagnose
    Testing ngrok connectivity...
    
    Internet Connectivity
      Name Resolution                           [ OK ]
      TCP                                       [ OK ]
      TLS                                       [ OK ]
    Ngrok Connectivity
      Name Resolution                           [ OK ]
      TCP                                       [ OK ]
      TLS                                       [ OK ]
      Tunnel Protocol                           [ OK ]
    
    Successfully established ngrok connection! (region: 'us', latency: 112.461875ms)


### Automatic Updates

The ngrok agent can be configured to automatically update to the latest version when available. You can configure how the upgrades work and which channel (stable, unstable, beta) to update from using the [ngrok agent configuration file](/docs/ngrok-agent/config#config-update).


### ngrok as a Background Service

The ngrok agent includes additional functionality that makes it easy to install and manage itself as a native operating system service on Windows, MacOS and Linux. This makes it extraordinarily easy to set up ngrok in a production configuration that will cause it to start on machine boot, restart after crashes, and integrate with the native tools system administrators are familiar with to manage and inspect its state.

When running as a service, the ngrok agent configures itself from its configuration file and starts all tunnels defined in the configuration file. When ngrok runs as a service, it executes the equivalent behavior of running `ngrok start --all`.

N
#### Windows
#### MacOS
#### Linuxa service. Warnings and errors are logged via syslog.


### Installation

Installing ngrok as a system service is the same on all on operating systems. First, create a configuration file somewhere on your machine. For this example, let's assume it's in `C:\ngrok\ngrok.yml`. In your configuration file, make sure you include an `authtoken` and define all of the tunnels that you want to start. Then run:

    ngrok service install --config C:\ngrok\ngrok.yml

This will validate that the configuration file is valid, and if so, install ngrok as a service using the given configuration file. The service installation includes the location of the ngrok binary, so don't move or delete it after you've installed the service.


### Management

After your service is installed, you probably want to start it. You can easily do that with:

    ngrok service start

ngrok exposes the following commands to make service administration easy. The commands take no arguments and do what you would expect.

*   `ngrok service start`
*   `ngrok service stop`
*   `ngrok service restart`
*   `ngrok service uninstall`


### Remote Management

The ngrok agent can be stopped, restarted, or upgraded remotely using the [Tunnel Sessions](/docs/api#api-tunnel-sessions-restart) API. You can also perform these actions from the ngrok Dashboard.

WARNING: Use this with caution if you have made changes to the config file. If for some reason ngrok cannot restart, you may lose access to the agent completely.


### SSH Reverse Tunnel Agent

SSH reverse tunneling is an alternative mechanism to start an ngrok tunnel without needing to download or run the ngrok agent. You can start tunnels via SSH without downloading an ngrok agent by running an SSH reverse tunnel command.

The SSH gateway functionality should not be confused with exposing an SSH server via ngrok. If you want to expose your own SSH server for remote access, please refer to the [using ngrok with ssh](/docs/using-ngrok-with#ssh) section of the documentation.

The main features you miss out on when using the SSH Reverse Tunnel Agent instead of the ngrok agent is the ability to run multiple tunnels at the same time and the resiliency features for automatically reconnecting in case of network outages. At this point in time, the reverse tunnel agent does not support the latest capabilities found in the ngrok agent, although we plan to support that in the future.


### Uploading a Public Key

Before you can start a tunnel via the SSH gateway, you'll need to upload your SSH public key. To upload your SSH public key, open the file `~/.ssh/id_rsa.pub` and copy its contents. Then go to [the Auth tab on your dashboard]({{url_for('dash.auth.tunnels.ssh.keys')}}) and paste the contents into the SSH Key input and optionally enter a human description (like the name of your mac
###### Copy your SSH public key on MacOS
###### Add your SSH key by pasting it into the ngrok dashboard
### Examples

ngrok tries to honor the syntax of `ssh -R` for all of the tunnel commands in its SSH gateway. You may wish to consult `man ssh`, and the section devoted to the `-R` option for additional details. ngrok uses additional command line options to implement features that are not otherwise available via the `-R` syntax.

The following examples demonstrate how to use the SSH gateway and provide the equivalent ngrok agent command to help you understand how to achieve similar functionality.

Note that following examples use the US region for agent ingress (tunnel.us.ngrok.com). There are agent ingress URLs for each of the [available regions](/docs/ngrok-agent/con
###### Start an http tunnel forwarding to port 80

   
###### Start an http tunnel on a custom subdomain forwarding to port 8080

   
###### Start an http tunnel on a custom domain with auth

   
###### Start a TCP tunnel

   
###### Start a TCP tunnel on a reserved address

   
###### Start a TLS tunnel

   
###### Start a tunnel in a different region

    ssh -R 80:localhost:80 tunnel.eu.ngrok.com http


### HTTP Tunnels

ngrok HTTP tunnels allow you to route HTTP protocols quickly and easily. These include websites, RESTful APIs, web servers, websockets, and much more.

Starting an HTTP tunnel is a easy as `ngrok http 80`, or whatever local port your service is running on. For a full list of options for starting HTTP tunnels, see our [ngrok agent HTTP Tunnel reference](/docs/ngrok-agent/ngrok#command-ngrok-http).


### Custom subdomains

ngrok assigns random names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party web
###### Example: Open a tunnel with the subdomain 'inconshreveable'



### Password protecting your tunnel with Basic Auth

Anyone who can guess your tunnel URL can access your local web server unless you protect it with a password. You can make your tunnels secure with the `--basic-auth` flag. This enforces HTT
###### Example: Password-protect your tunnel



### Tunnels on custom branded domains

Instead of your tunnel appearing as a subdomain of `ngrok.io`, you can connect ngrok tunnels to your custom domains. To run a tunnel over `dev.example.com`, follow these steps:

1.  Navigate to the [Domains tab of your ngrok.com dashboard]({{url_for('dash.auth.cloud.edge.domains')}}) and click 'Add a domain'. Enter `dev.example.com` as a Reserved Domain. This guarantees that no one else can hijack your domain name with their own tunnel.
2.  On your dashboard, click on the 'CNAME' icon to copy your CNAME target.![](https://ngrok.com/static/img/cname.png)
3.  Create a DNS CNAME record from `dev.example.com` to your CNAME target. In this example, we would point the CNAME record to `2w9c34maz.cname.ngrok.io`
4.  Invoke ngrok with the `--hostname` switch and specify the name of your custom domain as an argument. Make sure the `--region` you specify matches the region in which you reserved your domain.
    ###### Example: Run a tunnel over a custom domain
    

    


### Local HTTPS servers

ngrok assumes that the server it is forwarding to is listening for unencrypted HTTP traffic, but if your server is listening for encrypted HTTPS traffic, you can specify a URL with an `ht
###### Forward to an https server by specifying the https:// scheme


As 
###### Forward to the default https port on localhost


ngrok assumes that your local network is private and it **does not do any validation of the TLS certificate presented by your local server**.


### Rewriting the Host header

When forwarding to a local port, ngrok does not modify the tunneled HTTP requests at all, they are copied to your server byte-for-byte as they are received. Some application servers like WAMP and MAMP and use the `Host` header for determining which development site to display. For this reason, ngrok can rewrite your requests with a modified Host header. Use the `--host-header` switch to rewrite incoming HTTP requests.

If `rewrite` is specified, the `Host` header will be rewritten to match the hostname portion of the forwarding address. Any other value will cause the `Host` header to be rewritten to that val
###### Rewrite the Host header to 'site.dev'
###### Rewrite the Host header to 'example.com'



### Serving local directories with ngrok's built-in file server

ngrok can serve local file system directories by using its own built-in file server, no separate server needed. You can serve files using the `file://` scheme when specifying the forwarding URL.

**A
###### Share a folder on your computer with authentication


Fil
###### Share a folder on your Windows computer



### Tunneling to HTTP or HTTPS only

By default, when ngrok runs an HTTP tunnel, it opens endpoints for both HTTP and HTTPS traffic. If you wish to only forward HTTP or HTTPS traffic, but not both, you can toggle this behavior wit
###### Example: Only listen on an HTTP tunnel endpoint
###### Example: Only listen on an HTTPS tunnel endpoint



### HTTP Tunnel Examples

    ngrok http 8080                             # forwards provided ngrok URL to port 80
    ngrok http example.com:9000                 # forward traffic to example.com:9000
    ngrok http --subdomain=bar 80               # request subdomain name: 'bar.ngrok.io'
    ngrok http --hostname=www.ex.com 1234       # request tunnel 'ex.com' (DNS CNAME)
    ngrok http --basic-auth='falken:joshua' 80  # enforce basic auth on tunnel endpoint
    ngrok http --host-header=ex.com 80          # rewrite the Host header to 'ex.com'
    ngrok http file:///var/log                  # serve local files in /var/log
    ngrok http https://localhost:8443           # forward to a local https server


### HTTP Tunnel Configuration Options

For a full list of options for configuring HTTP tunnels, see our [ngrok agent HTTP Tunnel reference](/docs/ngrok-agent/ngrok#command-ngrok-http).


### TLS Tunnels

HTTPS tunnels terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate. ngrok makes this extraordinarily easy with TLS tunnels.

Che
###### Forward TLS traffic to a local HTTPS server on port 443


Once your tunnel is running, try accessing it with curl.

    curl --insecure https://encrypted.ngrok.io


### TLS Tunnels without certificate warnings

Notice that `--insecure` option in the previous `curl` command example? You need to specify that because your local HTTPS server doesn't have the TLS key and certificate necessary to terminate traffic for any `ngrok.io` subdomains. If you try to load up that page in a web browser, you'll notice that it tells you the page could be insecure because the certificate does not match.

If you want your certificates to match and be protected from man-in-the-middle attacks, you need two things. First, you'll need to buy an SSL (TLS) certificate for a domain name that you own and configure your local web server to use that certificate and its private key to terminate TLS connections. How to do this is specific to your web server and SSL certificate provider and beyond the scope of this documentation. For the sake of example, we'll assume that you were issued an SSL certificate for the domain `secure.example.com`.

Once you have your key and certificate and have installed them properly, it's now time to run a TLS tunnel on your own custom domain name. The instructions to set this up are identical to those described in the HTTP tunnels section: [Tunnels on custom domains](#http-tunnels-custom-domains). The custom domain you register should be the same as the one in your SSL certificate (`-
###### Forward TLS traffic over your own custom domain



### Terminating TLS connections

It's possible that the service you're trying to expose may not have the capability to terminate TLS connections. The ngrok agent can do this for you so that you can encrypt your traffic end-to-end but not have to worry about whether the local service has TLS support. Specify both the `-crt` and `-key` command line options to specify the filesystem paths to your TLS cer
###### Offload TLS Termination to the ngrok Agent



### Running non-HTTP services over TLS tunnels

ngrok TLS tunnels make **no assumptions about the underlying protocol** being transported. All examples in this documentation use HTTPS because it is the most common use case, but you can run run any TLS-wrapped protocol over a TLS tunnel (e.g. IMAPS, SMTPS, SIPS, SRTP, etc) without any changes.


### Compatible Clients

TLS tunnels work by inspecting the data present in the Server Name Information (SNI) extension on incoming TLS connections. Not all clients that initiate TLS connections support setting the SNI extension data. These clients will not work properly with ngrok's TLS tunnels. Fortunately, nearly all modern browsers use SNI. Some modern software libraries do not though. The following list of clients do not support SNI and will not work with TLS tunnels:

*   Microsoft Internet Explorer 6.0
*   Microsoft Internet Explorer 7 & 8 on Windows XP or earlier
*   Native browser on Android 2.X
*   Java <=1.6
*   [Python 2.X, 3.0, 3.1 if required modules are not installed](https://stackoverflow.com/questions/18578439/using-requests-with-tls-doesnt-give-sni-support/18579484#18579484)

A more complete list can be found on [the Server Name Indication page on Wikipedia](https://en.wikipedia.org/wiki/Server_Name_Indication#No_support)


### TLS Tunnel Examples

    # forward TLS traffic for www.example.com to port 443 (requires CNAME)
    ngrok tls --hostname=www.example.com 443
    
    # forward TLS traffic on subdomain (mismatch certificate warning)
    ngrok tls 1234
    
    # terminate TLS traffic for t.co before forwarding
    ngrok tls --hostname=t.co --crt=/path/to/t.co.crt --key=/path/to/t.co.key 443


### TLS Tunnel Configuration Options

Check out the [ngrok agent TLS tunnel documentation](/docs/ngrok-agent/ngrok#command-ngrok-tls) for all the configuration options for TLS tunnels.


### TCP Tunnels

Not all services you wish to expose are HTTP or TLS based. ngrok TCP tunnels allow you to expose any networked service that runs over TCP. This is commonly used to expose SSH, game servers, dat
###### Expose a TCP based service running on port 1234



### Reserved TCP Addresses

Normally, the remote address and port is assigned randomly each time you start a TCP tunnel. For production services (and convenience) you often want a stable, guaranteed remote address. To do this, first, log in to your ngrok.com dashboard and click "Reserve Address" in the "Reserved TCP Addresses" section. Then use the `--remote-addr` option when invoking ngrok to bind a tun
###### Bind a TCP tunnel on a reserved remote address



### TCP Tunnel Examples
###### Expose an SSH server listening on the default port
###### Expose a Postgres server listening on the default port
###### Expose an RDP server listening on the default port



### TCP Tunnel Configuration Options

Check out the [ngrok agent TCP tunnel documentation](/docs/ngrok-agent/ngrok#command-ngrok-tcp) for all the configuration options for TCP tunnels.


### Agent ingress

Agent ingress refers to the specific URL that the ngrok agent attempts to connect through to send requests. By default, that ingress URL is `tunnel.[region].ngrok.io:443` but it can be customized with your own custom ingress URL if needed.

You can do this by adding the [`server_addr`](/docs/ngrok-agent/config#config-server-addr) option to the ngrok configuration file. Setting up your own custom domain for agent ingress involves changing your nameservers for the domain to allow ngrok to manage though routes. You can configure this yourself in the [ngrok Dashboard](https://dashboard.ngrok.com/tunnels/ingress). Once this process is completed, you will configure the agent to connect to `server_addr: tunnel.[region].ingress.example.com:443` assuming you had registered `ingress.example.com` as your custom ingress URL.


### Forwarding to servers on a different machine (non-local services)



###### Example: Forward to a web server on a different machine

