export default {
  development: {
    port: 16105,
    serverHost: 'http://127.0.0.1:16105',
    oss: {

    },
    pg: {
      database: 'regneva',
      host: '127.0.0.1',
      password: '12345678',
      port: 5432,
      schema: ['public'],
      user: 'root',
    },
    log: {
      logpath: './logs',
      logfilename: 'regneva.log',
      loglevel: 'debug',
    },
    kong: {
      kong_url: ['http://127.0.0.1:8001'],
      routes: [{
        hosts: [],
        paths: [],
        name: 'regneva',
        protocols: ['http', 'https'],
        methods: ['GET', 'POST', 'OPTIONS']
      }],
      service: {
        host: 'regnevaupstream',
        name: 'regneva',
        path: '/',
        port: 16105
      },
      upstream: {
        healthchecks: {
          active: {
            healthy: {
              http_statuses: [202, 204, 200],
              interval: 1, // second
              successes: 1,
            },
            http_path: '/status',
            timeout: 1, // second
            unhealthy: {
              http_failures: 1,
              http_statuses: [404, 500, 403, 401],
              interval: 1,
              tcp_failures: 1,
            }
          }
        },
        name: 'regnevaupstream',
      },
      logger: ''
    }
  }
}