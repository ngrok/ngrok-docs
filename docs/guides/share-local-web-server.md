# Share a local web server to the internet

ngrok allows you to share a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on.

If you don't know what port your web server is listening on, it's probably port 80, the default for HTTP.

###### Example: Expose a web server on port 80 of your local machine to the internet

    ngrok http 80

If your web server is serving secure content that isn't on port 443, you can provide the full address as well.

###### Example: Expose a secure web server on port 5001 of your local machine to the internet

    ngrok http https://localhost:5001

When you start ngrok, it will display a UI in your terminal with the public URL of your tunnel and other status and metrics information about connections made over your tunnel.

###### The ngrok console UI

    ngrok                                                                                    (Ctrl+C to quit)
    
    Session Status                online
    Account                       inconshreveable (Plan: Free)
    Version                       3.0.0
    Region                        United States (us)
    Latency                       89.275875ms
    Web Interface                 http://127.0.0.1:4040
    Forwarding                    https://503d51e75efe.ngrok.io -> https://localhost:5001
    
    Connections                   ttl     opn     rt1     rt5     p50     p90
                                  2       0       0.03    0.01    0.02    0.03