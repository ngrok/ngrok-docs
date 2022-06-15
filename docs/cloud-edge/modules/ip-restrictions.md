---
sidebar_position: 5
description: Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.
---


# IP Restrictions
----------------

IP Restrictions allow you to attach one or more IP policies to the route. If multiple IP policies are attached, a connection will be allowed only if its source IP matches at least one policy with an 'allow' action and does not match any policy with a 'deny' action.
