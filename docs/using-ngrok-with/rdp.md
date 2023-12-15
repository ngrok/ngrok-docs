---
title: RDP
---

# Using ngrok with RDP

ngrok's TCP tunnels can be used for RDP traffic but we recommend they only be used in conjunction with restricting access to a specific set of IP addresses using IP restrictions. Start a TCP tunnel to port 3389 and add the `--cidr-allow` flag with the IP addresses you'll be connecting from.

```sh
ngrok tcp 3389 --cidr-allow 0.0.0.0/32
```

To learn more about the RDP protocol and security best practices, see the [Understanding the Remote Desktop Protocol (RDP) documentation](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/understanding-remote-desktop-protocol) from Microsoft.
