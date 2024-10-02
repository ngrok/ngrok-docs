---
title: RTMP
---

# Using ngrok with Real-Time Messaging Protocol (RTMP)

Using ngrok to share your RTMP server is simple using TCP endpoints.

```bash
ngrok tcp 1935
```

Once the ngrok agent starts, you can use the TCP endpoint in your configuration where you would normally see the IP address. For example:

```bash
rtmp://your-ngrok-tcp-address:ngrok-port/live/<some stream name>
```

::::note
Streaming data can eat up a lot of bandwidth quickly. If you are on a free plan, you may run into the [data transfer limits](/guides/other-guides/limits.md#data-transfer-out) and need to upgrade to a paid plan.
::::
