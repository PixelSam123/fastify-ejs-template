'use strict'

/**  @type {import('fastify').FastifyPluginAsync<{ optionA: boolean, optionB: string }>} */
module.exports = async (fastify, opts) => {
  fastify.get('/', (request, reply) => {
    reply.view('index')
  })
}
