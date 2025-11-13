---
title: Advanced API Filtering (Preview)
sidebarTitle: Advanced API Filtering
description: Learn how to use Advanced API to make operational tooling faster and more precise.
tag: Preview
---

> **Status: In Progress** — This feature is under active development. Behavior, supported fields, and limits may change before General Availability (GA). This guide is provided as forward-looking context for evaluation and feedback.

## Overview

Advanced API filtering helps you quickly surface the resources that matter, using a server-side subset of the Common Expression Language (CEL) to evaluate expressions against each resource instance before results are returned. Using Advanced API Filtering helps avoid downloading large collections and filtering client-side, and helps make operational tooling faster and more precise.

**Request shape**

```http
GET /{resource}?filter='{CEL_EXPRESSION}'
```

Example:

```http
GET /endpoints?filter='obj.type == "cloud" || obj.type == "agent"'
```

---

## Supported CEL (subset)

The following core operators and helpers are supported for the initial release:
- Logical operators: `!`, `&&`, `||`
- Comparative operators: `<`, `<=`, `==`, `!=`, `>=`, `>`
- Parentheses for grouping
- List membership using the `in` keyword
- String substring checks: `startsWith()`, `contains()`, `endsWith()`
- Length / emptiness checks: `size()`, `== ""`, `== null`
- Date parsing: `datetime.parse()`

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

---

## Dates and time helpers

- **Treat timestamps as numerics** by using `<`, `<=`, `==`, `>=`, `>` directly on timestamp fields.  
- **Parsing:** `datetime.parse("<ISO-8601>")` to compare against string literals.  
- **Convenience helpers:** `now()` and `daysAgo(n)` support concise relative filters, e.g.:
  ```http
  GET /endpoints?filter='obj.created_at >= daysAgo(7)'
  ```

---

## Query restrictions and limitations

### Unsupported CEL features (initial release)

- **No index access** (e.g., `a[0]`)
- **No arithmetic** (e.g., `a + b`)
- **No ternary** (e.g., `cond ? x : y`)
- **No type checks** (e.g., `type(a) == string`)
- **No regexes**
- **No fuzzy matching**

These exclusions intentionally keep evaluation small and predictable.

### High-entropy fields and substring checks

Substring functions (`startsWith()`, `contains()`, `endsWith()`) are **disallowed** on fields considered **high entropy** (values that are effectively random, where substring predicates add cost without meaningful benefit). **Identifiers are the canonical example** of high-entropy fields. Prefer equality on these fields (e.g., `obj.id == "ep_123"`).

### Query complexity (budgeting/limits)

Very large expressions can stress the query engine. The service may enforce **limits on the number of conditions per query** or similar throttles in the future.

---

## Filterable resources and fields

The initial release prioritizes the resource types and fields below. Field coverage is evolving and may change before GA.

| Resource Type | Filterable Fields |
|---------------|-------------------|
| **Endpoints** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `principal.id`<br>- `type`<br>- `binding`<br>- `url`<br>- `pooling_enabled`<br>- `scheme`<br>- `region` |
| **Reserved Addresses** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `addr`<br>- `region` |
| **Reserved Domains** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `domain`<br>- `region`<br>- `cname_target`<br>- `certificate.id`<br>- `acme_challenge_cname_target` |
| **TLS Certificates** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `subject_common_name`<br>- `not_after`<br>- `not_before`<br>- `serial_number` |
| **Certificate Authorities** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `subject_common_name`<br>- `not_before`<br>- `not_after` |
| **IP Policies** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata` |
| **IP Policy Rules** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `ip_policy`<br>- `cidr`<br>- `action` |
| **Agent Ingress** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `domain` |
| **Tunnel Sessions** | - `id`<br>- `metadata`<br>- `agent_version`<br>- `ip`<br>- `os`<br>- `region`<br>- `started_at`<br>- `credential` |
| **Event Destinations** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata` |
| **Event Subscriptions** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata` |
| **IP Restrictions** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata` |
| **API Keys** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `owner_id` |
| **SSH Credentials** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `owner_id`<br>- `acl` |
| **Credentials** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `owner_id`<br>- `acl` |
| **Service Users** | - `id`<br>- `created_at` |
| **SSH Certificate Authorities** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata` |
| **Vaults** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `name` |
| **Secrets** | - `id`<br>- `created_at`<br>- `description`<br>- `metadata`<br>- `name` |

---

## Usage examples

**Filter endpoints by type and creation time**
```http
GET /endpoints?filter='obj.type == "cloud" && obj.created_at < "2025-10-31T09:23:45-07:00"'
# or using helpers
GET /endpoints?filter='obj.type == "cloud" && obj.created_at >= daysAgo(6)'
```

**Reserved domains by prefix**
```http
GET /reserved_domains?filter='obj.domain.startsWith("myapi.ngrok")'
```

**IP policy rules by CIDR and action**
```http
GET /ip_policy_rules?filter='obj.cidr.contains("1.1.0.0/16") && obj.action == "deny"'
```

**Credentials by owner with optional empty ACL**
```http
GET /credentials?filter='obj.owner_id == "usr_2tEpN0yrxDI4j8jVnhVRoTNN2Tx" && (obj.acl == null || obj.acl == "")'
```

**Complex nesting**
```http
GET /agent_ingresses?filter='obj.domain in ["foo.com","bar.com","baz.com"] || (obj.created_at < "2025-05-10Z" && obj.description.contains("cowbell"))'
```

---

## Error handling

Invalid filters return **HTTP 400** with a structured error body (category, status code, message, details). Example:

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
