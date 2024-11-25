local hostMatch = std.extVar('hostMatch');

{
  apiVersion: 'traefik.io/v1alpha1',
  kind: 'IngressRoute',
  metadata: {
    name: 'developer-portal',
    namespace: 'developer-portal',
  },
  spec: {
    entryPoints: ['websecure'],
    routes: [{
      kind: 'Rule',
      match: 'Host(`' + hostMatch + '`) && PathPrefix(`/dagster`)',
      services: [{
        kind: 'Service',
        name: 'developer-portal',
        port: 80,
      }],
      middlewares: [{
        name: 'oauth2-proxy',
      }],
    }],
  },
}