---
title: Using Labels within ngrok
description: How to best use labels for connecting agents to tunnel group backends
tags:
    - guides
    - tunnel_group
    - backends
    - labels
---

Tunnel group backends are used in conjunction with ngrok Cloud Edges for defining which ngrok tunnels that application requests will be forwarded to. Tunnel groups use labels (key-value pairs) to specify which tunnels are members of the tunnel group backend and will be active for the Cloud Edge.

This guide will discuss the usage of labels and provide considerations for deterministically defining the tunnel group membership as your Cloud Edge deployment grows and some best practices to consider.

Reference the [following article](https://ngrok.com/docs/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges/) for an example on configuring edges and backends.

## Label Usage

Tunnel group backends require at a minimum one configured label to specify tunnels which will be candidates for membership.  Any ngrok tunnel that matches all of the assigned tunnel group's labels will become a member and begin receiving application traffic for the configured edge.  Using labels allows for new tunnels to easily be added to a tunnel group simply by starting the ngrok agent; very quickly providing additional scale and availability for your edge application.


## Tunnel Group Label Match Criteria

For a tunnel to be eligible for tunnel group membership, the following criteria must be met.

* **Tunnel labels must match ALL labels for the tunnel group**

* **Label key:values are case sensitive**

* **Label order does not matter**

* **Tunnels can be members of multiple tunnel group backends**

In the example below, the configured tunnel group has a single label defined: `application:web`.

```json
{
    "id": "bkdtg_2NPLTXte7nrrtaUO1Pyp6pvFn72",
    "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_2NPLTXte7nrrtaUO1Pyp6pvFn72",
    "created_at": "2023-03-23T08:39:38Z",
    "description": "tunnel group label demo",
    "labels": {
        "application": "web"
    },
    "tunnels": []
}
```

To add a tunnel to this backend, a tunnel must be started with labels matching all of the tunnel group labels.

```bash
ngrok tunnel --label location=dc1 --label application=web 80
```

In this example the tunnel was started with 2 labels: `location:dc1` and `application:web`.  <strong>It is important to note</strong> that even though the tunnel was started with 2 labels, one that the tunnel group does not have defined it does ultimately match on all of the configured tunnel group labels `application:web`.  Therefore, this tunnel would come up as a member of this specific tunnel group.

## Label Usage Considerations
When assigning labels to tunnel group backends it is important to take time and consider making the label combinations unique.  Using the previous example, the tunnel was started using two labels: `location:dc1 application:web`.  Since the criteria for a tunnel is to match all labels for a tunnel group, without proper planning the tunnel may unexpectedly connect to some unintended tunnel groups.

The previous tunnel would match on and become a member for all tunnel groups with any of these label combinations:

`application:web location:dc1`

`application:web`

`location:dc1`



It is recommended to configured multiple labels on a tunnel group in order to keep the label combinations unique for a specific application.  Having more complex label combinations can prevent tunnels for other applications from unexepctedly connecting to any incorrect tunnel groups.  





## Conclusion
Labels provide a very flexible method for dynamically assigning tunnels to tunnel group backends.  Understanding the match criteria is important and allows for long term planning to provide for a determinsitic deployment experience.