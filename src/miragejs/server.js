import { createServer, Model } from 'miragejs'
import fixtures from './fixtures'
import routes from './routes'

const seeds = (server) => {
  server.loadFixtures()
}

const models = {
  user: Model,
  product: Model,
}

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models,
    routes,
    seeds,
    fixtures,
  })

  return server
}
