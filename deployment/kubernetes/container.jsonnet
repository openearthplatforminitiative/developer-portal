{
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'developer-portal',
    namespace: 'developer-portal',
  },
  spec: {
    replicas: 1,
    selector: {
      matchLabels: {
        app: 'developer-portal',
      },
    },
    template: {
      metadata: {
        labels: {
          app: 'developer-portal',
        },
      },
      spec: {
        containers: [{
          name: 'developer-portal',
          image: 'ghcr.io/openearthplatforminitiative/developer-portal:latest',
          ports: [{
            containerPort: 3000,
          }],
          env: [
            {
              name: 'NODE_ENV',
              value: 'production',
            },
          ],
        }],
      },
    },
  },
}