---
sidebar_position: 2
title: API
---

# The ngrok HTTP API
------------------

### Introduction

The ngrok HTTP API is available at `https://api.ngrok.com`. It provides programmatic access to all of ngrok's resources.

The API is REST-ish. It follows most of the conventions of a REST API but breaks some when the REST model does not fit well. The API listens only on port 443 to help avoid any accidental unencrypted requests.

If you are looking to programmatically start and stop tunnels, instead consult the documentation of the [ngrok agent API](/docs/ngrok-agent/api).

### Authentication

|     |     |
| --- | --- |
| Base URL | `https://api.ngrok.com` |
| Authentication | **Bearer token authentication with an ngrok.com API key token** |

API keys to access the ngrok.com HTTP API can be provisioned on the [API Keys page of your ngrok dashboard](https://dashboard.ngrok.com/api/keys). API keys can also be created via the [API keys API Resource](#list-api-keys). All requests to the API must include an API key as a bearer token in the Authorization header as well as an `ngrok-version` header as demonstrated in the following example.

###### Access the root API resource

 `curl -H "authorization: Bearer {API_KEY}" -H "ngrok-version: 2" https://api.ngrok.com/`

### Content Types

All request bodies sent to the API must use a content type of `application/json`. Ensure that your client sets the request's `Content-Type` header appropriately. All responses returned by the API will also be returned with an `application/json` content type.

### Versioning and API Stability

The caller must specify a version by sending an `ngrok-version` header with each request. The latest version is `2`. Versions `0` and `1` are deprecated.

The ngrok API guarantees that breaking changes to the API will never be made unless the caller explicitly opts in to a newer version. The following non-breaking changes to the API may be made to existing versions without an opt-in:

* The addition of new resources
* The addition of new methods to existing resources
* The addition of new fields on existing resource representations
* Bug fixes which change the API to match documented behavior

### Pagination

List endpoints can be paginated using the query parameters `limit` and `before_id`. Results are returned ordered from newest to oldest. The maximum value of `limit` is 100. If a limit is not specified, it will default to 100. If `before_id` is not specified, the first page of results will be returned. You can provide an explicit value for `before_id` to retrieve items created before the given ID. Each response to a list request will include a `next_page_uri` field, which will be the full URL you can request to retrieve the next page of results. If there are no more results, `next_page_uri` will be `null`.

API Clients
-----------

ngrok's API is designed to be simple enough to be called with `curl` and the HTTP library in your programming language of choice. We also believe that higher-level interfaces are better fits depending on the type of automation you're building. We publish a number of official API clients and tools that make automating your ngrok workflows easy.

We've also built API access into the latest ngrok agent v3 using the `ngrok api` command. For more information, check out the [ngrok agent reference](/docs/ngrok-agent/ngrok#command-ngrok-api).

### ngrok API Client Libraries

ngrok publishes API client libraries to make working with ngrok resources feel native and fluent in your favorite programming language. All of our client libraries are open source and published under the [ngrok github organization](https://github.com/ngrok).

| Language | Installation | Documentation | Repository |
| --- | --- | --- | --- |
| Go  | `go get github.com/ngrok/ngrok-api-go/v4` | [Documentation](https://pkg.go.dev/github.com/ngrok/ngrok-api-go/v4) | [GitHub](https://github.com/ngrok/ngrok-api-go) |
| .NET | `dotnet add package NgrokApi` | [Documentation](https://github.com/ngrok/ngrok-api-dotnet) | [GitHub](https://github.com/ngrok/ngrok-api-dotnet) |
| Ruby | `gem install ngrok-api` | [Documentation](https://ruby-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-ruby) |
| Python | `pip install ngrok-api` | [Documentation](https://python-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-python) |
| Java (unstable) | See the README for installing with Maven | [Documentation](https://java-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-java) |
| Scala (unstable) | See the README for installing with Maven | [Documentation](https://python-api.docs.ngrok.com) | [GitHub](https://github.com/ngrok/ngrok-api-scala) |

### Terraform Provider

When you use ngrok resources as part of production infrastructure, it is an industry best practice to define them using an infrastructure-as-code (IaC) tool like [Terraform](https://www.terraform.io/). We publish an official Terraform provider that consumes the ngrok API to manage ngrok resources in this way.

Consult the documentation for the [ngrok Terraform provider on Hashicorp's Terraform Registry.](https://registry.terraform.io/providers/ngrok/ngrok/latest/docs)

###### example.tf

 `# Configure the ngrok provider
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
}`

API Resources
-------------

### Create API Key

Create a new API key. The generated API key can be used to authenticate to the ngrok API.

##### Request

POST/api_keys

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"ad-hoc dev testing","metadata":"{\"environment\":\"dev\"}"}' \
    https://api.ngrok.com/api_keys

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
      "uri": "https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
      "description": "ad-hoc dev testing",
      "metadata": "{\"environment\":\"dev\"}",
      "created_at": "2022-04-19T16:01:15Z",
      "token": "281VSAsp9vBP4HDI1LbjLRuzYOI_4GCt7thvvRp13LPKi4CFk"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique API key resource identifier |
| `uri` | string | URI to the API resource of this API key |
| `description` | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |
| `created_at` | string | timestamp when the api key was created, RFC 3339 format |
| `token` | string | the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** |

### Delete API Key

Delete an API key by ID

##### Request

DELETE/api_keys/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI

##### Response

Returns a 204 response with no body on success

### Get API Key

Get the details of an API key by ID.

##### Request

GET/api_keys/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
      "uri": "https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
      "description": "ad-hoc dev testing",
      "metadata": "{\"environment\":\"dev\", \"owner_id\": 123}",
      "created_at": "2022-04-19T16:01:15Z",
      "token": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique API key resource identifier |
| `uri` | string | URI to the API resource of this API key |
| `description` | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |
| `created_at` | string | timestamp when the api key was created, RFC 3339 format |
| `token` | string | the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** |

### List API Keys

List all API keys owned by this account

##### Request

GET/api_keys

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/api_keys

##### Response

Returns a 200 response on success

###### Example Response

    {
      "keys": [
        {
          "id": "ak_281VS3L0ve1PvWDca4MeFQsFDYo",
          "uri": "https://api.ngrok.com/api_keys/ak_281VS3L0ve1PvWDca4MeFQsFDYo",
          "description": "api key for example generation",
          "metadata": "",
          "created_at": "2022-04-19T16:01:14Z",
          "token": null
        },
        {
          "id": "ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
          "uri": "https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
          "description": "ad-hoc dev testing",
          "metadata": "{\"environment\":\"dev\"}",
          "created_at": "2022-04-19T16:01:15Z",
          "token": null
        }
      ],
      "uri": "https://api.ngrok.com/api_keys",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `keys` | [APIKey](#api-api-keys-list-fields-api-key) | the list of API keys for this account |
| `uri` | string | URI of the API keys list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### APIKey fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique API key resource identifier |
| `uri` | string | URI to the API resource of this API key |
| `description` | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |
| `created_at` | string | timestamp when the api key was created, RFC 3339 format |
| `token` | string | the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** |

### Update API Key

Update attributes of an API key by ID.

##### Request

PATCH/api_keys/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\":\"dev\", \"owner_id\": 123}"}' \
    https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
      "uri": "https://api.ngrok.com/api_keys/ak_281VSAsp9vBP4HDI1LbjLRuzYOI",
      "description": "ad-hoc dev testing",
      "metadata": "{\"environment\":\"dev\", \"owner_id\": 123}",
      "created_at": "2022-04-19T16:01:15Z",
      "token": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique API key resource identifier |
| `uri` | string | URI to the API resource of this API key |
| `description` | string | human-readable description of what uses the API key to authenticate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined data of this API key. optional, max 4096 bytes |
| `created_at` | string | timestamp when the api key was created, RFC 3339 format |
| `token` | string | the bearer token that can be placed into the Authorization header to authenticate request to the ngrok API. **This value is only available one time, on the API response from key creation. Otherwise it is null.** |

### Create Abuse Report

Creates a new abuse report which will be reviewed by our system and abuse response team. This API is only available to authorized accounts. Contact abuse@ngrok.com to request access

##### Request

POST/abuse_reports

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"urls":["http://legit-facebook-login.ngrok.io/login"],"metadata":"{\"incident_id\":1233122}"}' \
    https://api.ngrok.com/abuse_reports

###### Parameters

|     |     |     |
| --- | --- | --- |
| `urls` | List&lt;string&gt; | a list of URLs containing suspected abusive content |
| `metadata` | string | arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "abrp_281VSpi6sapq6HFrXV9oYDcn381",
      "uri": "https://api.ngrok.com/abuse_reports/abrp_281VSpi6sapq6HFrXV9oYDcn381",
      "created_at": "2022-04-19T16:01:21Z",
      "urls": [
        "http://legit-facebook-login.ngrok.io/login"
      ],
      "metadata": "{\"incident_id\":1233122}",
      "status": "PROCESSED",
      "hostnames": [
        {
          "hostname": "legit-facebook-login.ngrok.io",
          "status": "BANNED"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | ID of the abuse report |
| `uri` | string | URI of the abuse report API resource |
| `created_at` | string | timestamp that the abuse report record was created in RFC 3339 format |
| `urls` | List&lt;string&gt; | a list of URLs containing suspected abusive content |
| `metadata` | string | arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. |
| `status` | string | Indicates whether ngrok has processed the abuse report. one of `PENDING`, `PROCESSED`, or `PARTIALLY_PROCESSED` |
| `hostnames` | [AbuseReportHostname](#api-abuse-reports-create-fields-abuse-report-hostname) | an array of hostname statuses related to the report |

###### AbuseReportHostname fields

|     |     |     |
| --- | --- | --- |
| `hostname` | string | the hostname ngrok has parsed out of one of the reported URLs in this abuse report |
| `status` | string | indicates what action ngrok has taken against the hostname. one of `PENDING`, `BANNED`, `UNBANNED`, or `IGNORE` |

### Get Abuse Report

Get the detailed status of abuse report by ID.

##### Request

GET/abuse_reports/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/abuse_reports/abrp_281VSpi6sapq6HFrXV9oYDcn381

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "abrp_281VSpi6sapq6HFrXV9oYDcn381",
      "uri": "https://api.ngrok.com/abuse_reports/abrp_281VSpi6sapq6HFrXV9oYDcn381",
      "created_at": "2022-04-19T16:01:21Z",
      "urls": [
        "http://legit-facebook-login.ngrok.io/login"
      ],
      "metadata": "{\"incident_id\":1233122}",
      "status": "PROCESSED",
      "hostnames": [
        {
          "hostname": "legit-facebook-login.ngrok.io",
          "status": "BANNED"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | ID of the abuse report |
| `uri` | string | URI of the abuse report API resource |
| `created_at` | string | timestamp that the abuse report record was created in RFC 3339 format |
| `urls` | List&lt;string&gt; | a list of URLs containing suspected abusive content |
| `metadata` | string | arbitrary user-defined data about this abuse report. Optional, max 4096 bytes. |
| `status` | string | Indicates whether ngrok has processed the abuse report. one of `PENDING`, `PROCESSED`, or `PARTIALLY_PROCESSED` |
| `hostnames` | [AbuseReportHostname](#api-abuse-reports-get-fields-abuse-report-hostname) | an array of hostname statuses related to the report |

###### AbuseReportHostname fields

|     |     |     |
| --- | --- | --- |
| `hostname` | string | the hostname ngrok has parsed out of one of the reported URLs in this abuse report |
| `status` | string | indicates what action ngrok has taken against the hostname. one of `PENDING`, `BANNED`, `UNBANNED`, or `IGNORE` |

### Create Agent Ingress

Create a new Agent Ingress. The ngrok agent can be configured to connect to ngrok via the new set of addresses on the returned Agent Ingress.

##### Request

POST/agent_ingresses

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme devices","domain":"connect.acme.com"}' \
    https://api.ngrok.com/agent_ingresses

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| `domain` | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "agin_281VT7iCDU8U21OBKxXviKHw0q0",
      "uri": "https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0",
      "description": "acme devices",
      "metadata": "",
      "domain": "connect.acme.com",
      "ns_targets": [
        "1.kube-dns.kube-system.svc.cluster.local.",
        "2.kube-dns.kube-system.svc.cluster.local.",
        "3.kube-dns.kube-system.svc.cluster.local.",
        "4.kube-dns.kube-system.svc.cluster.local."
      ],
      "region_domains": [
        "tunnel.us.connect.acme.com"
      ],
      "created_at": "2022-04-19T16:01:23Z"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique Agent Ingress resource identifier |
| `uri` | string | URI to the API resource of this Agent ingress |
| `description` | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| `domain` | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |
| `ns_targets` | List&lt;string&gt; | a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok |
| `region_domains` | List&lt;string&gt; | a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions |
| `created_at` | string | timestamp when the Agent Ingress was created, RFC 3339 format |

### Delete Agent Ingress

Delete an Agent Ingress by ID

##### Request

DELETE/agent_ingresses/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0

##### Response

Returns a 204 response with no body on success

### Get Agent Ingress

Get the details of an Agent Ingress by ID.

##### Request

GET/agent_ingresses/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "agin_281VT7iCDU8U21OBKxXviKHw0q0",
      "uri": "https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0",
      "description": "ACME Co. Device Ingress",
      "metadata": "{\"device_sku\": \"824JS4RZ1F8X\"}",
      "domain": "connect.acme.com",
      "ns_targets": [
        "1.kube-dns.kube-system.svc.cluster.local.",
        "2.kube-dns.kube-system.svc.cluster.local.",
        "3.kube-dns.kube-system.svc.cluster.local.",
        "4.kube-dns.kube-system.svc.cluster.local."
      ],
      "region_domains": [
        "tunnel.us.connect.acme.com"
      ],
      "created_at": "2022-04-19T16:01:23Z"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique Agent Ingress resource identifier |
| `uri` | string | URI to the API resource of this Agent ingress |
| `description` | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| `domain` | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |
| `ns_targets` | List&lt;string&gt; | a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok |
| `region_domains` | List&lt;string&gt; | a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions |
| `created_at` | string | timestamp when the Agent Ingress was created, RFC 3339 format |

### List Agent Ingresses

List all Agent Ingresses owned by this account

##### Request

GET/agent_ingresses

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/agent_ingresses

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ingresses": [
        {
          "id": "agin_281VT7iCDU8U21OBKxXviKHw0q0",
          "uri": "https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0",
          "description": "acme devices",
          "metadata": "",
          "domain": "connect.acme.com",
          "ns_targets": [
            "1.kube-dns.kube-system.svc.cluster.local.",
            "2.kube-dns.kube-system.svc.cluster.local.",
            "3.kube-dns.kube-system.svc.cluster.local.",
            "4.kube-dns.kube-system.svc.cluster.local."
          ],
          "region_domains": [
            "tunnel.us.connect.acme.com"
          ],
          "created_at": "2022-04-19T16:01:23Z"
        }
      ],
      "uri": "https://api.ngrok.com/agent_ingresses",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ingresses` | [AgentIngress](#api-agent-ingresses-list-fields-agent-ingress) | the list of Agent Ingresses owned by this account |
| `uri` | string | URI of the Agent Ingress list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### AgentIngress fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique Agent Ingress resource identifier |
| `uri` | string | URI to the API resource of this Agent ingress |
| `description` | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| `domain` | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |
| `ns_targets` | List&lt;string&gt; | a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok |
| `region_domains` | List&lt;string&gt; | a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions |
| `created_at` | string | timestamp when the Agent Ingress was created, RFC 3339 format |

### Update Agent Ingress

Update attributes of an Agent Ingress by ID.

##### Request

PATCH/agent_ingresses/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"ACME Co. Device Ingress","metadata":"{\"device_sku\": \"824JS4RZ1F8X\"}"}' \
    https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "agin_281VT7iCDU8U21OBKxXviKHw0q0",
      "uri": "https://api.ngrok.com/agent_ingresses/agin_281VT7iCDU8U21OBKxXviKHw0q0",
      "description": "ACME Co. Device Ingress",
      "metadata": "{\"device_sku\": \"824JS4RZ1F8X\"}",
      "domain": "connect.acme.com",
      "ns_targets": [
        "1.kube-dns.kube-system.svc.cluster.local.",
        "2.kube-dns.kube-system.svc.cluster.local.",
        "3.kube-dns.kube-system.svc.cluster.local.",
        "4.kube-dns.kube-system.svc.cluster.local."
      ],
      "region_domains": [
        "tunnel.us.connect.acme.com"
      ],
      "created_at": "2022-04-19T16:01:23Z"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique Agent Ingress resource identifier |
| `uri` | string | URI to the API resource of this Agent ingress |
| `description` | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| `domain` | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |
| `ns_targets` | List&lt;string&gt; | a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok |
| `region_domains` | List&lt;string&gt; | a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions |
| `created_at` | string | timestamp when the Agent Ingress was created, RFC 3339 format |

### Create Certificate Authority

Upload a new Certificate Authority

##### Request

POST/certificate_authorities

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"Internal Coprorates Services Authority","metadata":"{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}","ca_pem":"-----BEGIN CERTIFICATE-----\nMIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL\nBQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l\neTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg\nU2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w\nYmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx\nCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG\nA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj\nZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l\neGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0\nnRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A\nUD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+\npmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b\nvoijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf\nWi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7\n3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw\nHwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB\n/zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna\nv3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9\npIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK\nnPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F\nVyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3\n3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==\n-----END CERTIFICATE-----"}' \
    https://api.ngrok.com/certificate_authorities

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| `ca_pem` | string | raw PEM of the Certificate Authority |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ca_281VT17gcUXCLifWhnP2vjjgK8D",
      "uri": "https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "Internal Coprorates Services Authority",
      "metadata": "{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}",
      "ca_pem": "-----BEGIN CERTIFICATE-----\nMIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL\nBQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l\neTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg\nU2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w\nYmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx\nCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG\nA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj\nZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l\neGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0\nnRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A\nUD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+\npmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b\nvoijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf\nWi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7\n3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw\nHwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB\n/zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna\nv3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9\npIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK\nnPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F\nVyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3\n3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==\n-----END CERTIFICATE-----\n",
      "subject_common_name": "Intranet Services Authority",
      "not_before": "2020-05-01T16:27:59Z",
      "not_after": "2021-05-01T16:27:59Z",
      "key_usages": [],
      "extended_key_usages": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Certificate Authority |
| `uri` | string | URI of the Certificate Authority API resource |
| `created_at` | string | timestamp when the Certificate Authority was created, RFC 3339 format |
| `description` | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| `ca_pem` | string | raw PEM of the Certificate Authority |
| `subject_common_name` | string | subject common name of the Certificate Authority |
| `not_before` | string | timestamp when this Certificate Authority becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this Certificate Authority becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this Certificate Authority can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this Certificate Authority can be used for |

### Delete Certificate Authority

Delete a Certificate Authority

##### Request

DELETE/certificate_authorities/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D

##### Response

Returns a 204 response with no body on success

### Get Certificate Authority

Get detailed information about a certficate authority

##### Request

GET/certificate_authorities/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ca_281VT17gcUXCLifWhnP2vjjgK8D",
      "uri": "https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "Internal Corporate Services Authority (Legacy)",
      "metadata": "{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}",
      "ca_pem": "-----BEGIN CERTIFICATE-----\nMIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL\nBQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l\neTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg\nU2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w\nYmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx\nCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG\nA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj\nZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l\neGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0\nnRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A\nUD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+\npmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b\nvoijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf\nWi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7\n3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw\nHwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB\n/zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna\nv3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9\npIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK\nnPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F\nVyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3\n3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==\n-----END CERTIFICATE-----\n",
      "subject_common_name": "Intranet Services Authority",
      "not_before": "2020-05-01T16:27:59Z",
      "not_after": "2021-05-01T16:27:59Z",
      "key_usages": [],
      "extended_key_usages": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Certificate Authority |
| `uri` | string | URI of the Certificate Authority API resource |
| `created_at` | string | timestamp when the Certificate Authority was created, RFC 3339 format |
| `description` | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| `ca_pem` | string | raw PEM of the Certificate Authority |
| `subject_common_name` | string | subject common name of the Certificate Authority |
| `not_before` | string | timestamp when this Certificate Authority becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this Certificate Authority becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this Certificate Authority can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this Certificate Authority can be used for |

### List Certificate Authorities

List all Certificate Authority on this account

##### Request

GET/certificate_authorities

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/certificate_authorities

##### Response

Returns a 200 response on success

###### Example Response

    {
      "certificate_authorities": [
        {
          "id": "ca_281VT2mnh6PA3WtOKPh8R5MQwMx",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VT2mnh6PA3WtOKPh8R5MQwMx",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "Device Connectivity Authority",
          "metadata": "",
          "ca_pem": "-----BEGIN CERTIFICATE-----\nMIIEAzCCAuugAwIBAgIUGN+Gv4BdJ17VoVXWrz9j51jcfYowDQYJKoZIhvcNAQEL\nBQAwgZAxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQH\nDA1TYW4gRnJhbmNpc2NvMRMwEQYDVQQKDApBQ01FLCBJbmMuMR4wHAYDVQQDDBVB\nQ01FIERldmljZSBBdXRob3JpdHkxHzAdBgkqhkiG9w0BCQEWEG9wc0BhY21lLmV4\nYW1wbGUwHhcNMjAwNTAxMTYyNTA5WhcNMjEwNTAxMTYyNTA5WjCBkDELMAkGA1UE\nBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lz\nY28xEzARBgNVBAoMCkFDTUUsIEluYy4xHjAcBgNVBAMMFUFDTUUgRGV2aWNlIEF1\ndGhvcml0eTEfMB0GCSqGSIb3DQEJARYQb3BzQGFjbWUuZXhhbXBsZTCCASIwDQYJ\nKoZIhvcNAQEBBQADggEPADCCAQoCggEBAO8vxADdMmZANJ0aTAX6Jp50vCjFh2/d\nJLxn4ZAg0fFgkM+Zl+3gxGA7YUUKxIKet6rSeyKAjOX9AFA+idpv5mXnD+0nwPDr\nkwGe1MkYsaWYdMyUEoI9uEodS0LmHItAzV63ovkdagb3fqZqWcJCsoDa22WHt6GN\nT2d4xGD0gEMyDmwxey4XYSy63H1mvQRzhjC5wCzTGOefG76Io0whJka0mr3b6wEv\nSw0YqRF0/BEDlmWU/VWz7YEgWpb0rXaLqQKbZjyFo137X1otZK8vj9MVRWRvYmcF\nHgE+n0ifoCQ/DNVF1mkG6HGK3LREj9LGRBTN683Vqq2W+93B9yuTgr8CAwEAAaNT\nMFEwHQYDVR0OBBYEFLGXXIYFIpkRy4j0VsOdfgxgZpXzMB8GA1UdIwQYMBaAFLGX\nXIYFIpkRy4j0VsOdfgxgZpXzMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQEL\nBQADggEBAFyO7ZWj9w6xzoBWu/XbIVwsQ3kE5k+wrRGyp2rh2v4msAEveCIZP5kT\nCSdr2vr+9HQYiKf1ftsp9tGTLXwrhz3ztC8jIqo4A0grw5B61J0lj+2grKNq1/CK\nxQcpkbnetzo4zsDqFRoN2VK40Ovo4b/IknFa38t06b4t8cYQIqUdkFHMSSIz3Mvx\nRIK6MZlilT8zkWhi9kfCJe/s3cVEAJixNkgO4XNo5VhhxFenyvAL2vDM27dWVtDG\nqL3MFZbcy0/74AJsJDSrflGUQxjrK3WI9PkpKp/xey54XJAbhF63z1VwkJwSwufv\nW9HgidfMN9icgxkScyWpB9KrZHcsLk4=\n-----END CERTIFICATE-----\n",
          "subject_common_name": "ACME Device Authority",
          "not_before": "2020-05-01T16:25:09Z",
          "not_after": "2021-05-01T16:25:09Z",
          "key_usages": [],
          "extended_key_usages": []
        },
        {
          "id": "ca_281VT17gcUXCLifWhnP2vjjgK8D",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "Internal Coprorates Services Authority",
          "metadata": "{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}",
          "ca_pem": "-----BEGIN CERTIFICATE-----\nMIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL\nBQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l\neTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg\nU2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w\nYmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx\nCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG\nA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj\nZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l\neGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0\nnRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A\nUD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+\npmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b\nvoijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf\nWi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7\n3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw\nHwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB\n/zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna\nv3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9\npIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK\nnPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F\nVyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3\n3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==\n-----END CERTIFICATE-----\n",
          "subject_common_name": "Intranet Services Authority",
          "not_before": "2020-05-01T16:27:59Z",
          "not_after": "2021-05-01T16:27:59Z",
          "key_usages": [],
          "extended_key_usages": []
        },
        {
          "id": "ca_281VSuoqmi4531iOZ7jKPxUwnfL",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VSuoqmi4531iOZ7jKPxUwnfL",
          "created_at": "2022-04-19T16:01:21Z",
          "description": "",
          "metadata": "",
          "ca_pem": "-----BEGIN CERTIFICATE-----\nMIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL\nBQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l\neTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg\nU2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w\nYmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx\nCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG\nA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj\nZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l\neGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0\nnRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A\nUD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+\npmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b\nvoijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf\nWi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7\n3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw\nHwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB\n/zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna\nv3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9\npIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK\nnPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F\nVyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3\n3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==\n-----END CERTIFICATE-----\n",
          "subject_common_name": "Intranet Services Authority",
          "not_before": "2020-05-01T16:27:59Z",
          "not_after": "2021-05-01T16:27:59Z",
          "key_usages": [],
          "extended_key_usages": []
        }
      ],
      "uri": "https://api.ngrok.com/certificate_authorities",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `certificate_authorities` | [CertificateAuthority](#api-certificate-authorities-list-fields-certificate-authority) | the list of all certificate authorities on this account |
| `uri` | string | URI of the certificates authorities list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### CertificateAuthority fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Certificate Authority |
| `uri` | string | URI of the Certificate Authority API resource |
| `created_at` | string | timestamp when the Certificate Authority was created, RFC 3339 format |
| `description` | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| `ca_pem` | string | raw PEM of the Certificate Authority |
| `subject_common_name` | string | subject common name of the Certificate Authority |
| `not_before` | string | timestamp when this Certificate Authority becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this Certificate Authority becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this Certificate Authority can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this Certificate Authority can be used for |

### Update Certificate Authority

Update attributes of a Certificate Authority by ID

##### Request

PATCH/certificate_authorities/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"Internal Corporate Services Authority (Legacy)"}' \
    https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ca_281VT17gcUXCLifWhnP2vjjgK8D",
      "uri": "https://api.ngrok.com/certificate_authorities/ca_281VT17gcUXCLifWhnP2vjjgK8D",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "Internal Corporate Services Authority (Legacy)",
      "metadata": "{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}",
      "ca_pem": "-----BEGIN CERTIFICATE-----\nMIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL\nBQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l\neTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg\nU2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w\nYmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx\nCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG\nA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj\nZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l\neGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0\nnRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A\nUD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+\npmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b\nvoijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf\nWi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7\n3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw\nHwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB\n/zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna\nv3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9\npIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK\nnPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F\nVyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3\n3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==\n-----END CERTIFICATE-----\n",
      "subject_common_name": "Intranet Services Authority",
      "not_before": "2020-05-01T16:27:59Z",
      "not_after": "2021-05-01T16:27:59Z",
      "key_usages": [],
      "extended_key_usages": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Certificate Authority |
| `uri` | string | URI of the Certificate Authority API resource |
| `created_at` | string | timestamp when the Certificate Authority was created, RFC 3339 format |
| `description` | string | human-readable description of this Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes. |
| `ca_pem` | string | raw PEM of the Certificate Authority |
| `subject_common_name` | string | subject common name of the Certificate Authority |
| `not_before` | string | timestamp when this Certificate Authority becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this Certificate Authority becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this Certificate Authority can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this Certificate Authority can be used for |

### List Endpoints

List all active endpoints on the account

##### Request

GET/endpoints

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/endpoints

##### Response

Returns a 200 response on success

###### Example Response

    {
      "endpoints": [
        {
          "id": "ep_281VSnLqRt28JBuzynQIuwoCwj0",
          "region": "us",
          "created_at": "2022-04-19T16:01:20Z",
          "updated_at": "2022-04-19T16:01:20Z",
          "public_url": "https://9abb9a7aa17c.ngrok.io",
          "proto": "https",
          "hostport": "9abb9a7aa17c.ngrok.io:443",
          "type": "ephemeral",
          "metadata": "",
          "tunnel": {
            "id": "tn_281VSnLqRt28JBuzynQIuwoCwj0",
            "uri": "https://api.ngrok.com/tunnels/tn_281VSnLqRt28JBuzynQIuwoCwj0"
          }
        },
        {
          "id": "ep_281VSm4dePimjSQhoRcfPrK30mT",
          "region": "us",
          "created_at": "2022-04-19T16:01:20Z",
          "updated_at": "2022-04-19T16:01:20Z",
          "public_url": "tls://endpoint-example.com:443",
          "proto": "tls",
          "hostport": "endpoint-example.com:443",
          "type": "edge",
          "metadata": "",
          "domain": {
            "id": "rd_281VSb55rGwqsjze5h7ZR8xUatO",
            "uri": "https://api.ngrok.com/reserved_domains/rd_281VSb55rGwqsjze5h7ZR8xUatO"
          },
          "edge": {
            "id": "edgtls_281VSaU0qZP8KEDTswG6mCYq35W",
            "uri": "https://api.ngrok.com/edges/tls/edgtls_281VSaU0qZP8KEDTswG6mCYq35W"
          }
        }
      ],
      "uri": "https://api.ngrok.com/endpoints",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `endpoints` | [Endpoint](#api-endpoints-list-fields-endpoint) | the list of all active endpoints on this account |
| `uri` | string | URI of the endpoints list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### Endpoint fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique endpoint resource identifier |
| `region` | string | identifier of the region this endpoint belongs to |
| `created_at` | string | timestamp when the endpoint was created in RFC 3339 format |
| `updated_at` | string | timestamp when the endpoint was updated in RFC 3339 format |
| `public_url` | string | URL of the hostport served by this endpoint |
| `proto` | string | protocol served by this endpoint. one of `http`, `https`, `tcp`, or `tls` |
| `hostport` | string | hostport served by this endpoint (hostname:port) |
| `type` | string | whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) |
| `metadata` | string | user-supplied metadata of the associated tunnel or edge object |
| `domain` | [Ref](#api-endpoints-list-fields-ref) | the domain reserved for this endpoint |
| `tcp_addr` | [Ref](#api-endpoints-list-fields-ref) | the address reserved for this endpoint |
| `tunnel` | [Ref](#api-endpoints-list-fields-ref) | the tunnel serving requests to this endpoint, if this is an ephemeral endpoint |
| `edge` | [Ref](#api-endpoints-list-fields-ref) | the edge serving requests to this endpoint, if this is an edge endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get Endpoint

Get the status of an endpoint by ID

##### Request

GET/endpoints/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/endpoints/ep_281VSnLqRt28JBuzynQIuwoCwj0

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ep_281VSnLqRt28JBuzynQIuwoCwj0",
      "region": "us",
      "created_at": "2022-04-19T16:01:20Z",
      "updated_at": "2022-04-19T16:01:20Z",
      "public_url": "https://9abb9a7aa17c.ngrok.io",
      "proto": "https",
      "hostport": "9abb9a7aa17c.ngrok.io:443",
      "type": "ephemeral",
      "metadata": "",
      "tunnel": {
        "id": "tn_281VSnLqRt28JBuzynQIuwoCwj0",
        "uri": "https://api.ngrok.com/tunnels/tn_281VSnLqRt28JBuzynQIuwoCwj0"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique endpoint resource identifier |
| `region` | string | identifier of the region this endpoint belongs to |
| `created_at` | string | timestamp when the endpoint was created in RFC 3339 format |
| `updated_at` | string | timestamp when the endpoint was updated in RFC 3339 format |
| `public_url` | string | URL of the hostport served by this endpoint |
| `proto` | string | protocol served by this endpoint. one of `http`, `https`, `tcp`, or `tls` |
| `hostport` | string | hostport served by this endpoint (hostname:port) |
| `type` | string | whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) |
| `metadata` | string | user-supplied metadata of the associated tunnel or edge object |
| `domain` | [Ref](#api-endpoints-get-fields-ref) | the domain reserved for this endpoint |
| `tcp_addr` | [Ref](#api-endpoints-get-fields-ref) | the address reserved for this endpoint |
| `tunnel` | [Ref](#api-endpoints-get-fields-ref) | the tunnel serving requests to this endpoint, if this is an ephemeral endpoint |
| `edge` | [Ref](#api-endpoints-get-fields-ref) | the edge serving requests to this endpoint, if this is an edge endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Create Event Destination

Create a new Event Destination. It will not apply to anything until it is associated with an Event Subscription.

##### Request

POST/event_destinations

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\":\"dev\"}","description":"kinesis dev stream","format":"json","target":{"kinesis":{"auth":{"role":{"role_arn":"arn:aws:iam::123456789012:role/example"}},"stream_arn":"arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"}}}' \
    https://api.ngrok.com/event_destinations

###### Parameters

|     |     |     |
| --- | --- | --- |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-create-parameters-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |

###### EventTarget parameters

|     |     |     |
| --- | --- | --- |
| `firehose` | [EventTargetFirehose](#api-event-destinations-create-parameters-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-create-parameters-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-create-parameters-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

###### EventTargetFirehose parameters

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-create-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

###### AWSAuth parameters

|     |     |     |
| --- | --- | --- |
| `role` | [AWSRole](#api-event-destinations-create-parameters-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-create-parameters-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

###### AWSRole parameters

|     |     |     |
| --- | --- | --- |
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

###### AWSCredentials parameters

|     |     |     |
| --- | --- | --- |
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

###### EventTargetKinesis parameters

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-create-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

###### EventTargetCloudwatchLogs parameters

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-create-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ed_281VSy3PDTkkZil3Oz6X2ycCjZu",
      "metadata": "{\"environment\":\"dev\"}",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "kinesis dev stream",
      "format": "json",
      "target": {
        "firehose": null,
        "kinesis": {
          "auth": {
            "role": {
              "role_arn": "arn:aws:iam::123456789012:role/example"
            },
            "creds": null
          },
          "stream_arn": "arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"
        },
        "cloudwatch_logs": null
      },
      "uri": "https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-create-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

###### EventTarget fields

|     |     |     |
| --- | --- | --- |
| `firehose` | [EventTargetFirehose](#api-event-destinations-create-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-create-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-create-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

###### EventTargetFirehose fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-create-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

###### AWSAuth fields

|     |     |     |
| --- | --- | --- |
| `role` | [AWSRole](#api-event-destinations-create-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-create-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

###### AWSRole fields

|     |     |     |
| --- | --- | --- |
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

###### AWSCredentials fields

|     |     |     |
| --- | --- | --- |
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

###### EventTargetKinesis fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-create-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

###### EventTargetCloudwatchLogs fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-create-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |

### Delete Event Destination

Delete an Event Destination. If the Event Destination is still referenced by an Event Subscription.

##### Request

DELETE/event_destinations/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu

##### Response

Returns a 204 response with no body on success

### Get Event Destination

Get detailed information about an Event Destination by ID.

##### Request

GET/event_destinations/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ed_281VSy3PDTkkZil3Oz6X2ycCjZu",
      "metadata": "{\"environment\":\"dev\", \"stream\":1}",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "kinesis dev stream 1 of 3",
      "format": "json",
      "target": {
        "firehose": null,
        "kinesis": {
          "auth": {
            "role": {
              "role_arn": "arn:aws:iam::123456789012:role/example"
            },
            "creds": null
          },
          "stream_arn": "arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"
        },
        "cloudwatch_logs": null
      },
      "uri": "https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-get-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

###### EventTarget fields

|     |     |     |
| --- | --- | --- |
| `firehose` | [EventTargetFirehose](#api-event-destinations-get-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-get-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-get-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

###### EventTargetFirehose fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-get-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

###### AWSAuth fields

|     |     |     |
| --- | --- | --- |
| `role` | [AWSRole](#api-event-destinations-get-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-get-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

###### AWSRole fields

|     |     |     |
| --- | --- | --- |
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

###### AWSCredentials fields

|     |     |     |
| --- | --- | --- |
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

###### EventTargetKinesis fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-get-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

###### EventTargetCloudwatchLogs fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-get-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |

### List Event Destinations

List all Event Destinations on this account.

##### Request

GET/event_destinations

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_destinations

##### Response

Returns a 200 response on success

###### Example Response

    {
      "event_destinations": [
        {
          "id": "ed_281VSy3PDTkkZil3Oz6X2ycCjZu",
          "metadata": "{\"environment\":\"dev\"}",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "kinesis dev stream",
          "format": "json",
          "target": {
            "firehose": null,
            "kinesis": {
              "auth": {
                "role": {
                  "role_arn": "arn:aws:iam::123456789012:role/example"
                },
                "creds": null
              },
              "stream_arn": "arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"
            },
            "cloudwatch_logs": null
          },
          "uri": "https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu"
        }
      ],
      "uri": "https://api.ngrok.com/event_destinations",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `event_destinations` | [EventDestination](#api-event-destinations-list-fields-event-destination) | The list of all Event Destinations on this account. |
| `uri` | string | URI of the Event Destinations list API resource. |
| `next_page_uri` | string | URI of the next page, or null if there is no next page. |

###### EventDestination fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-list-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

###### EventTarget fields

|     |     |     |
| --- | --- | --- |
| `firehose` | [EventTargetFirehose](#api-event-destinations-list-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-list-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-list-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

###### EventTargetFirehose fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-list-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

###### AWSAuth fields

|     |     |     |
| --- | --- | --- |
| `role` | [AWSRole](#api-event-destinations-list-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-list-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

###### AWSRole fields

|     |     |     |
| --- | --- | --- |
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

###### AWSCredentials fields

|     |     |     |
| --- | --- | --- |
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

###### EventTargetKinesis fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-list-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

###### EventTargetCloudwatchLogs fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-list-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |

### Update Event Destination

Update attributes of an Event Destination.

##### Request

PATCH/event_destinations/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\":\"dev\", \"stream\":1}","description":"kinesis dev stream 1 of 3"}' \
    https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-update-parameters-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |

###### EventTarget parameters

|     |     |     |
| --- | --- | --- |
| `firehose` | [EventTargetFirehose](#api-event-destinations-update-parameters-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-update-parameters-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-update-parameters-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

###### EventTargetFirehose parameters

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-update-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

###### AWSAuth parameters

|     |     |     |
| --- | --- | --- |
| `role` | [AWSRole](#api-event-destinations-update-parameters-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-update-parameters-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

###### AWSRole parameters

|     |     |     |
| --- | --- | --- |
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

###### AWSCredentials parameters

|     |     |     |
| --- | --- | --- |
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

###### EventTargetKinesis parameters

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-update-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

###### EventTargetCloudwatchLogs parameters

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-update-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ed_281VSy3PDTkkZil3Oz6X2ycCjZu",
      "metadata": "{\"environment\":\"dev\", \"stream\":1}",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "kinesis dev stream 1 of 3",
      "format": "json",
      "target": {
        "firehose": null,
        "kinesis": {
          "auth": {
            "role": {
              "role_arn": "arn:aws:iam::123456789012:role/example"
            },
            "creds": null
          },
          "stream_arn": "arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"
        },
        "cloudwatch_logs": null
      },
      "uri": "https://api.ngrok.com/event_destinations/ed_281VSy3PDTkkZil3Oz6X2ycCjZu"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-update-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

###### EventTarget fields

|     |     |     |
| --- | --- | --- |
| `firehose` | [EventTargetFirehose](#api-event-destinations-update-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-update-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-update-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

###### EventTargetFirehose fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-update-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

###### AWSAuth fields

|     |     |     |
| --- | --- | --- |
| `role` | [AWSRole](#api-event-destinations-update-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-update-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

###### AWSRole fields

|     |     |     |
| --- | --- | --- |
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

###### AWSCredentials fields

|     |     |     |
| --- | --- | --- |
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

###### EventTargetKinesis fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-update-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

###### EventTargetCloudwatchLogs fields

|     |     |     |
| --- | --- | --- |
| `auth` | [AWSAuth](#api-event-destinations-update-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |

### Create Event Source

Add an additional type for which this event subscription will trigger

##### Request

POST/event\_subscriptions/{subscription\_id}/sources

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"type":"ip_policy_updated.v0"}' \
    https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources

###### Parameters

|     |     |     |
| --- | --- | --- |
| `subscription_id` | string | The unique identifier for the Event Subscription that this Event Source is attached to. |
| `type` | string | Type of event for which an event subscription will trigger |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "type": "ip_policy_updated.v0",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

### Delete Event Source

Remove a type for which this event subscription will trigger

##### Request

DELETE/event\_subscriptions/{subscription\_id}/sources/{type}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0

##### Response

Returns a 204 response with no body on success

### Get Event Source

Get the details for a given type that triggers for the given event subscription

##### Request

GET/event\_subscriptions/{subscription\_id}/sources/{type}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0

##### Response

Returns a 200 response on success

###### Example Response

    {
      "type": "ip_policy_updated.v0",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

### List Event Sources

List the types for which this event subscription will trigger

##### Request

GET/event\_subscriptions/{subscription\_id}/sources

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources

##### Response

Returns a 200 response on success

###### Example Response

    {
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_created.v0"
        },
        {
          "type": "ip_policy_updated.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0"
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `sources` | [EventSource](#api-event-sources-list-fields-event-source) | The list of all Event Sources for an Event Subscription |
| `uri` | string | URI of the next page, or null if there is no next page. |

###### EventSource fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

### Update Event Source

Update the type for which this event subscription will trigger

##### Request

PATCH/event\_subscriptions/{subscription\_id}/sources/{type}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{}' \
    https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0

###### Parameters

|     |     |     |
| --- | --- | --- |
| `subscription_id` | string | The unique identifier for the Event Subscription that this Event Source is attached to. |
| `type` | string | Type of event for which an event subscription will trigger |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "type": "ip_policy_updated.v0",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSyijeipwrHZ5SS9tNQT8Hq3/sources/ip_policy_updated.v0"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

### Create Event Subscription

Create an Event Subscription.

##### Request

POST/event_subscriptions

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"staging\"}","description":"ip policy creations","sources":[{"type":"ip_policy_created.v0"}],"destination_ids":["ed_281VSzqns5VwrsiwF0tP3g1fYX5"]}' \
    https://api.ngrok.com/event_subscriptions

###### Parameters

|     |     |     |
| --- | --- | --- |
| `metadata` | string | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| `description` | string | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| `sources` | [EventSourceReplace](#api-event-subscriptions-create-parameters-event-source-replace) | Sources containing the types for which this event subscription will trigger |
| `destination_ids` | List&lt;string&gt; | A list of Event Destination IDs which should be used for this Event Subscription. |

###### EventSourceReplace parameters

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "esb_281VSzYRZ1FetGZzTIb387nk0KX",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX",
      "created_at": "2022-04-19T16:01:22Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "ip policy creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_281VSzqns5VwrsiwF0tP3g1fYX5",
          "uri": "https://api.ngrok.com/event_destinations/ed_281VSzqns5VwrsiwF0tP3g1fYX5"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Subscription. |
| `uri` | string | URI of the Event Subscription API resource. |
| `created_at` | string | When the Event Subscription was created (RFC 3339 format). |
| `metadata` | string | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| `description` | string | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| `sources` | [EventSource](#api-event-subscriptions-create-fields-event-source) | Sources containing the types for which this event subscription will trigger |
| `destinations` | [Ref](#api-event-subscriptions-create-fields-ref) | Destinations to which these events will be sent |

###### EventSource fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete Event Subscription

Delete an Event Subscription.

##### Request

DELETE/event_subscriptions/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX

##### Response

Returns a 204 response with no body on success

### Get Event Subscription

Get an Event Subscription by ID.

##### Request

GET/event_subscriptions/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "esb_281VSzYRZ1FetGZzTIb387nk0KX",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX",
      "created_at": "2022-04-19T16:01:22Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "IP Policy Creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_281VSzqns5VwrsiwF0tP3g1fYX5",
          "uri": "https://api.ngrok.com/event_destinations/ed_281VSzqns5VwrsiwF0tP3g1fYX5"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Subscription. |
| `uri` | string | URI of the Event Subscription API resource. |
| `created_at` | string | When the Event Subscription was created (RFC 3339 format). |
| `metadata` | string | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| `description` | string | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| `sources` | [EventSource](#api-event-subscriptions-get-fields-event-source) | Sources containing the types for which this event subscription will trigger |
| `destinations` | [Ref](#api-event-subscriptions-get-fields-ref) | Destinations to which these events will be sent |

###### EventSource fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### List Event Subscriptions

List this Account’s Event Subscriptions.

##### Request

GET/event_subscriptions

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/event_subscriptions

##### Response

Returns a 200 response on success

###### Example Response

    {
      "event_subscriptions": [
        {
          "id": "esb_281VSzYRZ1FetGZzTIb387nk0KX",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX",
          "created_at": "2022-04-19T16:01:22Z",
          "metadata": "{\"environment\": \"staging\"}",
          "description": "ip policy creations",
          "sources": [
            {
              "type": "ip_policy_created.v0",
              "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX/sources/ip_policy_created.v0"
            }
          ],
          "destinations": [
            {
              "id": "ed_281VSzqns5VwrsiwF0tP3g1fYX5",
              "uri": "https://api.ngrok.com/event_destinations/ed_281VSzqns5VwrsiwF0tP3g1fYX5"
            }
          ]
        }
      ],
      "uri": "https://api.ngrok.com/event_subscriptions",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `event_subscriptions` | [EventSubscription](#api-event-subscriptions-list-fields-event-subscription) | The list of all Event Subscriptions on this account. |
| `uri` | string | URI of the Event Subscriptions list API resource. |
| `next_page_uri` | string | URI of next page, or null if there is no next page. |

###### EventSubscription fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Subscription. |
| `uri` | string | URI of the Event Subscription API resource. |
| `created_at` | string | When the Event Subscription was created (RFC 3339 format). |
| `metadata` | string | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| `description` | string | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| `sources` | [EventSource](#api-event-subscriptions-list-fields-event-source) | Sources containing the types for which this event subscription will trigger |
| `destinations` | [Ref](#api-event-subscriptions-list-fields-ref) | Destinations to which these events will be sent |

###### EventSource fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Update Event Subscription

Update an Event Subscription.

##### Request

PATCH/event_subscriptions/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"IP Policy Creations"}' \
    https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Subscription. |
| `metadata` | string | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| `description` | string | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| `sources` | [EventSourceReplace](#api-event-subscriptions-update-parameters-event-source-replace) | Sources containing the types for which this event subscription will trigger |
| `destination_ids` | List&lt;string&gt; | A list of Event Destination IDs which should be used for this Event Subscription. |

###### EventSourceReplace parameters

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "esb_281VSzYRZ1FetGZzTIb387nk0KX",
      "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX",
      "created_at": "2022-04-19T16:01:22Z",
      "metadata": "{\"environment\": \"staging\"}",
      "description": "IP Policy Creations",
      "sources": [
        {
          "type": "ip_policy_created.v0",
          "uri": "https://api.ngrok.com/event_subscriptions/esb_281VSzYRZ1FetGZzTIb387nk0KX/sources/ip_policy_created.v0"
        }
      ],
      "destinations": [
        {
          "id": "ed_281VSzqns5VwrsiwF0tP3g1fYX5",
          "uri": "https://api.ngrok.com/event_destinations/ed_281VSzqns5VwrsiwF0tP3g1fYX5"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | Unique identifier for this Event Subscription. |
| `uri` | string | URI of the Event Subscription API resource. |
| `created_at` | string | When the Event Subscription was created (RFC 3339 format). |
| `metadata` | string | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| `description` | string | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| `sources` | [EventSource](#api-event-subscriptions-update-fields-event-source) | Sources containing the types for which this event subscription will trigger |
| `destinations` | [Ref](#api-event-subscriptions-update-fields-ref) | Destinations to which these events will be sent |

###### EventSource fields

|     |     |     |
| --- | --- | --- |
| `type` | string | Type of event for which an event subscription will trigger |
| `uri` | string | URI of the Event Source API resource. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Create Failover Backend

Create a new Failover backend

##### Request

POST/backends/failover

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme failover","metadata":"{\"environment\": \"staging\"}","backends":["bkdhr_281VT4v8O6v9WX2yjIKidVuFWNc"]}' \
    https://api.ngrok.com/backends/failover

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | List&lt;string&gt; | the ids of the child backends in order |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
      "uri": "https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme failover",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": [
        "bkdhr_281VT4v8O6v9WX2yjIKidVuFWNc"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Failover backend |
| `uri` | string | URI of the FailoverBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | List&lt;string&gt; | the ids of the child backends in order |

### Delete Failover Backend

Delete a Failover backend by ID.

##### Request

DELETE/backends/failover/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq

##### Response

Returns a 204 response with no body on success

### Get Failover Backend

Get detailed information about a Failover backend by ID

##### Request

GET/backends/failover/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
      "uri": "https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme failover",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": [
        "bkdhr_281VT4v8O6v9WX2yjIKidVuFWNc"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Failover backend |
| `uri` | string | URI of the FailoverBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | List&lt;string&gt; | the ids of the child backends in order |

### List Failover Backends

List all Failover backends on this account

##### Request

GET/backends/failover

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/failover

##### Response

Returns a 200 response on success

###### Example Response

    {
      "backends": [
        {
          "id": "bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
          "uri": "https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
          "created_at": "2022-04-19T16:01:23Z",
          "description": "acme failover",
          "metadata": "{\"environment\": \"staging\"}",
          "backends": [
            "bkdhr_281VT4v8O6v9WX2yjIKidVuFWNc"
          ]
        }
      ],
      "uri": "https://api.ngrok.com/backends/failover",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `backends` | [FailoverBackend](#api-failover-backends-list-fields-failover-backend) | the list of all Failover backends on this account |
| `uri` | string | URI of the Failover backends list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### FailoverBackend fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Failover backend |
| `uri` | string | URI of the FailoverBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | List&lt;string&gt; | the ids of the child backends in order |

### Update Failover Backend

Update Failover backend by ID

##### Request

PATCH/backends/failover/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | List&lt;string&gt; | the ids of the child backends in order |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
      "uri": "https://api.ngrok.com/backends/failover/bkdfo_281VTBNXZyW72ucnIvLmYbzXRPq",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme failover",
      "metadata": "{\"environment\": \"production\"}",
      "backends": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Failover backend |
| `uri` | string | URI of the FailoverBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | List&lt;string&gt; | the ids of the child backends in order |

### Create HTTP Response Backend

##### Request

POST/backends/http_response

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme http response","metadata":"{\"environment\": \"staging\"}","body":"I'm a teapot","headers":{"Content-Type":"text/plain"},"status_code":418}' \
    https://api.ngrok.com/backends/http_response

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
      "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme http response",
      "metadata": "{\"environment\": \"staging\"}",
      "body": "I'm a teapot",
      "headers": {
        "content-type": "text/plain"
      },
      "status_code": 418
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |

### Delete HTTP Response Backend

##### Request

DELETE/backends/http_response/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD

##### Response

Returns a 204 response with no body on success

### Get HTTP Response Backend

##### Request

GET/backends/http_response/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
      "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme http response",
      "metadata": "{\"environment\": \"staging\"}",
      "body": "I'm a teapot",
      "headers": {
        "content-type": "text/plain"
      },
      "status_code": 418
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |

### List HTTP Response Backends

##### Request

GET/backends/http_response

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/http_response

##### Response

Returns a 200 response on success

###### Example Response

    {
      "backends": [
        {
          "id": "bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
          "created_at": "2022-04-19T16:01:23Z",
          "description": "acme http response",
          "metadata": "{\"environment\": \"staging\"}",
          "body": "I'm a teapot",
          "headers": {
            "content-type": "text/plain"
          },
          "status_code": 418
        },
        {
          "id": "bkdhr_281VT4v8O6v9WX2yjIKidVuFWNc",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VT4v8O6v9WX2yjIKidVuFWNc",
          "created_at": "2022-04-19T16:01:23Z",
          "description": "",
          "metadata": "",
          "body": "one",
          "headers": null,
          "status_code": 200
        },
        {
          "id": "bkdhr_281VSdmzh7sDOqD0SKztgPXP141",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VSdmzh7sDOqD0SKztgPXP141",
          "created_at": "2022-04-19T16:01:19Z",
          "description": "",
          "metadata": "",
          "body": "one",
          "headers": null,
          "status_code": 200
        }
      ],
      "uri": "https://api.ngrok.com/backends/http_response",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `backends` | [HTTPResponseBackend](#api-http-response-backends-list-fields-http-response-backend) |     |
| `uri` | string |     |
| `next_page_uri` | string |     |

###### HTTPResponseBackend fields

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |

### Update HTTP Response Backend

##### Request

PATCH/backends/http_response/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
      "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VT7cQ7vQwQ6CkKsF2YlnFCwD",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme http response",
      "metadata": "{\"environment\": \"production\"}",
      "body": "I'm a teapot",
      "headers": {
        "content-type": "text/plain"
      },
      "status_code": 418
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |

### Replace HTTPS Edge Mutual TLS Module

##### Request

PUT/edges/https/{id}/mutual_tls

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"certificate_authority_ids":["ca_281VTOvsYutJN79tshryTFd8YcT"]}' \
    https://api.ngrok.com/edges/https/edghts_281VTOIZuRn6l6t3RbPs90EA84V/mutual_tls

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "certificate_authorities": [
        {
          "id": "ca_281VTOvsYutJN79tshryTFd8YcT",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VTOvsYutJN79tshryTFd8YcT"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-https-edge-mutual-tls-module-replace-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get HTTPS Edge Mutual TLS Module

##### Request

GET/edges/https/{id}/mutual_tls

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTOIZuRn6l6t3RbPs90EA84V/mutual_tls

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "certificate_authorities": [
        {
          "id": "ca_281VTOvsYutJN79tshryTFd8YcT",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VTOvsYutJN79tshryTFd8YcT"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-https-edge-mutual-tls-module-get-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete HTTPS Edge Mutual TLS Module

##### Request

DELETE/edges/https/{id}/mutual_tls

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTOIZuRn6l6t3RbPs90EA84V/mutual_tls

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Backend Module

##### Request

PUT/edges/https/{edge_id}/routes/{id}/backend

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"backend_id":"bkdtg_281VT5n7vwSluBr7DQYj1s3CBDL"}' \
    https://api.ngrok.com/edges/https/edghts_281VTBTkVvIKR5LBqGWQHYq102f/routes/edghtsrt_281VTAkONRZIfHtyT0jU4xjMghW/backend

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "backend": {
        "id": "bkdtg_281VT5n7vwSluBr7DQYj1s3CBDL",
        "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT5n7vwSluBr7DQYj1s3CBDL"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edge-route-backend-module-replace-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get HTTPS Edge Route Backend Module

##### Request

GET/edges/https/{edge_id}/routes/{id}/backend

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTBTkVvIKR5LBqGWQHYq102f/routes/edghtsrt_281VTAkONRZIfHtyT0jU4xjMghW/backend

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "backend": {
        "id": "bkdtg_281VT5n7vwSluBr7DQYj1s3CBDL",
        "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT5n7vwSluBr7DQYj1s3CBDL"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edge-route-backend-module-get-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete HTTPS Edge Route Backend Module

##### Request

DELETE/edges/https/{edge_id}/routes/{id}/backend

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTBTkVvIKR5LBqGWQHYq102f/routes/edghtsrt_281VTAkONRZIfHtyT0jU4xjMghW/backend

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Circuit Breaker Module

##### Request

PUT/edges/https/{edge\_id}/routes/{id}/circuit\_breaker

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"tripped_duration":120,"rolling_window":300,"num_buckets":5,"volume_threshold":20,"error_threshold_percentage":0.2}' \
    https://api.ngrok.com/edges/https/edghts_281VTAlbmmCtnz8aIQ4rZ9Watd0/routes/edghtsrt_281VTF1H2vBrsGv4xB7mQHSjCe6/circuit_breaker

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "tripped_duration": 120,
      "rolling_window": 300,
      "num_buckets": 5,
      "volume_threshold": 20,
      "error_threshold_percentage": 0.2
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

### Get HTTPS Edge Route Circuit Breaker Module

##### Request

GET/edges/https/{edge\_id}/routes/{id}/circuit\_breaker

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTAlbmmCtnz8aIQ4rZ9Watd0/routes/edghtsrt_281VTF1H2vBrsGv4xB7mQHSjCe6/circuit_breaker

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "tripped_duration": 120,
      "rolling_window": 300,
      "num_buckets": 5,
      "volume_threshold": 20,
      "error_threshold_percentage": 0.2
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

### Delete HTTPS Edge Route Circuit Breaker Module

##### Request

DELETE/edges/https/{edge\_id}/routes/{id}/circuit\_breaker

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTAlbmmCtnz8aIQ4rZ9Watd0/routes/edghtsrt_281VTF1H2vBrsGv4xB7mQHSjCe6/circuit_breaker

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Compression Module

##### Request

PUT/edges/https/{edge_id}/routes/{id}/compression

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true}' \
    https://api.ngrok.com/edges/https/edghts_281VTICZn3JxyemtDzdDponcV1i/routes/edghtsrt_281VTFoeCkjSj68dhokLNbeea4O/compression

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Get HTTPS Edge Route Compression Module

##### Request

GET/edges/https/{edge_id}/routes/{id}/compression

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTICZn3JxyemtDzdDponcV1i/routes/edghtsrt_281VTFoeCkjSj68dhokLNbeea4O/compression

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Delete HTTPS Edge Route Compression Module

##### Request

DELETE/edges/https/{edge_id}/routes/{id}/compression

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTICZn3JxyemtDzdDponcV1i/routes/edghtsrt_281VTFoeCkjSj68dhokLNbeea4O/compression

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route IP Restriction Module

##### Request

PUT/edges/https/{edge\_id}/routes/{id}/ip\_restriction

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"ip_policy_ids":["ipp_281VTFiwLfnUYsZXlRtcRje52JD","ipp_281VTH2Bo2hFnVQ7Tyu4mart1cf"]}' \
    https://api.ngrok.com/edges/https/edghts_281VTI3xOHmd0aG61mAvGP62Z6o/routes/edghtsrt_281VTHX9DkHujAr6IyXV6o2fYum/ip_restriction

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "ip_policies": [
        {
          "id": "ipp_281VTFiwLfnUYsZXlRtcRje52JD",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTFiwLfnUYsZXlRtcRje52JD"
        },
        {
          "id": "ipp_281VTH2Bo2hFnVQ7Tyu4mart1cf",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTH2Bo2hFnVQ7Tyu4mart1cf"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edge-route-ip-restriction-module-replace-fields-ref) |     |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get HTTPS Edge Route IP Restriction Module

##### Request

GET/edges/https/{edge\_id}/routes/{id}/ip\_restriction

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTI3xOHmd0aG61mAvGP62Z6o/routes/edghtsrt_281VTHX9DkHujAr6IyXV6o2fYum/ip_restriction

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "ip_policies": [
        {
          "id": "ipp_281VTFiwLfnUYsZXlRtcRje52JD",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTFiwLfnUYsZXlRtcRje52JD"
        },
        {
          "id": "ipp_281VTH2Bo2hFnVQ7Tyu4mart1cf",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTH2Bo2hFnVQ7Tyu4mart1cf"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edge-route-ip-restriction-module-get-fields-ref) |     |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete HTTPS Edge Route IP Restriction Module

##### Request

DELETE/edges/https/{edge\_id}/routes/{id}/ip\_restriction

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTI3xOHmd0aG61mAvGP62Z6o/routes/edghtsrt_281VTHX9DkHujAr6IyXV6o2fYum/ip_restriction

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route OAuth Module

##### Request

PUT/edges/https/{edge_id}/routes/{id}/oauth

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"provider":{"google":{"client_id":"client-id","client_secret":"client-secret","scopes":["profile","email","https://www.googleapis.com/auth/gmail.compose"],"email_addresses":["alan@example.com"]}}}' \
    https://api.ngrok.com/edges/https/edghts_281VTEQGEkE0JRZMAQyfOhLX9U2/routes/edghtsrt_281VTDhQz1Pn2Q6vtJMpo3jNhbm/oauth

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider parameters

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edge-route-o-auth-module-replace-parameters-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "provider": {
        "github": null,
        "facebook": null,
        "microsoft": null,
        "google": {
          "client_id": "client-id",
          "client_secret": "client-secret",
          "scopes": [
            "profile",
            "email",
            "https://www.googleapis.com/auth/gmail.compose"
          ],
          "email_addresses": [
            "alan@example.com"
          ],
          "email_domains": []
        }
      },
      "options_passthrough": false,
      "cookie_prefix": "ngrok.",
      "inactivity_timeout": 0,
      "maximum_duration": 0,
      "auth_check_interval": 0
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edge-route-o-auth-module-replace-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

### Get HTTPS Edge Route OAuth Module

##### Request

GET/edges/https/{edge_id}/routes/{id}/oauth

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTEQGEkE0JRZMAQyfOhLX9U2/routes/edghtsrt_281VTDhQz1Pn2Q6vtJMpo3jNhbm/oauth

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "provider": {
        "github": null,
        "facebook": null,
        "microsoft": null,
        "google": {
          "client_id": "client-id",
          "client_secret": "client-secret",
          "scopes": [
            "profile",
            "email",
            "https://www.googleapis.com/auth/gmail.compose"
          ],
          "email_addresses": [
            "alan@example.com"
          ],
          "email_domains": []
        }
      },
      "options_passthrough": false,
      "cookie_prefix": "ngrok.",
      "inactivity_timeout": 0,
      "maximum_duration": 0,
      "auth_check_interval": 0
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edge-route-o-auth-module-get-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

### Delete HTTPS Edge Route OAuth Module

##### Request

DELETE/edges/https/{edge_id}/routes/{id}/oauth

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTEQGEkE0JRZMAQyfOhLX9U2/routes/edghtsrt_281VTDhQz1Pn2Q6vtJMpo3jNhbm/oauth

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route OIDC Module

##### Request

PUT/edges/https/{edge_id}/routes/{id}/oidc

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"issuer":"https://accounts.google.com","client_id":"some-client-id","client_secret":"some-client-secret","scopes":["profile"]}' \
    https://api.ngrok.com/edges/https/edghts_281VTJwvbSCgr00EB0BsF3AZxDh/routes/edghtsrt_281VTGcUEoT0QK6I4tWaIQV7duR/oidc

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "options_passthrough": false,
      "cookie_prefix": "",
      "inactivity_timeout": 0,
      "maximum_duration": 0,
      "issuer": "https://accounts.google.com",
      "client_id": "some-client-id",
      "client_secret": "some-client-secret",
      "scopes": [
        "profile"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

### Get HTTPS Edge Route OIDC Module

##### Request

GET/edges/https/{edge_id}/routes/{id}/oidc

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTJwvbSCgr00EB0BsF3AZxDh/routes/edghtsrt_281VTGcUEoT0QK6I4tWaIQV7duR/oidc

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "options_passthrough": false,
      "cookie_prefix": "",
      "inactivity_timeout": 0,
      "maximum_duration": 0,
      "issuer": "https://accounts.google.com",
      "client_id": "some-client-id",
      "client_secret": "some-client-secret",
      "scopes": [
        "profile"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

### Delete HTTPS Edge Route OIDC Module

##### Request

DELETE/edges/https/{edge_id}/routes/{id}/oidc

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTJwvbSCgr00EB0BsF3AZxDh/routes/edghtsrt_281VTGcUEoT0QK6I4tWaIQV7duR/oidc

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Request Headers Module

##### Request

PUT/edges/https/{edge\_id}/routes/{id}/request\_headers

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}' \
    https://api.ngrok.com/edges/https/edghts_281VTFOBEJOuQ5dXQc8v8uRkwh9/routes/edghtsrt_281VTESQEq3fmk37WsXyk4wcpC1/request_headers

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "add": {
        "x-frontend": "ngrok"
      },
      "remove": [
        "cache-control"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

### Get HTTPS Edge Route Request Headers Module

##### Request

GET/edges/https/{edge\_id}/routes/{id}/request\_headers

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTFOBEJOuQ5dXQc8v8uRkwh9/routes/edghtsrt_281VTESQEq3fmk37WsXyk4wcpC1/request_headers

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "add": {
        "x-frontend": "ngrok"
      },
      "remove": [
        "cache-control"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

### Delete HTTPS Edge Route Request Headers Module

##### Request

DELETE/edges/https/{edge\_id}/routes/{id}/request\_headers

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTFOBEJOuQ5dXQc8v8uRkwh9/routes/edghtsrt_281VTESQEq3fmk37WsXyk4wcpC1/request_headers

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Response Headers Module

##### Request

PUT/edges/https/{edge\_id}/routes/{id}/response\_headers

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"add":{"Content-Security-Policy":"script-src 'self'","X-Frame-Options":"DENY"}}' \
    https://api.ngrok.com/edges/https/edghts_281VTDMn17IPi6TcwF9U2h06VJG/routes/edghtsrt_281VTDDL1TZPcbooRrnkrSgAwBw/response_headers

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "add": {
        "content-security-policy": "script-src 'self'",
        "x-frame-options": "DENY"
      },
      "remove": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

### Get HTTPS Edge Route Response Headers Module

##### Request

GET/edges/https/{edge\_id}/routes/{id}/response\_headers

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTDMn17IPi6TcwF9U2h06VJG/routes/edghtsrt_281VTDDL1TZPcbooRrnkrSgAwBw/response_headers

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "add": {
        "content-security-policy": "script-src 'self'",
        "x-frame-options": "DENY"
      },
      "remove": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

### Delete HTTPS Edge Route Response Headers Module

##### Request

DELETE/edges/https/{edge\_id}/routes/{id}/response\_headers

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTDMn17IPi6TcwF9U2h06VJG/routes/edghtsrt_281VTDDL1TZPcbooRrnkrSgAwBw/response_headers

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route SAML Module

##### Request

PUT/edges/https/{edge_id}/routes/{id}/saml

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"idp_metadata":"\n\u003cEntityDescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" validUntil=\"2020-09-14T12:53:23.691Z\" cacheDuration=\"PT1M\" entityID=\"http://127.0.0.1:12345/metadata\"\u003e\u003cIDPSSODescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" protocolSupportEnumeration=\"urn:oasis:names:tc:SAML:2.0:protocol\"\u003e\u003cNameIDFormat\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\u003c/NameIDFormat\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003c/IDPSSODescriptor\u003e\u003c/EntityDescriptor\u003e\n"}' \
    https://api.ngrok.com/edges/https/edghts_281VTNsKKnioB1QNHXsRoeWCPPc/routes/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/saml

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "options_passthrough": false,
      "cookie_prefix": "",
      "inactivity_timeout": 0,
      "maximum_duration": 0,
      "idp_metadata_url": "",
      "idp_metadata": "\n\u003cEntityDescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" validUntil=\"2020-09-14T12:53:23.691Z\" cacheDuration=\"PT1M\" entityID=\"http://127.0.0.1:12345/metadata\"\u003e\u003cIDPSSODescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" protocolSupportEnumeration=\"urn:oasis:names:tc:SAML:2.0:protocol\"\u003e\u003cNameIDFormat\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\u003c/NameIDFormat\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003c/IDPSSODescriptor\u003e\u003c/EntityDescriptor\u003e\n",
      "force_authn": false,
      "allow_idp_initiated": true,
      "authorized_groups": [],
      "entity_id": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE",
      "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/acs",
      "single_logout_url": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/slo",
      "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIEBDCCAuygAwIBAgIRAO8Qc5nv2WIuBG/Xt0JmKMQwDQYJKoZIhvcNAQELBQAw\ngaAxTjBMBgNVBAoMRWh0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vk\nZ2h0c3J0XzI4MVZUTzJhdmJTcG54Yk5CeGNJOXk0Y2JCRTFOMEwGA1UEAwxFaHR0\ncHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWRnaHRzcnRfMjgxVlRPMmF2\nYlNwbnhiTkJ4Y0k5eTRjYkJFMCAXDTIyMDQxOTE2MDEyNVoYDzIwNTcwNDEwMTYw\nMTI1WjCBoDFOMEwGA1UECgxFaHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3Nh\nbWwvZWRnaHRzcnRfMjgxVlRPMmF2YlNwbnhiTkJ4Y0k5eTRjYkJFMU4wTAYDVQQD\nDEVodHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lZGdodHNydF8yODFW\nVE8yYXZiU3BueGJOQnhjSTl5NGNiQkUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQDJExlOgv4FTjqnaqMnBORl6rGw5oqW0/Vi4kgGrj/NHHIHhtvIm8p3\npTJwpJCiwVEGUC8yV0NEBD/xHatE1YFO0UuwqoH82W8RAsSUFjHyGRHgp/5eQ8P+\ncz5C/4BQaEPU+mfEzRSnfRWxAWc7eHKI/t89p5+RKpXj2rtLg46Noqa2zWPOvqmV\nFZPPpammR7uueGDhj+S/XOqFSM2DqQkKAIIyalRFUDi5jkv+rRrFZ7vkdkfgTkP4\nZAPXlJIWMgoOhB5Mev3YsGDcQU2ACmlwEIuoTGcaH4ZB0kHZ4cEqLAnKHX2SSKKh\n2xisHBiq/ZZobzKhzDdRwEbT7DG0T5w3AgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIH\ngDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEB\nCwUAA4IBAQBYXOe1pMcIIcDd6HGzyW9ssFqwww3aU8ZYkfjN1GM3+3yfQjuyUUFR\nmNntZlMaKDvqM+AVGiRvXjneOhvEzdPv4Dbv5jnqyZd6Nc7AByjvYPi1kTZPiEQ+\nN+Pp7gA+D6jPMqi/fBOSdjE0KXYuV/q2dF9FoNlYIiGCs9ylNbeaBUodjEbBUdMr\nJ2/KYBN7iUa5N9W81zqmAgsdO/KrdyznulSQbtm5JtkAW3Y0hkPM5nDDc98GkNKP\n0bESO2fKOciZo+uE7i/7KWxqun4pDPkFDOZ9jm7webZFfvFAgNU9i2s1Ku0JVvdl\n0PbxzZiMpYB2WUT7a26fyBU9sexklM6v\n-----END CERTIFICATE-----\n",
      "metadata_url": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE",
      "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

### Get HTTPS Edge Route SAML Module

##### Request

GET/edges/https/{edge_id}/routes/{id}/saml

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTNsKKnioB1QNHXsRoeWCPPc/routes/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/saml

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "options_passthrough": false,
      "cookie_prefix": "",
      "inactivity_timeout": 0,
      "maximum_duration": 0,
      "idp_metadata_url": "",
      "idp_metadata": "\n\u003cEntityDescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" validUntil=\"2020-09-14T12:53:23.691Z\" cacheDuration=\"PT1M\" entityID=\"http://127.0.0.1:12345/metadata\"\u003e\u003cIDPSSODescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" protocolSupportEnumeration=\"urn:oasis:names:tc:SAML:2.0:protocol\"\u003e\u003cNameIDFormat\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\u003c/NameIDFormat\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003c/IDPSSODescriptor\u003e\u003c/EntityDescriptor\u003e\n",
      "force_authn": false,
      "allow_idp_initiated": true,
      "authorized_groups": [],
      "entity_id": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE",
      "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/acs",
      "single_logout_url": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/slo",
      "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIEBDCCAuygAwIBAgIRAO8Qc5nv2WIuBG/Xt0JmKMQwDQYJKoZIhvcNAQELBQAw\ngaAxTjBMBgNVBAoMRWh0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vk\nZ2h0c3J0XzI4MVZUTzJhdmJTcG54Yk5CeGNJOXk0Y2JCRTFOMEwGA1UEAwxFaHR0\ncHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWRnaHRzcnRfMjgxVlRPMmF2\nYlNwbnhiTkJ4Y0k5eTRjYkJFMCAXDTIyMDQxOTE2MDEyNVoYDzIwNTcwNDEwMTYw\nMTI1WjCBoDFOMEwGA1UECgxFaHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3Nh\nbWwvZWRnaHRzcnRfMjgxVlRPMmF2YlNwbnhiTkJ4Y0k5eTRjYkJFMU4wTAYDVQQD\nDEVodHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lZGdodHNydF8yODFW\nVE8yYXZiU3BueGJOQnhjSTl5NGNiQkUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQDJExlOgv4FTjqnaqMnBORl6rGw5oqW0/Vi4kgGrj/NHHIHhtvIm8p3\npTJwpJCiwVEGUC8yV0NEBD/xHatE1YFO0UuwqoH82W8RAsSUFjHyGRHgp/5eQ8P+\ncz5C/4BQaEPU+mfEzRSnfRWxAWc7eHKI/t89p5+RKpXj2rtLg46Noqa2zWPOvqmV\nFZPPpammR7uueGDhj+S/XOqFSM2DqQkKAIIyalRFUDi5jkv+rRrFZ7vkdkfgTkP4\nZAPXlJIWMgoOhB5Mev3YsGDcQU2ACmlwEIuoTGcaH4ZB0kHZ4cEqLAnKHX2SSKKh\n2xisHBiq/ZZobzKhzDdRwEbT7DG0T5w3AgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIH\ngDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEB\nCwUAA4IBAQBYXOe1pMcIIcDd6HGzyW9ssFqwww3aU8ZYkfjN1GM3+3yfQjuyUUFR\nmNntZlMaKDvqM+AVGiRvXjneOhvEzdPv4Dbv5jnqyZd6Nc7AByjvYPi1kTZPiEQ+\nN+Pp7gA+D6jPMqi/fBOSdjE0KXYuV/q2dF9FoNlYIiGCs9ylNbeaBUodjEbBUdMr\nJ2/KYBN7iUa5N9W81zqmAgsdO/KrdyznulSQbtm5JtkAW3Y0hkPM5nDDc98GkNKP\n0bESO2fKOciZo+uE7i/7KWxqun4pDPkFDOZ9jm7webZFfvFAgNU9i2s1Ku0JVvdl\n0PbxzZiMpYB2WUT7a26fyBU9sexklM6v\n-----END CERTIFICATE-----\n",
      "metadata_url": "https://idp.local-ngrok.com/saml/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE",
      "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

### Delete HTTPS Edge Route SAML Module

##### Request

DELETE/edges/https/{edge_id}/routes/{id}/saml

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTNsKKnioB1QNHXsRoeWCPPc/routes/edghtsrt_281VTO2avbSpnxbNBxcI9y4cbBE/saml

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Webhook Verification Module

##### Request

PUT/edges/https/{edge\_id}/routes/{id}/webhook\_verification

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"provider":"TWILIO","secret":"secret_token"}' \
    https://api.ngrok.com/edges/https/edghts_281VTO7BArEgS26LC5E0slWMt3g/routes/edghtsrt_281VTQ51icCsDPz6T41bNMJXF0Q/webhook_verification

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "provider": "TWILIO",
      "secret": "secret_token"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

### Get HTTPS Edge Route Webhook Verification Module

##### Request

GET/edges/https/{edge\_id}/routes/{id}/webhook\_verification

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTO7BArEgS26LC5E0slWMt3g/routes/edghtsrt_281VTQ51icCsDPz6T41bNMJXF0Q/webhook_verification

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "provider": "TWILIO",
      "secret": "secret_token"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

### Delete HTTPS Edge Route Webhook Verification Module

##### Request

DELETE/edges/https/{edge\_id}/routes/{id}/webhook\_verification

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTO7BArEgS26LC5E0slWMt3g/routes/edghtsrt_281VTQ51icCsDPz6T41bNMJXF0Q/webhook_verification

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge Route Websocket TCP Converter Module

##### Request

PUT/edges/https/{edge\_id}/routes/{id}/websocket\_tcp_converter

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true}' \
    https://api.ngrok.com/edges/https/edghts_281VTQs5x5F20R1aPPCqneRwNgT/routes/edghtsrt_281VTRd1jjHokPCxDz0x3CtQbVW/websocket_tcp_converter

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Get HTTPS Edge Route Websocket TCP Converter Module

##### Request

GET/edges/https/{edge\_id}/routes/{id}/websocket\_tcp_converter

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTQs5x5F20R1aPPCqneRwNgT/routes/edghtsrt_281VTRd1jjHokPCxDz0x3CtQbVW/websocket_tcp_converter

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Delete HTTPS Edge Route Websocket TCP Converter Module

##### Request

DELETE/edges/https/{edge\_id}/routes/{id}/websocket\_tcp_converter

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTQs5x5F20R1aPPCqneRwNgT/routes/edghtsrt_281VTRd1jjHokPCxDz0x3CtQbVW/websocket_tcp_converter

##### Response

Returns a 204 response with no body on success

### Create HTTPS Edge Route

Create an HTTPS Edge Route

##### Request

POST/edges/https/{edge_id}/routes

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"match_type":"path_prefix","match":"/","description":"acme edge route","metadata":"{\"environment\": \"staging\"}"}' \
    https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes

###### Parameters

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackendMutate](#api-edges-https-routes-create-parameters-endpoint-backend-mutate) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-https-routes-create-parameters-endpoint-ip-policy-mutate) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-routes-create-parameters-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-routes-create-parameters-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-routes-create-parameters-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-routes-create-parameters-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-routes-create-parameters-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-routes-create-parameters-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAMLMutate](#api-edges-https-routes-create-parameters-endpoint-saml-mutate) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-routes-create-parameters-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-routes-create-parameters-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackendMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

###### EndpointIPPolicyMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

###### EndpointCircuitBreaker parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-routes-create-parameters-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider parameters

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-routes-create-parameters-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-routes-create-parameters-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-routes-create-parameters-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-routes-create-parameters-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAMLMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "edge_id": "edghts_281VT6kmMfszIxuhVrmwbOPyXxq",
      "id": "edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm",
      "created_at": "2022-04-19T16:01:23Z",
      "match_type": "path_prefix",
      "match": "/",
      "uri": "https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes/edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm",
      "description": "acme edge route",
      "metadata": "{\"environment\": \"staging\"}",
      "backend": null,
      "ip_restriction": null,
      "circuit_breaker": null,
      "compression": null,
      "request_headers": null,
      "response_headers": null,
      "webhook_verification": null,
      "oauth": null,
      "saml": null,
      "oidc": null,
      "websocket_tcp_converter": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-routes-create-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-routes-create-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-routes-create-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-routes-create-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-routes-create-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-routes-create-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-routes-create-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-routes-create-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-routes-create-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-routes-create-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-routes-create-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-routes-create-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-routes-create-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-routes-create-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-routes-create-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-routes-create-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-routes-create-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-routes-create-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Get HTTPS Edge Route

Get an HTTPS Edge Route by ID

##### Request

GET/edges/https/{edge_id}/routes/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes/edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm

##### Response

Returns a 200 response on success

###### Example Response

    {
      "edge_id": "edghts_281VT6kmMfszIxuhVrmwbOPyXxq",
      "id": "edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm",
      "created_at": "2022-04-19T16:01:23Z",
      "match_type": "path_prefix",
      "match": "/",
      "uri": "https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes/edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm",
      "description": "acme edge route",
      "metadata": "{\"environment\": \"staging\"}",
      "backend": null,
      "ip_restriction": null,
      "circuit_breaker": null,
      "compression": null,
      "request_headers": null,
      "response_headers": null,
      "webhook_verification": null,
      "oauth": null,
      "saml": null,
      "oidc": null,
      "websocket_tcp_converter": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-routes-get-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-routes-get-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-routes-get-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-routes-get-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-routes-get-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-routes-get-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-routes-get-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-routes-get-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-routes-get-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-routes-get-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-routes-get-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-routes-get-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-routes-get-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-routes-get-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-routes-get-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-routes-get-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-routes-get-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-routes-get-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Update HTTPS Edge Route

Updates an HTTPS Edge Route by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.

##### Request

PATCH/edges/https/{edge_id}/routes/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes/edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm

###### Parameters

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackendMutate](#api-edges-https-routes-update-parameters-endpoint-backend-mutate) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-https-routes-update-parameters-endpoint-ip-policy-mutate) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-routes-update-parameters-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-routes-update-parameters-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-routes-update-parameters-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-routes-update-parameters-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-routes-update-parameters-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-routes-update-parameters-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAMLMutate](#api-edges-https-routes-update-parameters-endpoint-saml-mutate) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-routes-update-parameters-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-routes-update-parameters-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackendMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

###### EndpointIPPolicyMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

###### EndpointCircuitBreaker parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-routes-update-parameters-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider parameters

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-routes-update-parameters-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-routes-update-parameters-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-routes-update-parameters-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-routes-update-parameters-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle parameters

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAMLMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "edge_id": "edghts_281VT6kmMfszIxuhVrmwbOPyXxq",
      "id": "edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm",
      "created_at": "2022-04-19T16:01:23Z",
      "match_type": "path_prefix",
      "match": "/",
      "uri": "https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes/edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm",
      "description": "",
      "metadata": "{\"environment\": \"production\"}",
      "backend": null,
      "ip_restriction": null,
      "circuit_breaker": null,
      "compression": null,
      "request_headers": null,
      "response_headers": null,
      "webhook_verification": null,
      "oauth": null,
      "saml": null,
      "oidc": null,
      "websocket_tcp_converter": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-routes-update-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-routes-update-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-routes-update-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-routes-update-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-routes-update-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-routes-update-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-routes-update-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-routes-update-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-routes-update-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-routes-update-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-routes-update-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-routes-update-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-routes-update-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-routes-update-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-routes-update-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-routes-update-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-routes-update-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-routes-update-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Delete HTTPS Edge Route

Delete an HTTPS Edge Route by ID

##### Request

DELETE/edges/https/{edge_id}/routes/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VT6kmMfszIxuhVrmwbOPyXxq/routes/edghtsrt_281VTCNKnpg09lT3cayFBtDRFPm

##### Response

Returns a 204 response with no body on success

### Replace HTTPS Edge TLS Termination Module

##### Request

PUT/edges/https/{id}/tls_termination

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"min_version":"1.3"}' \
    https://api.ngrok.com/edges/https/edghts_281VTNCqUW9Q6u0uH0gDA9PRExk/tls_termination

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "terminate_at": "edge",
      "min_version": "1.3"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Get HTTPS Edge TLS Termination Module

##### Request

GET/edges/https/{id}/tls_termination

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTNCqUW9Q6u0uH0gDA9PRExk/tls_termination

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "terminate_at": "edge",
      "min_version": "1.3"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Delete HTTPS Edge TLS Termination Module

##### Request

DELETE/edges/https/{id}/tls_termination

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VTNCqUW9Q6u0uH0gDA9PRExk/tls_termination

##### Response

Returns a 204 response with no body on success

### Create HTTPS Edge

Create an HTTPS Edge

##### Request

POST/edges/https

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme https edge","metadata":"{\"environment\": \"staging\"}","hostports":["example.com:443"]}' \
    https://api.ngrok.com/edges/https

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `mutual_tls` | [EndpointMutualTLSMutate](#api-edges-https-create-parameters-endpoint-mutual-tls-mutate) | edge modules |
| `tls_termination` | [EndpointTLSTerminationAtEdge](#api-edges-https-create-parameters-endpoint-tls-termination-at-edge) |     |

###### EndpointMutualTLSMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

###### EndpointTLSTerminationAtEdge parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edghts_281VT89MbGew8qSxfYqb4CdXGH7",
      "description": "acme https edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-04-19T16:01:23Z",
      "uri": "https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7",
      "hostports": [
        "example.com:443"
      ],
      "mutual_tls": null,
      "tls_termination": null,
      "routes": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-https-create-fields-endpoint-mutual-tls) | edge modules |
| `tls_termination` | [EndpointTLSTermination](#api-edges-https-create-fields-endpoint-tls-termination) |     |
| `routes` | [HTTPSEdgeRoute](#api-edges-https-create-fields-https-edge-route) | routes |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-https-create-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

###### HTTPSEdgeRoute fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-create-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-create-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-create-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-create-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-create-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-create-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-create-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-create-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-create-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-create-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-create-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-create-fields-ref) | backend to be used to back this endpoint |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-create-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-create-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-create-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-create-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-create-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-create-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Get HTTPS Edge

Get an HTTPS Edge by ID

##### Request

GET/edges/https/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edghts_281VT89MbGew8qSxfYqb4CdXGH7",
      "description": "acme https edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-04-19T16:01:23Z",
      "uri": "https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7",
      "hostports": [
        "example.com:443"
      ],
      "mutual_tls": null,
      "tls_termination": null,
      "routes": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-https-get-fields-endpoint-mutual-tls) | edge modules |
| `tls_termination` | [EndpointTLSTermination](#api-edges-https-get-fields-endpoint-tls-termination) |     |
| `routes` | [HTTPSEdgeRoute](#api-edges-https-get-fields-https-edge-route) | routes |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-https-get-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

###### HTTPSEdgeRoute fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-get-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-get-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-get-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-get-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-get-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-get-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-get-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-get-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-get-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-get-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-get-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-get-fields-ref) | backend to be used to back this endpoint |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-get-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-get-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-get-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-get-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-get-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-get-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### List HTTPS Edges

Returns a list of all HTTPS Edges on this account

##### Request

GET/edges/https

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https

##### Response

Returns a 200 response on success

###### Example Response

    {
      "https_edges": [
        {
          "id": "edghts_281VT89MbGew8qSxfYqb4CdXGH7",
          "description": "acme https edge",
          "metadata": "{\"environment\": \"staging\"}",
          "created_at": "2022-04-19T16:01:23Z",
          "uri": "https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7",
          "hostports": [
            "example.com:443"
          ],
          "mutual_tls": null,
          "tls_termination": null,
          "routes": null
        }
      ],
      "uri": "https://api.ngrok.com/edges/https",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `https_edges` | [HTTPSEdge](#api-edges-https-list-fields-https-edge) | the list of all HTTPS Edges on this account |
| `uri` | string | URI of the HTTPS Edge list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### HTTPSEdge fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-https-list-fields-endpoint-mutual-tls) | edge modules |
| `tls_termination` | [EndpointTLSTermination](#api-edges-https-list-fields-endpoint-tls-termination) |     |
| `routes` | [HTTPSEdgeRoute](#api-edges-https-list-fields-https-edge-route) | routes |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-https-list-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

###### HTTPSEdgeRoute fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-list-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-list-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-list-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-list-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-list-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-list-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-list-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-list-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-list-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-list-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-list-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-list-fields-ref) | backend to be used to back this endpoint |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-list-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-list-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-list-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-list-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-list-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-list-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Update HTTPS Edge

Updates an HTTPS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.

##### Request

PATCH/edges/https/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `mutual_tls` | [EndpointMutualTLSMutate](#api-edges-https-update-parameters-endpoint-mutual-tls-mutate) | edge modules |
| `tls_termination` | [EndpointTLSTerminationAtEdge](#api-edges-https-update-parameters-endpoint-tls-termination-at-edge) |     |

###### EndpointMutualTLSMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

###### EndpointTLSTerminationAtEdge parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edghts_281VT89MbGew8qSxfYqb4CdXGH7",
      "description": "acme https edge",
      "metadata": "{\"environment\": \"production\"}",
      "created_at": "2022-04-19T16:01:23Z",
      "uri": "https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7",
      "hostports": [
        "example.com:443"
      ],
      "mutual_tls": null,
      "tls_termination": null,
      "routes": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge; optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-https-update-fields-endpoint-mutual-tls) | edge modules |
| `tls_termination` | [EndpointTLSTermination](#api-edges-https-update-fields-endpoint-tls-termination) |     |
| `routes` | [HTTPSEdgeRoute](#api-edges-https-update-fields-https-edge-route) | routes |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-https-update-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

###### HTTPSEdgeRoute fields

|     |     |     |
| --- | --- | --- |
| `edge_id` | string | unique identifier of this edge |
| `id` | string | unique identifier of this edge route |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `match_type` | string | Type of match to use for this route. Valid values are “exact\_path” and “path\_prefix”. |
| `match` | string | Route selector: “/blog” or “example.com” or “example.com/blog” |
| `uri` | string | URI of the edge API resource |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `backend` | [EndpointBackend](#api-edges-https-update-fields-endpoint-backend) | backend module configuration or `null` |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-https-update-fields-endpoint-ip-policy) | ip restriction module configuration or `null` |
| `circuit_breaker` | [EndpointCircuitBreaker](#api-edges-https-update-fields-endpoint-circuit-breaker) | circuit breaker module configuration or `null` |
| `compression` | [EndpointCompression](#api-edges-https-update-fields-endpoint-compression) | compression module configuration or `null` |
| `request_headers` | [EndpointRequestHeaders](#api-edges-https-update-fields-endpoint-request-headers) | request headers module configuration or `null` |
| `response_headers` | [EndpointResponseHeaders](#api-edges-https-update-fields-endpoint-response-headers) | response headers module configuration or `null` |
| `webhook_verification` | [EndpointWebhookValidation](#api-edges-https-update-fields-endpoint-webhook-validation) | webhook verification module configuration or `null` |
| `oauth` | [EndpointOAuth](#api-edges-https-update-fields-endpoint-o-auth) | oauth module configuration or `null` |
| `saml` | [EndpointSAML](#api-edges-https-update-fields-endpoint-saml) | saml module configuration or `null` |
| `oidc` | [EndpointOIDC](#api-edges-https-update-fields-endpoint-oidc) | oidc module configuration or `null` |
| `websocket_tcp_converter` | [EndpointWebsocketTCPConverter](#api-edges-https-update-fields-endpoint-websocket-tcp-converter) | websocket to tcp adapter configuration or `null` |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-https-update-fields-ref) | backend to be used to back this endpoint |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-https-update-fields-ref) |     |

###### EndpointCircuitBreaker fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `tripped_duration` | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| `rolling_window` | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| `num_buckets` | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| `volume_threshold` | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| `error_threshold_percentage` | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |

###### EndpointCompression fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

###### EndpointRequestHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Request before being sent to the upstream application server |

###### EndpointResponseHeaders fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `add` | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| `remove` | List&lt;string&gt; | a list of header names that will be removed from the HTTP Response returned to the HTTP client |

###### EndpointWebhookValidation fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | string | a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`. |
| `secret` | string | a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret |

###### EndpointOAuth fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `provider` | [EndpointOAuthProvider](#api-edges-https-update-fields-endpoint-o-auth-provider) | an object which defines the identity provider to use for authentication and configuration for who may access the endpoint |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `auth_check_interval` | uint32 | Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource. |

###### EndpointOAuthProvider fields

|     |     |     |
| --- | --- | --- |
| `github` | [EndpointOAuthGitHub](#api-edges-https-update-fields-endpoint-o-auth-git-hub) | configuration for using github as the identity provider |
| `facebook` | [EndpointOAuthFacebook](#api-edges-https-update-fields-endpoint-o-auth-facebook) | configuration for using facebook as the identity provider |
| `microsoft` | [EndpointOAuthMicrosoft](#api-edges-https-update-fields-endpoint-o-auth-microsoft) | configuration for using microsoft as the identity provider |
| `google` | [EndpointOAuthGoogle](#api-edges-https-update-fields-endpoint-o-auth-google) | configuration for using google as the identity provider |

###### EndpointOAuthGitHub fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |
| `teams` | List&lt;string&gt; | a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the ‘slug’ format qualified with the org name, e.g. `org-name/team-name` |
| `organizations` | List&lt;string&gt; | a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization’s ‘slug’ |

###### EndpointOAuthFacebook fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthMicrosoft fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointOAuthGoogle fields

|     |     |     |
| --- | --- | --- |
| `client_id` | string | the OAuth app client ID. retrieve it from the identity provider’s dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, client_secret must be present as well. |
| `client_secret` | string | the OAuth app client secret. retrieve if from the identity provider’s dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `client_id`. |
| `scopes` | List&lt;string&gt; | a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `client_id` and `client_secret` to set scopes) |
| `email_addresses` | List&lt;string&gt; | a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint |
| `email_domains` | List&lt;string&gt; | a list of email domains of users authenticated by identity provider who are allowed access to the endpoint |

###### EndpointSAML fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity’s unique ID. This always takes the form of a URL. In ngrok’s implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP’s Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP’s Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP’s configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP’s metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

###### EndpointOIDC fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is ‘ngrok.’ |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `issuer` | string | URL of the OIDC “OpenID provider”. This is the base URL used for discovery. |
| `client_id` | string | The OIDC app’s client ID and OIDC audience. |
| `client_secret` | string | The OIDC app’s client secret. |
| `scopes` | List&lt;string&gt; | The set of scopes to request from the OIDC identity provider. |

###### EndpointWebsocketTCPConverter fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |

### Delete HTTPS Edge

Delete an HTTPS Edge by ID

##### Request

DELETE/edges/https/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/https/edghts_281VT89MbGew8qSxfYqb4CdXGH7

##### Response

Returns a 204 response with no body on success

### Create IP Policy

Create a new IP policy. It will not apply to any traffic until you associate to a traffic source via an endpoint configuration or IP restriction.

##### Request

POST/ip_policies

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"API Outbound Gateway"}' \
    https://api.ngrok.com/ip_policies

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of the source IPs of this IP policy. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
      "uri": "https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "API Outbound Gateway",
      "metadata": ""
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy |
| `uri` | string | URI of the IP Policy API resource |
| `created_at` | string | timestamp when the IP policy was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP policy. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. |

### Delete IP Policy

Delete an IP policy. If the IP policy is referenced by another object for the purposes of traffic restriction it will be treated as if the IP policy remains but has zero rules.

##### Request

DELETE/ip_policies/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB

##### Response

Returns a 204 response with no body on success

### Get IP Policy

Get detailed information about an IP policy by ID.

##### Request

GET/ip_policies/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
      "uri": "https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "API Outbound Gateway",
      "metadata": "metadata={\"pod-id\": \"b3d9c464-4f48-4783-a741-d7d7d5db310f\"}"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy |
| `uri` | string | URI of the IP Policy API resource |
| `created_at` | string | timestamp when the IP policy was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP policy. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. |

### List IP Policies

List all IP policies on this account

##### Request

GET/ip_policies

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_policies

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ip_policies": [
        {
          "id": "ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "API Outbound Gateway",
          "metadata": ""
        },
        {
          "id": "ipp_281VS7XoBV4va8EFP5lnBtAnajp",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VS7XoBV4va8EFP5lnBtAnajp",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "Developer Environments",
          "metadata": ""
        }
      ],
      "uri": "https://api.ngrok.com/ip_policies",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ip_policies` | [IPPolicy](#api-ip-policies-list-fields-ip-policy) | the list of all IP policies on this account |
| `uri` | string | URI of the IP policy list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### IPPolicy fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy |
| `uri` | string | URI of the IP Policy API resource |
| `created_at` | string | timestamp when the IP policy was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP policy. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. |

### Update IP Policy

Update attributes of an IP policy by ID

##### Request

PATCH/ip_policies/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"metadata={\"pod-id\": \"b3d9c464-4f48-4783-a741-d7d7d5db310f\"}"}' \
    https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of the source IPs of this IP policy. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
      "uri": "https://api.ngrok.com/ip_policies/ipp_281VSBiy4r0HL5yaeQwrfDBrAOB",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "API Outbound Gateway",
      "metadata": "metadata={\"pod-id\": \"b3d9c464-4f48-4783-a741-d7d7d5db310f\"}"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy |
| `uri` | string | URI of the IP Policy API resource |
| `created_at` | string | timestamp when the IP policy was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP policy. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy. optional, max 4096 bytes. |

### Create IP Policy Rule

Create a new IP policy rule attached to an IP Policy.

##### Request

POST/ip\_policy\_rules

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"nyc office","cidr":"212.3.14.0/24","ip_policy_id":"ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI","action":"allow"}' \
    https://api.ngrok.com/ip_policy_rules

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| `cidr` | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| `ip_policy_id` | string | ID of the IP policy this IP policy rule will be attached to |
| `action` | string | the action to apply to the policy rule, either `allow` or `deny` |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
      "created_at": "2022-04-19T16:01:21Z",
      "description": "nyc office",
      "metadata": "",
      "cidr": "212.3.14.0/24",
      "ip_policy": {
        "id": "ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI",
        "uri": "https://api.ngrok.com/ip_policies/ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI"
      },
      "action": "allow"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy rule |
| `uri` | string | URI of the IP policy rule API resource |
| `created_at` | string | timestamp when the IP policy rule was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| `cidr` | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| `ip_policy` | [Ref](#api-ip-policy-rules-create-fields-ref) | object describing the IP policy this IP Policy Rule belongs to |
| `action` | string | the action to apply to the policy rule, either `allow` or `deny` |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete IP Policy Rule

Delete an IP policy rule.

##### Request

DELETE/ip\_policy\_rules/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ

##### Response

Returns a 204 response with no body on success

### Get IP Policy Rule

Get detailed information about an IP policy rule by ID.

##### Request

GET/ip\_policy\_rules/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
      "created_at": "2022-04-19T16:01:21Z",
      "description": "nyc office",
      "metadata": "",
      "cidr": "212.3.15.0/24",
      "ip_policy": {
        "id": "ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI",
        "uri": "https://api.ngrok.com/ip_policies/ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI"
      },
      "action": "allow"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy rule |
| `uri` | string | URI of the IP policy rule API resource |
| `created_at` | string | timestamp when the IP policy rule was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| `cidr` | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| `ip_policy` | [Ref](#api-ip-policy-rules-get-fields-ref) | object describing the IP policy this IP Policy Rule belongs to |
| `action` | string | the action to apply to the policy rule, either `allow` or `deny` |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### List IP Policy Rules

List all IP policy rules on this account

##### Request

GET/ip\_policy\_rules

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_policy_rules

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ip_policy_rules": [
        {
          "id": "ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
          "uri": "https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
          "created_at": "2022-04-19T16:01:21Z",
          "description": "nyc office",
          "metadata": "",
          "cidr": "212.3.14.0/24",
          "ip_policy": {
            "id": "ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI",
            "uri": "https://api.ngrok.com/ip_policies/ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI"
          },
          "action": "allow"
        },
        {
          "id": "ipr_281VStGjPILan0ZIHngvxqfQKlJ",
          "uri": "https://api.ngrok.com/ip_policy_rules/ipr_281VStGjPILan0ZIHngvxqfQKlJ",
          "created_at": "2022-04-19T16:01:21Z",
          "description": "alan laptop",
          "metadata": "",
          "cidr": "2.2.2.2/32",
          "ip_policy": {
            "id": "ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI",
            "uri": "https://api.ngrok.com/ip_policies/ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI"
          },
          "action": "allow"
        },
        {
          "id": "ipr_281VSsbfs7JTe5Sh6pV1uNUXemr",
          "uri": "https://api.ngrok.com/ip_policy_rules/ipr_281VSsbfs7JTe5Sh6pV1uNUXemr",
          "created_at": "2022-04-19T16:01:21Z",
          "description": "sf office",
          "metadata": "",
          "cidr": "132.2.19.0/24",
          "ip_policy": {
            "id": "ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI",
            "uri": "https://api.ngrok.com/ip_policies/ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI"
          },
          "action": "allow"
        }
      ],
      "uri": "https://api.ngrok.com/ip_policy_rules",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ip_policy_rules` | [IPPolicyRule](#api-ip-policy-rules-list-fields-ip-policy-rule) | the list of all IP policy rules on this account |
| `uri` | string | URI of the IP policy rule list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### IPPolicyRule fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy rule |
| `uri` | string | URI of the IP policy rule API resource |
| `created_at` | string | timestamp when the IP policy rule was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| `cidr` | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| `ip_policy` | [Ref](#api-ip-policy-rules-list-fields-ref) | object describing the IP policy this IP Policy Rule belongs to |
| `action` | string | the action to apply to the policy rule, either `allow` or `deny` |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Update IP Policy Rule

Update attributes of an IP policy rule by ID

##### Request

PATCH/ip\_policy\_rules/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"cidr":"212.3.15.0/24"}' \
    https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| `cidr` | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
      "uri": "https://api.ngrok.com/ip_policy_rules/ipr_281VSx5DhHmBReHTT6sUbgs0vgZ",
      "created_at": "2022-04-19T16:01:21Z",
      "description": "nyc office",
      "metadata": "",
      "cidr": "212.3.15.0/24",
      "ip_policy": {
        "id": "ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI",
        "uri": "https://api.ngrok.com/ip_policies/ipp_281VSvEDNBSfHOUHMu0Kk8FSYrI"
      },
      "action": "allow"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP policy rule |
| `uri` | string | URI of the IP policy rule API resource |
| `created_at` | string | timestamp when the IP policy rule was created, RFC 3339 format |
| `description` | string | human-readable description of the source IPs of this IP rule. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes. |
| `cidr` | string | an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported. |
| `ip_policy` | [Ref](#api-ip-policy-rules-update-fields-ref) | object describing the IP policy this IP Policy Rule belongs to |
| `action` | string | the action to apply to the policy rule, either `allow` or `deny` |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Create IP Restriction

Create a new IP restriction

##### Request

POST/ip_restrictions

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"type":"dashboard","ip_policy_ids":["ipp_281VSy7y3pOFSIoblcULymlUaBH"]}' \
    https://api.ngrok.com/ip_restrictions

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| `enforced` | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| `type` | string | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| `ip_policy_ids` | List&lt;string&gt; | the set of IP policy identifiers that are used to enforce the restriction |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipx_281VSyVE0wH5VxK8PT991OpcaUt",
      "uri": "https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "",
      "metadata": "",
      "enforced": false,
      "type": "dashboard",
      "ip_policies": [
        {
          "id": "ipp_281VSy7y3pOFSIoblcULymlUaBH",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VSy7y3pOFSIoblcULymlUaBH"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP restriction |
| `uri` | string | URI of the IP restriction API resource |
| `created_at` | string | timestamp when the IP restriction was created, RFC 3339 format |
| `description` | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| `enforced` | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| `type` | string | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| `ip_policies` | [Ref](#api-ip-restrictions-create-fields-ref) | the set of IP policies that are used to enforce the restriction |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete IP Restriction

Delete an IP restriction

##### Request

DELETE/ip_restrictions/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt

##### Response

Returns a 204 response with no body on success

### Get IP Restriction

Get detailed information about an IP restriction

##### Request

GET/ip_restrictions/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipx_281VSyVE0wH5VxK8PT991OpcaUt",
      "uri": "https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "",
      "metadata": "",
      "enforced": false,
      "type": "dashboard",
      "ip_policies": [
        {
          "id": "ipp_281VSy7y3pOFSIoblcULymlUaBH",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VSy7y3pOFSIoblcULymlUaBH"
        },
        {
          "id": "ipp_281VSxAtrfYmUkWROFEMUXBEook",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VSxAtrfYmUkWROFEMUXBEook"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP restriction |
| `uri` | string | URI of the IP restriction API resource |
| `created_at` | string | timestamp when the IP restriction was created, RFC 3339 format |
| `description` | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| `enforced` | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| `type` | string | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| `ip_policies` | [Ref](#api-ip-restrictions-get-fields-ref) | the set of IP policies that are used to enforce the restriction |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### List IP Restrictions

List all IP restrictions on this account

##### Request

GET/ip_restrictions

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ip_restrictions

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ip_restrictions": [
        {
          "id": "ipx_281VSyVE0wH5VxK8PT991OpcaUt",
          "uri": "https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "",
          "metadata": "",
          "enforced": false,
          "type": "dashboard",
          "ip_policies": [
            {
              "id": "ipp_281VSy7y3pOFSIoblcULymlUaBH",
              "uri": "https://api.ngrok.com/ip_policies/ipp_281VSy7y3pOFSIoblcULymlUaBH"
            }
          ]
        }
      ],
      "uri": "https://api.ngrok.com/ip_restrictions",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ip_restrictions` | [IPRestriction](#api-ip-restrictions-list-fields-ip-restriction) | the list of all IP restrictions on this account |
| `uri` | string | URI of the IP restrictions list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### IPRestriction fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP restriction |
| `uri` | string | URI of the IP restriction API resource |
| `created_at` | string | timestamp when the IP restriction was created, RFC 3339 format |
| `description` | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| `enforced` | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| `type` | string | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| `ip_policies` | [Ref](#api-ip-restrictions-list-fields-ref) | the set of IP policies that are used to enforce the restriction |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Update IP Restriction

Update attributes of an IP restriction by ID

##### Request

PATCH/ip_restrictions/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"ip_policy_ids":["ipp_281VSy7y3pOFSIoblcULymlUaBH","ipp_281VSxAtrfYmUkWROFEMUXBEook"]}' \
    https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| `enforced` | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| `ip_policy_ids` | List&lt;string&gt; | the set of IP policy identifiers that are used to enforce the restriction |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ipx_281VSyVE0wH5VxK8PT991OpcaUt",
      "uri": "https://api.ngrok.com/ip_restrictions/ipx_281VSyVE0wH5VxK8PT991OpcaUt",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "",
      "metadata": "",
      "enforced": false,
      "type": "dashboard",
      "ip_policies": [
        {
          "id": "ipp_281VSy7y3pOFSIoblcULymlUaBH",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VSy7y3pOFSIoblcULymlUaBH"
        },
        {
          "id": "ipp_281VSxAtrfYmUkWROFEMUXBEook",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VSxAtrfYmUkWROFEMUXBEook"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this IP restriction |
| `uri` | string | URI of the IP restriction API resource |
| `created_at` | string | timestamp when the IP restriction was created, RFC 3339 format |
| `description` | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| `enforced` | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| `type` | string | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| `ip_policies` | [Ref](#api-ip-restrictions-update-fields-ref) | the set of IP policies that are used to enforce the restriction |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Create Reserved Address

Create a new reserved address.

##### Request

POST/reserved_addrs

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"SSH for device #001","region":"us"}' \
    https://api.ngrok.com/reserved_addrs

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of what this reserved address will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| `region` | string | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
      "uri": "https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "SSH for device #001",
      "metadata": "",
      "addr": "1.tcp.ngrok.io:20020",
      "region": "us",
      "endpoint_configuration": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved address resource identifier |
| `uri` | string | URI of the reserved address API resource |
| `created_at` | string | timestamp when the reserved address was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved address will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| `addr` | string | hostname:port of the reserved address that was assigned at creation time |
| `region` | string | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |

### Delete Reserved Address

Delete a reserved address.

##### Request

DELETE/reserved_addrs/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX

##### Response

Returns a 204 response with no body on success

### Get Reserved Address

Get the details of a reserved address.

##### Request

GET/reserved_addrs/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
      "uri": "https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "SSH for device #001",
      "metadata": "{\"proto\": \"ssh\"}",
      "addr": "1.tcp.ngrok.io:20020",
      "region": "us",
      "endpoint_configuration": {
        "id": "ec_281VS5OySblu5hI7mH9XC9ygC85",
        "uri": "https://api.ngrok.com/endpoint_configurations/ec_281VS5OySblu5hI7mH9XC9ygC85"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved address resource identifier |
| `uri` | string | URI of the reserved address API resource |
| `created_at` | string | timestamp when the reserved address was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved address will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| `addr` | string | hostname:port of the reserved address that was assigned at creation time |
| `region` | string | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |

### List Reserved Addresses

List all reserved addresses on this account.

##### Request

GET/reserved_addrs

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_addrs

##### Response

Returns a 200 response on success

###### Example Response

    {
      "reserved_addrs": [
        {
          "id": "ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
          "uri": "https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "SSH for device #001",
          "metadata": "",
          "addr": "1.tcp.ngrok.io:20020",
          "region": "us",
          "endpoint_configuration": null
        }
      ],
      "uri": "https://api.ngrok.com/reserved_addrs",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `reserved_addrs` | [ReservedAddr](#api-reserved-addrs-list-fields-reserved-addr) | the list of all reserved addresses on this account |
| `uri` | string | URI of the reserved address list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### ReservedAddr fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved address resource identifier |
| `uri` | string | URI of the reserved address API resource |
| `created_at` | string | timestamp when the reserved address was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved address will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| `addr` | string | hostname:port of the reserved address that was assigned at creation time |
| `region` | string | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |

### Update Reserved Address

Update the attributes of a reserved address.

##### Request

PATCH/reserved_addrs/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_281VS5OySblu5hI7mH9XC9ygC85"}' \
    https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of what this reserved address will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
      "uri": "https://api.ngrok.com/reserved_addrs/ra_27zPQF5dYWaDnNkX9H7cumNLSZX",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "SSH for device #001",
      "metadata": "{\"proto\": \"ssh\"}",
      "addr": "1.tcp.ngrok.io:20020",
      "region": "us",
      "endpoint_configuration": {
        "id": "ec_281VS5OySblu5hI7mH9XC9ygC85",
        "uri": "https://api.ngrok.com/endpoint_configurations/ec_281VS5OySblu5hI7mH9XC9ygC85"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved address resource identifier |
| `uri` | string | URI of the reserved address API resource |
| `created_at` | string | timestamp when the reserved address was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved address will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved address. Optional, max 4096 bytes. |
| `addr` | string | hostname:port of the reserved address that was assigned at creation time |
| `region` | string | reserve the address in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |

### Create Reserved Domain

Create a new reserved domain.

##### Request

POST/reserved_domains

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"name":"myapp.mydomain.com","region":"us","certificate_id":"cert_281VS9tZw5Z1WxZTXn2SOUJUtVk"}' \
    https://api.ngrok.com/reserved_domains

###### Parameters

|     |     |     |
| --- | --- | --- |
| `name` | string | the domain name to reserve. It may be a full domain name like app.example.com. If the name does not contain a ‘.’ it will reserve that subdomain on ngrok.io. |
| `region` | string | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| `description` | string | human-readable description of what this reserved domain will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| `certificate_id` | string | ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. |
| `certificate_management_policy` | [ReservedDomainCertPolicy](#api-reserved-domains-create-parameters-reserved-domain-cert-policy) | configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional, mutually exclusive with `certificate_id`. |

###### ReservedDomainCertPolicy parameters

|     |     |     |
| --- | --- | --- |
| `authority` | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| `private_key_type` | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "rd_281VS7M93ynIx1xAz19JU7m9pWs",
      "uri": "https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "",
      "metadata": "",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "83ixdbr.cname.us.ngrok.io",
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "certificate": {
        "id": "cert_281VS9tZw5Z1WxZTXn2SOUJUtVk",
        "uri": "https://api.ngrok.com/tls_certificates/cert_281VS9tZw5Z1WxZTXn2SOUJUtVk"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved domain resource identifier |
| `uri` | string | URI of the reserved domain API resource |
| `created_at` | string | timestamp when the reserved domain was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved domain will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| `domain` | string | hostname of the reserved domain |
| `region` | string | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| `cname_target` | string | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io |
| `certificate` | [Ref](#api-reserved-domains-create-fields-ref) | object referencing the TLS certificate used for connections to this domain. This can be either a user-uploaded certificate, the most recently issued automatic one, or null otherwise. |
| `certificate_management_policy` | [ReservedDomainCertPolicy](#api-reserved-domains-create-fields-reserved-domain-cert-policy) | configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled |
| `certificate_management_status` | [ReservedDomainCertStatus](#api-reserved-domains-create-fields-reserved-domain-cert-status) | status of the automatic certificate management for this domain, or null if automatic management is disabled |
| `acme_challenge_cname_target` | string | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### ReservedDomainCertPolicy fields

|     |     |     |
| --- | --- | --- |
| `authority` | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| `private_key_type` | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |

###### ReservedDomainCertStatus fields

|     |     |     |
| --- | --- | --- |
| `renews_at` | string | timestamp when the next renewal will be requested, RFC 3339 format |
| `provisioning_job` | [ReservedDomainCertJob](#api-reserved-domains-create-fields-reserved-domain-cert-job) | status of the certificate provisioning job, or null if the certificiate isn’t being provisioned or renewed |

###### ReservedDomainCertJob fields

|     |     |     |
| --- | --- | --- |
| `error_code` | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL\_ERROR), or a permanent one the user must correct (DNS\_ERROR). |
| `msg` | string | a message describing the current status or error |
| `started_at` | string | timestamp when the provisioning job started, RFC 3339 format |
| `retries_at` | string | timestamp when the provisioning job will be retried |

### Delete Reserved Domain

Delete a reserved domain.

##### Request

DELETE/reserved_domains/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs

##### Response

Returns a 204 response with no body on success

### Get Reserved Domain

Get the details of a reserved domain.

##### Request

GET/reserved_domains/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "rd_281VS7M93ynIx1xAz19JU7m9pWs",
      "uri": "https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "point-of-sale new york #302",
      "metadata": "{env: \"staging\", \"connector_id\":\"64698fcc-5f5c-4b63-910e-8669d04bd943\"}",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "83ixdbr.cname.us.ngrok.io",
      "http_endpoint_configuration": {
        "id": "ec_281VS7UkzTHc9wJpyXcbvfN7Z2W",
        "uri": "https://api.ngrok.com/endpoint_configurations/ec_281VS7UkzTHc9wJpyXcbvfN7Z2W"
      },
      "https_endpoint_configuration": {
        "id": "ec_281VS8rl3diVq38GU4vGuP1FoaT",
        "uri": "https://api.ngrok.com/endpoint_configurations/ec_281VS8rl3diVq38GU4vGuP1FoaT"
      },
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved domain resource identifier |
| `uri` | string | URI of the reserved domain API resource |
| `created_at` | string | timestamp when the reserved domain was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved domain will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| `domain` | string | hostname of the reserved domain |
| `region` | string | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| `cname_target` | string | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io |
| `certificate` | [Ref](#api-reserved-domains-get-fields-ref) | object referencing the TLS certificate used for connections to this domain. This can be either a user-uploaded certificate, the most recently issued automatic one, or null otherwise. |
| `certificate_management_policy` | [ReservedDomainCertPolicy](#api-reserved-domains-get-fields-reserved-domain-cert-policy) | configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled |
| `certificate_management_status` | [ReservedDomainCertStatus](#api-reserved-domains-get-fields-reserved-domain-cert-status) | status of the automatic certificate management for this domain, or null if automatic management is disabled |
| `acme_challenge_cname_target` | string | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### ReservedDomainCertPolicy fields

|     |     |     |
| --- | --- | --- |
| `authority` | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| `private_key_type` | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |

###### ReservedDomainCertStatus fields

|     |     |     |
| --- | --- | --- |
| `renews_at` | string | timestamp when the next renewal will be requested, RFC 3339 format |
| `provisioning_job` | [ReservedDomainCertJob](#api-reserved-domains-get-fields-reserved-domain-cert-job) | status of the certificate provisioning job, or null if the certificiate isn’t being provisioned or renewed |

###### ReservedDomainCertJob fields

|     |     |     |
| --- | --- | --- |
| `error_code` | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL\_ERROR), or a permanent one the user must correct (DNS\_ERROR). |
| `msg` | string | a message describing the current status or error |
| `started_at` | string | timestamp when the provisioning job started, RFC 3339 format |
| `retries_at` | string | timestamp when the provisioning job will be retried |

### List Reserved Domains

List all reserved domains on this account.

##### Request

GET/reserved_domains

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_domains

##### Response

Returns a 200 response on success

###### Example Response

    {
      "reserved_domains": [
        {
          "id": "rd_281VS7M93ynIx1xAz19JU7m9pWs",
          "uri": "https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "",
          "metadata": "",
          "domain": "myapp.mydomain.com",
          "region": "us",
          "cname_target": "83ixdbr.cname.us.ngrok.io",
          "http_endpoint_configuration": null,
          "https_endpoint_configuration": null,
          "certificate": {
            "id": "cert_281VS9tZw5Z1WxZTXn2SOUJUtVk",
            "uri": "https://api.ngrok.com/tls_certificates/cert_281VS9tZw5Z1WxZTXn2SOUJUtVk"
          },
          "certificate_management_policy": null,
          "certificate_management_status": null,
          "acme_challenge_cname_target": null
        },
        {
          "id": "rd_281VS5LwFqj1zgaMUJp0MPc84vF",
          "uri": "https://api.ngrok.com/reserved_domains/rd_281VS5LwFqj1zgaMUJp0MPc84vF",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "Device 0001 Dashboard",
          "metadata": "{\"service\": \"dashboard\"}",
          "domain": "manage-0001.app.example.com",
          "region": "us",
          "cname_target": "2vraixg46.cname.us.ngrok.io",
          "http_endpoint_configuration": null,
          "https_endpoint_configuration": null,
          "certificate": null,
          "certificate_management_policy": {
            "authority": "letsencrypt",
            "private_key_type": "ecdsa"
          },
          "certificate_management_status": {
            "renews_at": null,
            "provisioning_job": {
              "error_code": null,
              "msg": "Managed certificate provisioning in progress.",
              "started_at": "2022-04-19T16:01:15Z",
              "retries_at": null
            }
          },
          "acme_challenge_cname_target": null
        }
      ],
      "uri": "https://api.ngrok.com/reserved_domains",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `reserved_domains` | [ReservedDomain](#api-reserved-domains-list-fields-reserved-domain) | the list of all reserved domains on this account |
| `uri` | string | URI of the reserved domain list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### ReservedDomain fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved domain resource identifier |
| `uri` | string | URI of the reserved domain API resource |
| `created_at` | string | timestamp when the reserved domain was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved domain will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| `domain` | string | hostname of the reserved domain |
| `region` | string | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| `cname_target` | string | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io |
| `certificate` | [Ref](#api-reserved-domains-list-fields-ref) | object referencing the TLS certificate used for connections to this domain. This can be either a user-uploaded certificate, the most recently issued automatic one, or null otherwise. |
| `certificate_management_policy` | [ReservedDomainCertPolicy](#api-reserved-domains-list-fields-reserved-domain-cert-policy) | configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled |
| `certificate_management_status` | [ReservedDomainCertStatus](#api-reserved-domains-list-fields-reserved-domain-cert-status) | status of the automatic certificate management for this domain, or null if automatic management is disabled |
| `acme_challenge_cname_target` | string | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### ReservedDomainCertPolicy fields

|     |     |     |
| --- | --- | --- |
| `authority` | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| `private_key_type` | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |

###### ReservedDomainCertStatus fields

|     |     |     |
| --- | --- | --- |
| `renews_at` | string | timestamp when the next renewal will be requested, RFC 3339 format |
| `provisioning_job` | [ReservedDomainCertJob](#api-reserved-domains-list-fields-reserved-domain-cert-job) | status of the certificate provisioning job, or null if the certificiate isn’t being provisioned or renewed |

###### ReservedDomainCertJob fields

|     |     |     |
| --- | --- | --- |
| `error_code` | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL\_ERROR), or a permanent one the user must correct (DNS\_ERROR). |
| `msg` | string | a message describing the current status or error |
| `started_at` | string | timestamp when the provisioning job started, RFC 3339 format |
| `retries_at` | string | timestamp when the provisioning job will be retried |

### Update Reserved Domain

Update the attributes of a reserved domain.

##### Request

PATCH/reserved_domains/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"point-of-sale new york #302","metadata":"{env: \"staging\", \"connector_id\":\"64698fcc-5f5c-4b63-910e-8669d04bd943\"}","http_endpoint_configuration_id":"ec_281VS7UkzTHc9wJpyXcbvfN7Z2W","https_endpoint_configuration_id":"ec_281VS8rl3diVq38GU4vGuP1FoaT","certificate_management_policy":{"authority":"letsencrypt"}}' \
    https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of what this reserved domain will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| `certificate_id` | string | ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. |
| `certificate_management_policy` | [ReservedDomainCertPolicy](#api-reserved-domains-update-parameters-reserved-domain-cert-policy) | configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled. Optional, mutually exclusive with `certificate_id`. |

###### ReservedDomainCertPolicy parameters

|     |     |     |
| --- | --- | --- |
| `authority` | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| `private_key_type` | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "rd_281VS7M93ynIx1xAz19JU7m9pWs",
      "uri": "https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "point-of-sale new york #302",
      "metadata": "{env: \"staging\", \"connector_id\":\"64698fcc-5f5c-4b63-910e-8669d04bd943\"}",
      "domain": "myapp.mydomain.com",
      "region": "us",
      "cname_target": "83ixdbr.cname.us.ngrok.io",
      "http_endpoint_configuration": {
        "id": "ec_281VS7UkzTHc9wJpyXcbvfN7Z2W",
        "uri": "https://api.ngrok.com/endpoint_configurations/ec_281VS7UkzTHc9wJpyXcbvfN7Z2W"
      },
      "https_endpoint_configuration": {
        "id": "ec_281VS8rl3diVq38GU4vGuP1FoaT",
        "uri": "https://api.ngrok.com/endpoint_configurations/ec_281VS8rl3diVq38GU4vGuP1FoaT"
      },
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": null,
      "acme_challenge_cname_target": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique reserved domain resource identifier |
| `uri` | string | URI of the reserved domain API resource |
| `created_at` | string | timestamp when the reserved domain was created, RFC 3339 format |
| `description` | string | human-readable description of what this reserved domain will be used for |
| `metadata` | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| `domain` | string | hostname of the reserved domain |
| `region` | string | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| `cname_target` | string | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io |
| `certificate` | [Ref](#api-reserved-domains-update-fields-ref) | object referencing the TLS certificate used for connections to this domain. This can be either a user-uploaded certificate, the most recently issued automatic one, or null otherwise. |
| `certificate_management_policy` | [ReservedDomainCertPolicy](#api-reserved-domains-update-fields-reserved-domain-cert-policy) | configuration for automatic management of TLS certificates for this domain, or null if automatic management is disabled |
| `certificate_management_status` | [ReservedDomainCertStatus](#api-reserved-domains-update-fields-reserved-domain-cert-status) | status of the automatic certificate management for this domain, or null if automatic management is disabled |
| `acme_challenge_cname_target` | string | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### ReservedDomainCertPolicy fields

|     |     |     |
| --- | --- | --- |
| `authority` | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| `private_key_type` | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |

###### ReservedDomainCertStatus fields

|     |     |     |
| --- | --- | --- |
| `renews_at` | string | timestamp when the next renewal will be requested, RFC 3339 format |
| `provisioning_job` | [ReservedDomainCertJob](#api-reserved-domains-update-fields-reserved-domain-cert-job) | status of the certificate provisioning job, or null if the certificiate isn’t being provisioned or renewed |

###### ReservedDomainCertJob fields

|     |     |     |
| --- | --- | --- |
| `error_code` | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL\_ERROR), or a permanent one the user must correct (DNS\_ERROR). |
| `msg` | string | a message describing the current status or error |
| `started_at` | string | timestamp when the provisioning job started, RFC 3339 format |
| `retries_at` | string | timestamp when the provisioning job will be retried |

### Detach Certificate Management Policy from Reserved Domain

Detach the certificate management policy attached to a reserved domain.

##### Request

DELETE/reserved\_domains/{id}/certificate\_management_policy

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs/certificate_management_policy

##### Response

Returns a 204 response with no body on success

### Detach Certificate from Reserved Domain

Detach the certificate attached to a reserved domain.

##### Request

DELETE/reserved_domains/{id}/certificate

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/reserved_domains/rd_281VS7M93ynIx1xAz19JU7m9pWs/certificate

##### Response

Returns a 204 response with no body on success

### Create SSH Certificate Authority

Create a new SSH Certificate Authority

##### Request

POST/ssh\_certificate\_authorities

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"Staging Environment Hosts","private_key_type":"ed25519"}' \
    https://api.ngrok.com/ssh_certificate_authorities

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |
| `private_key_type` | string | the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519` |
| `elliptic_curve` | string | the type of elliptic curve to use when creating an ECDSA key |
| `key_size` | int64 | the key size to use when creating an RSA key. one of `2048` or `4096` |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
      "uri": "https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "Staging Environment Hosts",
      "metadata": "",
      "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICS5K5RhXJUgdUuwdr95vtYI1Tuds/x0xDOnDXhP3986",
      "key_type": "ed25519"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Certificate Authority |
| `uri` | string | URI of the SSH Certificate Authority API resource |
| `created_at` | string | timestamp when the SSH Certificate Authority API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |
| `public_key` | string | raw public key for this SSH Certificate Authority |
| `key_type` | string | the type of private key for this SSH Certificate Authority |

### Delete SSH Certificate Authority

Delete an SSH Certificate Authority

##### Request

DELETE/ssh\_certificate\_authorities/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d

##### Response

Returns a 204 response with no body on success

### Get SSH Certificate Authority

Get detailed information about an SSH Certficate Authority

##### Request

GET/ssh\_certificate\_authorities/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
      "uri": "https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "Staging Environment Hosts",
      "metadata": "{\"region\": \"us-east-1\"}",
      "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICS5K5RhXJUgdUuwdr95vtYI1Tuds/x0xDOnDXhP3986",
      "key_type": "ed25519"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Certificate Authority |
| `uri` | string | URI of the SSH Certificate Authority API resource |
| `created_at` | string | timestamp when the SSH Certificate Authority API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |
| `public_key` | string | raw public key for this SSH Certificate Authority |
| `key_type` | string | the type of private key for this SSH Certificate Authority |

### List SSH Certificate Authorities

List all SSH Certificate Authorities on this account

##### Request

GET/ssh\_certificate\_authorities

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_certificate_authorities

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ssh_certificate_authorities": [
        {
          "id": "sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
          "uri": "https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "Staging Environment Hosts",
          "metadata": "",
          "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICS5K5RhXJUgdUuwdr95vtYI1Tuds/x0xDOnDXhP3986",
          "key_type": "ed25519"
        }
      ],
      "uri": "https://api.ngrok.com/ssh_certificate_authorities",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ssh_certificate_authorities` | [SSHCertificateAuthority](#api-ssh-certificate-authorities-list-fields-ssh-certificate-authority) | the list of all certificate authorities on this account |
| `uri` | string | URI of the certificates authorities list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### SSHCertificateAuthority fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Certificate Authority |
| `uri` | string | URI of the SSH Certificate Authority API resource |
| `created_at` | string | timestamp when the SSH Certificate Authority API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |
| `public_key` | string | raw public key for this SSH Certificate Authority |
| `key_type` | string | the type of private key for this SSH Certificate Authority |

### Update SSH Certificate Authority

Update an SSH Certificate Authority

##### Request

PATCH/ssh\_certificate\_authorities/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"region\": \"us-east-1\"}"}' \
    https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
      "uri": "https://api.ngrok.com/ssh_certificate_authorities/sshca_281VSyZ5CbmEEF3wsJLu84DK05d",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "Staging Environment Hosts",
      "metadata": "{\"region\": \"us-east-1\"}",
      "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICS5K5RhXJUgdUuwdr95vtYI1Tuds/x0xDOnDXhP3986",
      "key_type": "ed25519"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Certificate Authority |
| `uri` | string | URI of the SSH Certificate Authority API resource |
| `created_at` | string | timestamp when the SSH Certificate Authority API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |
| `public_key` | string | raw public key for this SSH Certificate Authority |
| `key_type` | string | the type of private key for this SSH Certificate Authority |

### Create SSH Credential

Create a new ssh_credential from an uploaded public SSH key. This ssh credential can be used to start new tunnels via ngrok’s SSH gateway.

##### Request

POST/ssh_credentials

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"for device #132","acl":["bind:1.tcp.ngrok.io:20002","bind:132.devices.company.com"],"public_key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com"}' \
    https://api.ngrok.com/ssh_credentials

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |
| `public_key` | string | the PEM-encoded public key of the SSH keypair that will be used to authenticate |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
      "uri": "https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
      "created_at": "2022-04-19T16:01:21Z",
      "description": "for device #132",
      "metadata": "",
      "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com",
      "acl": [
        "bind:1.tcp.ngrok.io:20002",
        "bind:132.devices.company.com"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique ssh credential resource identifier |
| `uri` | string | URI of the ssh credential API resource |
| `created_at` | string | timestamp when the ssh credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. |
| `public_key` | string | the PEM-encoded public key of the SSH keypair that will be used to authenticate |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### Delete SSH Credential

Delete an ssh_credential by ID

##### Request

DELETE/ssh_credentials/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5

##### Response

Returns a 204 response with no body on success

### Get SSH Credential

Get detailed information about an ssh_credential

##### Request

GET/ssh_credentials/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
      "uri": "https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
      "created_at": "2022-04-19T16:01:21Z",
      "description": "my dev machine",
      "metadata": "{\"hostname\": \"macbook.local\"}",
      "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com",
      "acl": [
        "bind:1.tcp.ngrok.io:20002",
        "bind:132.devices.company.com"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique ssh credential resource identifier |
| `uri` | string | URI of the ssh credential API resource |
| `created_at` | string | timestamp when the ssh credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. |
| `public_key` | string | the PEM-encoded public key of the SSH keypair that will be used to authenticate |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### List SSH Credentials

List all ssh credentials on this account

##### Request

GET/ssh_credentials

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_credentials

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ssh_credentials": [
        {
          "id": "sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
          "uri": "https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
          "created_at": "2022-04-19T16:01:21Z",
          "description": "for device #132",
          "metadata": "",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com",
          "acl": [
            "bind:1.tcp.ngrok.io:20002",
            "bind:132.devices.company.com"
          ]
        }
      ],
      "uri": "https://api.ngrok.com/ssh_credentials",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ssh_credentials` | [SSHCredential](#api-ssh-credentials-list-fields-ssh-credential) | the list of all ssh credentials on this account |
| `uri` | string | URI of the ssh credential list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### SSHCredential fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique ssh credential resource identifier |
| `uri` | string | URI of the ssh credential API resource |
| `created_at` | string | timestamp when the ssh credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. |
| `public_key` | string | the PEM-encoded public key of the SSH keypair that will be used to authenticate |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### Update SSH Credential

Update attributes of an ssh_credential by ID

##### Request

PATCH/ssh_credentials/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"my dev machine","metadata":"{\"hostname\": \"macbook.local\"}"}' \
    https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
      "uri": "https://api.ngrok.com/ssh_credentials/sshcr_281VSqzhNBtReJAzZkuS1EhqqC5",
      "created_at": "2022-04-19T16:01:21Z",
      "description": "my dev machine",
      "metadata": "{\"hostname\": \"macbook.local\"}",
      "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com",
      "acl": [
        "bind:1.tcp.ngrok.io:20002",
        "bind:132.devices.company.com"
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique ssh credential resource identifier |
| `uri` | string | URI of the ssh credential API resource |
| `created_at` | string | timestamp when the ssh credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes. |
| `public_key` | string | the PEM-encoded public key of the SSH keypair that will be used to authenticate |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### Create SSH Host Certificate

Create a new SSH Host Certificate

##### Request

POST/ssh\_host\_certificates

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"ssh_certificate_authority_id":"sshca_281VT1ifntUvZ72li9WAGmucxOF","public_key":"ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+Cgk= inconshreveable.com","principals":["inconshreveable.com","10.2.42.9"],"valid_until":"2022-07-18T11:01:22-05:00","description":"personal server"}' \
    https://api.ngrok.com/ssh_host_certificates

###### Parameters

|     |     |     |
| --- | --- | --- |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh host certificate |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| `valid_after` | string | The time when the host certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. |
| `valid_until` | string | The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of one year in the future will be used. The OpenSSH certificates RFC calls this `valid_before`. |
| `description` | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "shcrt_281VT63521pxlmlwyzPtVwf6lBy",
      "uri": "https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "personal server",
      "metadata": "",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+Cgk= inconshreveable.com",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_281VT1ifntUvZ72li9WAGmucxOF",
      "principals": [
        "inconshreveable.com",
        "10.2.42.9"
      ],
      "valid_after": "2022-04-19T16:01:23Z",
      "valid_until": "2022-07-18T16:01:22Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgl1WUDNZfsY689785xZZajV5YyaHsDD/yQk4H9laIaJ4AAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+CgkAAAAAAAAAAAAAAAIAAAAhc2hjcnRfMjgxVlQ2MzUyMXB4bG1sd3l6UHRWd2Y2bEJ5AAAAJAAAABNpbmNvbnNocmV2ZWFibGUuY29tAAAACTEwLjIuNDIuOQAAAABiXtzTAAAAAGLVg9IAAAAAAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIOdNfhjh41qFmuV8DICvY1bn6HywrT3UzfWf8VtGKeH3AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDVKMaoe/v431f5XkUZk32gd/1bvku/TRL+NCJr4uioy9XcuAINA9xBHaPi60mS49ODwzrGnfxA67h/PDhAREwJ shcrt_281VT63521pxlmlwyzPtVwf6lBy"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Host Certificate |
| `uri` | string | URI of the SSH Host Certificate API resource |
| `created_at` | string | timestamp when the SSH Host Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh host certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### Delete SSH Host Certificate

Delete an SSH Host Certificate

##### Request

DELETE/ssh\_host\_certificates/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy

##### Response

Returns a 204 response with no body on success

### Get SSH Host Certificate

Get detailed information about an SSH Host Certficate

##### Request

GET/ssh\_host\_certificates/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "shcrt_281VT63521pxlmlwyzPtVwf6lBy",
      "uri": "https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "personal server",
      "metadata": "{\"region\": \"us-west-2\"}",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+Cgk= inconshreveable.com",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_281VT1ifntUvZ72li9WAGmucxOF",
      "principals": [
        "inconshreveable.com",
        "10.2.42.9"
      ],
      "valid_after": "2022-04-19T16:01:23Z",
      "valid_until": "2022-07-18T16:01:22Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgl1WUDNZfsY689785xZZajV5YyaHsDD/yQk4H9laIaJ4AAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+CgkAAAAAAAAAAAAAAAIAAAAhc2hjcnRfMjgxVlQ2MzUyMXB4bG1sd3l6UHRWd2Y2bEJ5AAAAJAAAABNpbmNvbnNocmV2ZWFibGUuY29tAAAACTEwLjIuNDIuOQAAAABiXtzTAAAAAGLVg9IAAAAAAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIOdNfhjh41qFmuV8DICvY1bn6HywrT3UzfWf8VtGKeH3AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDVKMaoe/v431f5XkUZk32gd/1bvku/TRL+NCJr4uioy9XcuAINA9xBHaPi60mS49ODwzrGnfxA67h/PDhAREwJ shcrt_281VT63521pxlmlwyzPtVwf6lBy"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Host Certificate |
| `uri` | string | URI of the SSH Host Certificate API resource |
| `created_at` | string | timestamp when the SSH Host Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh host certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### List SSH Host Certificates

List all SSH Host Certificates issued on this account

##### Request

GET/ssh\_host\_certificates

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_host_certificates

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ssh_host_certificates": [
        {
          "id": "shcrt_281VT63521pxlmlwyzPtVwf6lBy",
          "uri": "https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy",
          "created_at": "2022-04-19T16:01:23Z",
          "description": "personal server",
          "metadata": "",
          "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+Cgk= inconshreveable.com",
          "key_type": "ecdsa",
          "ssh_certificate_authority_id": "sshca_281VT1ifntUvZ72li9WAGmucxOF",
          "principals": [
            "inconshreveable.com",
            "10.2.42.9"
          ],
          "valid_after": "2022-04-19T16:01:23Z",
          "valid_until": "2022-07-18T16:01:22Z",
          "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgl1WUDNZfsY689785xZZajV5YyaHsDD/yQk4H9laIaJ4AAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+CgkAAAAAAAAAAAAAAAIAAAAhc2hjcnRfMjgxVlQ2MzUyMXB4bG1sd3l6UHRWd2Y2bEJ5AAAAJAAAABNpbmNvbnNocmV2ZWFibGUuY29tAAAACTEwLjIuNDIuOQAAAABiXtzTAAAAAGLVg9IAAAAAAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIOdNfhjh41qFmuV8DICvY1bn6HywrT3UzfWf8VtGKeH3AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDVKMaoe/v431f5XkUZk32gd/1bvku/TRL+NCJr4uioy9XcuAINA9xBHaPi60mS49ODwzrGnfxA67h/PDhAREwJ shcrt_281VT63521pxlmlwyzPtVwf6lBy"
        }
      ],
      "uri": "https://api.ngrok.com/ssh_host_certificates",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ssh_host_certificates` | [SSHHostCertificate](#api-ssh-host-certificates-list-fields-ssh-host-certificate) | the list of all ssh host certificates on this account |
| `uri` | string | URI of the ssh host certificates list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### SSHHostCertificate fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Host Certificate |
| `uri` | string | URI of the SSH Host Certificate API resource |
| `created_at` | string | timestamp when the SSH Host Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh host certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### Update SSH Host Certificate

Update an SSH Host Certificate

##### Request

PATCH/ssh\_host\_certificates/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"region\": \"us-west-2\"}"}' \
    https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "shcrt_281VT63521pxlmlwyzPtVwf6lBy",
      "uri": "https://api.ngrok.com/ssh_host_certificates/shcrt_281VT63521pxlmlwyzPtVwf6lBy",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "personal server",
      "metadata": "{\"region\": \"us-west-2\"}",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+Cgk= inconshreveable.com",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_281VT1ifntUvZ72li9WAGmucxOF",
      "principals": [
        "inconshreveable.com",
        "10.2.42.9"
      ],
      "valid_after": "2022-04-19T16:01:23Z",
      "valid_until": "2022-07-18T16:01:22Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgl1WUDNZfsY689785xZZajV5YyaHsDD/yQk4H9laIaJ4AAAAIbmlzdHAyNTYAAABBBI3oSgxrOEJ+tIJ/n6VYtxQIFvynqlOHpfOAJ4x4OfmMYDkbf8dr6RAuUSf+ZC2HMCujta7EjZ9t+6v08Ue+CgkAAAAAAAAAAAAAAAIAAAAhc2hjcnRfMjgxVlQ2MzUyMXB4bG1sd3l6UHRWd2Y2bEJ5AAAAJAAAABNpbmNvbnNocmV2ZWFibGUuY29tAAAACTEwLjIuNDIuOQAAAABiXtzTAAAAAGLVg9IAAAAAAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIOdNfhjh41qFmuV8DICvY1bn6HywrT3UzfWf8VtGKeH3AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDVKMaoe/v431f5XkUZk32gd/1bvku/TRL+NCJr4uioy9XcuAINA9xBHaPi60mS49ODwzrGnfxA67h/PDhAREwJ shcrt_281VT63521pxlmlwyzPtVwf6lBy"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH Host Certificate |
| `uri` | string | URI of the SSH Host Certificate API resource |
| `created_at` | string | timestamp when the SSH Host Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh host certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### Create SSH User Certificate

Create a new SSH User Certificate

##### Request

POST/ssh\_user\_certificates

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"ssh_certificate_authority_id":"sshca_281VT0nNoIS8kgpKtMcFecxsGyV","public_key":"ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0= alan@work-laptop","principals":["ec2-user","root"],"valid_until":"2022-07-18T11:01:22-05:00","description":"temporary access to staging machine"}' \
    https://api.ngrok.com/ssh_user_certificates

###### Parameters

|     |     |     |
| --- | --- | --- |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh user certificate |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| `critical_options` | Map&lt;string, string&gt; | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `extensions` | Map&lt;string, string&gt; | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `valid_after` | string | The time when the user certificate becomes valid, in RFC 3339 format. Defaults to the current time if unspecified. |
| `valid_until` | string | The time when this host certificate becomes invalid, in RFC 3339 format. If unspecified, a default value of 24 hours will be used. The OpenSSH certificates RFC calls this `valid_before`. |
| `description` | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sucrt_281VSxdtpd29qk4pFVD16tqByYy",
      "uri": "https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "temporary access to staging machine",
      "metadata": "",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0= alan@work-laptop",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_281VT0nNoIS8kgpKtMcFecxsGyV",
      "principals": [
        "ec2-user",
        "root"
      ],
      "critical_options": {},
      "extensions": {
        "permit-pty": "",
        "permit-user-rc": ""
      },
      "valid_after": "2022-04-19T16:01:22Z",
      "valid_until": "2022-07-18T16:01:22Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgm/si2V22l23jzWAIILlK5K6AHxfM5vHLGMpHJe55WDoAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0AAAAAAAAAAAAAAAEAAAAhc3VjcnRfMjgxVlN4ZHRwZDI5cWs0cEZWRDE2dHFCeVl5AAAAFAAAAAhlYzItdXNlcgAAAARyb290AAAAAGJe3NIAAAAAYtWD0gAAAAAAAAAoAAAACnBlcm1pdC1wdHkAAAAAAAAADnBlcm1pdC11c2VyLXJjAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIFSlveWzS4UEaDjASBe3rLs0zhUp5eRHE65X+JdKctf1AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDsjPYb2jwT6Vjs1Jd+u+eZAliCBF5ePII+SV/+JMihn/27oF8uJIF4gz6Mg65iMsRVt6jBoOnLUWkznC4wCjoN sucrt_281VSxdtpd29qk4pFVD16tqByYy"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH User Certificate |
| `uri` | string | URI of the SSH User Certificate API resource |
| `created_at` | string | timestamp when the SSH User Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh user certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| `critical_options` | Map&lt;string, string&gt; | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `extensions` | Map&lt;string, string&gt; | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### Delete SSH User Certificate

Delete an SSH User Certificate

##### Request

DELETE/ssh\_user\_certificates/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy

##### Response

Returns a 204 response with no body on success

### Get SSH User Certificate

Get detailed information about an SSH User Certficate

##### Request

GET/ssh\_user\_certificates/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sucrt_281VSxdtpd29qk4pFVD16tqByYy",
      "uri": "https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "temporary access to staging machine for alan",
      "metadata": "{\"user_email\": \"alan@example.com\"}",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0= alan@work-laptop",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_281VT0nNoIS8kgpKtMcFecxsGyV",
      "principals": [
        "ec2-user",
        "root"
      ],
      "critical_options": {},
      "extensions": {
        "permit-pty": "",
        "permit-user-rc": ""
      },
      "valid_after": "2022-04-19T16:01:22Z",
      "valid_until": "2022-07-18T16:01:22Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgm/si2V22l23jzWAIILlK5K6AHxfM5vHLGMpHJe55WDoAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0AAAAAAAAAAAAAAAEAAAAhc3VjcnRfMjgxVlN4ZHRwZDI5cWs0cEZWRDE2dHFCeVl5AAAAFAAAAAhlYzItdXNlcgAAAARyb290AAAAAGJe3NIAAAAAYtWD0gAAAAAAAAAoAAAACnBlcm1pdC1wdHkAAAAAAAAADnBlcm1pdC11c2VyLXJjAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIFSlveWzS4UEaDjASBe3rLs0zhUp5eRHE65X+JdKctf1AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDsjPYb2jwT6Vjs1Jd+u+eZAliCBF5ePII+SV/+JMihn/27oF8uJIF4gz6Mg65iMsRVt6jBoOnLUWkznC4wCjoN sucrt_281VSxdtpd29qk4pFVD16tqByYy"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH User Certificate |
| `uri` | string | URI of the SSH User Certificate API resource |
| `created_at` | string | timestamp when the SSH User Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh user certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| `critical_options` | Map&lt;string, string&gt; | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `extensions` | Map&lt;string, string&gt; | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### List SSH User Certificates

List all SSH User Certificates issued on this account

##### Request

GET/ssh\_user\_certificates

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/ssh_user_certificates

##### Response

Returns a 200 response on success

###### Example Response

    {
      "ssh_user_certificates": [
        {
          "id": "sucrt_281VSxdtpd29qk4pFVD16tqByYy",
          "uri": "https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "temporary access to staging machine",
          "metadata": "",
          "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0= alan@work-laptop",
          "key_type": "ecdsa",
          "ssh_certificate_authority_id": "sshca_281VT0nNoIS8kgpKtMcFecxsGyV",
          "principals": [
            "ec2-user",
            "root"
          ],
          "critical_options": {},
          "extensions": {
            "permit-pty": "",
            "permit-user-rc": ""
          },
          "valid_after": "2022-04-19T16:01:22Z",
          "valid_until": "2022-07-18T16:01:22Z",
          "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgm/si2V22l23jzWAIILlK5K6AHxfM5vHLGMpHJe55WDoAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0AAAAAAAAAAAAAAAEAAAAhc3VjcnRfMjgxVlN4ZHRwZDI5cWs0cEZWRDE2dHFCeVl5AAAAFAAAAAhlYzItdXNlcgAAAARyb290AAAAAGJe3NIAAAAAYtWD0gAAAAAAAAAoAAAACnBlcm1pdC1wdHkAAAAAAAAADnBlcm1pdC11c2VyLXJjAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIFSlveWzS4UEaDjASBe3rLs0zhUp5eRHE65X+JdKctf1AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDsjPYb2jwT6Vjs1Jd+u+eZAliCBF5ePII+SV/+JMihn/27oF8uJIF4gz6Mg65iMsRVt6jBoOnLUWkznC4wCjoN sucrt_281VSxdtpd29qk4pFVD16tqByYy"
        }
      ],
      "uri": "https://api.ngrok.com/ssh_user_certificates",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `ssh_user_certificates` | [SSHUserCertificate](#api-ssh-user-certificates-list-fields-ssh-user-certificate) | the list of all ssh user certificates on this account |
| `uri` | string | URI of the ssh user certificates list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### SSHUserCertificate fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH User Certificate |
| `uri` | string | URI of the SSH User Certificate API resource |
| `created_at` | string | timestamp when the SSH User Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh user certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| `critical_options` | Map&lt;string, string&gt; | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `extensions` | Map&lt;string, string&gt; | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### Update SSH User Certificate

Update an SSH User Certificate

##### Request

PATCH/ssh\_user\_certificates/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"temporary access to staging machine for alan","metadata":"{\"user_email\": \"alan@example.com\"}"}' \
    https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "sucrt_281VSxdtpd29qk4pFVD16tqByYy",
      "uri": "https://api.ngrok.com/ssh_user_certificates/sucrt_281VSxdtpd29qk4pFVD16tqByYy",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "temporary access to staging machine for alan",
      "metadata": "{\"user_email\": \"alan@example.com\"}",
      "public_key": "ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0= alan@work-laptop",
      "key_type": "ecdsa",
      "ssh_certificate_authority_id": "sshca_281VT0nNoIS8kgpKtMcFecxsGyV",
      "principals": [
        "ec2-user",
        "root"
      ],
      "critical_options": {},
      "extensions": {
        "permit-pty": "",
        "permit-user-rc": ""
      },
      "valid_after": "2022-04-19T16:01:22Z",
      "valid_until": "2022-07-18T16:01:22Z",
      "certificate": "ecdsa-sha2-nistp256-cert-v01@openssh.com AAAAKGVjZHNhLXNoYTItbmlzdHAyNTYtY2VydC12MDFAb3BlbnNzaC5jb20AAAAgm/si2V22l23jzWAIILlK5K6AHxfM5vHLGMpHJe55WDoAAAAIbmlzdHAyNTYAAABBBK58lFzmWlDimDtBz78wVT4oauA8PjY0CiXTCEIsBNC6UwOJvZ0jdSaYNhDaa7dRV84DfBb/gKzqlXC7cVMZjl0AAAAAAAAAAAAAAAEAAAAhc3VjcnRfMjgxVlN4ZHRwZDI5cWs0cEZWRDE2dHFCeVl5AAAAFAAAAAhlYzItdXNlcgAAAARyb290AAAAAGJe3NIAAAAAYtWD0gAAAAAAAAAoAAAACnBlcm1pdC1wdHkAAAAAAAAADnBlcm1pdC11c2VyLXJjAAAAAAAAAAAAAAAzAAAAC3NzaC1lZDI1NTE5AAAAIFSlveWzS4UEaDjASBe3rLs0zhUp5eRHE65X+JdKctf1AAAAUwAAAAtzc2gtZWQyNTUxOQAAAEDsjPYb2jwT6Vjs1Jd+u+eZAliCBF5ePII+SV/+JMihn/27oF8uJIF4gz6Mg65iMsRVt6jBoOnLUWkznC4wCjoN sucrt_281VSxdtpd29qk4pFVD16tqByYy"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this SSH User Certificate |
| `uri` | string | URI of the SSH User Certificate API resource |
| `created_at` | string | timestamp when the SSH User Certificate API resource was created, RFC 3339 format |
| `description` | string | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |
| `public_key` | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| `key_type` | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| `ssh_certificate_authority_id` | string | the ssh certificate authority that is used to sign this ssh user certificate |
| `principals` | List&lt;string&gt; | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| `critical_options` | Map&lt;string, string&gt; | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `extensions` | Map&lt;string, string&gt; | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| `valid_after` | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| `valid_until` | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| `certificate` | string | the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |

### Replace TCP Edge Backend Module

##### Request

PUT/edges/tcp/{id}/backend

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"backend_id":"bkdtg_281VTTnUIDi4WCdhjkDe9IOBxWI"}' \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTWqDIklIrOkBDbeWLHcsVZL/backend

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "backend": {
        "id": "bkdtg_281VTTnUIDi4WCdhjkDe9IOBxWI",
        "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VTTnUIDi4WCdhjkDe9IOBxWI"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-tcp-edge-backend-module-replace-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get TCP Edge Backend Module

##### Request

GET/edges/tcp/{id}/backend

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTWqDIklIrOkBDbeWLHcsVZL/backend

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "backend": {
        "id": "bkdtg_281VTTnUIDi4WCdhjkDe9IOBxWI",
        "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VTTnUIDi4WCdhjkDe9IOBxWI"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-tcp-edge-backend-module-get-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete TCP Edge Backend Module

##### Request

DELETE/edges/tcp/{id}/backend

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTWqDIklIrOkBDbeWLHcsVZL/backend

##### Response

Returns a 204 response with no body on success

### Replace TCP Edge IP Restriction Module

##### Request

PUT/edges/tcp/{id}/ip_restriction

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"ip_policy_ids":["ipp_281VTZRULh3eS6M8mIZmFibnNcQ"]}' \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTZ25JljzPzEngCY0or09A5y/ip_restriction

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "ip_policies": [
        {
          "id": "ipp_281VTZRULh3eS6M8mIZmFibnNcQ",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTZRULh3eS6M8mIZmFibnNcQ"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-tcp-edge-ip-restriction-module-replace-fields-ref) |     |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get TCP Edge IP Restriction Module

##### Request

GET/edges/tcp/{id}/ip_restriction

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTZ25JljzPzEngCY0or09A5y/ip_restriction

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "ip_policies": [
        {
          "id": "ipp_281VTZRULh3eS6M8mIZmFibnNcQ",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTZRULh3eS6M8mIZmFibnNcQ"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-tcp-edge-ip-restriction-module-get-fields-ref) |     |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete TCP Edge IP Restriction Module

##### Request

DELETE/edges/tcp/{id}/ip_restriction

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTZ25JljzPzEngCY0or09A5y/ip_restriction

##### Response

Returns a 204 response with no body on success

### Create TCP Edge

Create a TCP Edge

##### Request

POST/edges/tcp

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme tcp edge","metadata":"{\"environment\": \"staging\"}"}' \
    https://api.ngrok.com/edges/tcp

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tcp-create-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tcp-create-parameters-endpoint-ip-policy-mutate) |     |

###### EndpointBackendMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

###### EndpointIPPolicyMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
      "description": "acme tcp edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-04-19T16:01:25Z",
      "uri": "https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
      "hostports": null,
      "backend": null,
      "ip_restriction": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-create-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-create-fields-endpoint-ip-policy) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-create-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-create-fields-ref) |     |

### Get TCP Edge

Get a TCP Edge by ID

##### Request

GET/edges/tcp/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
      "description": "acme tcp edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-04-19T16:01:25Z",
      "uri": "https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
      "hostports": null,
      "backend": null,
      "ip_restriction": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-get-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-get-fields-endpoint-ip-policy) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-get-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-get-fields-ref) |     |

### List TCP Edges

Returns a list of all TCP Edges on this account

##### Request

GET/edges/tcp

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp

##### Response

Returns a 200 response on success

###### Example Response

    {
      "tcp_edges": [
        {
          "id": "edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
          "description": "acme tcp edge",
          "metadata": "{\"environment\": \"staging\"}",
          "created_at": "2022-04-19T16:01:25Z",
          "uri": "https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
          "hostports": null,
          "backend": null,
          "ip_restriction": null
        }
      ],
      "uri": "https://api.ngrok.com/edges/tcp",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `tcp_edges` | [TCPEdge](#api-edges-tcp-list-fields-tcp-edge) | the list of all TCP Edges on this account |
| `uri` | string | URI of the TCP Edge list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### TCPEdge fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-list-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-list-fields-endpoint-ip-policy) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-list-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-list-fields-ref) |     |

### Update TCP Edge

Updates a TCP Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.

##### Request

PATCH/edges/tcp/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tcp-update-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tcp-update-parameters-endpoint-ip-policy-mutate) |     |

###### EndpointBackendMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

###### EndpointIPPolicyMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
      "description": "acme tcp edge",
      "metadata": "{\"environment\": \"production\"}",
      "created_at": "2022-04-19T16:01:25Z",
      "uri": "https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU",
      "hostports": null,
      "backend": null,
      "ip_restriction": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-update-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-update-fields-endpoint-ip-policy) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-update-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-update-fields-ref) |     |

### Delete TCP Edge

Delete a TCP Edge by ID

##### Request

DELETE/edges/tcp/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tcp/edgtcp_281VTKYZMpVtPhVLLMJqYH1qJsU

##### Response

Returns a 204 response with no body on success

### Create TLS Certificate

Upload a new TLS certificate

##### Request

POST/tls_certificates

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"certificate_pem":"-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIUBUunDdA4gjgtEbZA8w9Ljhvl3bEwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wHhcNMjAwMzI0MTgxODE5WhcNMjAw\nNDIzMTgxODE5WjAWMRQwEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAPKVkkKYNl3d9cqrz4tIFlwsohED5W4y1dcBixy4\nGANFFnw43nc2wPyKwYXumJqJIFrcW/NkUZL07bd+dou6mT6Gh/zbaTW91IkREPXL\n7b3KfVu4XkFosVXpWs0U6o4GrZ81CLiKBWI+H03x/ij5OSiJ1l71pqLeTJLOydAR\nAl8kpp7axeHU4UbDrAZkW5SnuZTjIKwVg0UNsBg1yNfUOu1Uah3BYaqPgQitC0Yg\nLW+NUGu/T91bkD7tLsVInkQXeQGdXBAqOycfJ7wj8OlIpyuXjTnGFA0izVmbQw5f\nrQnZ0geGyhLamvz9Gcd7mIlD/+/AEN9Lht82tAOzKG98/O8CAwEAAaNTMFEwHQYD\nVR0OBBYEFKv6RsvEC6T+zCtJZwB0FCR1sEkhMB8GA1UdIwQYMBaAFKv6RsvEC6T+\nzCtJZwB0FCR1sEkhMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB\nAC5fBrouinespo5+9AipjhY/HOKTg+OCnppFnSnqeU1eXZZJ0oakdHTpTNxtbQP9\ntOJTA2f3KWvmpNDMohEQXZz8wHDkdbrIXJKVp6zs1pEp+0BIjA4y9mSywa5xuyk0\noGeChRgGqp2JujDyPCb7LEaKKQEEdMqy73QG+jEAh14+wKixlAf1nATBdeCUvssK\n2x1uZMyqjJFB5y/5EdnWQzD4WJkrsCkxsZHVMN1d+dqf2sf3dTRV8fzsFGOG17NS\n6u2n9iGcFdBA82XN8yeLIWhy1t3GWutG1sdxENbFRRXea+iUqzDsmRtkaBma2GLQ\nd6JTpFbsCtwDjP23UEi7SZo=\n-----END CERTIFICATE-----","private_key_pem":"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDylZJCmDZd3fXK\nq8+LSBZcLKIRA+VuMtXXAYscuBgDRRZ8ON53NsD8isGF7piaiSBa3FvzZFGS9O23\nfnaLupk+hof822k1vdSJERD1y+29yn1buF5BaLFV6VrNFOqOBq2fNQi4igViPh9N\n8f4o+TkoidZe9aai3kySzsnQEQJfJKae2sXh1OFGw6wGZFuUp7mU4yCsFYNFDbAY\nNcjX1DrtVGodwWGqj4EIrQtGIC1vjVBrv0/dW5A+7S7FSJ5EF3kBnVwQKjsnHye8\nI/DpSKcrl405xhQNIs1Zm0MOX60J2dIHhsoS2pr8/RnHe5iJQ//vwBDfS4bfNrQD\nsyhvfPzvAgMBAAECggEBALLv7YE98exvi5zB+0fMFuJK8gkHDLequ93q/4hhqyTO\nU3WyJTdepiAi4fk/NEXZnIopPZJdj2aNUMQnfp43OE7MwYac+hBwRFQOyKnmkSmM\nMcf0SWKKLTUn+piIMzQsbOmhHxuwg6QiGslOFaJ3o9fpRL2rCg3dWDJ6Ypcd1NgE\nK0uy7gg+DwIpU6MeG6lA+HbxbGi+yd2x88Gjn9dGr7FZK34RUDooH60BCX9P8N9X\nT+n10MzzX7ZQOsLfe8FKc1/X8AybI5SYm1GMyfKD4QBt6JG4HKAjPHzBzcIpfN3d\n7BM11Imkrz7LcbUG+F23NVsi6n5IIGT1WqwCRIH2PpECgYEA/SJ5Ra4d0hUS5RYB\nzABquM3sp7JsKxCn7O5PqNLB4TgH9dXtWFhaFVB6juMGyHbvktVH0j4lps/Te0rk\nVU2zU1XxvCTFhtcCYUtNk0cRw6LH8feKiorXHdDRB33t0c47QSD/6AGOjBtxqD7B\n3ZxyR3P+7RdQopLLRFN+FHAnmzsCgYEA9VSGZDFSK+fbg4CgwkWdzuHrAXaUEv0U\novqqWd/yXB9wauEvRHnOrSgW6hFZQiatJOXx0KnalJQzohz/SLGO0MqGtwQbYWVT\nWiJgjUbNeiPEHBeUA6U55lVQr26kQSUWdXEtRbDz+hqV1K+6tTEMzaSPmJiHNgki\nlNMO2gqGQd0CgYBJ268qx5zn2UJEGWG41j5NYbg1TfgFsLxugzI2/heX0TNxZVP1\nPQI7ydmYq2ElSJ6qZxSnoX5255i7FqT8xskV/bOkw83mhAGrxb8Cw+/I90wDq8h+\nl/ggOPdkijfDybq8TBae6SVgd/l3r6f9M1KcypmNMApVBSPN8daNvBOyVQKBgQDo\nsj2utyFrx8Xsm4rf+kxOuPbBMooM4MQ8OmpuSP6G5sMofWLqHmcs0sO5TK9PEYRV\nZU3ST+ml2FSJRdvWRaRi4laZLWoTHZrL+aN/HVM0sMwIoUyhkIy0ruOTIuzlZZpB\n1xHL8qXX6nOHgw8jYdz1CUuyv6owVMXaR77kjer+eQKBgByYZlR/eNTzlot0SdFl\nIbgQ9bV7VLIo+vKzOXE3trfzRJMgUosLTp+5wdSVSW/VBdYZ7Ir3n0bbpY/dGinI\nVShxPbChhCZnhvG2lEEiekI44m5jHSA6hhtRdt/CrhL65Rw2SE5lMEe8htg1UGus\nwzLHWHBl72FjbjdhvEgrq60W\n-----END PRIVATE KEY-----"}' \
    https://api.ngrok.com/tls_certificates

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| `certificate_pem` | string | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| `private_key_pem` | string | private key for the TLS certificate, PEM-encoded. See [Private Keys](https://ngrok.com/docs/ngrok-link#tls-certificates-key). |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "cert_281VT49ot9HXj3b8ajFWPY46myt",
      "uri": "https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "",
      "metadata": "",
      "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIUBUunDdA4gjgtEbZA8w9Ljhvl3bEwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wHhcNMjAwMzI0MTgxODE5WhcNMjAw\nNDIzMTgxODE5WjAWMRQwEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAPKVkkKYNl3d9cqrz4tIFlwsohED5W4y1dcBixy4\nGANFFnw43nc2wPyKwYXumJqJIFrcW/NkUZL07bd+dou6mT6Gh/zbaTW91IkREPXL\n7b3KfVu4XkFosVXpWs0U6o4GrZ81CLiKBWI+H03x/ij5OSiJ1l71pqLeTJLOydAR\nAl8kpp7axeHU4UbDrAZkW5SnuZTjIKwVg0UNsBg1yNfUOu1Uah3BYaqPgQitC0Yg\nLW+NUGu/T91bkD7tLsVInkQXeQGdXBAqOycfJ7wj8OlIpyuXjTnGFA0izVmbQw5f\nrQnZ0geGyhLamvz9Gcd7mIlD/+/AEN9Lht82tAOzKG98/O8CAwEAAaNTMFEwHQYD\nVR0OBBYEFKv6RsvEC6T+zCtJZwB0FCR1sEkhMB8GA1UdIwQYMBaAFKv6RsvEC6T+\nzCtJZwB0FCR1sEkhMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB\nAC5fBrouinespo5+9AipjhY/HOKTg+OCnppFnSnqeU1eXZZJ0oakdHTpTNxtbQP9\ntOJTA2f3KWvmpNDMohEQXZz8wHDkdbrIXJKVp6zs1pEp+0BIjA4y9mSywa5xuyk0\noGeChRgGqp2JujDyPCb7LEaKKQEEdMqy73QG+jEAh14+wKixlAf1nATBdeCUvssK\n2x1uZMyqjJFB5y/5EdnWQzD4WJkrsCkxsZHVMN1d+dqf2sf3dTRV8fzsFGOG17NS\n6u2n9iGcFdBA82XN8yeLIWhy1t3GWutG1sdxENbFRRXea+iUqzDsmRtkaBma2GLQ\nd6JTpFbsCtwDjP23UEi7SZo=\n-----END CERTIFICATE-----\n",
      "subject_common_name": "example.com",
      "subject_alternative_names": {
        "dns_names": [],
        "ips": []
      },
      "issued_at": null,
      "not_before": "2020-03-24T18:18:19Z",
      "not_after": "2020-04-23T18:18:19Z",
      "key_usages": [],
      "extended_key_usages": [],
      "private_key_type": "rsa",
      "issuer_common_name": "example.com",
      "serial_number": "054ba70dd03882382d11b640f30f4b8e1be5ddb1",
      "subject_organization": "",
      "subject_organizational_unit": "",
      "subject_locality": "",
      "subject_province": "",
      "subject_country": ""
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TLS certificate |
| `uri` | string | URI of the TLS certificate API resource |
| `created_at` | string | timestamp when the TLS certificate was created, RFC 3339 format |
| `description` | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| `certificate_pem` | string | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| `subject_common_name` | string | subject common name from the leaf of this TLS certificate |
| `subject_alternative_names` | [TLSCertificateSANs](#api-tls-certificates-create-fields-tls-certificate-sa-ns) | subject alternative names (SANs) from the leaf of this TLS certificate |
| `issued_at` | string | timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded |
| `not_before` | string | timestamp when this TLS certificate becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this TLS certificate becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this TLS certificate can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this TLS certificate can be used for |
| `private_key_type` | string | type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. |
| `issuer_common_name` | string | issuer common name from the leaf of this TLS certificate |
| `serial_number` | string | serial number of the leaf of this TLS certificate |
| `subject_organization` | string | subject organization from the leaf of this TLS certificate |
| `subject_organizational_unit` | string | subject organizational unit from the leaf of this TLS certificate |
| `subject_locality` | string | subject locality from the leaf of this TLS certificate |
| `subject_province` | string | subject province from the leaf of this TLS certificate |
| `subject_country` | string | subject country from the leaf of this TLS certificate |

###### TLSCertificateSANs fields

|     |     |     |
| --- | --- | --- |
| `dns_names` | List&lt;string&gt; | set of additional domains (including wildcards) this TLS certificate is valid for |
| `ips` | List&lt;string&gt; | set of IP addresses this TLS certificate is also valid for |

### Delete TLS Certificate

Delete a TLS certificate

##### Request

DELETE/tls_certificates/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt

##### Response

Returns a 204 response with no body on success

### Get TLS Certificate

Get detailed information about a TLS certificate

##### Request

GET/tls_certificates/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "cert_281VT49ot9HXj3b8ajFWPY46myt",
      "uri": "https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "",
      "metadata": "{\"example\": true}",
      "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIUBUunDdA4gjgtEbZA8w9Ljhvl3bEwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wHhcNMjAwMzI0MTgxODE5WhcNMjAw\nNDIzMTgxODE5WjAWMRQwEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAPKVkkKYNl3d9cqrz4tIFlwsohED5W4y1dcBixy4\nGANFFnw43nc2wPyKwYXumJqJIFrcW/NkUZL07bd+dou6mT6Gh/zbaTW91IkREPXL\n7b3KfVu4XkFosVXpWs0U6o4GrZ81CLiKBWI+H03x/ij5OSiJ1l71pqLeTJLOydAR\nAl8kpp7axeHU4UbDrAZkW5SnuZTjIKwVg0UNsBg1yNfUOu1Uah3BYaqPgQitC0Yg\nLW+NUGu/T91bkD7tLsVInkQXeQGdXBAqOycfJ7wj8OlIpyuXjTnGFA0izVmbQw5f\nrQnZ0geGyhLamvz9Gcd7mIlD/+/AEN9Lht82tAOzKG98/O8CAwEAAaNTMFEwHQYD\nVR0OBBYEFKv6RsvEC6T+zCtJZwB0FCR1sEkhMB8GA1UdIwQYMBaAFKv6RsvEC6T+\nzCtJZwB0FCR1sEkhMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB\nAC5fBrouinespo5+9AipjhY/HOKTg+OCnppFnSnqeU1eXZZJ0oakdHTpTNxtbQP9\ntOJTA2f3KWvmpNDMohEQXZz8wHDkdbrIXJKVp6zs1pEp+0BIjA4y9mSywa5xuyk0\noGeChRgGqp2JujDyPCb7LEaKKQEEdMqy73QG+jEAh14+wKixlAf1nATBdeCUvssK\n2x1uZMyqjJFB5y/5EdnWQzD4WJkrsCkxsZHVMN1d+dqf2sf3dTRV8fzsFGOG17NS\n6u2n9iGcFdBA82XN8yeLIWhy1t3GWutG1sdxENbFRRXea+iUqzDsmRtkaBma2GLQ\nd6JTpFbsCtwDjP23UEi7SZo=\n-----END CERTIFICATE-----\n",
      "subject_common_name": "example.com",
      "subject_alternative_names": {
        "dns_names": [],
        "ips": []
      },
      "issued_at": null,
      "not_before": "2020-03-24T18:18:19Z",
      "not_after": "2020-04-23T18:18:19Z",
      "key_usages": [],
      "extended_key_usages": [],
      "private_key_type": "rsa",
      "issuer_common_name": "example.com",
      "serial_number": "054ba70dd03882382d11b640f30f4b8e1be5ddb1",
      "subject_organization": "",
      "subject_organizational_unit": "",
      "subject_locality": "",
      "subject_province": "",
      "subject_country": ""
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TLS certificate |
| `uri` | string | URI of the TLS certificate API resource |
| `created_at` | string | timestamp when the TLS certificate was created, RFC 3339 format |
| `description` | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| `certificate_pem` | string | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| `subject_common_name` | string | subject common name from the leaf of this TLS certificate |
| `subject_alternative_names` | [TLSCertificateSANs](#api-tls-certificates-get-fields-tls-certificate-sa-ns) | subject alternative names (SANs) from the leaf of this TLS certificate |
| `issued_at` | string | timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded |
| `not_before` | string | timestamp when this TLS certificate becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this TLS certificate becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this TLS certificate can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this TLS certificate can be used for |
| `private_key_type` | string | type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. |
| `issuer_common_name` | string | issuer common name from the leaf of this TLS certificate |
| `serial_number` | string | serial number of the leaf of this TLS certificate |
| `subject_organization` | string | subject organization from the leaf of this TLS certificate |
| `subject_organizational_unit` | string | subject organizational unit from the leaf of this TLS certificate |
| `subject_locality` | string | subject locality from the leaf of this TLS certificate |
| `subject_province` | string | subject province from the leaf of this TLS certificate |
| `subject_country` | string | subject country from the leaf of this TLS certificate |

###### TLSCertificateSANs fields

|     |     |     |
| --- | --- | --- |
| `dns_names` | List&lt;string&gt; | set of additional domains (including wildcards) this TLS certificate is valid for |
| `ips` | List&lt;string&gt; | set of IP addresses this TLS certificate is also valid for |

### List TLS Certificates

List all TLS certificates on this account

##### Request

GET/tls_certificates

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tls_certificates

##### Response

Returns a 200 response on success

###### Example Response

    {
      "tls_certificates": [
        {
          "id": "cert_281VS9tZw5Z1WxZTXn2SOUJUtVk",
          "uri": "https://api.ngrok.com/tls_certificates/cert_281VS9tZw5Z1WxZTXn2SOUJUtVk",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "",
          "metadata": "",
          "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIUBUunDdA4gjgtEbZA8w9Ljhvl3bEwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wHhcNMjAwMzI0MTgxODE5WhcNMjAw\nNDIzMTgxODE5WjAWMRQwEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAPKVkkKYNl3d9cqrz4tIFlwsohED5W4y1dcBixy4\nGANFFnw43nc2wPyKwYXumJqJIFrcW/NkUZL07bd+dou6mT6Gh/zbaTW91IkREPXL\n7b3KfVu4XkFosVXpWs0U6o4GrZ81CLiKBWI+H03x/ij5OSiJ1l71pqLeTJLOydAR\nAl8kpp7axeHU4UbDrAZkW5SnuZTjIKwVg0UNsBg1yNfUOu1Uah3BYaqPgQitC0Yg\nLW+NUGu/T91bkD7tLsVInkQXeQGdXBAqOycfJ7wj8OlIpyuXjTnGFA0izVmbQw5f\nrQnZ0geGyhLamvz9Gcd7mIlD/+/AEN9Lht82tAOzKG98/O8CAwEAAaNTMFEwHQYD\nVR0OBBYEFKv6RsvEC6T+zCtJZwB0FCR1sEkhMB8GA1UdIwQYMBaAFKv6RsvEC6T+\nzCtJZwB0FCR1sEkhMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB\nAC5fBrouinespo5+9AipjhY/HOKTg+OCnppFnSnqeU1eXZZJ0oakdHTpTNxtbQP9\ntOJTA2f3KWvmpNDMohEQXZz8wHDkdbrIXJKVp6zs1pEp+0BIjA4y9mSywa5xuyk0\noGeChRgGqp2JujDyPCb7LEaKKQEEdMqy73QG+jEAh14+wKixlAf1nATBdeCUvssK\n2x1uZMyqjJFB5y/5EdnWQzD4WJkrsCkxsZHVMN1d+dqf2sf3dTRV8fzsFGOG17NS\n6u2n9iGcFdBA82XN8yeLIWhy1t3GWutG1sdxENbFRRXea+iUqzDsmRtkaBma2GLQ\nd6JTpFbsCtwDjP23UEi7SZo=\n-----END CERTIFICATE-----\n",
          "subject_common_name": "example.com",
          "subject_alternative_names": {
            "dns_names": [],
            "ips": []
          },
          "issued_at": null,
          "not_before": "2020-03-24T18:18:19Z",
          "not_after": "2020-04-23T18:18:19Z",
          "key_usages": [],
          "extended_key_usages": [],
          "private_key_type": "rsa",
          "issuer_common_name": "example.com",
          "serial_number": "054ba70dd03882382d11b640f30f4b8e1be5ddb1",
          "subject_organization": "",
          "subject_organizational_unit": "",
          "subject_locality": "",
          "subject_province": "",
          "subject_country": ""
        },
        {
          "id": "cert_281VT49ot9HXj3b8ajFWPY46myt",
          "uri": "https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt",
          "created_at": "2022-04-19T16:01:22Z",
          "description": "",
          "metadata": "",
          "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIUBUunDdA4gjgtEbZA8w9Ljhvl3bEwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wHhcNMjAwMzI0MTgxODE5WhcNMjAw\nNDIzMTgxODE5WjAWMRQwEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAPKVkkKYNl3d9cqrz4tIFlwsohED5W4y1dcBixy4\nGANFFnw43nc2wPyKwYXumJqJIFrcW/NkUZL07bd+dou6mT6Gh/zbaTW91IkREPXL\n7b3KfVu4XkFosVXpWs0U6o4GrZ81CLiKBWI+H03x/ij5OSiJ1l71pqLeTJLOydAR\nAl8kpp7axeHU4UbDrAZkW5SnuZTjIKwVg0UNsBg1yNfUOu1Uah3BYaqPgQitC0Yg\nLW+NUGu/T91bkD7tLsVInkQXeQGdXBAqOycfJ7wj8OlIpyuXjTnGFA0izVmbQw5f\nrQnZ0geGyhLamvz9Gcd7mIlD/+/AEN9Lht82tAOzKG98/O8CAwEAAaNTMFEwHQYD\nVR0OBBYEFKv6RsvEC6T+zCtJZwB0FCR1sEkhMB8GA1UdIwQYMBaAFKv6RsvEC6T+\nzCtJZwB0FCR1sEkhMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB\nAC5fBrouinespo5+9AipjhY/HOKTg+OCnppFnSnqeU1eXZZJ0oakdHTpTNxtbQP9\ntOJTA2f3KWvmpNDMohEQXZz8wHDkdbrIXJKVp6zs1pEp+0BIjA4y9mSywa5xuyk0\noGeChRgGqp2JujDyPCb7LEaKKQEEdMqy73QG+jEAh14+wKixlAf1nATBdeCUvssK\n2x1uZMyqjJFB5y/5EdnWQzD4WJkrsCkxsZHVMN1d+dqf2sf3dTRV8fzsFGOG17NS\n6u2n9iGcFdBA82XN8yeLIWhy1t3GWutG1sdxENbFRRXea+iUqzDsmRtkaBma2GLQ\nd6JTpFbsCtwDjP23UEi7SZo=\n-----END CERTIFICATE-----\n",
          "subject_common_name": "example.com",
          "subject_alternative_names": {
            "dns_names": [],
            "ips": []
          },
          "issued_at": null,
          "not_before": "2020-03-24T18:18:19Z",
          "not_after": "2020-04-23T18:18:19Z",
          "key_usages": [],
          "extended_key_usages": [],
          "private_key_type": "rsa",
          "issuer_common_name": "example.com",
          "serial_number": "054ba70dd03882382d11b640f30f4b8e1be5ddb1",
          "subject_organization": "",
          "subject_organizational_unit": "",
          "subject_locality": "",
          "subject_province": "",
          "subject_country": ""
        }
      ],
      "uri": "https://api.ngrok.com/tls_certificates",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `tls_certificates` | [TLSCertificate](#api-tls-certificates-list-fields-tls-certificate) | the list of all TLS certificates on this account |
| `uri` | string | URI of the TLS certificates list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### TLSCertificate fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TLS certificate |
| `uri` | string | URI of the TLS certificate API resource |
| `created_at` | string | timestamp when the TLS certificate was created, RFC 3339 format |
| `description` | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| `certificate_pem` | string | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| `subject_common_name` | string | subject common name from the leaf of this TLS certificate |
| `subject_alternative_names` | [TLSCertificateSANs](#api-tls-certificates-list-fields-tls-certificate-sa-ns) | subject alternative names (SANs) from the leaf of this TLS certificate |
| `issued_at` | string | timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded |
| `not_before` | string | timestamp when this TLS certificate becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this TLS certificate becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this TLS certificate can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this TLS certificate can be used for |
| `private_key_type` | string | type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. |
| `issuer_common_name` | string | issuer common name from the leaf of this TLS certificate |
| `serial_number` | string | serial number of the leaf of this TLS certificate |
| `subject_organization` | string | subject organization from the leaf of this TLS certificate |
| `subject_organizational_unit` | string | subject organizational unit from the leaf of this TLS certificate |
| `subject_locality` | string | subject locality from the leaf of this TLS certificate |
| `subject_province` | string | subject province from the leaf of this TLS certificate |
| `subject_country` | string | subject country from the leaf of this TLS certificate |

###### TLSCertificateSANs fields

|     |     |     |
| --- | --- | --- |
| `dns_names` | List&lt;string&gt; | set of additional domains (including wildcards) this TLS certificate is valid for |
| `ips` | List&lt;string&gt; | set of IP addresses this TLS certificate is also valid for |

### Update TLS Certificate

Update attributes of a TLS Certificate by ID

##### Request

PATCH/tls_certificates/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"example\": true}"}' \
    https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "cert_281VT49ot9HXj3b8ajFWPY46myt",
      "uri": "https://api.ngrok.com/tls_certificates/cert_281VT49ot9HXj3b8ajFWPY46myt",
      "created_at": "2022-04-19T16:01:22Z",
      "description": "",
      "metadata": "{\"example\": true}",
      "certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIDDTCCAfWgAwIBAgIUBUunDdA4gjgtEbZA8w9Ljhvl3bEwDQYJKoZIhvcNAQEL\nBQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wHhcNMjAwMzI0MTgxODE5WhcNMjAw\nNDIzMTgxODE5WjAWMRQwEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcN\nAQEBBQADggEPADCCAQoCggEBAPKVkkKYNl3d9cqrz4tIFlwsohED5W4y1dcBixy4\nGANFFnw43nc2wPyKwYXumJqJIFrcW/NkUZL07bd+dou6mT6Gh/zbaTW91IkREPXL\n7b3KfVu4XkFosVXpWs0U6o4GrZ81CLiKBWI+H03x/ij5OSiJ1l71pqLeTJLOydAR\nAl8kpp7axeHU4UbDrAZkW5SnuZTjIKwVg0UNsBg1yNfUOu1Uah3BYaqPgQitC0Yg\nLW+NUGu/T91bkD7tLsVInkQXeQGdXBAqOycfJ7wj8OlIpyuXjTnGFA0izVmbQw5f\nrQnZ0geGyhLamvz9Gcd7mIlD/+/AEN9Lht82tAOzKG98/O8CAwEAAaNTMFEwHQYD\nVR0OBBYEFKv6RsvEC6T+zCtJZwB0FCR1sEkhMB8GA1UdIwQYMBaAFKv6RsvEC6T+\nzCtJZwB0FCR1sEkhMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEB\nAC5fBrouinespo5+9AipjhY/HOKTg+OCnppFnSnqeU1eXZZJ0oakdHTpTNxtbQP9\ntOJTA2f3KWvmpNDMohEQXZz8wHDkdbrIXJKVp6zs1pEp+0BIjA4y9mSywa5xuyk0\noGeChRgGqp2JujDyPCb7LEaKKQEEdMqy73QG+jEAh14+wKixlAf1nATBdeCUvssK\n2x1uZMyqjJFB5y/5EdnWQzD4WJkrsCkxsZHVMN1d+dqf2sf3dTRV8fzsFGOG17NS\n6u2n9iGcFdBA82XN8yeLIWhy1t3GWutG1sdxENbFRRXea+iUqzDsmRtkaBma2GLQ\nd6JTpFbsCtwDjP23UEi7SZo=\n-----END CERTIFICATE-----\n",
      "subject_common_name": "example.com",
      "subject_alternative_names": {
        "dns_names": [],
        "ips": []
      },
      "issued_at": null,
      "not_before": "2020-03-24T18:18:19Z",
      "not_after": "2020-04-23T18:18:19Z",
      "key_usages": [],
      "extended_key_usages": [],
      "private_key_type": "rsa",
      "issuer_common_name": "example.com",
      "serial_number": "054ba70dd03882382d11b640f30f4b8e1be5ddb1",
      "subject_organization": "",
      "subject_organizational_unit": "",
      "subject_locality": "",
      "subject_province": "",
      "subject_country": ""
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TLS certificate |
| `uri` | string | URI of the TLS certificate API resource |
| `created_at` | string | timestamp when the TLS certificate was created, RFC 3339 format |
| `description` | string | human-readable description of this TLS certificate. optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this TLS certificate. optional, max 4096 bytes. |
| `certificate_pem` | string | chain of PEM-encoded certificates, leaf first. See [Certificate Bundles](https://ngrok.com/docs/api#tls-certificates-pem). |
| `subject_common_name` | string | subject common name from the leaf of this TLS certificate |
| `subject_alternative_names` | [TLSCertificateSANs](#api-tls-certificates-update-fields-tls-certificate-sa-ns) | subject alternative names (SANs) from the leaf of this TLS certificate |
| `issued_at` | string | timestamp (in RFC 3339 format) when this TLS certificate was issued automatically, or null if this certificate was user-uploaded |
| `not_before` | string | timestamp when this TLS certificate becomes valid, RFC 3339 format |
| `not_after` | string | timestamp when this TLS certificate becomes invalid, RFC 3339 format |
| `key_usages` | List&lt;string&gt; | set of actions the private key of this TLS certificate can be used for |
| `extended_key_usages` | List&lt;string&gt; | extended set of actions the private key of this TLS certificate can be used for |
| `private_key_type` | string | type of the private key of this TLS certificate. One of rsa, ecdsa, or ed25519. |
| `issuer_common_name` | string | issuer common name from the leaf of this TLS certificate |
| `serial_number` | string | serial number of the leaf of this TLS certificate |
| `subject_organization` | string | subject organization from the leaf of this TLS certificate |
| `subject_organizational_unit` | string | subject organizational unit from the leaf of this TLS certificate |
| `subject_locality` | string | subject locality from the leaf of this TLS certificate |
| `subject_province` | string | subject province from the leaf of this TLS certificate |
| `subject_country` | string | subject country from the leaf of this TLS certificate |

###### TLSCertificateSANs fields

|     |     |     |
| --- | --- | --- |
| `dns_names` | List&lt;string&gt; | set of additional domains (including wildcards) this TLS certificate is valid for |
| `ips` | List&lt;string&gt; | set of IP addresses this TLS certificate is also valid for |

### Replace TLS Edge Backend Module

##### Request

PUT/edges/tls/{id}/backend

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"backend_id":"bkdtg_281VTUsSudF9xQ6agLxEcrTAloW"}' \
    https://api.ngrok.com/edges/tls/edgtls_281VTSY3F30XtyRpXdHg0tnZrbw/backend

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "backend": {
        "id": "bkdtg_281VTUsSudF9xQ6agLxEcrTAloW",
        "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VTUsSudF9xQ6agLxEcrTAloW"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-tls-edge-backend-module-replace-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get TLS Edge Backend Module

##### Request

GET/edges/tls/{id}/backend

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTSY3F30XtyRpXdHg0tnZrbw/backend

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "backend": {
        "id": "bkdtg_281VTUsSudF9xQ6agLxEcrTAloW",
        "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VTUsSudF9xQ6agLxEcrTAloW"
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-tls-edge-backend-module-get-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete TLS Edge Backend Module

##### Request

DELETE/edges/tls/{id}/backend

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTSY3F30XtyRpXdHg0tnZrbw/backend

##### Response

Returns a 204 response with no body on success

### Replace TLS Edge IP Restriction Module

##### Request

PUT/edges/tls/{id}/ip_restriction

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"ip_policy_ids":["ipp_281VTUIT6UiJTVIFGfSe9ZPD367","ipp_281VTZ8p6wiu82A9Ixgl6LSpMtA"]}' \
    https://api.ngrok.com/edges/tls/edgtls_281VTXYflLc0Rw2GGMK9uQhJeQD/ip_restriction

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "ip_policies": [
        {
          "id": "ipp_281VTUIT6UiJTVIFGfSe9ZPD367",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTUIT6UiJTVIFGfSe9ZPD367"
        },
        {
          "id": "ipp_281VTZ8p6wiu82A9Ixgl6LSpMtA",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTZ8p6wiu82A9Ixgl6LSpMtA"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-tls-edge-ip-restriction-module-replace-fields-ref) |     |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get TLS Edge IP Restriction Module

##### Request

GET/edges/tls/{id}/ip_restriction

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTXYflLc0Rw2GGMK9uQhJeQD/ip_restriction

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "ip_policies": [
        {
          "id": "ipp_281VTUIT6UiJTVIFGfSe9ZPD367",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTUIT6UiJTVIFGfSe9ZPD367"
        },
        {
          "id": "ipp_281VTZ8p6wiu82A9Ixgl6LSpMtA",
          "uri": "https://api.ngrok.com/ip_policies/ipp_281VTZ8p6wiu82A9Ixgl6LSpMtA"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-tls-edge-ip-restriction-module-get-fields-ref) |     |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete TLS Edge IP Restriction Module

##### Request

DELETE/edges/tls/{id}/ip_restriction

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTXYflLc0Rw2GGMK9uQhJeQD/ip_restriction

##### Response

Returns a 204 response with no body on success

### Replace TLS Edge Mutual TLS Module

##### Request

PUT/edges/tls/{id}/mutual_tls

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"certificate_authority_ids":["ca_281VTVO6IpaliXaNFTxUrN5iTtG"]}' \
    https://api.ngrok.com/edges/tls/edgtls_281VTVJ64rDa1jd0nCa7pM2En1V/mutual_tls

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "certificate_authorities": [
        {
          "id": "ca_281VTVO6IpaliXaNFTxUrN5iTtG",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VTVO6IpaliXaNFTxUrN5iTtG"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-tls-edge-mutual-tls-module-replace-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get TLS Edge Mutual TLS Module

##### Request

GET/edges/tls/{id}/mutual_tls

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTVJ64rDa1jd0nCa7pM2En1V/mutual_tls

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "certificate_authorities": [
        {
          "id": "ca_281VTVO6IpaliXaNFTxUrN5iTtG",
          "uri": "https://api.ngrok.com/certificate_authorities/ca_281VTVO6IpaliXaNFTxUrN5iTtG"
        }
      ]
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-tls-edge-mutual-tls-module-get-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete TLS Edge Mutual TLS Module

##### Request

DELETE/edges/tls/{id}/mutual_tls

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTVJ64rDa1jd0nCa7pM2En1V/mutual_tls

##### Response

Returns a 204 response with no body on success

### Replace TLS Edge TLS Termination Module

##### Request

PUT/edges/tls/{id}/tls_termination

###### Example Request

    curl \
    -XPUT \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"enabled":true,"terminate_at":"edge","min_version":"1.3"}' \
    https://api.ngrok.com/edges/tls/edgtls_281VTYw4JzhVAHsGLtZB1uUVWTt/tls_termination

###### Parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "terminate_at": "edge",
      "min_version": "1.3"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Get TLS Edge TLS Termination Module

##### Request

GET/edges/tls/{id}/tls_termination

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTYw4JzhVAHsGLtZB1uUVWTt/tls_termination

##### Response

Returns a 200 response on success

###### Example Response

    {
      "enabled": true,
      "terminate_at": "edge",
      "min_version": "1.3"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Delete TLS Edge TLS Termination Module

##### Request

DELETE/edges/tls/{id}/tls_termination

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTYw4JzhVAHsGLtZB1uUVWTt/tls_termination

##### Response

Returns a 204 response with no body on success

### Create TLS Edge

Create a TLS Edge

##### Request

POST/edges/tls

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme tls edge","metadata":"{\"environment\": \"staging\"}","hostports":["example.com:443"]}' \
    https://api.ngrok.com/edges/tls

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tls-create-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tls-create-parameters-endpoint-ip-policy-mutate) |     |
| `mutual_tls` | [EndpointMutualTLSMutate](#api-edges-tls-create-parameters-endpoint-mutual-tls-mutate) |     |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-create-parameters-endpoint-tls-termination) |     |

###### EndpointBackendMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

###### EndpointIPPolicyMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

###### EndpointMutualTLSMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

###### EndpointTLSTermination parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edgtls_281VTPv43M39FozGo6YcX1MtWal",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-04-19T16:01:25Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-create-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-create-fields-endpoint-ip-policy) |     |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-create-fields-endpoint-mutual-tls) |     |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-create-fields-endpoint-tls-termination) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-create-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-create-fields-ref) |     |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-create-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Get TLS Edge

Get a TLS Edge by ID

##### Request

GET/edges/tls/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edgtls_281VTPv43M39FozGo6YcX1MtWal",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"staging\"}",
      "created_at": "2022-04-19T16:01:25Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-get-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-get-fields-endpoint-ip-policy) |     |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-get-fields-endpoint-mutual-tls) |     |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-get-fields-endpoint-tls-termination) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-get-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-get-fields-ref) |     |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-get-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### List TLS Edges

Returns a list of all TLS Edges on this account

##### Request

GET/edges/tls

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls

##### Response

Returns a 200 response on success

###### Example Response

    {
      "tls_edges": [
        {
          "id": "edgtls_281VTPv43M39FozGo6YcX1MtWal",
          "description": "acme tls edge",
          "metadata": "{\"environment\": \"staging\"}",
          "created_at": "2022-04-19T16:01:25Z",
          "uri": "https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal",
          "hostports": [
            "example.com:443"
          ],
          "backend": null,
          "ip_restriction": null,
          "mutual_tls": null,
          "tls_termination": null
        },
        {
          "id": "edgtls_281VSaU0qZP8KEDTswG6mCYq35W",
          "description": "acme tls edge",
          "metadata": "",
          "created_at": "2022-04-19T16:01:19Z",
          "uri": "https://api.ngrok.com/edges/tls/edgtls_281VSaU0qZP8KEDTswG6mCYq35W",
          "hostports": [
            "endpoint-example.com:443"
          ],
          "backend": {
            "enabled": true,
            "backend": {
              "id": "bkdhr_281VSdmzh7sDOqD0SKztgPXP141",
              "uri": "https://api.ngrok.com/backends/http_response/bkdhr_281VSdmzh7sDOqD0SKztgPXP141"
            }
          },
          "ip_restriction": null,
          "mutual_tls": null,
          "tls_termination": null
        }
      ],
      "uri": "https://api.ngrok.com/edges/tls",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `tls_edges` | [TLSEdge](#api-edges-tls-list-fields-tls-edge) | the list of all TLS Edges on this account |
| `uri` | string | URI of the TLS Edge list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### TLSEdge fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-list-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-list-fields-endpoint-ip-policy) |     |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-list-fields-endpoint-mutual-tls) |     |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-list-fields-endpoint-tls-termination) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-list-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-list-fields-ref) |     |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-list-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Update TLS Edge

Updates a TLS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.

##### Request

PATCH/edges/tls/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tls-update-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tls-update-parameters-endpoint-ip-policy-mutate) |     |
| `mutual_tls` | [EndpointMutualTLSMutate](#api-edges-tls-update-parameters-endpoint-mutual-tls-mutate) |     |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-update-parameters-endpoint-tls-termination) |     |

###### EndpointBackendMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

###### EndpointIPPolicyMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

###### EndpointMutualTLSMutate parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

###### EndpointTLSTermination parameters

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "edgtls_281VTPv43M39FozGo6YcX1MtWal",
      "description": "acme tls edge",
      "metadata": "{\"environment\": \"production\"}",
      "created_at": "2022-04-19T16:01:25Z",
      "uri": "https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal",
      "hostports": [
        "example.com:443"
      ],
      "backend": null,
      "ip_restriction": null,
      "mutual_tls": null,
      "tls_termination": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-update-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-update-fields-endpoint-ip-policy) |     |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-update-fields-endpoint-mutual-tls) |     |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-update-fields-endpoint-tls-termination) |     |

###### EndpointBackend fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-update-fields-ref) | backend to be used to back this endpoint |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

###### EndpointIPPolicy fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-update-fields-ref) |     |

###### EndpointMutualTLS fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-update-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

###### EndpointTLSTermination fields

|     |     |     |
| --- | --- | --- |
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |

### Delete TLS Edge

Delete a TLS Edge by ID

##### Request

DELETE/edges/tls/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/edges/tls/edgtls_281VTPv43M39FozGo6YcX1MtWal

##### Response

Returns a 204 response with no body on success

### Create Tunnel Credential

Create a new tunnel authtoken credential. This authtoken credential can be used to start a new tunnel session. The response to this API call is the only time the generated token is available. If you need it for future use, you must save it securely yourself.

##### Request

POST/credentials

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"development cred for alan@example.com"}' \
    https://api.ngrok.com/credentials

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "cr_281VS69Kev0QPQxYz7rtJC9766k",
      "uri": "https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "development cred for alan@example.com",
      "metadata": "",
      "token": "281VS69Kev0QPQxYz7rtJC9766k_3XnGstbDWsxY2RfMBXrCL",
      "acl": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique tunnel credential resource identifier |
| `uri` | string | URI of the tunnel credential API resource |
| `created_at` | string | timestamp when the tunnel credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| `token` | string | the credential’s authtoken that can be used to authenticate an ngrok agent. **This value is only available one time, on the API response from credential creation, otherwise it is null.** |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### Delete Tunnel Credential

Delete a tunnel authtoken credential by ID

##### Request

DELETE/credentials/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k

##### Response

Returns a 204 response with no body on success

### Get Tunnel Credential

Get detailed information about a tunnel authtoken credential

##### Request

GET/credentials/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "cr_281VS69Kev0QPQxYz7rtJC9766k",
      "uri": "https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "device alpha-2",
      "metadata": "{\"device_id\": \"d5111ba7-0cc5-4ba3-8398-e6c79e4e89c2\"}",
      "token": null,
      "acl": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique tunnel credential resource identifier |
| `uri` | string | URI of the tunnel credential API resource |
| `created_at` | string | timestamp when the tunnel credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| `token` | string | the credential’s authtoken that can be used to authenticate an ngrok agent. **This value is only available one time, on the API response from credential creation, otherwise it is null.** |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### List Tunnel Credentials

List all tunnel authtoken credentials on this account

##### Request

GET/credentials

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/credentials

##### Response

Returns a 200 response on success

###### Example Response

    {
      "credentials": [
        {
          "id": "cr_281VS8x8qehmX0C6cgVyWk34Qyc",
          "uri": "https://api.ngrok.com/credentials/cr_281VS8x8qehmX0C6cgVyWk34Qyc",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "for device #132",
          "metadata": "",
          "token": null,
          "acl": [
            "bind:1.tcp.ngrok.io:20002",
            "bind:132.devices.company.com"
          ]
        },
        {
          "id": "cr_281VS69Kev0QPQxYz7rtJC9766k",
          "uri": "https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k",
          "created_at": "2022-04-19T16:01:15Z",
          "description": "development cred for alan@example.com",
          "metadata": "",
          "token": null,
          "acl": []
        },
        {
          "id": "cr_281VRt3C2JvxYoBx9RMZfR9legN",
          "uri": "https://api.ngrok.com/credentials/cr_281VRt3C2JvxYoBx9RMZfR9legN",
          "created_at": "2022-04-19T16:01:13Z",
          "description": "credential for \"api-examples-ce9d2de533e60d7c@example.com\"",
          "metadata": "",
          "token": "281VRt3C2JvxYoBx9RMZfR9legN_7NcLX24HSoJyKJYv58drC",
          "acl": []
        }
      ],
      "uri": "https://api.ngrok.com/credentials",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `credentials` | [Credential](#api-credentials-list-fields-credential) | the list of all tunnel credentials on this account |
| `uri` | string | URI of the tunnel credential list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### Credential fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique tunnel credential resource identifier |
| `uri` | string | URI of the tunnel credential API resource |
| `created_at` | string | timestamp when the tunnel credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| `token` | string | the credential’s authtoken that can be used to authenticate an ngrok agent. **This value is only available one time, on the API response from credential creation, otherwise it is null.** |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### Update Tunnel Credential

Update attributes of an tunnel authtoken credential by ID

##### Request

PATCH/credentials/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"device alpha-2","metadata":"{\"device_id\": \"d5111ba7-0cc5-4ba3-8398-e6c79e4e89c2\"}"}' \
    https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "cr_281VS69Kev0QPQxYz7rtJC9766k",
      "uri": "https://api.ngrok.com/credentials/cr_281VS69Kev0QPQxYz7rtJC9766k",
      "created_at": "2022-04-19T16:01:15Z",
      "description": "device alpha-2",
      "metadata": "{\"device_id\": \"d5111ba7-0cc5-4ba3-8398-e6c79e4e89c2\"}",
      "token": null,
      "acl": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique tunnel credential resource identifier |
| `uri` | string | URI of the tunnel credential API resource |
| `created_at` | string | timestamp when the tunnel credential was created, RFC 3339 format |
| `description` | string | human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes. |
| `token` | string | the credential’s authtoken that can be used to authenticate an ngrok agent. **This value is only available one time, on the API response from credential creation, otherwise it is null.** |
| `acl` | List&lt;string&gt; | optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions. |

### Create Tunnel Group Backend

Create a new TunnelGroup backend

##### Request

POST/backends/tunnel_group

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme tunnel group","metadata":"{\"environment\": \"staging\"}","labels":{"baz":"qux","foo":"bar"}}' \
    https://api.ngrok.com/backends/tunnel_group

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `labels` | Map&lt;string, string&gt; | labels to watch for tunnels on, e.g. app->foo, dc->bar |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
      "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme tunnel group",
      "metadata": "{\"environment\": \"staging\"}",
      "labels": {
        "baz": "qux",
        "foo": "bar"
      },
      "tunnels": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TunnelGroup backend |
| `uri` | string | URI of the TunnelGroupBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `labels` | Map&lt;string, string&gt; | labels to watch for tunnels on, e.g. app->foo, dc->bar |
| `tunnels` | [Ref](#api-tunnel-group-backends-create-fields-ref) | tunnels matching this backend |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Delete Tunnel Group Backend

Delete a TunnelGroup backend by ID.

##### Request

DELETE/backends/tunnel_group/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy

##### Response

Returns a 204 response with no body on success

### Get Tunnel Group Backend

Get detailed information about a TunnelGroup backend by ID

##### Request

GET/backends/tunnel_group/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
      "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme tunnel group",
      "metadata": "{\"environment\": \"staging\"}",
      "labels": {
        "baz": "qux",
        "foo": "bar"
      },
      "tunnels": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TunnelGroup backend |
| `uri` | string | URI of the TunnelGroupBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `labels` | Map&lt;string, string&gt; | labels to watch for tunnels on, e.g. app->foo, dc->bar |
| `tunnels` | [Ref](#api-tunnel-group-backends-get-fields-ref) | tunnels matching this backend |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### List Tunnel Group Backends

List all TunnelGroup backends on this account

##### Request

GET/backends/tunnel_group

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/tunnel_group

##### Response

Returns a 200 response on success

###### Example Response

    {
      "backends": [
        {
          "id": "bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
          "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
          "created_at": "2022-04-19T16:01:23Z",
          "description": "acme tunnel group",
          "metadata": "{\"environment\": \"staging\"}",
          "labels": {
            "baz": "qux",
            "foo": "bar"
          },
          "tunnels": []
        }
      ],
      "uri": "https://api.ngrok.com/backends/tunnel_group",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `backends` | [TunnelGroupBackend](#api-tunnel-group-backends-list-fields-tunnel-group-backend) | the list of all TunnelGroup backends on this account |
| `uri` | string | URI of the TunnelGroup backends list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### TunnelGroupBackend fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TunnelGroup backend |
| `uri` | string | URI of the TunnelGroupBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `labels` | Map&lt;string, string&gt; | labels to watch for tunnels on, e.g. app->foo, dc->bar |
| `tunnels` | [Ref](#api-tunnel-group-backends-list-fields-ref) | tunnels matching this backend |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Update Tunnel Group Backend

Update TunnelGroup backend by ID

##### Request

PATCH/backends/tunnel_group/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `labels` | Map&lt;string, string&gt; | labels to watch for tunnels on, e.g. app->foo, dc->bar |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
      "uri": "https://api.ngrok.com/backends/tunnel_group/bkdtg_281VT7RDXLlFXk4BHjnO474mjDy",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme tunnel group",
      "metadata": "{\"environment\": \"production\"}",
      "labels": null,
      "tunnels": []
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this TunnelGroup backend |
| `uri` | string | URI of the TunnelGroupBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `labels` | Map&lt;string, string&gt; | labels to watch for tunnels on, e.g. app->foo, dc->bar |
| `tunnels` | [Ref](#api-tunnel-group-backends-update-fields-ref) | tunnels matching this backend |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### List Tunnel Sessions

List all online tunnel sessions running on this account.

##### Request

GET/tunnel_sessions

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tunnel_sessions

##### Response

Returns a 200 response on success

###### Example Response

    {
      "tunnel_sessions": [
        {
          "agent_version": "3.1000.0-development",
          "credential": {
            "id": "cr_281VSKrpkCY5oBNP6QnUffBP5R0",
            "uri": "https://api.ngrok.com/credentials/cr_281VSKrpkCY5oBNP6QnUffBP5R0"
          },
          "id": "ts_281VSV1NTPvPtPohN4kyRXFOVlV",
          "ip": "10.110.2.2",
          "metadata": "",
          "os": "linux",
          "region": "us",
          "started_at": "2022-04-19T16:01:18Z",
          "transport": "ngrok/2",
          "uri": "https://api.ngrok.com/tunnel_sessions/ts_281VSV1NTPvPtPohN4kyRXFOVlV"
        }
      ],
      "uri": "https://api.ngrok.com/tunnel_sessions",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `tunnel_sessions` | [TunnelSession](#api-tunnel-sessions-list-fields-tunnel-session) | list of all tunnel sessions on this account |
| `uri` | string | URI to the API resource of the tunnel session list |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### TunnelSession fields

|     |     |     |
| --- | --- | --- |
| `agent_version` | string | version of the ngrok agent that started this ngrok tunnel session |
| `credential` | [Ref](#api-tunnel-sessions-list-fields-ref) | reference to the tunnel credential or ssh credential used by the ngrok agent to start this tunnel session |
| `id` | string | unique tunnel session resource identifier |
| `ip` | string | source ip address of the tunnel session |
| `metadata` | string | arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option |
| `os` | string | operating system of the host the ngrok agent is running on |
| `region` | string | the ngrok region identifier in which this tunnel session was started |
| `started_at` | string | time when the tunnel session first connected to the ngrok servers |
| `transport` | string | the transport protocol used to start the tunnel session. Either `ngrok/v2` or `ssh` |
| `uri` | string | URI to the API resource of the tunnel session |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get Tunnel Session

Get the detailed status of a tunnel session by ID

##### Request

GET/tunnel_sessions/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tunnel_sessions/ts_281VSb5XWCtsK29D6SNbijzi4BR

##### Response

Returns a 200 response on success

###### Example Response

    {
      "agent_version": "3.1000.0-development",
      "credential": {
        "id": "cr_281VSWSR9E1jTRzNs86mxzVWuQY",
        "uri": "https://api.ngrok.com/credentials/cr_281VSWSR9E1jTRzNs86mxzVWuQY"
      },
      "id": "ts_281VSb5XWCtsK29D6SNbijzi4BR",
      "ip": "10.110.2.2",
      "metadata": "",
      "os": "linux",
      "region": "us",
      "started_at": "2022-04-19T16:01:19Z",
      "transport": "ngrok/2",
      "uri": "https://api.ngrok.com/tunnel_sessions/ts_281VSb5XWCtsK29D6SNbijzi4BR"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `agent_version` | string | version of the ngrok agent that started this ngrok tunnel session |
| `credential` | [Ref](#api-tunnel-sessions-get-fields-ref) | reference to the tunnel credential or ssh credential used by the ngrok agent to start this tunnel session |
| `id` | string | unique tunnel session resource identifier |
| `ip` | string | source ip address of the tunnel session |
| `metadata` | string | arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option |
| `os` | string | operating system of the host the ngrok agent is running on |
| `region` | string | the ngrok region identifier in which this tunnel session was started |
| `started_at` | string | time when the tunnel session first connected to the ngrok servers |
| `transport` | string | the transport protocol used to start the tunnel session. Either `ngrok/v2` or `ssh` |
| `uri` | string | URI to the API resource of the tunnel session |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Restart Tunnel Agent

Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID.

##### Request

POST/tunnel_sessions/{id}/restart

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{}' \
    https://api.ngrok.com/tunnel_sessions/ts_1vcl4fYZxXY0zNFbpCloylDCG0S/restart

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |

##### Response

Returns a 204 response with no body on success

### Stop Tunnel Agent

Issues a command instructing the ngrok agent that started this tunnel session to exit.

##### Request

POST/tunnel_sessions/{id}/stop

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{}' \
    https://api.ngrok.com/tunnel_sessions/ts_1vcl4fYZxXY0zNFbpCloylDCG0S/stop

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |

##### Response

Returns a 204 response with no body on success

### Update Tunnel Agent

Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent’s configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted

##### Request

POST/tunnel_sessions/{id}/update

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{}' \
    https://api.ngrok.com/tunnel_sessions/ts_1vcl4fYZxXY0zNFbpCloylDCG0S/update

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |

##### Response

Returns a 204 response with no body on success

### List Tunnels

List all online tunnels currently running on the account.

##### Request

GET/tunnels

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tunnels

##### Response

Returns a 200 response on success

###### Example Response

    {
      "tunnels": [
        {
          "id": "tn_281VSRoBUfzBOeOVQOoqxuRembE",
          "public_url": "https://849ab0bf2d05.ngrok.io",
          "started_at": "2022-04-19T16:01:17Z",
          "metadata": "",
          "proto": "https",
          "region": "us",
          "tunnel_session": {
            "id": "ts_281VSPENakWXtNdkjlHQ6e2LgTm",
            "uri": "https://api.ngrok.com/tunnel_sessions/ts_281VSPENakWXtNdkjlHQ6e2LgTm"
          },
          "endpoint": {
            "id": "ep_281VSRoBUfzBOeOVQOoqxuRembE",
            "uri": "https://api.ngrok.com/endpoints/ep_281VSRoBUfzBOeOVQOoqxuRembE"
          },
          "forwards_to": "http://localhost:80"
        },
        {
          "id": "tn_281VSFkHSfKq8Bt6ndhAJiBG5AD",
          "started_at": "2022-04-19T16:01:16Z",
          "metadata": "",
          "region": "us",
          "tunnel_session": {
            "id": "ts_281VSICJUGSKgwxTgOKtE2OpZ7O",
            "uri": "https://api.ngrok.com/tunnel_sessions/ts_281VSICJUGSKgwxTgOKtE2OpZ7O"
          },
          "labels": {
            "baz": "qux",
            "foo": "bar"
          },
          "backends": [],
          "forwards_to": "http://localhost:80"
        }
      ],
      "uri": "https://api.ngrok.com/tunnels",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `tunnels` | [Tunnel](#api-tunnels-list-fields-tunnel) | the list of all online tunnels on this account |
| `uri` | string | URI of the tunnels list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### Tunnel fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique tunnel resource identifier |
| `public_url` | string | URL of the ephemeral tunnel’s public endpoint |
| `started_at` | string | timestamp when the tunnel was initiated in RFC 3339 format |
| `metadata` | string | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs#tunnel-definitions-metadata) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs#config_metadata). |
| `proto` | string | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| `region` | string | identifier of tune region where the tunnel is running |
| `tunnel_session` | [Ref](#api-tunnels-list-fields-ref) | reference object pointing to the tunnel session on which this tunnel was started |
| `endpoint` | [Ref](#api-tunnels-list-fields-ref) | the ephemeral endpoint this tunnel is associated with, if this is an agent-initiated tunnel |
| `labels` | Map&lt;string, string&gt; | the labels the tunnel group backends will match against, if this is a backend tunnel |
| `backends` | [Ref](#api-tunnels-list-fields-ref) | tunnel group backends served by this backend tunnel |
| `forwards_to` | string | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Get Tunnel

Get the status of a tunnel by ID

##### Request

GET/tunnels/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/tunnels/tn_281VSRoBUfzBOeOVQOoqxuRembE

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "tn_281VSRoBUfzBOeOVQOoqxuRembE",
      "public_url": "https://849ab0bf2d05.ngrok.io",
      "started_at": "2022-04-19T16:01:17Z",
      "metadata": "",
      "proto": "https",
      "region": "us",
      "tunnel_session": {
        "id": "ts_281VSPENakWXtNdkjlHQ6e2LgTm",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_281VSPENakWXtNdkjlHQ6e2LgTm"
      },
      "endpoint": {
        "id": "ep_281VSRoBUfzBOeOVQOoqxuRembE",
        "uri": "https://api.ngrok.com/endpoints/ep_281VSRoBUfzBOeOVQOoqxuRembE"
      },
      "forwards_to": "http://localhost:80"
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique tunnel resource identifier |
| `public_url` | string | URL of the ephemeral tunnel’s public endpoint |
| `started_at` | string | timestamp when the tunnel was initiated in RFC 3339 format |
| `metadata` | string | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs#tunnel-definitions-metadata) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs#config_metadata). |
| `proto` | string | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| `region` | string | identifier of tune region where the tunnel is running |
| `tunnel_session` | [Ref](#api-tunnels-get-fields-ref) | reference object pointing to the tunnel session on which this tunnel was started |
| `endpoint` | [Ref](#api-tunnels-get-fields-ref) | the ephemeral endpoint this tunnel is associated with, if this is an agent-initiated tunnel |
| `labels` | Map&lt;string, string&gt; | the labels the tunnel group backends will match against, if this is a backend tunnel |
| `backends` | [Ref](#api-tunnels-get-fields-ref) | tunnel group backends served by this backend tunnel |
| `forwards_to` | string | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |

###### Ref fields

|     |     |     |
| --- | --- | --- |
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

### Create Weighted Backend

Create a new Weighted backend

##### Request

POST/backends/weighted

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_281VT73XCrdodeBVAXoWbg33g52":1,"bkdhr_281VTAiqx0AO7pZS08yVHVsW09O":0}}' \
    https://api.ngrok.com/backends/weighted

###### Parameters

|     |     |     |
| --- | --- | --- |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | Map&lt;string, int64&gt; | the ids of the child backends to their weights \[0-10000\] |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": {
        "bkdhr_281VT73XCrdodeBVAXoWbg33g52": 1,
        "bkdhr_281VTAiqx0AO7pZS08yVHVsW09O": 0
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Weighted backend |
| `uri` | string | URI of the WeightedBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | Map&lt;string, int64&gt; | the ids of the child backends to their weights \[0-10000\] |

### Delete Weighted Backend

Delete a Weighted backend by ID.

##### Request

DELETE/backends/weighted/{id}

###### Example Request

    curl \
    -XDELETE \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0

##### Response

Returns a 204 response with no body on success

### Get Weighted Backend

Get detailed information about a Weighted backend by ID

##### Request

GET/backends/weighted/{id}

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"staging\"}",
      "backends": {
        "bkdhr_281VT73XCrdodeBVAXoWbg33g52": 1,
        "bkdhr_281VTAiqx0AO7pZS08yVHVsW09O": 0
      }
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Weighted backend |
| `uri` | string | URI of the WeightedBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | Map&lt;string, int64&gt; | the ids of the child backends to their weights \[0-10000\] |

### List Weighted Backends

List all Weighted backends on this account

##### Request

GET/backends/weighted

###### Example Request

    curl \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Ngrok-Version: 2" \
    https://api.ngrok.com/backends/weighted

##### Response

Returns a 200 response on success

###### Example Response

    {
      "backends": [
        {
          "id": "bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
          "uri": "https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
          "created_at": "2022-04-19T16:01:23Z",
          "description": "acme weighted",
          "metadata": "{\"environment\": \"staging\"}",
          "backends": {
            "bkdhr_281VT73XCrdodeBVAXoWbg33g52": 1,
            "bkdhr_281VTAiqx0AO7pZS08yVHVsW09O": 0
          }
        }
      ],
      "uri": "https://api.ngrok.com/backends/weighted",
      "next_page_uri": null
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `backends` | [WeightedBackend](#api-weighted-backends-list-fields-weighted-backend) | the list of all Weighted backends on this account |
| `uri` | string | URI of the Weighted backends list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

###### WeightedBackend fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Weighted backend |
| `uri` | string | URI of the WeightedBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | Map&lt;string, int64&gt; | the ids of the child backends to their weights \[0-10000\] |

### Update Weighted Backend

Update Weighted backend by ID

##### Request

PATCH/backends/weighted/{id}

###### Example Request

    curl \
    -XPATCH \
    -H "Authorization: Bearer {API_KEY}" \
    -H "Content-Type: application/json" \
    -H "Ngrok-Version: 2" \
    -d '{"metadata":"{\"environment\": \"production\"}"}' \
    https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0

###### Parameters

|     |     |     |
| --- | --- | --- |
| `id` | string |     |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | Map&lt;string, int64&gt; | the ids of the child backends to their weights \[0-10000\] |

##### Response

Returns a 200 response on success

###### Example Response

    {
      "id": "bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
      "uri": "https://api.ngrok.com/backends/weighted/bkdwd_281VT81z7GgalYQvVsjd1DHQBf0",
      "created_at": "2022-04-19T16:01:23Z",
      "description": "acme weighted",
      "metadata": "{\"environment\": \"production\"}",
      "backends": {}
    }

###### Fields

|     |     |     |
| --- | --- | --- |
| `id` | string | unique identifier for this Weighted backend |
| `uri` | string | URI of the WeightedBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `backends` | Map&lt;string, int64&gt; | the ids of the child backends to their weights \[0-10000\] |