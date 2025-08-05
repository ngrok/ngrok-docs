# Invalid Code Blocks Test

This file contains invalid code blocks to test the validator.

## Invalid JSON Examples

```json
{
  "name": "ngrok-docs",
  "version": "1.0.0",
  "description": "This JSON is invalid",
  "trailing-comma": true,
}
```

```json
[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2", }
  { "id": 3, "name": "Item 3" }
]
```

## Invalid YAML Examples

```yaml
name: ngrok-docs
version: 1.0.0
description: This YAML is invalid
list:
  - item1
  - item2:
  misaligned-key: true
```

## Not Validated Languages (should pass)

```javascript
function hello() {
  console.log("This is invalid JavaScript but we don't validate it yet");
  return unclosed function
}
```

## Code Block Without Language Hint (should be detected as invalid JSON)

```
{
  "invalid": true,
  "missing": "closing bracket"
```