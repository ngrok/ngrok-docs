---
sidebar_position: 1
---

# Tunnel Authtokens

---

Once you've signed up for an ngrok account, you need to configure ngrok with the authtoken that appears on your dashboard. This will grant you access to all the features of ngrok. ngrok has a simple `ngrok config add-authtoken` command to make installing the authtoken simple. Under the hood, all the command does is to add (or modify) the `authtoken` property in your [ngrok configuration file](/secure-tunnels/ngrok-agent/reference/config).

###### Install your authtoken

    ngrok config add-authtoken <YOUR_AUTHTOKEN>

## Authtoken ACL Enforcement

Authtoken Credential ACLs describe what an ngrok agent that connects with a given authtoken is allowed to do. For example, you may want to restrict each agent to only have permission to bind a specific set of tunnel endpoints. When you create an authtoken credential, specify a list of ACL behaviors are allowed for any agent connecting with that authtoken.

Generating authtoken credentials with ACLs is only available via the [create credential API](/docs/api/resources/credentials) at the moment.

## Per Agent Authtokens

Each account may have many Authtokens, and we recommend configuring a new Authtoken for each agent you configure. This is because this configuration allows the most flexibility if an Authtoken is compromised as well as allowing you to set ACLs per ngrok agent.

You can use the [ngrok Dashboard to create new Authtokens](https://dashboard.ngrok.com/tunnels/authtokens) or you can use the ngrok API. The ngrok API is useful if you want to build this into a provisioning script. See the `ngrok api credentials` command in the ngrok agent or the [ngrok API for creating new credentials](/docs/api/resources/credentials).

**In both the UI and API, the full Authtoken you generate will only be shown once, immediately after creation!**
