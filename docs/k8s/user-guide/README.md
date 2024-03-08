# User Guide

If you have the ingress controller installed and are looking to use it to add ingress and other ngrok features to your clusters' apps and services, this is the place to start!
Today we just support ingress, but gateways will be here soon!

Start by reading the [ingress-to-edge-relationship](./ingress-to-edge-relationship) documentation to understand how ingress objects are converted into ngrok edges.
The current annotations are being moved to a new Module CRD now. These docs will be updated when it's finished.

For more advanced cases and usages, see the following:

- [Route Modules](./route-modules)
- [Custom Domain](./custom-domain)
- [CRDs](./crds)
- [TLS and HTTPS](./tls-and-https)
- [IP Restrictions](./ip-restrictions)

For see or contribute a specific example see [here](../examples/README).
