---
title: Docker
---

# Using ngrok with Docker
------------

ngrok provides [pre-built docker images](https://hub.docker.com/r/ngrok/ngrok) for the ngrok Agent with instructions for getting started. An example command for starting a tunnel to port 80 on the host machine looks like this:
```
docker run --net=host -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http 80
```

Note: for MacOS or Windows users, the `--net=host` option will not work. You will need to use the special url `host.docker.internal` as described in the [Docker networking documentation](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds).
```
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http host.docker.internal:80
```

