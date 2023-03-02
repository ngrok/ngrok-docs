---
sidebar_position: 5
---

# IP Policies and Restrictions
--------------

Allowing or restricting access to a particular service by IP address is a great way to keep your service secure and protected from outside threats. ngrok includes a complete system for adding IP protection to all parts of the ngrok Platform including dashboard access, endpoint access, agent access or API access.

IP Restrictions can be applied to any part of the ngrok platform, and they are made up of one or more reusable IP Policies, each containing one or more IP Rules that define the actual IP addresses that are allowed or denied from accessing the service.

All IP protections can be managed through the [IP Restrictions section of the ngrok Dashboard](https://dashboard.ngrok.com/security/ip-restrictions) as well as programmatically through the ngrok API.

### IP Rules {#ip-policies-restrictions-rules}

Every IP policy consists of zero or more IP policy rules. Each rule specifies an IP address or IP address range in CIDR notation that can be allowed or denied access to the resource. Both IPv4 and IPv6 address notations are supported. An IP policy with no rules is valid and will match no IPs.
