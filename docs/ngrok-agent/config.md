authtoken: 4nq9771bPxe8ctg7LKr_2ClH7Y15Zqe4bWLWF9p
api_key: 24yRd5U3DestCQapJrrVHLOqiAC_7RviwRqpd3wc9dKLujQZN
connect_timeout: 30s
console_ui: true
console_ui_color: transparent
dns_resolver_ips: 
  - 1.1.1.1
  - 8.8.8.8
heartbeat_interval: 1m
heartbeat_tolerance: 5s
inspect_db_size: 104857600 # 100mb
inspect_db_size: 50000000
log_level: info
log_format: json
log: /var/log/ngrok.log
metadata: '{"serial": "00012xa-33rUtz9", "comment": "For customer alan@example.com"}'
proxy_url: socks5://localhost:9150
region: us
remote_management: false
root_cas: trusted
update_channel: stable
update_check: false
version: 2
web_addr: localhost:4040
tunnels:
  website:
    addr: 8888
    basic_auth: 
      - "bob:bobpassword"
    schemes: 
      - https
    host_header: "myapp.ngrok.dev"
    inspect: false
    proto: http
    domain: myapp.ngrok.dev

  e2etls:
    addr: 9000
    proto: tls
    domain: myapp.example.com
    crt: example.crt
    key: example.key
    
  iprestriction:
    ip_restriction:
      allow_cidrs:
        - 1.1.1.1/32
    addr: 8000
    proto: tcp
    
  ssh-access:
    addr: 22
    proto: tcp
    remote_addr: 1.tcp.ngrok.io:12345
  
  my-cool-website:
    labels:
      - region=us-east
      - team=infra
    addr: 8000
    oauth:
      provider: google
    inspect: false
