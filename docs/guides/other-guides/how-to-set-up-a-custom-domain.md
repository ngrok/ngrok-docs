# How to Set Up a Custom Domain

ngrok allows for using hostnames from a custom domain that you own to be used with your tunnel endpoints or [Edges](https://ngrok.com/docs/network-edge/edges/). Utilizing CNAMEs, ngrok will host an endpoint using your custom domain while also providing the ability to manage the complete TLS certficate lifecycyle for you.

ngrok is not a domain registrar and will not provide or manage custom domains. As a prerequisite it is required that you have already reserved your custom domain from any available domain registrar. For demo purposes in this guide, we've registered the domain name `example.com` with a domain name registrar and will be using it with ngrok.

To get the hostname `foo.example.com` working with an ngrok tunnel we'll need to perform one step within the ngrok account dashboard and one step with the DNS host for your domain. In many cases your DNS records are hosted by your domain name registrar, but not always. The process can be summed up in 3 steps.

- Create hostname within ngrok dashboard
- Create CNAME record in domain DNS
- Start ngrok tunnel using hostname

## **Create Hostname Within ngrok Dashboard**

Adding your custom domain hostname will be done from within your ngrok account, this "reservation" process is perfromed from the domains page of [your ngrok dashboard](https://dashboard.ngrok.com/cloud-edge/domains).

Select "New Domain" and then put `foo.example.com` into the form that appears to add that domain hostname to your account. ngrok will validate that the custom name isn't currently reserved. Select the available name from the list provided and then you'll be able to add a Description, attach an Edge if desired and select your TLS Certificate configuration (we recommend our automated TLS certificates).

After adding your domain you should see instructions along with the CNAME value to be used when creating the CNAME record. Copy the `value` of your newly-added domain's CNAME target hostname, which will be something like `<random-string>.<random-string>.ngrok-cname.com.`

## **Create CNAME Record in Domain DNS**

Head over to your DNS provider and create a new record on the `example.com` domain. Every DNS provider has a distinct user interface but just by way of example here's what this interface looks like when setting up a DNS CNAME record within Squarespace:

![](/img/docs/customdomain-img1.png)

Create a record of type CNAME where the host name is `foo` and the data value is your ngrok CNAME target,`<random-string>.<random-string>.ngrok-cname.com`. This will ensure that any DNS queries for `foo.example.com` are resolved with an IP from our service edge.

#### Testing the CNAME

Once created it might take a few minutes before the new record is reflected in the DNS, but you can confirm that your record is created using a command line tool like `dig` or `nslookup`. If the ngrok dashboard is still displayed with your CNAME target hostname from Step 1, the "Check Status" button at the bottom right of the page can also be used to confirm that your CNAME record is resolving correctly.

```bash
nslookup foo.example.com

Server:		127.0.0.1
Address:	127.0.0.1#53

Non-authoritative answer:
foo.example.com 	canonical name = 4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com.
Name:	4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com
Address: 192.0.2.39
Name:	4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com
Address: 192.0.2.75
Name:	4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com
Address: 198.51.100.134
Name:	4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com
Address: 198.51.100.205
Name:	4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com
Address: 203.0.113.165
Name:	4bvatzaa19xbdzvcv.2hgtjydm4lbzrtfge.ngrok-cname.com
Address: 203.0.113.94
```

## **Start ngrok Tunnel using Hostname**

Once your DNS record is in place you can create a tunnel using your new domain. Try running:

```bash
ngrok http --url=foo.example.com 8080
```

and presuming you're actually running an application on port 8080 then making an HTTP request to `https://foo.example.com` should return a response from your app.
