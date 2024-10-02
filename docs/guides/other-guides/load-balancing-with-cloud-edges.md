---
description: How to use load balancer with ngrok cloud edge
---

# Load Balancing with ngrok Cloud Edges

This guide will walk you through the process of configuring load balancing on your HTTPS edge. For completing this guide, you will need an ngrok account, and upstream service deployed across multiple machines that you would like to load balance requests to, and the latest ngrok agent installed on each of those machines.

### Setting up an HTTPS Edge

Once you have your [ngrok account](https://dashboard.ngrok.com), open up the ngrok dashboard and navigate to the [Cloud Edges page](https://dashboard.ngrok.com/cloud-edge/edges/). Click the "+ New Edge" button and select an HTTPS Edge. Doing this will create everything you need to start load balancing traffic to your upstream service. You now have a new HTTPS edge for serving web traffic, a public URL for accessing that traffic, and a default failover backend.

[Backends](/network-edge/edges/#backends) tell an edge how to handle traffic that is sent to its endpoints. A failover backend allows you to specify an ordered list of other backends to try. The default failover backend for this edge includes a tunnel group backend and a static 404 page to failover to. A tunnel group backend is what will provide the load balancing of requests across multiple ngrok agents.

Clicking the endpoint that was created when making this edge should open a new page and display a 404 page. This makes sense because we haven't started any tunnels for the tunnel group backend to serve traffic to.

![](/img/docs/default-edge-404-page.png)

### Starting your ngrok Agent Tunnels

Now let's start a tunnel to send traffic to your upstream service. You can click the "Start a Tunnel" button on this error page or look in the "Status" area of the HTTPS edge. Clicking this button will open a drawer with instructions on how to install and configure your agent.

The command for starting the tunnel in the ngrok agent should look something like this:

```bash
ngrok tunnel 80 --region us --label edge=edghts_27RM7TKmP9FbDTFjT1uJuIyBgRk
```

This assumes your upstream service is running on port 80 and in the US region. If your upstream service is on a different port or running in a different region, just update those values in the `ngrok tunnel` command.

Tunnel group backends work by looking for ngrok agents that are serving tunnels with a specific [set of labels](/network-edge/edges/#tunnel-group). By default, the label for this tunnel group is the ID of the HTTPS edge that was created, but you can use the [API to customize those labels](/api/resources/tunnel-group-backends#update-tunnel-group-backend) to something that makes sense for your service. For example, you might use labels that help identify the region and service you are attempting to load balance.

On each of the machines that are running your upstream service, you should start an ngrok agent with the specific label for this HTTPS edge. You can start as many as you want. Once started, you should be able to see the agents in the HTTPS edge page in the dashboard (you might have to click refresh). Traffic will now be routed round robin to each of the agents with a tunnel that matches the labels of the tunnel group backend.

![](/img/docs/https-edge-three-tunnels.png)

### Next Steps

That's all there is to it. You now have multiple ngrok agents load balancing traffic to your upstream service. Now that you have an HTTPS edge configured, check out these next steps:

- [HTTPS Edges](/http/#edges)
- [HTTPS Edge Routes](/http/#routes)
- [HTTPS Edge Modules](/http/#modules)
- [Securing your ngrok Tunnels](/guides/other-guides/securing-your-tunnels)
