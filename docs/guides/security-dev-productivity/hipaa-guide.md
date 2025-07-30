## ngrok and HIPAA

HIPAA, the Health Insurance Portability and Accountability Act, is the US federal law enacted to protect patient health information. The law sets stringent standards in order to secure electronic protected health information (ePHI/PHI).

This docs page overviews ngrok’s recommendations for setting up ngrok services in a HIPAA compliant manner. 

NOTE: These are recommendations from the ngrok team. Please consult your own legal and engineering teams to ensure compliance with HIPAA. 

**Shared Responsibility Model**

ngrok operates with a shared responsibility model. There are many safeguards that we put in place to protect our customers AND there are steps our customers need to take to remain HIPAA compliant. 

We’re responsible for providing you all the information you need to use ngrok in a compliant manner and how to configure the ngrok platform to remain compliant. You are responsible for ensuring their use case is compliant and they have configured ngrok correctly to ensure compliance. 

**Compliant Use Cases**

ngrok is HIPAA compliant for use cases where PHI is stored within a packet payload. You are responsible for ensuring that PHI is only present within the packet payload. ngrok won’t store this data in HIPAA workloads but we do store other, non-PHI, data. Check out our blog https://ngrok.com/blog-post/data-at-ngrok for more details on what data ngrok stores.

ngrok account user information, ngrok account billing information, and/or packet headers should not be considered PHI within any use cases.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1db10b3c-e30d-41ad-aae9-d7ebbdd3adef/5bc47525-a118-4a74-b4a6-000322bf3cd4/image.png)

**Customer safeguards:**

These are ngrok’s recommendations for setting up and configuring your ngrok account securely:

- Ensure packet payloads are the only PHI data being sent over the ngrok network
    - Don’t put PHI in JWT tokens
    - Don’t put PHI in packet headers
- Ensure the ngrok agent is on a secure machine. The agent-local inspector will have XXX data
- Refer to our [Security Quick Wins](https://ngrok.com/docs/guides/security-dev-productivity/securing-your-tunnels/) guide for information on how to set up authentication, authorization, encryption, auth tokens, logging, etc in a secure manner.
- We recommend that you don’t use custom certificates
- [Verify webhooks to ensure the authenticity of incoming requests](https://ngrok.com/docs/traffic-policy/actions/verify-webhook/)