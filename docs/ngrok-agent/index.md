---
sidebar_position: 1
title: Agent
---

# ngrok Agent
-----------

The `ngrok` command includes everything you need to securely tunnel traffic to the internet as well as interact with the ngrok API.

Any flags that accept a list can be specified multiple times, one for each list item. For example, `ngrok http 80 --scheme http --scheme https`.

### What's New in v3

The ngrok agent v3 includes a large number of improvements over the v2 agent. Here are some major highlights, but you can find a complete list in the [changelog](/ngrok-agent/changelog).

*   Linux and Mac users can install tab autocompletion capability for the ngrok agent to make discovery of new commands and flags much easier.
*   We've added an easy way to work with the ngrok API using the `ngrok api` command. You can use this to access any part of the API without having to worry about authenticating or formatting requests properly.
*   The agent now includes native capability to run ngrok as a service via the `ngrok service` command. Previously that was only available to ngrok link customers.
*   The `ngrok diagnose` command can be used to identify and troubleshoot common connection issues between the agent and the ngrok service.
*   HTTP tunnels now use HTTPS by default and include support for a large number of middleware modules for securing and manipulating traffic. See `ngrok http -h` for details.

There's a whole lot more to discover in the new ngrok agent v3. This [upgrade guide](/guides/upgrade-v2-v3) will help you move to the new version and make you aware of the breaking changes.

### Download and install the ngrok agent

See our [ngrok downloads](https://ngrok.com/download) page for instructions on installing the ngrok agent on your system.

The ngrok agent is most likely included in your favorite package manager (and if it's not, [let us know!](mailto:support@ngrok.com?subject=Request+to+add+the+ngrok+agent+to+a+new+package+manager)).

### Install your authtoken

The ngrok agent connects to the ngrok cloud and authenticates using the authtoken that is created when you sign up for ngrok. You can find the authtoken in the [ngrok Dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

To install that authtoken and get access to all the features of your account, use the `ngrok config` command:

    ngrok config add-authtoken <YOUR AUTHTOKEN>

This command will create a configuration file at the default location for your system. If a config file already exists, it will overwrite the authtoken in that file.

Now you're ready to explore the other commands of the ngrok agent.

### Enable Tab Completion

This is an optional step but it will drastically improve the usability of the ngrok agent for Linux and Mac users. Install tab completion for the ngrok agent to your shell using the command

    . <(ngrok completion)

After that, you will be able to see the available options by pressing tab after a command. Check out the [`ngrok completion` reference documentation](/ngrok-agent/ngrok#ngrok-completion) for details on adding this to your login scripts.

### Supported ENV Variables

The ngrok agent supports environment variables as well for the authtoken and API key. You may use them instead if that's easier in your environment.

*   `NGROK_AUTHTOKEN` - For more information about authtokens, see the [ngrok secure tunnels documentation](/secure-tunnels/ngrok-agent/tunnel-authtokens).
*   `NGROK_API_KEY` - For more information, see the [ngrok API documentation](/api#authentication).

### Examples

    ngrok http 80                      # secure public URL for port 80 web server
    ngrok http --subdomain=baz 8080    # port 8080 available at baz.ngrok.io
    ngrok http foo.dev:80              # tunnel to host:port instead of localhost
    ngrok http https://localhost:5001  # expose a local https server running on port 5001
    ngrok tcp 22                       # tunnel arbitrary TCP traffic to port 22
    ngrok tls --hostname=foo.com 443   # TLS traffic for foo.com to port 443
    ngrok start foo bar baz            # start tunnels from the configuration file

### ngrok Agent Changelog

The full changelog for the ngrok agent can be found on the [ngrok agent changelog](/ngrok-agent/changelog) page.
