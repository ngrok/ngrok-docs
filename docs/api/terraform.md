---
sidebar_position: 3
---

# Terraform Provider

When you use ngrok resources as part of production infrastructure, it is an industry best practice to define them using an infrastructure-as-code (IaC) tool like [Terraform](https://www.terraform.io/). We publish an official Terraform provider that consumes the ngrok API to manage ngrok resources in this way.

Consult the documentation for the [ngrok Terraform provider on Hashicorp's Terraform Registry.](https://registry.terraform.io/providers/ngrok/ngrok/latest/docs)

#### example.tf

```hcl
# Configure the ngrok provider
provider "ngrok" {
  api_key = "{API_KEY}"
}

# Provision an ngrok domain
resource "ngrok_reserved_domain" "my_domain" {
  name   = "my-domain.example.com"
  region = "us"
  certificate_management_policy {
    authority        = "letsencrypt"
    private_key_type = "ecdsa"
  }
}
```
