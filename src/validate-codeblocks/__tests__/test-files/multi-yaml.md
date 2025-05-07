# Multi-Document YAML Test

This file contains YAML blocks with multiple documents to test the validator.

## Kubernetes Manifests Example

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: nginx:latest
        ports:
        - containerPort: 8080
```

## Another Multi-Document Example

```yaml
# First document
name: document-1
version: 1.0.0
---
# Second document
name: document-2
version: 2.0.0
```