'use strict'

/**
 * @param {import('fastify').FastifyInstance} fastify
 * @param {import('point-of-view')} fastify
 */
module.exports = async (fastify, opts) => {
  fastify.get('/', (request, reply) => {
    reply.send('this is an example')
  })
}
