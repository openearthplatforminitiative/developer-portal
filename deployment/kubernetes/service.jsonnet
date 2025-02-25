{
  apiVersion: 'v1',
  kind: 'Service',
  metadata: {
    name: 'developer-portal',
  },
  spec: {
    ports: [{
      port: 80,
      targetPort: 3000,
    }],
    selector: {
      app: 'developer-portal',
    },
  },
}