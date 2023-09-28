---
title: Using Mutual TLS Authentication
description: Protecting your endpoints with mutual TLS authentication (mTLS)
tags:
  - guides
  - mtls
  - tls
  - mutual authentication
  - security
---

Mutual TLS (mTLS) is a method of providing security to sensitive applications, providing an extra layer of confidence by requiring both parties identify themselves.  In a majority of the TLS connections being made everyday, the client will verify the identify of server confirming that the correct server is being accessed.  For example when accessing [https://ngrok.com/docs](https://ngrok.com/docs), you will receive a certificate identifying the server as ngrok.com.  

mTLS adds an additional steps to this flow.  The client still verifies the server's identity, but now the server will in turn verify the the client's identity.  This allows for the server owner to restrict access only to verified clients.
![](img/mtls-diag.png)

The intent of this document is to provide a quick start guide for how to enable mTLS on your ngrok hosted endpoints.  For a deeper understanding for how mTLS is implemented within ngrok, reference the [Mutual TLS module page.](https://ngrok.com/docs/cloud-edge/modules/mutual-tls/)


## **Prerequisites**

1. CA certificate to be used by ngrok to verify the clients
2. Client certificates signed by the CA

Most organizations will have their own certificate mangement infrastructure, examples are provided below for creating the CA and client certificates.  The examples below for certificate creation are optional, and provided for demo purposes.

### Create the CA

Generate the CA private key, providing a strong passphrase is desirable<br></br>
```bash
openssl genrsa -aes256 -out ca.key 4096
```


Now we'll generate the CA certificate.  Feel free to leave all attribute fields blank by entering a period `.`, the CommonName used in this example was ngrok.mtls to identify the certificate.<br></br>
```bash
openssl req -new -x509 -sha256 -days 365 -key ca.key -out ca.crt
```

### Create a Client Certificate

Generate the client private key<br></br>
```bash
openssl genrsa -out ngrokclient.key 2048
```

Create a signing request for the client private key<br></br>
```bash
openssl req -new -key ngrokclient.key -out ngrokclient.csr
```

Use the CA certificate to sign the request and generate the client certificate<br></br>
```bash
openssl \
   x509 -req -days 365 -sha256 -in  ngrokclient.csr \
   -CA ca.crt -CAkey ca.key -set_serial 0x"$(openssl rand -hex 16)" -out ngrokclient.crt
```


## **Enable mTLS**
With the prerequisites being met, let's see how simple it is to enable mTLS with ngrok.  Examples for using either the Agent CLI or ngrok Cloud Edges are provided below.

### Agent CLI
Specify the CA certificate when starting the tunnel.<br></br>
```bash 
ngrok http 80 --mutual-tls-cas ca.crt
```


### Cloud Edges
If using the Cloud Edges product, we'll need to upload the CA certificate creating a CA object to be referenced by the Cloud Edge mTLS module.
From within the [ngrok dashboard](https://dashboard.ngrok.com) follow the next steps.

#### Upload CA cert ####

* Navigate to [**Security** --> **TLS Certfiicate Authorities**](https://dashboard.ngrok.com/security/tls/cert-authorities) and click + Add a Certificate Authority.
* Upload or Paste in the contents of the CA certificate and click Continue.

#### Enable mTLS on Edge ####

* From within the [ngrok dashboard](https://dashboard.ngrok.com), navigate to [**Cloud Edge** --> **Edges**](https://dashboard.ngrok.com/cloud-edge/edges) and select your existing Edge or click on + New Edge to create either a HTTPs or TLS edge.
* Within the Edges configuration, select the **Mutual TLS** module and select **Begin Setup**
* Click **Attach Authority**, select the previously uplodaed CA and click **Attach 1 Certificate Authority**, and the click **Save**.


## **Testing mTLS**
To test that mTLS is working correctly, first try to access without specifying your client cert.  An error will be returned without being able to access the endpoint.<br></br>
```bash
curl https://<your_ngrok_endpoint>/
```

Now let's specify the client certificate and key when accessing the site.  This will be successful verifying the mTLS is protecting you endpoint.<br></br>
```bash
curl --cert ngrokclient.crt --key ngrokclient.key https://<your_ngrok_endpoint>/
```



## **Conclusion**

mTLS is an extremely effective way to control who is able to access your endpoints.  Utilizing the ngrok platform vastly simplifies the implementation of mTLS providing enhanced security to your endpoints in seconds.