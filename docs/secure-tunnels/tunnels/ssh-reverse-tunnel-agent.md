---
sidebar_position: 4
title: SSH Reverse Tunnel
---

# SSH Reverse Tunnel Agent
--------------------

SSH reverse tunneling is an alternative mechanism to start an ngrok tunnel without needing to download or run the ngrok agent. You can start tunnels via SSH without downloading an ngrok agent by running an SSH reverse tunnel command.

The SSH gateway functionality should not be confused with exposing an SSH server via ngrok. If you want to expose your own SSH server for remote access, please refer to the [using ngrok with ssh](/using-ngrok-with/ssh) section of the documentation.

The main features you miss out on when using the SSH Reverse Tunnel Agent instead of the ngrok agent is the ability to run multiple tunnels at the same time and the resiliency features for automatically reconnecting in case of network outages.

## Uploading a Public Key {#uploading-a-public-key}

Before you can start a tunnel via the SSH gateway, you'll need to upload your SSH public key. To upload your SSH public key, open the file `~/.ssh/id_rsa.pub` and copy its contents. Then go to [the Auth tab on your dashboard](https://dashboard.ngrok.com/tunnels/ssh-keys) and paste the contents into the SSH Key input and optionally enter a human description (like the name of your machine). You should now be able to start SSH tunnels!

###### Copy your SSH public key on MacOS

    cat ~/.ssh/id_rsa.pub | pbcopy

###### Add your SSH key by pasting it into the ngrok dashboard.

![](/img/docs/add-ssh-key.png)

## Examples {#examples}

ngrok tries to honor the syntax of `ssh -R` for all of the tunnel commands in its SSH gateway. You may wish to consult `man ssh`, and the section devoted to the `-R` option for additional details. ngrok uses additional command line options to implement features that are not otherwise available via the `-R` syntax.

The following examples demonstrate how to use the SSH gateway and provide the equivalent ngrok agent command to help you understand how to achieve similar functionality.

Note that following examples use the US region for agent ingress (tunnel.us.ngrok.com). There are agent ingress URLs for each of the [available regions](/ngrok-agent/config#region). They also use the `v2` version of the SSH gateway's command-line interface by specifying it as the username.

###### Start an http tunnel forwarding to port 80

    # equivalent: `ngrok http 80`
    ssh -R 443:localhost:80 v2@tunnel.us.ngrok.com http

###### View available http options

    # equivalent: `ngrok http --help`
    ssh -R 443:localhost:80 v2@tunnel.us.ngrok.com http --help

###### Start an http tunnel on a custom subdomain forwarding to port 8080

    # equivalent: `ngrok http --domain=custom-subdomain.ngrok.dev 8080`
    ssh -R custom-subdomain.ngrok.dev:443:localhost:8080 v2@tunnel.us.ngrok.com http

###### Start an http tunnel on a custom domain with auth

    # equivalent: `ngrok http --domain=example.com --basic-auth "user:password" 8080`
    ssh -R example.com:443:localhost:8080 v2@tunnel.us.ngrok.com http --basic-auth 'user:password'

###### Start a TCP tunnel

    # equivalent: `ngrok tcp 22`
    ssh -R 0:localhost:22 v2@tunnel.us.ngrok.com tcp 22

###### Start a TCP tunnel on a reserved address

    # equivalent: `ngrok tcp --remote-addr=1.tcp.ngrok.io:24313 22`
    ssh -R 1.tcp.ngrok.io:24313:localhost:22 v2@tunnel.us.ngrok.com tcp

###### Start a TLS tunnel

    # equivalent: `ngrok tls 8443`
    ssh -R 443:localhost:8443 v2@tunnel.us.ngrok.com tls

###### Start a tunnel in a different region

    # equivalent: `ngrok http --region=eu 80`
    ssh -R 443:localhost:80 v2@tunnel.eu.ngrok.com http
