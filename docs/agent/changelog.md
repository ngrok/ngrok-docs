---
title: Changelog
---

# ngrok Agent Changelog

## v3

### ngrok Agent 3.16.1 - \[2024-10-03\]

- Added windows arm64 agent binary.

### ngrok Agent 3.16.0 - \[2024-09-09\]

- Releasing the features originally released by 3.15.0
  - Added `--url` agent CLI flag for creation of HTTP(S), TLS, and TCP protocol endpoints.
  - Deprecated `--domain`, `--scheme`, and `--remote-addr` agent CLI flags, which have been replaced by `--url`.
  - Added `--metadata` and `--description` agent CLI flags when using `--url`.
  - Added `endpoints:` as a new field used for [endpoint creation](/docs/agent/config/v3/#full-example).
  - A new `agent:` field has been added to the agent configuration format for V3.
    - v3 supports _both_ tunnels and endpoints. Tunnels are now considered deprecated when using config v3.
    - Some agent configuration fields have been renamed in v3.
    - v2 is still supported, but does not support the new `endpoints:` , or `agent:` fields.
  - Added support for [endpoint fields](/docs/api/resources/endpoints/#list-endpoints) in ngrok's `api`.
- Update `config` commands to support new configuration version 3, including `upgrade`, `add-authtoken`, and `add-api-key`

### ngrok Agent 3.15.1 - \[2024-08-29\]

- Restores the functionality and compatibility for version 3.14.0 due to bugs in the previous release. An updated version with the changes from 3.15.0 will be released early next week.

### \[UNSTABLE\] ngrok Agent 3.15.0 - \[2024-08-29\]

- Added `--url` agent CLI flag for creation of HTTP(S), TLS, and TCP protocol endpoints.
- Deprecated `--domain`, `--scheme`, and `--remote-addr` agent CLI flags, which have been replaced by `--url`.
- Added `--metadata` and `--description` agent CLI flags when using `--url`.
- Added `endpoints:` as a new field used for [endpoint creation](/docs/agent/config/v3/#full-example).
- A new `agent:` field has been added to the agent configuration format for V3.
  - v3 supports _both_ tunnels and endpoints. Tunnels are now considered deprecated when using config v3.
  - Some agent configuration fields have been renamed in v3.
  - v2 is still supported, but does not support the new `endpoints:` , or `agent:` fields.
- Added support for [endpoint fields](/docs/api/resources/endpoints/#list-endpoints) in ngrok's `api`.

### ngrok Agent 3.14.0 - \[2024-08-01\]

- Added support for `traffic_policy` field in agent config for Traffic Policy configuration.
- Deprecated `policy`
- Added `EndpointTrafficPolicy` module to Edge API.

### ngrok Agent 3.13.0 - \[2024-07-15\]

- In some cases, adds additional headers on error responses to ngrok that can be used to customize the content.

### ngrok Agent 3.12.1 - \[2024-07-11\]

- Fixed a bug in `ngrok diagnose` that would cause a panic if a server IP and the agent had TLS connectivity issues.
- Added `--traffic-policy-file` flag that accepts Traffic Policy configuration for HTTP, TCP, or TLS traffic.
- Deprecated `--policy-file` flag

### ngrok Agent 3.12.0 - \[2024-06-27\]

- Errors now have links to ngrok error page.

### ngrok Agent 3.11.0 - \[2024-06-13\]

- `ngrok http` now has timestamps for incoming requests.

### ngrok Agent 3.10.1 - \[2024-06-06\]

- Requests to TLS endpoints using `proto: tls` and `terminate_at: agent` succeed after the agent session goes through a reconnection.

### ngrok Agent 3.10.0 - \[2024-05-23\]

- **ACTION MAY BE REQUIRED**: The domain used for Certificate Revocation List (CRL) checks is now `crl.ngrok-agent.com` to align it with the domain used for session connections. This may require changes to your firewall or proxy settings to allow this outbound connection on port 80, or setting `crl_noverify: true` in the agent config file.
- Added CLI API support for [Bot Users](/docs/iam/bot-users/).

### ngrok Agent 3.9.0 - \[2024-04-24\]

- Added a `/api/status` endpoint to the local agent API that returns the agent's current status
- The agent will check the Certificate Revocation List (CRL) on Session initiation. If a custom agent ingress is being used that has an invalid CRL in the chain, the `crl_noverify: true` option can be used to override this check, if desired
- Certificate Revocation List (CRL) checking for certain Let's Encrypt certificate chains has been fixed

### ngrok Agent 3.8.0 - \[2024-03-14\]

- Added `json` support to Traffic Policy configuration
- Moved to ngrok-go v1.9.1

### ngrok Agent 3.7.0 - \[2024-03-07\]

- Fixed an issue where `ngrok diagnose --region all` would return an error for `eu-lon-1`
- Fixed a typo in default usage output
- Moved to `ngrok-go` v1.9.0

### ngrok Agent 3.6.0 - \[2024-02-06\]

- Added `--policy-file` flag that accepts Traffic Policy configuration for HTTP, TCP, or TLS traffic.
- Added support for `policy` field in agent config for Traffic Policy configuration.
- Added concise help text when `ngrok` is run without any args
- Removed support for Windows 7 and Windows 8 (support for Windows 7 and 8 was dropped in [Go 1.21](https://tip.golang.org/doc/go1.21#windows))

### ngrok Agent 3.5.0 - \[2023-12-01\]

- The `--region` flag has been deprecated, ngrok automatically chooses the region with lowest latency
- The upstream tls configs have been renamed, with backwards compatibility:
  - `--verify-upstream-tls` is now `--upstream-tls-verify`
  - `--upstream-ca-path` is now `--upstream-tls-verify-cas`
- An option for `--app-protocol` of the upstream, which can be set to `http2`, has been added
- The `StopTunnel` message is now handled by the agent

### ngrok Agent 3.4.0 - \[2023-11-03\]

- Added support for upstream TLS verification when forwarding to `https://` or `tls://` addresses.
  - `--verify-upstream-tls` enables TLS verification of server TLS certificates
  - `--upstream-ca-path` sets the certificate authority used to verify upstream server certificates

### ngrok Agent 3.3.5 - \[2023-09-26\]

- Added support for the [User Agent Filter module](/http/user-agent-filter/) that allows or denies traffic to HTTPS endpoints based on incoming user agents.
- Added `--ua-filter-allow` and `--ua-filter-deny` flags that accept a list of regular expression strings

### ngrok Agent 3.3.4 - \[2023-08-18\]

- Fixed a bug where the agent running as a service would log to syslog even when another log destination was specified
- Fixed a bug where the agent could incorrectly ignore `dns_resolver_ips`

### ngrok Agent 3.3.3 - \[2023-08-11\]

- Added new `us-cal-1` region which will reduce latency for users in the western half of North America

### ngrok Agent 3.3.2 - \[2023-07-27\]

- Added support for the [Datadog event destination](/integrations/datadog/event-destination/) in `ngrok api`

### ngrok Agent 3.3.1 - \[2023-06-05\]

- Fixed a bug where colons in request header and response header values were not allowed (e.g. `--request-header-add "Access-Control-Allow-Origin:https://developer.mozilla.org"`)
- Fixed a bug introduced in v3.3.0 where `--terminate-at edge` was not using the correct TLS certificate

### ngrok Agent 3.3.0 - \[2023-05-09\]

- Added new default tunnel ingress names: the agent now connects to [`connect.ngrok-agent.com`](/guides/other-guides/security-dev-productivity/security-dev-productivity.md#6-track-and-block-unauthorized-tunnel-activity) when starting a session
- Improved `ngrok diagnose` output to check that the DNS entry for `localhost` resolves
- Added the command `ngrok config add-server-addr` for configuring custom agent ingresses
- Re-wrote the tunnel and session backend to use the `ngrok-go` library

### ngrok Agent 3.2.2 - \[2023-03-27\]

- Fixed a bug introduced in v3.2.1 with tab complete for command line flags

### ngrok Agent 3.2.1 - \[2023-03-13\]

- Deprecated the `--subdomain` and `--hostname` flags.
- Updated all `--subdomain` and `--hostname` examples to use `--domain`.
- Fixed a bug where the agent did not resolve local DNS correctly on macOS arm64
- Allow specifying ngrok `--region=auto` to pick the closest region (defaults to auto)
- Support for the `NGROK_API_KEY` environment variable when using the ngrok api subcommand
- `--log-format=json` now results in more output being formatted as json

### ngrok Agent 3.1.1 - \[2023-01-13\]

- Expanded diagnosis coverage when running `ngrok diagnose` to include testing against all regions and additional debug information of the underlying system.
- Updated `--config` option to be accepted in any position with cli command.
- Fixed `ngrok config add-authtoken <AUTHTOKEN>` to also save the default version if it does not exist in the config file.
- Fixed rare race condition where agent would crash unexpectedly.
- Added DNS rebinding protection which includes [`web_allow_hosts`](/agent/config#web_allow_hosts) configuration.

### ngrok Agent 3.1.0 - \[2022-09-14\]

- Started signing Windows executables with a code signing certificate. Includes polish for Windows executable properties like description and icon.
- Updated the root CA recognized by new agent versions. Improves incident recovery and mitigation options.

### ngrok Agent 3.0.7 - \[2022-08-17\]

- Added `--region` flag to the `ngrok diagnose` command. Including support for `--region all` to diagnose all regions.
- Ignore the `--config` flag when passed to a command that does not support it.

### ngrok Agent 3.0.6 - \[2022-06-30\]

- Fixed issues with replay not displaying requests in the ngrok Agent web UI, console UI, and API.
- Fixed null pointer issues with `ngrok diagnose` command.

### ngrok Agent 3.0.5 - \[2022-06-22\]

- Fixed a formatting issue in the inspector web UI for the header navigation.
- Updated the start tunnel API to allow starting labeled tunnels using a list of strings as labels.

### ngrok Agent 3.0.4 - \[2022-05-27\]

- Added the ability to provide messages to users via the agent console.
- `ngrok config edit` will now allow you to edit an invalid configuration file.
- Updated the display of the latency number in the console UI to be more human readable.

### ngrok Agent 3.0.3 - \[2022-04-26\]

- Fixed a bug on Windows where running the agent from explorer did not open a cmd prompt.

### ngrok Agent 3.0.2 - \[2022-04-11\]

- Fixed a bug that was not allowing users to start tunnels via the API.

### ngrok Agent 3.0.1 - \[2022-04-04\]

- Added `ngrok config edit` command to open the config file in your default editor.
- Removed invalid `--proxy-proto` flag from the `ngrok start` command.
- Added a migration to the `ngrok config upgrade` command to convert basic auth config parameters.
- The ngrok agent API will now error if invalid values are passed to it. Previously it ignored them.

### ngrok Agent 3.0.0 - \[2022-03-28\]

For more information about upgrading from previous versions of the agent to v3.0, see our [upgrade guide](/guides/other-guides/upgrade-v2-v3.mdx).

- Fixed an issue where an agent would not reconnect after removing a reserved domain from your account.
- Added `ngrok completion` to enable autocomplete for the cli.
- Added `proxy_proto` option for enabling and specifying the [HAProxy's PROXY protocol version](https://www.haproxy.com/blog/haproxy/proxy-protocol/).
- Added the ability to set the `connect_interface` for the agent.
- Renamed `bind_tls` to `schemes`.
- The agent UI now display ping time.
- Added the `ngrok diagnose` command to the agent for troubleshooting connection issues.
- Added the `ngrok config` command for managing the configuration file.
- Added the ability to call the ngrok API from the agent using `ngrok api`.
- Added the `ngrok service` command to manage the ngrok agent as a service.
- All ngrok agent configuration files must now include a version number to indicate the format.
- Added the ability to start Labeled Tunnels to the agent that work with the new Tunnel Group backend.
- Renamed the "Clear" button to "Clear Requests" in the inspect UI to make it clear as to what it's doing.
- Fixed an issue where running `ngrok authtoken` would make changes to your tunnel definitions.
- The inspect UI will now pretty-print content types ending in +json.
- Fixed an issue where the inspect UI was adding unwanted HTML tags to JSON bodies when replayed.
- The ngrok agent now logs to stdout by default when `console_ui: false`.
- Command line arguments must use single hyphen for single letter options, and double hyphen for longer names.
- The ngrok agent now fails when there are keys in the config file it doesn't understand. Previously it ignored unknown options.
- Using the `--host-header rewrite` option puts the original host header value into the `X-Forwarded-Host` header field instead of the `X-Original-Host` header in an attempt to be more standard.
- Combined `http_proxy` and `socks5_proxy` configuration options into a single option (

## v2

### ngrok Agent 2.3.X

If asked to forward to port 443, ngrok will now automatically forward HTTPS traffic instead of HTTP. This change would only affect you if you previously ran a server accepting unencrypted HTTP on port 443. To workaround this, you may specify an explicit http URL if you need the old behavior: `ngrok http http://localhost:443`.

If run under sudo, the ngrok agent previously consulted the sudo-ing user's home directory file when looking for its default configuration file. It now consults the home directory of the assumed user. To workaround this, you may specify an explicit configuration file location with the `-config` option.

### ngrok Agent 2.2.X

The ngrok agent API no longer accepts `application/x-www-form-urlencoded` request bodies. In practice, this only affects the `/api/requests/http/:id` endpoint because posting to the `/api/tunnels` endpoint with this type of request body previously caused ngrok to crash.

This change was made to help protect against maliciously crafted web pages that could cause a user to inadvertently interact with their local ngrok API.

### ngrok Agent 2.1.X

Behavior changes for `http` and `tls` tunnels defined in the configuration file or started via the API that do not have a `subdomain` or `hostname` property.

```yaml
tunnels:
  webapp:
    proto: http
    addr: 80
```

Given this example tunnel configuration, behavior will change in the following ways.

##### Old Behavior

Starts a tunnel using the name of the tunnel as the subdomain resulting in the URL `http://webapp.ngrok.io`

##### New Behavior

Starts a tunnel with a random subdomain, for example a URL like `http://d95211d2.ngrok.io`

##### How to keep the old behavior

Add a `domain` property with the same name as the tunnel:

```yaml
tunnels:
  webapp:
    proto: http
    addr: 80
    domain: webapp.ngrok.io
```
