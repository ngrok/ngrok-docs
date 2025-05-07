# Test Document with Different Language Blocks

## YAML Block (valid)
```yaml
apiVersion: v1
kind: Pod
```

## JSON Block (valid)
```json
{ "name": "test" }
```

## Shell Block (should be skipped)
```sh
echo "This should be skipped"
---
echo "Invalid YAML but valid shell"
```

## JavaScript Block (should be skipped)
```js
const x = { a: 1 };
console.log(x);
```