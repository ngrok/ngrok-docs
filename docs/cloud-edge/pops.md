---
sidebar_position: 7
---

# Global Infrastructure

---

ngrok runs globally distributed dataplanes around the world to enable fast, low latency traffic to your applications. As part of our always-on Global Server Load Balancer (GSLB), we route both end user traffic (traffic connecting to ngrok endpoints) and agent traffic automatically to the nearest Point of Presence (PoP) by latency, without requiring any additional configuration.

### Locations (PoPs) {#locs}

ngrok runs dataplanes in data centers around the world. The location of the data center within a given region may change without notice (e.g. the European servers may move from Frankfurt to London).

| Region Code | Location                  |
| ----------- | ------------------------- |
| ap          | Asia/Pacific (Singapore)  |
| au          | Australia (Sydney)        |
| eu          | Europe (Frankfurt)        |
| in          | India (Mumbai)            |
| jp          | Japan (Tokyo)             |
| sa          | South America (São Paulo) |
| us          | United States (Ohio)      |
| us-cal-1    | United States (California)|

### Usage {#usage}

Most users should _NOT_ set a region when configuring their agent. The ngrok agent will find the region with the lowest latency, which is usually (but not always) the one geographically closest to your machine. Note that if your agent reconnects to the ngrok network and a region is not set, you may connect to a different region than before. All data is replicated globally so this will not impact access to your upstream service.

To explicitly choose the region, add the `--region` flag or set the `region` property in your configuration file. For example, to start a tunnel in the European region:

    ngrok http --region eu 8080

All domains are globally routeable to agents connected into any region.

TCP addresses are allocated for a specific region (the US region by default). When you reserve a TCP address, you must select a target region. You may not bind a TCP address reserved in another region other than the one it was allocated for. Attempting to do so will yield an error and prevent your tunnel session from initializing.

### Limitations {#limits}

An ngrok agent may only be connected a single region, meaning you cannot host tunnels in multiple regions simultaneously with the same agent. You can run multiple ngrok agents if you need to do this.

To geo-balance DNS in multiple regions you can use labeled tunnels with ngrok Cloud Edges or use region-specific subdomains or TLDs.
