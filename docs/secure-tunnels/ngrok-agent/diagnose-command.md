---
sidebar_position: 7
---

# Diagnose Command
--------------------

The `ngrok diagnose` command is available in the ngrok agent and runs a series of tests to diagnose potential issues when starting a tunnel. For more information, check out the [ngrok agent reference for the diagnose command](/ngrok-agent/ngrok#ngrok-diagnose).

    $ ngrok diagnose
    Testing ngrok connectivity...
    
    Internet Connectivity
      Name Resolution                           [ OK ]
      TCP                                       [ OK ]
      TLS                                       [ OK ]
    Ngrok Connectivity
      Name Resolution                           [ OK ]
      TCP                                       [ OK ]
      TLS                                       [ OK ]
      Tunnel Protocol                           [ OK ]
    
    Successfully established ngrok connection! (region: 'us', latency: 112.461875ms)
