'use strict'

/**  @type {import('fastify').FastifyPluginAsync<{ optionA: boolean, optionB: string }>} */
module.exports = async (fastify, opts) => {
  fastify.get('/', (request, reply) => {
    reply.send('this is an example')
  })
}
