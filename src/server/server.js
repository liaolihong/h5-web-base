import prod from './server.prod'
import dev from './server.dev'
let server
switch (process.env.NODE_ENV) {
  case 'production':
    server = prod
    break
  case 'development':
    server = dev
    break
  default:
    server = dev
    break
}

export default server
