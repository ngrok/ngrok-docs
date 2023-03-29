---
sidebar_position: 1
title: Introduction
---

# The ngrok HTTP API
------------------

The ngrok HTTP API is available at `https://api.ngrok.com`. It provides programmatic access to all of ngrok's resources.

The API is REST-ish. It follows most of the conventions of a REST API but breaks some when the REST model does not fit well. The API listens only on port 443 to help avoid any accidental unencrypted requests.

If you are looking to programmatically start and stop tunnels, instead consult the documentation of the [ngrok agent API](/ngrok-agent/api).

## Authentication {#authentication}

|     |     |
| --- | --- |
| Base URL | `https://api.ngrok.com` |
| Authentication | **Bearer token authentication with an ngrok.com API key token** |

API keys to access the ngrok.com HTTP API can be provisioned on the [API Keys page of your ngrok dashboard](https://dashboard.ngrok.com/api). API keys can also be created via the [API keys API Resource](/api/resources/api-keys#list-api-keys). All requests to the API must include an API key as a bearer token in the Authorization header as well as an `ngrok-version` header as demonstrated in the following example.

###### Access the root API resource

 `curl -H "authorization: Bearer {API_KEY}" -H "ngrok-version: 2" https://api.ngrok.com/`

## Content Types {#content-types}

All request bodies sent to the API must use a content type of `application/json`. Ensure that your client sets the request's `Content-Type` header appropriately. All responses returned by the API will also be returned with an `application/json` content type.

## Versioning and API Stability {#versioning}

The caller must specify a version by sending an `ngrok-version` header with each request. The latest version is `2`. Versions `0` and `1` are deprecated.

The ngrok API guarantees that breaking changes to the API will never be made unless the caller explicitly opts in to a newer version. The following non-breaking changes to the API may be made to existing versions without an opt-in:

* The addition of new resources
* The addition of new methods to existing resources
* The addition of new fields on existing resource representations
* Bug fixes which change the API to match documented behavior

## Pagination {#pagination}

List endpoints can be paginated using the query parameters `limit` and `before_id`. Results are returned ordered from newest to oldest. The maximum value of `limit` is 100. If a limit is not specified, it will default to 100. If `before_id` is not specified, the first page of results will be returned. You can provide an explicit value for `before_id` to retrieve items created before the given ID. Each response to a list request will include a `next_page_uri` field, which will be the full URL you can request to retrieve the next page of results. If there are no more results, `next_page_uri` will be `null`.

## Timestamps and Tomezones {#timezones}

All timestamp fields in the ngrok API are represented as strings that are returned in the [RFC 3339 format](https://www.ietf.org/rfc/rfc3339.txt). The timestamps returned by the API are in UTC time which is indicated by a `Z` at the end.
