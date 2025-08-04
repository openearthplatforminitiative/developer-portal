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
          image: 'ghcr.io/openearthplatforminitiative/developer-portal:0.3.11',
          ports: [{
            containerPort: 3000,
          }],
          env: [
            {
              name: 'NODE_ENV',
              value: 'production',
            },
            {
              name: 'API_DOMAIN',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'api_domain',
                },
              },
            },
            {
              name: 'AUTH_CLIENT_ID',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'auth_client_id',
                },
              },
            },
            {
              name: 'AUTH_CLIENT_SECRET',
              valueFrom: {
                secretKeyRef: {
                  name: 'dev-portal-secrets',
                  key: 'auth_client_secret',
                },
              },
            },
            {
              name: 'AUTH_CLIENT_ISSUER',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'auth_client_issuer',
                },
              },
            },
            {
              name: 'NEXTAUTH_URL',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'nextauth_url',
                },
              },
            },
            {
              name: 'NEXTAUTH_SECRET',
              valueFrom: {
                secretKeyRef: {
                  name: 'dev-portal-secrets',
                  key: 'nextauth_secret',
                },
              },
            },
            {
              name: 'NEXT_PUBLIC_SANITY_DATASET',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'sanity_dataset',
                },
              },
            },
            {
              name: 'NEXT_PUBLIC_SANITY_PROJECT_ID',
              valueFrom: {
                secretKeyRef: {
                  name: 'dev-portal-secrets',
                  key: 'sanity_project_id',
                },
              },
            },
            {
              name: 'DATA_CATALOG_URL',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'data_catalog_url',
                },
              },
            },
          ],
        }],
      },
    },
  },
}
