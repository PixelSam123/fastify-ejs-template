'use strict'

/** @type {import('fastify').FastifyInstance} */
const fastify = require('fastify')({
  logger: true,
})
const path = require('path')

// Register your plugins here
fastify.register(require('fastify-sensible'), {
  errorHandler: false,
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})
fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
  root: 'views',
})

// Autoload routes
fastify.register(require('fastify-autoload'), {
  dir: path.join(__dirname, 'routes'),
})

// Run the server!
fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
