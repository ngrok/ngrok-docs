---
sidebar_position: 1
title: Overview
---

# The ngrok API
------------------

## Overview

The ngrok API provides programmatic access to all of ngrok's resources.

The API is REST-ish. It follows most of the conventions of a REST API but
diverges slightly when the REST model does not fit well.

The API is available at `https://api.ngrok.com`. The API listens only on
port 443 to help avoid any accidental unencrypted requests.

The API is designed to be simple enough to be called with `curl` and HTTP
libraries in your programming language of choice. We also publish other ways to
interact with the API like native API client libraries, a native CLI and a
Terraform Provider.

The API is available to all ngrok users at no additional charge. You only incur
costs if the resources provisioned by the API have a cost.

#### API Reference Docs

- **[API Reference](/api/reference)**: Documentation of all API resources and endpoints. We know it's important, that's why it's first :)

#### Other ways to interact with the API

- **[Agent API CLI](/ngrok-agent/ngrok#ngrok-api)**: Explore and script the API via the `ngrok api` commands included in the ngrok agent.
- **[API Client Libraries](#client-libraries)**: We publish idiomatic API client libraries for all major programming languages
- **[Terraform Provider](#terraform-provider)**: Use ngrok's Terraform provider to manage ngrok resources

#### You may be looking for other programmatic ways to work with ngrok

- **[Agent API](/ngrok-agent/api)**: The ngrok agent has its own API if you're trying to dynamically start and stop endpoints and tunnels
- **[Agent SDKs](secure-tunnels/agentless/#ngrok-agent-libraries)**: If you're looking to embed ngrok agent functionality as a library in your own software

## Quickstart {#quickstart}

##### Access the API with curl

```
curl https://api.ngrok.com -H "authorization: Bearer {API Key}" -H "ngrok-version: 2"
```

##### Access the API with the agent CLI

```
ngrok config add-api-key "{API Key}"
ngrok api endpoints list
```

## Client Libraries {#client-libraries}

We publish open-source API client libraries to make working with the ngrok API
feel native and fluent in your favorite programming language.  Library
repositories are published in the [ngrok github
organization](https://github.com/ngrok).

| Language | Installation | Documentation | Repository |
| --- | --- | --- | --- |
| Go  | `go get github.com/ngrok/ngrok-api-go/v4` | [Documentation](https://pkg.go.dev/github.com/ngrok/ngrok-api-go/v4) | [GitHub](https://github.com/ngrok/ngrok-api-go) |
| .NET | `dotnet add package NgrokApi` | [Documentation](https://github.com/ngrok/ngrok-api-dotnet) | [GitHub](https://github.com/ngrok/ngrok-api-dotnet) |
| Ruby | `gem install ngrok-api` | [Documentation](https://ruby-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-ruby) |
| Python | `pip install ngrok-api` | [Documentation](https://python-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-python) |
| Java (unstable) | See the README for installing with Maven | [Documentation](https://java-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-java) |
| Scala (unstable) | See the README for installing with Maven | [Documentation](https://python-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-scala) |

## Terraform Provider

When you use ngrok resources as part of production infrastructure, it is an
industry best practice to define them using an infrastructure-as-code tool like
[Terraform](https://www.terraform.io/). We publish an official Terraform
provider that consumes the ngrok API to your resources in this way.

Consult the documentation for the [ngrok Terraform provider on Hashicorp's
Terraform
Registry.](https://registry.terraform.io/providers/ngrok/ngrok/latest/docs)

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

## Authentication {#authentication}

|     |     |
| --- | --- |
| Base URL | `https://api.ngrok.com` |
| Authentication Header | **`authorization: Bearer {API Key}`** |

Requests to the API must include an API key as a bearer token in the
`Authorization` header.

- **[API Keys on the ngrok dashboard](https://dashboard.ngrok.com/api)**: Provision your first API key from your ngrok dashboard.
- **[API keys API Resource](/api/resources/api-keys#list-api-keys)**: Once you have an API key, you may provision additional API keys programmatically.

## Content Types {#content-types}

Requests to the API with a content body must set a `content-type` header of
`application/json`. All responses returned by the API will use the
`application/json` content type.

## Versioning and API Stability {#versioning}

Requests to the API must set the `ngrok-version` header. The latest version is
`2`. All other versions are deprecated.

The ngrok API guarantees that breaking changes to the API will never be made
unless the caller explicitly opts in to a newer version. The following
non-breaking changes to the API may be made to existing versions:

* The addition of new resources
* The addition of new methods to existing resources
* The addition of new fields on existing resource representations
* Bug fixes which change the API to match documented behavior

## Pagination {#pagination}

List endpoints can be paginated using the query parameters `limit` and
`before_id`. Results are returned ordered from newest to oldest. The maximum
value of `limit` is 100. If a limit is not specified, it will default to 100.
If `before_id` is not specified, the first page of results will be returned.
You can provide an explicit value for `before_id` to retrieve items created
before the given ID. Each response to a list request will include a
`next_page_uri` field, which will be the full URL you can request to retrieve
the next page of results. If there are no more results, `next_page_uri` will be
`null`.

## Timestamps and Timezones {#timezones}

Timestamp fields in the ngrok API are represented as strings that are returned
in the [RFC 3339 format](https://www.ietf.org/rfc/rfc3339.txt). Timestamps
returned by the API are in UTC time which is indicated by a `Z` at the end.

## Rate Limits

The ngrok API enforces a limit on all accounts of 120 requests over a rolling
60 second window. If you exceed the rate limit, ngrok will return
[ERR_NGROK_226](/docs/errors/ERR_NGROK_226) and an HTTP Status Code of 429.

## Errors

We believe that it is important to provide a well-defined interface to errors
you encounter when working with the ngrok API. Well-defined error surfaces and codes
are what allow your software to appropriately handle error conditions.

Errors returned by the ngrok API are serialized with the following example format:

```
{
  "error_code": "ERR_NGROK_218",
  "status_code": 400,
  "msg": "Your request has not specified an API version. Please include the version you wish to use in the Ngrok-Version header. Supported versions: 2.",
  "details": {
    "operation_id": "op_2RfSBcv0nsy71XCHWOegjx1OoKh"
  }
}
```

Every error returned by the ngrok API includes a globally unique error code in
the `error_code` property field. This error code is distinct for every possible
error condition that can be encountered so your software can properly handle
different error conditions.

Consult the **[Error Reference Documentation](/docs/errors)** for the complete list of all
error codes returned by ngrok.
