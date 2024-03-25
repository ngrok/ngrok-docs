---
title: FAQ
---

# FAQ

## Does ngrok have an official Status page? {#status-page}

Yes. The official ngrok status page is [status.ngrok.com](https://status.ngrok.com).

## Why is my antivirus software reporting the ngrok agent as a virus / malware / or potentially unwanted application (PAU)?

ngrok is beloved for our ease of use and powerful capability. Unfortunately, those same
attributes also make us an attractive target for bad actors trying to phish credentials or create back doors into private networks.

We proactively monitor and ban any accounts we identify that are involved with these attacks, and also work with 3rd parties that report malware and abuse via abuse@ngrok.com and our [abuse APIs](/docs/api/resources/abuse-reports/).

Because ngrok is sometimes used by bad actors for attacks, we are occasionally flagged by some antivirus companies as malware or a potentially unwanted application (PAU).
We actively monitor and reach out to these companies and attempt to obtain the correct classification in their system and be added to the allow lists.

If you receive a notice from your antivirus software when installing ngrok software, be sure to verify the following:

- Our official binaries can be downloaded from our [ngrok Downloads](https://ngrok.com/download) page, and the binaries themselves are hosted at `bin.equinox.io`. If you installed ngrok from another source, you should be careful.
- There are no open source versions of our ngrok Agent and the source code is not available. If you have downloaded anything claiming to be ngrok agent source code or built our agent from source, it is most likely malicious.
- All of our binaries are signed using ngrok certificates. You can verify the integrity of the application by checking that the binary is signed by an `ngrok LLC` authority. See [these instructions from Microsoft](https://support.microsoft.com/en-us/office/view-digital-signature-and-certificate-details-76ba00cb-1e58-42aa-8717-0caee76bb3cf) for verifying the digital signatures in Windows binaries.

Here is an example for macOS using our 3.8.0 binary

```bash
❯ codesign -d -vvv ~/Downloads/ngrok
Executable=/Users/username/Downloads/binaries/ngrok
Identifier=darwin_amd64
Format=Mach-O thin (x86_64)
CodeDirectory v=20500 size=209752 flags=0x10000(runtime) hashes=6549+2 location=embedded
Hash type=sha256 size=32
CandidateCDHash sha256=9babe84803ac6c05874966cf0934c116b00b6b97
CandidateCDHashFull sha256=9babe84803ac6c05874966cf0934c116b00b6b97b1daa6ceb6362b8f2e9c63a2
Hash choices=sha256
CMSDigest=9babe84803ac6c05874966cf0934c116b00b6b97b1daa6ceb6362b8f2e9c63a2
CMSDigestType=2
CDHash=9babe84803ac6c05874966cf0934c116b00b6b97
Signature size=8963
Authority=Developer ID Application: ngrok LLC (TEX8MHRDQ9)
Authority=Developer ID Certification Authority
Authority=Apple Root CA
Timestamp=Mar 14, 2024 at 3:18:31 PM
Info.plist=not bound
TeamIdentifier=TEX8MHRDQ9
Runtime Version=11.0.0
Sealed Resources=none
Internal requirements count=1 size=172
```

Most antivirus tools have an option to report false positive classifications for their software. You can usually find that link in the software itself or on their support site. [VirusTotal has a large list](https://docs.virustotal.com/docs/false-positive-contacts) of contacts for reporting false positives and we would love you to report ngrok if you can. It helps ensure we have the correct classification.

## Can I choose a different port to receive traffic on my ngrok domains? {#non-standard-ports}

No. ngrok accepts traffic on port 80 for HTTP endpoints, 443 for HTTPS endpoints
and port 443 as well for TLS endpoints. This behavior is not configurable.

TCP endpoints use the port of the TCP address that was assigned when you
acquires the TCP address. [This port is assigned and not
configurable](/tcp/#customization).

## Will the ngrok agent work if my network changes? {#network-changes}

Yes. The ngrok agent is robust to all network changes. If you switch wifi
networks or your modem restarts and you have a dynamic IP that changes, the
ngrok agent will automatically detect this condition and re-establish
connectivity with the ngrok cloud service. You don't need to take any manual
action to restart or reconfigure the agent.

## What information is stored about my use of ngrok? {#data-usage}

Please see our [Terms of Service](https://ngrok.com/tos) and [Data Processing
Agreement](https://ngrok.com/dpa) for more information.

## Can I forward to upstream services on different machines? {#non-local}

Yes, specify the full network address. For example:

```bash
ngrok http 192.168.1.1:8080
```

```bash
ngrok tcp my-db.my-network:3306
```

## Does ngrok support CORS? {#cors}

Yes, applications exposed via ngrok's HTTP endpoints will work with CORS.

Your application must serve the appropriate CORS headers, or you may use
ngrok's [response headers module](/http/response-headers/) to add the
appropriate CORS headers. Setting the correct CORS headers is non-trivial, but
for very simple examples you may try:

```
ngrok http 80 --response-header-add "Access-Control-Allow-Origin: *"
```

If you use any of ngrok's authentication modules, CORS preflight options
requests are blocked by default. You may override this behavior for
[OAuth](/http/oauth), [OpenID Connect](/http/openid-connect), and
[SAML](/http/saml) modules by setting the "options passthrough" parameter to
true.

Basic Auth (`--basic-auth`) does not yet support configuring options
passthrough.

## What's the status of ngrok v1? {#v1}

The original open source ngrok agent 1.x is [available on
GitHub](https://github.com/inconshreveable/ngrok) but is no longer developed,
supported or maintained. The latest ngrok agent is available on our [ngrok
downloads page](https://ngrok.com/download).

## How do I pronounce ngrok? {#pronunciation}

_en-grok_

## How long has ngrok been around? {#first-commit}

The first prototype for ngrok was committed on [March 20th,
2013](https://github.com/inconshreveable/ngrok/commit/8f4795ecac7f92c6b5a8c8970c65f26e5315fe4e).

## Why does port scanning my ngrok domain show other open ports {#open-ports-on-domain}

ngrok uses a shared set of servers to service both HTTP(s)/TLS and TCP traffic.
All HTTP(s)/TLS traffic is serviced on ports 80 and 443. For TCP traffic each
customer is allocated one or more port(s) for their traffic. This means if you
port scan a domain or ip address on the ngrok network you will potentially see
a number of open ports. Those ports are configured to only route traffic to the
customers who have allocated them.

For HTTPS and TLS traffic ngrok uses [TLS SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) to indicate which domain is being requested. This enables
traffic to be routed to the correct customer. For TCP traffic ngrok uses the
IP and port to indicate which customer to route traffic to.

As with all publicly accessible IPs and ports on the internet anyone can send
traffic to those endpoints, but ngrok provides a [number of mechanisms](https://ngrok.com/docs/guides/security-dev-productivity/) to control
what traffic actually gets routed to you ngrok agent or sdk.
