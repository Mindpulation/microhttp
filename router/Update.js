const { updateOne, updateMany } = require('../lib').database;

async function routesUpdate(fastify){

  fastify.post('/one', async function(request, reply) {
      
  })

  fastify.post('/many', async function(request, reply) {
      
  })

}

module.exports = routesUpdate;