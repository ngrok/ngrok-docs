---
title: API Filtering (Preview)
sidebarTitle: API Filtering
description: Learn how to use API Filtering to make operational tooling faster and more precise.
tag: Preview
---

<Info>
This feature is under active development. Behavior, supported fields, and limits may change before General Availability (GA). This guide is provided as forward-looking context for evaluation and feedback.
</Info>

When using ngrok's API, you can add the `filter` query parameter to `GET` requests to return only those results which match a provided criteria. This makes automated management of resources easier while eliminating the need to download large collections and filter client-side.

To use API Filtering, you pass a subset of CEL expressions to the `filter` query parameter, as demonstrated in the following example.

This example request fetches a list of all your Cloud and Agent endpoints.

```http
GET /endpoints?filter='obj.type == "cloud" || obj.type == "agent"'
```

## Request shape

```http
GET /{resource}?filter='{CEL_EXPRESSION}'
```

## Supported CEL (subset)

These core operators and helpers are supported:

- Logical operators: `!`, `&&`, `||`
- Comparative operators: `<`, `<=`, `==`, `!=`, `>=`, `>`
- Parentheses for grouping
- List membership using the `in` keyword
- String substring checks: `startsWith()`, `contains()`, `endsWith()`
- Length / emptiness checks: `size()`, `== ""`, `== null`
- Date parsing: `timestamp(RFC-3339)`

### Instance Inspection (vs. List Comprehension)

Expressions are evaluated against a single **resource instance** exposed as `obj`. Compare fields **on the instance** rather than attempting list-wise checks on fields.

✅ Valid

```http
GET /endpoints?filter='obj.type == "cloud" || obj.type == "agent"'
GET /endpoints?filter='obj.type in ["agent", "cloud"]'
```

❌ Not valid

```http
GET /endpoints?filter='["agent","cloud"] in obj.types'
```

## Dates and time helpers

- **Treat timestamps as numerics** by using `<`, `<=`, `==`, `>=`, `>` directly on `timestamp()` fields, e.g.:
  ```http
  GET /vaults?filter=’obj.created_at < timestamp(“2025-10-31T09:23:45-07:00”)’
  ```
- **Convenience helpers:** `now()` and `daysAgo(n)` support concise relative filters, e.g.:
  ```http
  GET /endpoints?filter='obj.created_at >= daysAgo(7)'
  ```

## Query restrictions and limitations

### Unsupported CEL features

To keep filter evaluation small and predictable, the following CEL features are not supported.

- **No index access** (e.g., `a[0]`)
- **No arithmetic** (e.g., `a + b`)
- **No ternary** (e.g., `cond ? x : y`)
- **No type checks** (e.g., `type(a) == string`)
- **No regexes**
- **No fuzzy matching**

These exclusions intentionally keep evaluation small and predictable.

### High-entropy fields and substring checks

**High entropy** fields are fields with values that are effectively random, usually because they're generated. The `id` field on a response object, such as `obj.id`, is a common example.

[Substring functions](https://github.com/google/cel-spec/blob/master/doc/langdef.md#string-functions), such as `startsWith()`, `contains()`, `endsWith()`, are **disallowed** on high entropy fields. Check for equality on these fields instead. For example, `obj.id == "ep_123"`.

### Query complexity (budgeting/limits)

Very large expressions can stress the query engine. The service may enforce **limits on the number of conditions per query** or similar throttles in the future.

## Filterable resources and fields

The initial release prioritizes the resource types and fields below. CEL filtering is not supported on deprecated endpoints. Field coverage is evolving and may change before GA.

| Resource Type                   | Filterable Fields                                                                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Endpoints**                   | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `principal.id`<br />- `type`<br />- `binding`<br />- `url`<br />- `pooling_enabled`<br />- `scheme`<br />- `region` |
| **Reserved Addresses**          | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `addr`<br />- `region`                                                                                              |
| **Reserved Domains**            | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `domain`<br />- `region`<br />- `cname_target`<br />- `certificate.id`<br />- `acme_challenge_cname_target`         |
| **TLS Certificates**            | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `subject_common_name`<br />- `not_after`<br />- `not_before`<br />- `serial_number`                                 |
| **Certificate Authorities**     | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `subject_common_name`<br />- `not_before`<br />- `not_after`                                                        |
| **IP Policies**                 | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`                                                                                                                            |
| **IP Policy Rules**             | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `ip_policy`<br />- `cidr`<br />- `action`                                                                           |
| **Agent Ingress**               | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `domain`                                                                                                            |
| **Tunnel Sessions**             | - `id`<br />- `metadata`<br />- `agent_version`<br />- `ip`<br />- `os`<br />- `region`<br />- `started_at`<br />- `credential`                                                              |
| **Event Destinations**          | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`                                                                                                                            |
| **Event Subscriptions**         | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`                                                                                                                            |
| **IP Restrictions**             | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`                                                                                                                            |
| **API Keys**                    | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `owner_id`                                                                                                          |
| **SSH Credentials**             | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `owner_id`<br />- `acl`                                                                                             |
| **Credentials**                 | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `owner_id`<br />- `acl`                                                                                             |
| **Service Users**               | - `id`<br />- `created_at`                                                                                                                                                                   |
| **SSH Certificate Authorities** | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`                                                                                                                            |
| **Vaults**                      | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `name`                                                                                                              |
| **Secrets**                     | - `id`<br />- `created_at`<br />- `description`<br />- `metadata`<br />- `name`                                                                                                              |

## Usage examples

### **Filter endpoints by type and creation time**

```http
GET /endpoints?filter='obj.type == "cloud" && obj.created_at < timestamp("2025-10-31T09:23:45-07:00")'
# or using helpers
GET /endpoints?filter='obj.type == "cloud" && obj.created_at >= daysAgo(6)'
```

Reference:

- [`LIST /endpoints`](/api-reference/endpoints/list)

### **Reserved domains by prefix**

```http
GET /reserved_domains?filter='obj.domain.startsWith("myapi.ngrok")'
```

Reference:

- [`LIST /reserved_domains`](/api-reference/reserveddomains/list)

### **IP policy rules by CIDR and action**

```http
GET /ip_policy_rules?filter='obj.cidr.contains("1.1.0.0/16") && obj.action == "deny"'
```

Reference:

- [`LIST /ip_policy_rules`](/api-reference/ippolicyrules/list)

### **Credentials by owner with optional empty ACL**

```http
GET /credentials?filter='obj.owner_id == "usr_2tEpN0yrxDI4j8jVnhVRoTNN2Tx" && (obj.acl == null || obj.acl == "")'
```

Reference:

- [`LIST /credentials`](/api-reference/credentials/list)

### **Complex nesting**

```http
GET /agent_ingresses?filter='obj.domain in ["foo.com","bar.com","baz.com"] || (obj.created_at < timestamp("2025-05-10Z") && obj.description.contains("cowbell"))'
```

Reference:

- [`LIST /agent_ingresses`](/api-reference/agentingresses/list)

## Error handling

Invalid filters return **HTTP 400** with a structured error body (`category`, `status_code`, `message`, `details`). Example:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8
Cache-Control: no-store

{
  "error_code": "invalid_cel_expression",
  "status_code": 400,
  "msg": "Invalid CEL query: unsupported field: endpoint.idk (must be endpoint.url, endpoint.id, endpoint.type, or endpoint.bindings).",
  "details": {
    "operation_id": "op_k23j45n134jkasdfk34jkjnlkjuhasdf"
  }
}
```
