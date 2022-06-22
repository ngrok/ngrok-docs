---
sidebar_position: 3
title: Agent CLI
---

# ngrok Agent Command Line Interface (CLI)
----------------------------------------

## ngrok

The root command of the ngrok agent.

### Usage

    ngrok [flags]
    ngrok [command]

### Commands

| Command | Description |
| --- | --- |
| [api](#command-ngrok-api) | use ngrok agent as an api client |
| [completion](#command-ngrok-completion) | generates shell completion code for bash or zsh |
| [config](#command-ngrok-config) | update or migrate ngrok's configuration file |
| [credits](#command-ngrok-credits) | prints author and licensing information |
| [diagnose](#command-ngrok-diagnose) | diagnose connection issues |
| [help](#command-ngrok-help) | Help about any command |
| [http](#command-ngrok-http) | start an HTTP tunnel |
| [service](#command-ngrok-service) | run and control an ngrok service on a target operating system |
| [start](#command-ngrok-start) | start tunnels by name from the configuration file |
| [tcp](#command-ngrok-tcp) | start a TCP tunnel |
| [tls](#command-ngrok-tls) | start a TLS tunnel |
| [tunnel](#command-ngrok-tunnel) | start a tunnel for use with a tunnel-group backend |
| [update](#command-ngrok-update) | update ngrok to the latest version |
| [version](#command-ngrok-version) | print the version string |

### Flags

| Flag | Description |
| --- | --- |
| `-h`, `--help` | Prints the help for the `ngrok` command |
| `-v`, `--version` | Prints the version for ngrok agent |

## ngrok api

The `ngrok api` command provides access to ngrok's API. You can use the API through one of the api subcommands.

All api subcommands require an API key. You can configure it either using a flag ([`ngrok config add-api-key`](#config-usage) command).

You can get get the initial API key in the [API section of the ngrok Dashboard](https://dashboard.ngrok.com/api/keys). Additional keys can be created through `ngrok api api-key create` subcommand.

These commands mirror our standard [ngrok HTTP API](/docs/api). If you have [shell completion enabled](/docs/ngrok-agent/ngrok#command-ngrok-completion), these will tab complete on the terminal.

### Usage

    ngrok api [flags]

### Commands

| Command | Description |
| --- | --- |
| [abuse-reports](/docs/api#api-abuse-reports) | Creates a new abuse report which will be reviewed by our system and abuse response team. |
| [agent-ingresses](/docs/api#api-agent-ingresses) | Manage Agent Ingresses. The ngrok agent can be configured to connect to ngrok via the new set of addresses on the returned Agent Ingress. |
| [api-keys](/docs/api#api-api-keys) | Manage API keys. These keys can be used to authenticate to the ngrok API. |
| [backends](/docs/api#api-failover-backends) | Manage the backends that are servicing Cloud Edges. |
| [certificate-authorities](/docs/api#api-certificate-authorities) | Manage Certificate Authorities. |
| [credentials](/docs/api#api-credentials) | Manage authtoken credentials. The authtoken credential can be used to authorize a new ngrok agent session. |
| [edge-modules](/docs/api#api-edge-route-backend-module) | Manage ngrok Cloud Edge Modules. |
| [edges](/docs/api#api-edges-https) | Manage ngrok Cloud Edges. |
| [endpoints](/docs/api#api-endpoints) | List all active endpoints on the account. |
| [event-destinations](/docs/api#api-event-destinations) | Manage Event Destinations. |
| [event-sources](/docs/api#api-event-sources) | Manage types for which an event subscription will trigger. |
| [event-subscriptions](/docs/api#api-event-subscriptions) | Manage Event Subscriptions. |
| [ip-policies](/docs/api#api-ip-policies) | Manage IP policies. |
| [ip-policy-rules](/docs/api#api-ip-policy-rules) | Manage IP policy rules attached to IP Policies. |
| [ip-restrictions](/docs/api#api-ip-restrictions) | Manage IP restrictions. |
| [reserved-addrs](/docs/api#api-reserved-addrs) | Manage reserved TCP addresses. |
| [reserved-domains](/docs/api#api-reserved-domains) | Manage reserved domains. |
| [ssh-certificate-authorities](/docs/api#api-ssh-certificate-authorities) | Manage SSH Certificate Authorities. |
| [ssh-credentials](/docs/api#api-ssh-credentials) | Manage SSH Credentials that can be used to start new tunnels via ngrok's SSH gateway. |
| [ssh-host-certificates](/docs/api#api-ssh-host-certificates) | Manage SSH Host Certificates. |
| [ssh-user-certificates](/docs/api#api-ssh-user-certificates) | Manage SSH User Certificates. |
| [tls-certificates](/docs/api#api-tls-certificates) | Manage TLS certificates |
| [tunnel-sessions](/docs/api#api-tunnel-sessions) | List all online tunnel sessions running on this account. |
| [tunnels](/docs/api#api-tunnels) | List all online tunnels currently running on the account. |

### Flags

| Flag | Description |
| --- | --- |
| `--api-key string` | API key to use |
| `--config strings` | path to config files; they are merged if multiple |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, 'stdout', 'stderr' or 'false' (default "false") |
| `--log-format string` | log record format: 'term', 'logfmt', 'json' (default "term") |
| `--log-level string` | logging level: 'debug', 'info', 'warn', 'error', 'crit' (default "info") |

## ngrok completion

The `ngrok completion` command generates shell tab completion code for Bash or Zsh. This requires bash-completion or zsh-completions packages to be enabled in your shell.

You can add it to your current session with the command

    . <(ngrok completion)

To enable them each time you start a new session, add the following to your `.bashrc` or `.zshrc` files:

    if command -v ngrok &>/dev/null; then
      eval "$(ngrok completion)"
    fi

Once you add this to your profile, you'll need to `source ~/.bashrc` or `source ~/.zshrc` to enable it for your current session.

### Usage

    ngrok completion [flags]

### Flags
| Flag | Description |
| --- | --- |
| `-h`, `--help` | help for this command |

## ngrok config

The `ngrok config` command updates or verifies ngrok's configuration file.

Use `add-authtoken` or `add-api-key` to set the corresponding properties.

Use `check` to test a configuration file for validity. If you have an old configuration file, you can also use `upgrade` to automatically upgrade to the latest version.

### Usage

    ngrok config [flags]

### Commands
| Command | Description |
| --- | --- |
| [add-api-key](#command-ngrok-config-add-api-key) | save an API key to configuration file. The API key can be generated in the [API section of the ngrok dashboard](https://dashboard.ngrok.com/api). |
| [add-authtoken](command-ngrok-config-add-authtoken) | save authtoken to configuration file |
| [check](command-ngrok-config-check) | check configuration file |
| [edit](command-ngrok-config-edit) | opens the config file in your system's default editor. It looks specifically for the `SHELL` and `EDITOR` environment variables. |
| [upgrade](command-ngrok-config-upgrade) | auto-upgrade configuration file |

### Flags

| Flag | Description |
| --- | --- |
| `-h`, `--help` | help for this command |

## ngrok config add-api-key

The `ngrok config add-api-key` command saves the ngrok API key to the configuration file. The API key can be generated in the [API section of the ngrok dashboard](https://dashboard.ngrok.com/api).

### Usage
    ngrok config add-api-key TOKEN [flags]

### Examples

    ngrok config add-api-key 1roPsn7AascHeO18mHcxRD3xT76_3ww7C9CDLYNgcdSYsscCB

### Flags

| Flag | Description |
| --- | --- |
| `--config string` | save in this config file |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |

## ngrok config add-authtoken

The `ngrok config add-authtoken` command saves the ngrok authtoken to the configuration file. You can find your authtoken in the [getting started section of the ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

The ngrok service requires that you [sign up for an account](https://dashboard.ngrok.com/) to use many advanced service features. In order to associate your agent with an account, it must pass a secret token to the ngrok service when it starts up. Instead of passing this authtoken on every invocation, you may use this command to save it into your configuration file so that your agent always authenticates you properly.

### Usage

    ngrok config add-authtoken TOKEN [flags]

### Examples
    ngrok config add-authtoken 1rlHSX3HqrqmOWZdeJ6bIv8rfuo_4cmS1QswRGyxcQD8NOukF

### Flags

| Flag | Description |
| --- | --- |
| `--config string` | save in this config file |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |

## ngrok config check

The `ngrok config check` command checks a configuration file for validity/correctness.

### Usage

    ngrok config check [flags]

### Flags

| Flag | Description |
| --- | --- |
| `--config string` | check this config file |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |

## ngrok config edit

The `ngrok config edit` command opens the configuration file in an editor defined by the `EDITOR` environment variable, defaulting to nano or Notepad depending on OS.

### Usage

    ngrok config edit [flags]

### Flags

| Flag | Description |
| --- | --- |
| `--config string` | open this config file to edit |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |

## ngrok config upgrade

The `ngrok config upgrade` command upgrades a configuration file to a specific version.

You can optionally pass a version to upgrade to. If the configuration file version is missing, the upgrade command will add it. It also applies all automatic transformations between versions.

By default this command applies the transformations and display the final file. Use `--dry-run` to preview changes before applying.

By default this command will not move any configuration files to their new default location. Use `--relocate` to move the config file to the default location.

### Usage

    ngrok config upgrade [version] [flags]

### Flags

| Flag | Description |
| --- | --- |
| `--config string` | save in this config file |
| `--dry-run` | preview the proposed changes |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |
| `--relocate` | relocates the config file to the default location |

## ngrok credits

The `ngrok credits` command displays the software credits and license information.

### Usage

    ngrok credits [flags]

### Flags

| Flag | Description |
| --- | --- |
| `-h`, `--help` | help for this command |

## ngrok diagnose

The `ngrok diagnose` command runs a series of tests to diagnose potential connectivity issues between the ngrok agent and the remote ngrok service.

### Usage

    ngrok diagnose [flags]

### Flags

| Flag | Description |
| --- | --- |
| `--config strings` | path to config files; they are merged if multiple |
| `-h`, `--help` | help for this command |
| `-6`, `--ipv6` | Enable testing of IPV6 addresses |
| `-w`, `--write-report string` | Write a JSON report |

## ngrok help

The `ngrok help` command provides help for any command in the application. Simply type `ngrok help [path to command]` for full details.

### Usage

    ngrok help [command] [flags]

### Flags

| Flag | Description |
| --- | --- |
| `-h`, `--help` | help for this command |

## ngrok http

The `ngrok http` command is used to start a tunnel listening for HTTP/HTTPS traffic with a specific hostname. The HTTP Host header on incoming public requests is inspected to determine which tunnel it matches.

### Usage

    ngrok http [address:port | port] [flags]

### Examples

    ngrok http 8080                             # forwards provided ngrok URL to port 80
    ngrok http example.com:9000                 # forward traffic to example.com:9000
    ngrok http --subdomain=bar 80               # request subdomain name: 'bar.ngrok.io'
    ngrok http --hostname=www.ex.com 1234       # request tunnel 'www.ex.com' (DNS CNAME)
    ngrok http --basic-auth='falken:joshua' 80  # enforce basic auth on tunnel endpoint
    ngrok http --host-header=ex.com 80          # rewrite the Host header to 'ex.com'
    ngrok http file:///var/log                  # serve local files in /var/log
    ngrok http https://localhost:8443           # forward to a local https server

### Flags

| Flag | Description |
| --- | --- |
| `--authtoken string` | ngrok authtoken |
| `--basic-auth strings` | enforce basic auth on tunnel endpoint, `user:password` |
| `--cidr-allow strings` | reject connections that do not match the given CIDRs |
| `--cidr-deny strings` | reject connections that match the given CIDRs |
| `--circuit-breaker float` | reject requests when 5XX responses exceed this ratio |
| `--compression` | gzip compress http responses from your web service |
| `--config strings` | path to config files; they are merged if multiple |
| `-h`, `--help` | help for this command |
| `--host-header string` | set Host header; if `rewrite` use local address hostname |
| `--hostname string` | host tunnel on custom hostname (requires DNS CNAME) |
| `--inspect` | enable/disable http introspection (default true) |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | logging level: `debug`, `info`, `warn`, `error`, `crit` (default `info`) |
| `--mutual-tls-cas string` | path to TLS certificate authority to verify client certs in mutual TLS. |
| `--oauth string` | enforce authentication OAuth2 provider on tunnel endpoint, e.g. `google` |
| `--oauth-allow-domain strings` | allow only OAuth2 users with these email domains |
| `--oauth-allow-email strings` | allow only OAuth2 users with these emails |
| `--oauth-scope strings` | request these OAuth2 scopes when users authenticate |
| `--proxy-proto string` | version of PROXY protocol to use with this tunnel, empty if not using. Example values are 1 or 2. |
| `--region string` | ngrok server region `us`, `eu`, `au`, `ap`, `sa`, `jp`, `in` (defaults to closest) |
| `--request-header-add strings` | header key:value to add to request |
| `--request-header-remove strings` | header field to remove from request if present |
| `--response-header-add strings` | header key:value to add to response |
| `--response-header-remove strings` | header field to remove from response if present |
| `--scheme strings` | which scheme to listen on (default `https`) |
| `--subdomain string` | host tunnel on a custom subdomain |
| `--verify-webhook string` | validate webhooks are signed by this provider, e.g. `slack` |
| `--verify-webhook-secret string` | secret used by provider to sign webhooks, if any |
| `--websocket-tcp-converter` | convert ingress websocket connections to TCP upstream |

## ngrok service

The `ngrok service` command allows you to run and control an ngrok service on the operating system. For more information about running ngrok as a service, check out the [ngrok service section in the secure tunnels documentation](/docs/secure-tunnels#installing-as-a-service).

This command manages installation and execution of ngrok as an operating system service on Windows, MacOS and Linux systems. The service command takes a single argument which must be `start`, `stop`, `restart`, `install`, or `uninstall`.

When you choose `install`, you must specify the config flag which will define where the installed ngrok service looks for its configuration file.

When the ngrok service runs, it has the same behavior as if it were invoked from the command line with the command: `ngrok start --all`.

### Usage

    ngrok service [flags]

### Examples

    ngrok service install --config=C:\ngrok.yml
    ngrok service start
    ngrok service stop

### Flags

| Flag | Description |
| --- | --- |
| `--config strings` | path to config files; they are merged if multiple |
| `-h`, `--help` | help for this command |

## ngrok start

The `ngrok start` command starts tunnels by name from the configuration file. You may specify any number of tunnel names. You may start all tunnels in the configuration file with the `--all` switch.

### Usage

    ngrok start [flags]

### Examples

    ngrok start dev        # start tunnel named 'dev' in the configuration file
    ngrok start web blog   # start tunnels named 'web' and 'blog'
    ngrok start --all      # start all tunnels defined in the config file

### Flags

| Flag | Description |
| --- | --- |
| `--all` | start all tunnels in the configuration file |
| `--authtoken string` | ngrok authtoken identifying a user |
| `--config strings` | path to config files; they are merged if multiple |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |
| `--none` | start running no tunnels |
| `--region string` | ngrok server region `us`, `eu`, `au`, `ap`, `sa`, `jp`, `in` (defaults to closest) |

## ngrok tcp

Use `ngrok tcp` to start a TCP tunnel which forwards all traffic on a public port to a local address. This is extremely useful for exposing services that run non-HTTP traffic (SSH, SIP, RDP, RTSP, GRPC, game servers, etc).

A TCP tunnel binds a public address on the remote ngrok server. Any services which require a stable public address should use the `--remote-addr` option. ngrok requires that you reserve a TCP tunnel address for your account before you can use it.

### Usage

    ngrok tcp [address:port | port] [flags]

### Examples

    # forward a port to your local ssh server
    ngrok tcp 22
    
    # expose an RDP server on a specific public address that you reserved
    ngrok tcp --remote-addr=1.tcp.ngrok.io:27210 3389

### Flags

| Flag | Description |
| --- | --- |
| `--authtoken string` | ngrok authtoken |
| `--cidr-allow strings` | reject connections that do not match the given CIDRs |
| `--cidr-deny strings` | reject connections that match the given CIDRs |
| `--config strings` | path to config files; they are merged if multiple |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |
| `--proxy-proto string` | version of proxy proto to use with this tunnel, empty if not using |
| `--region string` | ngrok server region `us`, `eu`, `au`, `ap`, `sa`, `jp`, `in` (default to closest) |
| `--remote-addr string` | bind remote address (requires you reserve a TCP Address) |

## ngrok tls

The `ngrok tls` command starts a TLS tunnel listening for traffic on port 443 with a specific hostname. The TLS Server Name Indication (SNI) extension field in the TLS connection is inspected to determine which tunnel it matches.

The ngrok server does not terminate TLS connections forwarded with this command. Any underlying protocol may be used. You may optionally specify a TLS key/cert pair which will be used to terminate the traffic at the ngrok agent before it is forwarded. If not specified, the traffic will be forwarded still encrypted.

Using this command is only recommended with the `--hostname` option. Other uses will work, but will always result in certificate mismatch warnings.

### Usage

    ngrok tls [address:port | port] [flags]

### Examples

    # forward TLS traffic for www.example.com to port 443 (requires CNAME)
    ngrok tls --hostname=www.example.com 443
    
    # forward TLS traffic on subdomain (mismatch certificate warning)
    ngrok tls 1234
    
    # terminate TLS traffic for t.co before forwarding
    ngrok tls --hostname=t.co --crt=/path/to/t.co.crt --key=/path/to/t.co.key 443

### Flags

| Flag | Description |
| --- | --- |
| `--authtoken string` | ngrok authtoken |
| `--cidr-allow strings` | reject connections that do not match the given CIDRs |
| `--cidr-deny strings` | reject connections that match the given CIDRs |
| `--config strings` | path to config files; they are merged if multiple |
| `--crt string` | path to a TLS certificate for TLS termination |
| `-h`, `--help` | help for this command |
| `--hostname string` | host tunnel on custom hostname (requires DNS CNAME) |
| `--key string` | path to a TLS key for TLS termination |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |
| `--mutual-tls-cas string` | path to TLS certificate authority to verify client certs in mutual TLS |
| `--proxy-proto string` | version of proxy proto to use with this tunnel, empty if not using |
| `--region string` | ngrok server region `us`, `eu`, `au`, `ap`, `sa`, `jp`, `in` (defaults to closest) |
| `--subdomain string` | host tunnel on a custom subdomain |
| `--terminate-at string` | terminate at ngrok "edge" or "agent". defaults to no termination or "edge" if `--crt` or `--key` are present |

## ngrok tunnel

The `ngrok tunnel` command is used to start labeled tunnels for use with [Tunnel Group backends](/docs/cloud-edge#tunnel-group-labels) and [ngrok Cloud Edges](/docs/cloud-edge).

Starts a tunnel with labels so that it can be part of a tunnel group. The tunnel group consists of all the tunnels matching all the labels of a tunnel group backend.

### Examples

    # tunnel-group traffic for app=foo may be forwarded to port 80
    ngrok tunnel --label app=foo 80
    
    # match tunnel-group with multiple labels
    ngrok tunnel --label app=foo --label dc=bar 80

### Usage

    ngrok tunnel [--label key:value] ... [address:port | port] [flags]

### Flags

| Flag | Description |
| --- | --- |
| `--authtoken string` | ngrok authtoken identifying a user |
| `--config strings` | path to config files; they are merged if multiple |
| `--crt string` | path to a TLS certificate for TLS termination |
| `-h`, `--help` | help for this command |
| `--inspect` | enable/disable http introspection (default true) |
| `--key string` | path to a TLS key for TLS termination |
| `--label strings` | labels to associate with the tunnel in key=value format |
| `--log string` | path to log file, `stdout`, `stderr` or `false` (default `false`) |
| `--log-format string` | log record format: `term`, `logfmt`, `json` (default `term`) |
| `--log-level string` | `debug`, `info`, `warn`, `error`, `crit` (default `info`) |
| `--proxy-proto string` | version of proxy proto to use with this tunnel, empty if not using |
| `--region string` | ngrok server region `us`, `eu`, `au`, `ap`, `sa`, `jp`, `in` (defaults to closest) |

## ngrok update

The `ngrok update` command updates ngrok to the latest version.

This command checks the ngrok web service for a newer versions of the ngrok agent. If a newer version is available, it will download it an replace the ngrok binary with the new version after cryptographically verifying the update is safe to apply.

In order to update successfully, the ngrok binary must be in a directory that is writable by your current user. If you placed ngrok in a system path, you may need to run this with root or Administrator privileges.

### Examples

    ngrok update                     - update ngrok to the latest stable version
    ngrok update --channel=beta      - update ngrok to the latest beta version

### Usage

    ngrok update [flags]

### Flags

| Flag | Description |
| --- | --- |
| `--channel string` | update channel (stable, unstable, beta) (default "stable") |
| `-h`, `--help` | help for this command |
| `--log string` | path to log file, 'stdout', 'stderr' or 'false' (default "false") |
| `--log-format string` | log record format: 'term', 'logfmt', 'json' (default "term") |
| `--log-level string` | logging level: 'debug', 'info', 'warn', 'error', 'crit' (default "info") |

## ngrok version

### Usage

    ngrok version [flags]

### Flags

| Flag | Description |
| --- | --- |
| `-h`, `--help` | help for this command |