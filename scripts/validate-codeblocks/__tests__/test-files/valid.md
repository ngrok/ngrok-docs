# Valid Code Blocks Test

This file contains valid code blocks to test the validator.

## JSON Examples

```json
{
  "name": "ngrok-docs",
  "version": "1.0.0",
  "description": "A test file with valid JSON",
  "numbers": [1, 2, 3, 4, 5],
  "nested": {
    "property": true
  }
}
```

```json
[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" },
  { "id": 3, "name": "Item 3" }
]
```

## YAML Examples

```yaml
name: ngrok-docs
version: 1.0.0
description: A test file with valid YAML
list:
  - item1
  - item2
  - item3
config:
  enabled: true
  timeout: 30
```

## Not Validated Languages

```javascript
function hello() {
  console.log("Hello, world!");
}
```

## Code Block Without Language Hint (should be detected as JSON)

```
{
  "name": "Valid JSON without explicit language hint",
  "shouldBeDetected": true
}
```
