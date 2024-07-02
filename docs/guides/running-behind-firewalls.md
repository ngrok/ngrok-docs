---
title: Corporate Firewall
---

# Running ngrok Behind a Corporate Firewall

When you need to deploy ngrok behind a corporate firewall, there may be additional steps that you will need to take to make sure ngrok is working properly.

As background, this is usually not an issue. Firewalls usually allow outbound connections, which is what an ngrok Agent makes in order to establish a session with the ngrok service and subsequently your tunnel.

However, certain corporate firewalls have more restrictions around outbound connections. For example, we've seen that ngrok may be blocked on Fortinet firewalls.

If you're having trouble using the ngrok agent to start a tunnel, the first step is to run `ngrok diagnose` which will produce a report that will help you identify connection issues.

```sh
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

Successfully established ngrok connection! (region: 'us', latency: 54.895145ms)
```

To resolve these issues, you have a couple options:

- Work with the network team in charge of the corporate firewall to provide exceptions that allow ngrok to make the necessary outbound connections.
- Set up a custom ingress domain.

When working with the network team, you'll want to set up the following exceptions and allow:

- Tunnel ingress domains (our default is connect.ngrok-agent.com, but there is one for each region), so that the ngrok agent can connect with our servers
- Our update URL (the default is update.equinox.io), so that the ngrok agent can quickly update itself

Setting up a custom ingress domain can be useful because it ensures that no one can bring their own ngrok account. In this case, the network admins could continue to block traffic to our normal ingress domains and only allow the custom branded ingress domains. For this, you'll need to:

- Set up a [custom ingress domain in your ngrok Dashboard](https://dashboard.ngrok.com/tunnels/ingress)
- Edit your ngrok agent configuration file with a [`server_addr`](/agent/config/#server_addr) parameter, set to the custom ingress domain of your choosing

### Certificate Revocation List

One of the steps in agent connection is [checking the certificate revocation list](/agent/#tls-verification). This requires an outbound connection on port 80 to the CRL URL (`crl.ngrok.com` for agent versions 3.9.0 and before, `crl.ngrok-agent.com` for agent version 3.10.0 and after).If you are unable to connect to this URL, it is possible to skip the CRL check by setting `crl_noverify: true` in your configuration file. However, disabling the CRL check does expose you to the possibility of using a certificate that has been revoked which could mean that a third party could intercept and view your traffic.
