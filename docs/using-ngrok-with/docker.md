---
title: Docker
---

# Using ngrok with Docker

---

ngrok provides [pre-built docker images](https://hub.docker.com/r/ngrok/ngrok) for the ngrok Agent with instructions for getting started. An example command for starting a tunnel to port 80 on the host machine looks like this:

```bash
docker run --net=host -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http 80
```

Note: the Docker version of ngrok follows the same convention as the agent, for example:

```bash
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http 80                            # secure public URL for port 80 web server
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http --domain=baz.ngrok.dev 8080   # port 8080 available at baz.ngrok.dev
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http foo.dev:80                    # tunnel to host:port instead of localhost
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http https://localhost:5001        # expose a local https server running on port 5001
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest tcp 22                             # tunnel arbitrary TCP traffic to port 22
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest tls --domain=foo.com 443           # TLS traffic for foo.com to port 443
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest start foo bar baz                  # start tunnels from the configuration file
```

Note: for MacOS or Windows users, the `--net=host` option will not work. You will need to use the special url `host.docker.internal` as described in the [Docker networking documentation](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds).

```bash
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http host.docker.internal:80
```

# Using ngrok with Docker Compose

---

If you're more comfortable using Docker Compose, you can use the following as a starting point. Copy the contents below into a new file named `docker-compose.yaml`, then run `docker compose up` in that directory. This Docker compose file assumes that you have an `ngrok.yml` file in the same directory with at least one tunnel defined. Check out the [ngrok agent config file documentation](/docs/agent/config/) for help creating a configuration file with a tunnel definition. If you want to use the same configuration file as your local ngrok agent, you can view the location of the default config file using `ngrok config check`.

```bash
services:
    ngrok:
        image: ngrok/ngrok:latest
        restart: unless-stopped
        command:
          - "start"
          - "--all"
          - "--config"
          - "/etc/ngrok.yml"
        volumes:
          - ./ngrok.yml:/etc/ngrok.yml
        ports:
          - 4040:4040
```
